using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MergeSystem : MonoBehaviour
{
    [SerializeField] private int clearMatchCount = 10;
    [SerializeField] private int maxChainSteps = 512;

    private BoardController board;
    private MergeAnimator animator;

    public bool IsRunning { get; private set; }

    [Inject]
    private void Construct(BoardController board, MergeAnimator animator)
    {
        this.board = board;
        this.animator = animator;
    }

    public IEnumerator RunMerge(HexCell activeCell)
    {
        if (board == null || activeCell == null || activeCell.IsEmpty || IsRunning)
        {
            yield break;
        }

        IsRunning = true;
        animator?.ResetSpeed();

        Queue<HexCell> pendingCells = new Queue<HexCell>();
        HashSet<HexCell> queuedCells = new HashSet<HexCell>();
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

            HexCell currentCell = DequeueNextMergeCandidate(pendingCells, queuedCells);
            if (currentCell == null)
            {
                currentCell = FindAnyMergeCandidate();
                if (currentCell == null)
                {
                    break;
                }
            }

            guard++;
            yield return ProcessMergeStep(currentCell, pendingCells, queuedCells);
        }

        if (stoppedByGuard)
        {
            Debug.LogWarning("Merge chain stopped by maxChainSteps guard.");
        }

        IsRunning = false;
    }

    private IEnumerator ProcessMergeStep(HexCell targetCell, Queue<HexCell> pendingCells, HashSet<HexCell> queuedCells)
    {
        if (targetCell == null || targetCell.IsEmpty)
        {
            yield break;
        }

        yield return ResolveClears(targetCell);
        if (targetCell.IsEmpty)
        {
            EnqueueCellAndNeighbours(targetCell, pendingCells, queuedCells);
            yield break;
        }

        HexCell matchingNeighbour = FindMatchingNeighbour(targetCell);
        if (matchingNeighbour == null)
        {
            yield break;
        }

        List<HexPiece> movedPieces = matchingNeighbour.stack.PopTopSameColor();
        foreach (HexPiece piece in movedPieces)
        {
            targetCell.stack.Push(piece);
        }

        HexStackView fromView = board.GetStackView(matchingNeighbour);
        HexStackView toView = board.GetStackView(targetCell);
        if (animator != null)
        {
            yield return animator.AnimateMove(fromView, toView, movedPieces.Count);
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

        yield return ResolveClears(targetCell);
        EnqueueCellAndNeighbours(targetCell, pendingCells, queuedCells);
        EnqueueCellAndNeighbours(matchingNeighbour, pendingCells, queuedCells);
    }

    private IEnumerator ResolveClears(HexCell cell)
    {
        while (CanClearTop(cell))
        {
            HexColor clearedColor = cell.stack.TopColor;
            cell.stack.RemoveTopPieces(clearMatchCount);
            HexStackView stackView = board.GetStackView(cell);
            if (animator != null)
            {
                yield return animator.AnimateDisappear(stackView, clearMatchCount, clearedColor);
            }
            else
            {
                stackView?.RemoveTopVisualHexes(clearMatchCount);
            }

            if (cell.IsEmpty)
            {
                ClearCellAndDestroyStackView(cell, stackView);
                yield break;
            }
        }
    }

    private HexCell DequeueNextMergeCandidate(Queue<HexCell> pendingCells, HashSet<HexCell> queuedCells)
    {
        while (pendingCells.Count > 0)
        {
            HexCell cell = pendingCells.Dequeue();
            queuedCells.Remove(cell);
            if (IsMergeCandidate(cell))
            {
                return cell;
            }
        }

        return null;
    }

    private HexCell FindAnyMergeCandidate()
    {
        foreach (HexCell cell in board.Cells)
        {
            if (CanClearTop(cell))
            {
                return cell;
            }
        }

        foreach (HexCell cell in board.Cells)
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
        return cell != null && !cell.IsEmpty && cell.stack.CountTopSameColor() >= clearMatchCount;
    }

    private void EnqueueCellAndNeighbours(HexCell cell, Queue<HexCell> pendingCells, HashSet<HexCell> queuedCells)
    {
        EnqueueCell(cell, pendingCells, queuedCells);
        if (cell == null)
        {
            return;
        }

        List<HexCell> neighbours = board.GetNeighbours(cell);
        foreach (HexCell neighbour in neighbours)
        {
            EnqueueCell(neighbour, pendingCells, queuedCells);
        }
    }

    private static void EnqueueCell(HexCell cell, Queue<HexCell> pendingCells, HashSet<HexCell> queuedCells)
    {
        if (cell == null || queuedCells.Contains(cell))
        {
            return;
        }

        pendingCells.Enqueue(cell);
        queuedCells.Add(cell);
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

        HexColor activeTop = activeCell.stack.TopColor;
        List<HexCell> neighbours = board.GetNeighbours(activeCell);
        foreach (HexCell neighbour in neighbours)
        {
            if (neighbour != null && !neighbour.IsEmpty && neighbour.stack.TopColor == activeTop)
            {
                return neighbour;
            }
        }

        return null;
    }
}
