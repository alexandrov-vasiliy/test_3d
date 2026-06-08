using System.Collections;
using System.Collections.Generic;
using _Game.Board;
using _Game.Stacks;
using UnityEngine;

namespace _Game.Merge
{
    public class MergeSystem : MonoBehaviour
    {
        [SerializeField] private int clearMatchCount = 10;
        [SerializeField] private int maxChainSteps = 512;
        [SerializeField] private bool debugMergeLogs = true;

        private BoardController board;
        private MergeAnimator animator;
        private HexCell activeMergeCell;
        private HexCell lastMoveSourceCell;
        private HexCell lastMoveTargetCell;
        private const bool PreferPlacedCellAsMergeTarget = true;

        public bool IsRunning { get; private set; }

        public void Initialize(BoardController board, MergeAnimator animator)
        {
            this.board = board;
            this.animator = animator;
        }

        public IEnumerator RunMerge(HexCell activeCell)
        {
            if (board == null || activeCell == null || activeCell.IsEmpty || IsRunning)
            {
                LogMerge("Run skipped. board=" + (board != null) + " active=" + CellLabel(activeCell) + " isRunning=" + IsRunning);
                yield break;
            }

            IsRunning = true;
            activeMergeCell = activeCell;
            animator?.ResetSpeed();
            LogMerge("Run started. active=" + CellLabel(activeCell) + " stack=" + StackLabel(activeCell));

            List<HexCell> pendingCells = new List<HexCell>();
            List<HexCell> queuedCells = new List<HexCell>();
            EnqueueCellAndNeighbours(activeCell, pendingCells, queuedCells);

            int guard = 0;
            bool stoppedByGuard = false;
            while (true)
            {
                if (guard >= maxChainSteps)
                {
                    stoppedByGuard = true;
                    break;
                }

                HexCell currentCell = SelectNextMergeTarget(activeCell, pendingCells, queuedCells);
                if (currentCell == null)
                {
                    break;
                }

                guard++;
                LogMerge("Step " + guard + " target=" + CellLabel(currentCell) + " stack=" + StackLabel(currentCell));
                yield return StartCoroutine(ProcessMergeStep(currentCell));

                EnqueueCellAndNeighbours(lastMoveTargetCell, pendingCells, queuedCells);
                EnqueueCellAndNeighbours(lastMoveSourceCell, pendingCells, queuedCells);
            }

            if (stoppedByGuard)
            {
                Debug.LogWarning("Merge chain stopped by maxChainSteps guard.");
            }

            LogMerge("Run finished. active=" + CellLabel(activeCell) + " activeStack=" + StackLabel(activeCell) + " steps=" + guard);
            activeMergeCell = null;
            IsRunning = false;
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
                LogMerge("Step stopped because target was cleared. target=" + CellLabel(targetCell));
                yield break;
            }

            HexCell matchingNeighbour = FindMatchingNeighbour(targetCell);
            if (matchingNeighbour == null)
            {
                LogMerge("No matching neighbour for target=" + CellLabel(targetCell) + " top=" + targetCell.stack.TopColor);
                yield break;
            }

            lastMoveSourceCell = matchingNeighbour;
            List<HexPiece> movedPieces = matchingNeighbour.stack.PopTopSameColor();
            foreach (HexPiece piece in movedPieces)
            {
                targetCell.stack.Push(piece);
            }

            HexStackView fromView = board.GetStackView(matchingNeighbour);
            HexStackView toView = board.GetStackView(targetCell);
            LogMerge("Move " + movedPieces.Count + " piece(s): from=" + CellLabel(matchingNeighbour) + " stack=" + StackLabel(matchingNeighbour) + " to=" + CellLabel(targetCell) + " stack=" + StackLabel(targetCell) + " direction=" + DirectionLabel(matchingNeighbour, targetCell) + " fromView=" + (fromView != null) + " toView=" + (toView != null));
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
                LogMerge("Source became empty after move. clearing=" + CellLabel(matchingNeighbour));
                ClearCellAndDestroyStackView(matchingNeighbour, fromView);
            }

            yield return StartCoroutine(ResolveClears(targetCell));
        }

        private IEnumerator ResolveClears(HexCell cell)
        {
            while (CanClearTop(cell))
            {
                HexColor clearedColor = cell.stack.TopColor;
                LogMerge("Clear top " + clearMatchCount + " piece(s): cell=" + CellLabel(cell) + " color=" + clearedColor + " before=" + StackLabel(cell));
                cell.stack.RemoveTopPieces(clearMatchCount);
                HexStackView stackView = board.GetStackView(cell);
                if (animator != null)
                {
                    yield return StartCoroutine(animator.AnimateDisappear(stackView, clearMatchCount, clearedColor));
                }
                else
                {
                    stackView?.RemoveTopVisualHexes(clearMatchCount);
                }

                if (cell.IsEmpty)
                {
                    LogMerge("Cell became empty after clear. clearing=" + CellLabel(cell));
                    ClearCellAndDestroyStackView(cell, stackView);
                    yield break;
                }

                LogMerge("Clear finished. cell=" + CellLabel(cell) + " after=" + StackLabel(cell));
            }
        }

        private HexCell SelectNextMergeTarget(HexCell activeCell, List<HexCell> pendingCells, List<HexCell> queuedCells)
        {
            if (PreferPlacedCellAsMergeTarget && IsMergeCandidate(activeCell))
            {
                LogMerge("Selected placed cell as merge target: " + CellLabel(activeCell));
                return activeCell;
            }

            if (PreferPlacedCellAsMergeTarget)
            {
                LogMerge("Placed cell is not a merge target now: " + CellLabel(activeCell) + " stack=" + StackLabel(activeCell));
            }

            HexCell queuedCandidate = DequeueNextMergeCandidate(pendingCells, queuedCells);
            if (queuedCandidate != null)
            {
                LogMerge("Selected queued merge target: " + CellLabel(queuedCandidate));
                return queuedCandidate;
            }

            HexCell fallbackCandidate = FindAnyMergeCandidate();
            if (fallbackCandidate == null)
            {
                LogMerge("No merge candidate found after queue/global scan.");
                DumpBoardState();
            }

            return fallbackCandidate;
        }

        private HexCell FindAnyMergeCandidate()
        {
            List<HexCell> cells = GetCellsInStableOrder();
            foreach (HexCell cell in cells)
            {
                if (CanClearTop(cell))
                {
                    LogMerge("Selected stable clear candidate: " + CellLabel(cell));
                    return cell;
                }
            }

            foreach (HexCell cell in cells)
            {
                if (FindMatchingNeighbour(cell) != null)
                {
                    LogMerge("Selected stable merge candidate: " + CellLabel(cell));
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
            return cell != null && !cell.IsEmpty && cell.stack.CountTopSameColor() >= clearMatchCount;
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

                LogMerge("Queued cell is not a candidate: " + CellLabel(cell) + " stack=" + StackLabel(cell));
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
            LogMerge("Queued cell: " + CellLabel(cell) + " stack=" + StackLabel(cell));
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
                LogMerge("Destroy stack view: cell=" + CellLabel(cell));
                Destroy(stackView.gameObject);
            }
        }

        private HexCell FindMatchingNeighbour(HexCell activeCell)
        {
            if (activeCell == null || activeCell.IsEmpty)
            {
                return null;
            }

            HexColor activeTop = activeCell.stack.TopColor;
            List<HexCell> neighbours = GetMatchingNeighboursInStableOrder(activeCell);
            foreach (HexCell neighbour in neighbours)
            {
                if (neighbour != null && !neighbour.IsEmpty && ColorsMatch(neighbour.stack.TopColor, activeTop))
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

        private string CellLabel(HexCell cell)
        {
            if (cell == null)
            {
                return "null";
            }

            string activeSuffix = cell == activeMergeCell ? " active" : string.Empty;
            return "(" + cell.coordinate.x + "," + cell.coordinate.y + ")" + activeSuffix;
        }

        private static string StackLabel(HexCell cell)
        {
            if (cell == null)
            {
                return "null";
            }
            if (cell.IsEmpty)
            {
                return "empty";
            }

            return "count=" + cell.stack.Count + " top=" + cell.stack.TopColor + " topCount=" + cell.stack.CountTopSameColor();
        }

        private static bool ColorsMatch(HexColor a, HexColor b)
        {
            return (int)a == (int)b;
        }

        private void DumpBoardState()
        {
            List<HexCell> cells = GetCellsInStableOrder();
            for (int i = 0; i < cells.Count; i++)
            {
                HexCell cell = cells[i];
                if (cell == null || cell.IsEmpty)
                {
                    continue;
                }

                HexCell matchingNeighbour = FindMatchingNeighbour(cell);
                LogMerge("Board cell: " + CellLabel(cell) + " stack=" + StackLabel(cell) + " matching=" + CellLabel(matchingNeighbour));
            }
        }

        private static string DirectionLabel(HexCell from, HexCell to)
        {
            if (from == null || to == null)
            {
                return "unknown";
            }

            Vector2Int delta = to.coordinate - from.coordinate;
            return "(" + delta.x + "," + delta.y + ")";
        }

        private void LogMerge(string message)
        {
            if (debugMergeLogs)
            {
                Debug.Log("[Merge] " + message);
            }
        }
    }
}
