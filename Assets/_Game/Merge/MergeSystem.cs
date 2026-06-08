using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MergeSystem : MonoBehaviour
{
    [SerializeField] private int clearMatchCount = 10;
    [SerializeField] private int maxChainSteps = 128;

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

        int guard = 0;
        while (activeCell != null && !activeCell.IsEmpty && guard++ < maxChainSteps)
        {
            if (activeCell.stack.CountTopSameColor() >= clearMatchCount)
            {
                HexColor clearedColor = activeCell.stack.TopColor;
                activeCell.stack.RemoveTopPieces(clearMatchCount);
                HexStackView activeView = board.GetStackView(activeCell);
                if (animator != null)
                {
                    yield return animator.AnimateDisappear(activeView, clearMatchCount, clearedColor);
                }
                else
                {
                    activeView?.RemoveTopVisualHexes(clearMatchCount);
                }

                if (activeCell.IsEmpty)
                {
                    board.ClearCell(activeCell);
                    break;
                }

                continue;
            }

            HexCell matchingNeighbour = FindMatchingNeighbour(activeCell);
            if (matchingNeighbour == null)
            {
                break;
            }

            List<HexPiece> movedPieces = matchingNeighbour.stack.PopTopSameColor();
            foreach (HexPiece piece in movedPieces)
            {
                activeCell.stack.Push(piece);
            }

            HexStackView fromView = board.GetStackView(matchingNeighbour);
            HexStackView toView = board.GetStackView(activeCell);
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
                board.ClearCell(matchingNeighbour);
                if (fromView != null)
                {
                    Destroy(fromView.gameObject);
                }
            }
        }

        if (guard >= maxChainSteps)
        {
            Debug.LogWarning("Merge chain stopped by maxChainSteps guard.");
        }

        IsRunning = false;
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
