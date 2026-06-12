using System;
using System.Collections;
using System.Collections.Generic;
using _Game.Board;
using _Game.Runes;
using _Game.Stacks;
using UnityEngine;

namespace _Game.Merge
{
    /// <summary>
    /// Resolves queued merge chains and publishes gameplay results; visuals, timing, VFX, and sounds stay delegated to MergeAnimator.
    /// </summary>
    public class MergeSystem : MonoBehaviour
    {
        [SerializeField] private int clearMatchCount = 10;
        [SerializeField] private int maxChainSteps = 512;

        private BoardController board;
        private MergeAnimator animator;
        private HexCell lastMoveSourceCell;
        private HexCell lastMoveTargetCell;
        private HexCell latestRequestedCell;
        private IRuneResolver runeResolver;
        private int clearSequence;
        private readonly List<HexCell> pendingCells = new List<HexCell>();
        private readonly List<HexCell> queuedCells = new List<HexCell>();
        private const bool PreferPlacedCellAsMergeTarget = true;

        public bool IsRunning { get; private set; }
        public event Action<string, int> PiecesCleared;
        public event Action<RuneClearContext> RuneClearStarted;
        public event Action<RuneClearContext, int, Vector3> RunePieceConsumed;
        public event Action<RuneClearContext> RuneClearCompleted;
        public event Action MergeStarted;
        public event Action MergeFinished;

        public void Initialize(BoardController board, MergeAnimator animator)
        {
            this.board = board;
            this.animator = animator;
        }

        public void SetRuneResolver(IRuneResolver runeResolver)
        {
            this.runeResolver = runeResolver;
        }

        public void RequestMerge(HexCell activeCell)
        {
            if (board == null || activeCell == null || activeCell.IsEmpty)
            {
                return;
            }

            latestRequestedCell = activeCell;
            EnqueueCellAndNeighbours(activeCell, pendingCells, queuedCells);
        }

        public IEnumerator RunMerge(HexCell activeCell)
        {
            RequestMerge(activeCell);
            if (board == null || IsRunning || pendingCells.Count == 0)
            {
                yield break;
            }

            IsRunning = true;
            MergeStarted?.Invoke();
            animator?.ResetSpeed();

            int guard = 0;
            while (true)
            {
                if (guard >= maxChainSteps)
                {
                    break;
                }

                HexCell currentCell = SelectNextMergeTarget(pendingCells, queuedCells);
                if (currentCell == null)
                {
                    break;
                }

                guard++;
                yield return StartCoroutine(ProcessMergeStep(currentCell));

                EnqueueCellAndNeighbours(lastMoveTargetCell, pendingCells, queuedCells);
                EnqueueCellAndNeighbours(lastMoveSourceCell, pendingCells, queuedCells);
            }

            IsRunning = false;
            latestRequestedCell = null;
            pendingCells.Clear();
            queuedCells.Clear();
            MergeFinished?.Invoke();
        }

        private IEnumerator ProcessMergeStep(HexCell targetCell)
        {
            lastMoveSourceCell = null;
            lastMoveTargetCell = targetCell;

            if (targetCell == null || targetCell.IsEmpty)
            {
                yield break;
            }

            yield return StartCoroutine(ResolveClears(targetCell));
            if (targetCell.IsEmpty)
            {
                yield break;
            }

            HexCell matchingNeighbour = FindMatchingNeighbour(targetCell);
            if (matchingNeighbour == null)
            {
                yield break;
            }

            lastMoveSourceCell = matchingNeighbour;
            List<HexPiece> movedPieces = matchingNeighbour.stack.PopTopSameRune();
            foreach (HexPiece piece in movedPieces)
            {
                targetCell.stack.Push(piece);
            }

            HexStackView fromView = board.GetStackView(matchingNeighbour);
            HexStackView toView = board.GetStackView(targetCell);
            if (animator != null)
            {
                yield return StartCoroutine(animator.AnimateMove(fromView, toView, movedPieces.Count));
            }
            else
            {
                fromView?.RemoveTopVisualHexes(movedPieces.Count);
                toView?.Rebuild();
            }

            if (matchingNeighbour.IsEmpty)
            {
                ClearCellAndDestroyStackView(matchingNeighbour, fromView);
            }

            yield return StartCoroutine(ResolveClears(targetCell));
        }

        private IEnumerator ResolveClears(HexCell cell)
        {
            while (CanClearTop(cell))
            {
                string clearedRuneId = cell.stack.TopRuneId;
                int clearedCount = cell.stack.CountTopSameRune();
                HexStackView stackView = board.GetStackView(cell);
                bool hasRuneContext = TryCreateRuneClearContext(cell, stackView, clearedRuneId, clearedCount, out RuneClearContext runeContext);
                if (hasRuneContext)
                {
                    RuneClearStarted?.Invoke(runeContext);
                }

                cell.stack.RemoveTopPieces(clearedCount);
                PiecesCleared?.Invoke(clearedRuneId, clearedCount);
                if (animator != null)
                {
                    yield return StartCoroutine(animator.AnimateDisappear(stackView, clearedCount, clearedRuneId, (consumedIndex, pieceWorldPosition) =>
                    {
                        if (hasRuneContext)
                        {
                            RunePieceConsumed?.Invoke(runeContext, consumedIndex, pieceWorldPosition);
                        }
                    }));
                }
                else
                {
                    if (hasRuneContext)
                    {
                        for (int i = 0; i < clearedCount; i++)
                        {
                            RunePieceConsumed?.Invoke(runeContext, i, GetRuneCastWorldPosition(cell, stackView));
                        }
                    }
                    stackView?.RemoveTopVisualHexes(clearedCount);
                }

                if (hasRuneContext)
                {
                    RuneClearCompleted?.Invoke(runeContext);
                }

                if (cell.IsEmpty)
                {
                    ClearCellAndDestroyStackView(cell, stackView);
                    yield break;
                }
            }
        }

        private bool TryCreateRuneClearContext(HexCell cell, HexStackView stackView, string runeId, int count, out RuneClearContext context)
        {
            context = default;
            if (runeResolver == null || !runeResolver.TryResolveRuneId(runeId, out RuneDefinition rune) || rune == null)
            {
                return false;
            }

            context = new RuneClearContext(++clearSequence, rune, count, cell, cell != null ? cell.coordinate : default, GetRuneCastWorldPosition(cell, stackView), clearSequence);
            return true;
        }

        private Vector3 GetRuneCastWorldPosition(HexCell cell, HexStackView stackView)
        {
            if (stackView != null)
            {
                return stackView.GetTopPosition();
            }

            HexCellView cellView = board != null ? board.GetCellView(cell) : null;
            return cellView != null ? cellView.transform.position : transform.position;
        }

        private HexCell SelectNextMergeTarget(List<HexCell> pendingCells, List<HexCell> queuedCells)
        {
            if (PreferPlacedCellAsMergeTarget && IsMergeCandidate(latestRequestedCell))
            {
                RemoveCell(pendingCells, latestRequestedCell);
                RemoveCell(queuedCells, latestRequestedCell);
                return latestRequestedCell;
            }

            HexCell queuedCandidate = DequeueNextMergeCandidate(pendingCells, queuedCells);
            if (queuedCandidate != null)
            {
                return queuedCandidate;
            }

            return FindAnyMergeCandidate();
        }

        private HexCell FindAnyMergeCandidate()
        {
            List<HexCell> cells = GetCellsInStableOrder();
            foreach (HexCell cell in cells)
            {
                if (CanClearTop(cell))
                {
                    return cell;
                }
            }

            foreach (HexCell cell in cells)
            {
                if (FindMatchingNeighbour(cell) != null)
                {
                    return cell;
                }
            }

            return null;
        }

        private bool IsMergeCandidate(HexCell cell)
        {
            return CanClearTop(cell) || FindMatchingNeighbour(cell) != null;
        }

        private bool CanClearTop(HexCell cell)
        {
            return cell != null && !cell.IsEmpty && cell.stack.CountTopSameRune() >= clearMatchCount;
        }

        private HexCell DequeueNextMergeCandidate(List<HexCell> pendingCells, List<HexCell> queuedCells)
        {
            while (pendingCells.Count > 0)
            {
                HexCell cell = pendingCells[0];
                pendingCells.RemoveAt(0);
                RemoveCell(queuedCells, cell);

                if (IsMergeCandidate(cell))
                {
                    return cell;
                }
            }

            return null;
        }

        private void EnqueueCellAndNeighbours(HexCell cell, List<HexCell> pendingCells, List<HexCell> queuedCells)
        {
            EnqueueCell(cell, pendingCells, queuedCells);
            if (cell == null)
            {
                return;
            }

            List<HexCell> neighbours = GetMatchingNeighboursInStableOrder(cell);
            for (int i = 0; i < neighbours.Count; i++)
            {
                EnqueueCell(neighbours[i], pendingCells, queuedCells);
            }
        }

        private void EnqueueCell(HexCell cell, List<HexCell> pendingCells, List<HexCell> queuedCells)
        {
            if (cell == null || ContainsCell(queuedCells, cell))
            {
                return;
            }

            pendingCells.Add(cell);
            queuedCells.Add(cell);
        }

        private static void RemoveCell(List<HexCell> cells, HexCell removedCell)
        {
            for (int i = cells.Count - 1; i >= 0; i--)
            {
                if (cells[i] == removedCell)
                {
                    cells.RemoveAt(i);
                }
            }
        }

        private void ClearCellAndDestroyStackView(HexCell cell, HexStackView stackView)
        {
            board.ClearCell(cell);
            if (stackView != null)
            {
                Destroy(stackView.gameObject);
            }
        }

        private HexCell FindMatchingNeighbour(HexCell activeCell)
        {
            if (activeCell == null || activeCell.IsEmpty)
            {
                return null;
            }

            string activeTop = activeCell.stack.TopRuneId;
            List<HexCell> neighbours = GetMatchingNeighboursInStableOrder(activeCell);
            foreach (HexCell neighbour in neighbours)
            {
                if (neighbour != null && !neighbour.IsEmpty && RunesMatch(neighbour.stack.TopRuneId, activeTop))
                {
                    return neighbour;
                }
            }

            return null;
        }

        private List<HexCell> GetCellsInStableOrder()
        {
            List<HexCell> cells = new List<HexCell>();
            foreach (HexCell cell in board.Cells)
            {
                if (cell != null)
                {
                    cells.Add(cell);
                }
            }

            cells.Sort(CompareCellsByCoordinate);
            return cells;
        }

        private List<HexCell> GetNeighboursInStableOrder(HexCell cell)
        {
            List<HexCell> neighbours = board.GetNeighbours(cell);
            SortNeighboursForTarget(cell, neighbours);
            return neighbours;
        }

        private List<HexCell> GetMatchingNeighboursInStableOrder(HexCell cell)
        {
            List<HexCell> neighbours = GetNeighboursInStableOrder(cell);
            List<HexCell> cells = GetCellsInStableOrder();

            for (int i = 0; i < cells.Count; i++)
            {
                HexCell candidate = cells[i];
                if (candidate == null || candidate == cell || ContainsCell(neighbours, candidate))
                {
                    continue;
                }

                if (ContainsNeighbour(candidate, cell))
                {
                    neighbours.Add(candidate);
                }
            }

            SortNeighboursForTarget(cell, neighbours);
            return neighbours;
        }

        private bool ContainsNeighbour(HexCell owner, HexCell searchedCell)
        {
            List<HexCell> neighbours = board.GetNeighbours(owner);
            for (int i = 0; i < neighbours.Count; i++)
            {
                if (neighbours[i] == searchedCell)
                {
                    return true;
                }
            }

            return false;
        }

        private static bool ContainsCell(List<HexCell> cells, HexCell searchedCell)
        {
            for (int i = 0; i < cells.Count; i++)
            {
                if (cells[i] == searchedCell)
                {
                    return true;
                }
            }

            return false;
        }

        private void SortNeighboursForTarget(HexCell target, List<HexCell> neighbours)
        {
            for (int i = 1; i < neighbours.Count; i++)
            {
                HexCell value = neighbours[i];
                int j = i - 1;
                while (j >= 0 && CompareNeighboursForTarget(target, neighbours[j], value) > 0)
                {
                    neighbours[j + 1] = neighbours[j];
                    j--;
                }

                neighbours[j + 1] = value;
            }
        }

        private int CompareNeighboursForTarget(HexCell target, HexCell a, HexCell b)
        {
            if (a == b)
            {
                return 0;
            }
            if (a == null)
            {
                return 1;
            }
            if (b == null)
            {
                return -1;
            }

            int directionCompare = GetDirectionPriority(target, a).CompareTo(GetDirectionPriority(target, b));
            return directionCompare != 0 ? directionCompare : CompareCellsByCoordinate(a, b);
        }

        private int GetDirectionPriority(HexCell target, HexCell source)
        {
            Vector2Int delta = source.coordinate - target.coordinate;

            if (delta.x > 0 && delta.y == 0)
            {
                return 0;
            }
            if (delta.x > 0 && delta.y < 0)
            {
                return 1;
            }
            if (delta.x == 0 && delta.y < 0)
            {
                return 2;
            }
            if (delta.x < 0 && delta.y == 0)
            {
                return 3;
            }
            if (delta.x < 0 && delta.y > 0)
            {
                return 4;
            }
            if (delta.x == 0 && delta.y > 0)
            {
                return 5;
            }

            return 6;
        }

        private static int CompareCellsByCoordinate(HexCell a, HexCell b)
        {
            if (a == b)
            {
                return 0;
            }
            if (a == null)
            {
                return 1;
            }
            if (b == null)
            {
                return -1;
            }

            int yCompare = b.coordinate.y.CompareTo(a.coordinate.y);
            return yCompare != 0 ? yCompare : a.coordinate.x.CompareTo(b.coordinate.x);
        }

        private bool RunesMatch(string a, string b)
        {
            return string.Equals(GetMatchGroup(a), GetMatchGroup(b), StringComparison.Ordinal);
        }

        private string GetMatchGroup(string runeId)
        {
            if (!string.IsNullOrWhiteSpace(runeId) &&
                runeResolver != null &&
                runeResolver.TryResolveRuneId(runeId, out RuneDefinition rune) &&
                rune != null &&
                rune.TryGetTag(out RuneMatchGroupTag matchGroup))
            {
                return matchGroup.MatchGroup;
            }

            return string.IsNullOrWhiteSpace(runeId) ? string.Empty : runeId;
        }
    }
}
