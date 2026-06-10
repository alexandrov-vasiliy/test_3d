using _Game.Board;
using _Game.Stacks;

namespace _Game.Levels
{
    /// <summary>
    /// Evaluates lose-condition move availability; it reads board and hand state but does not mutate gameplay objects.
    /// </summary>
    public sealed class MoveAvailabilityService
    {
        public bool HasAnyLegalMove(BoardController board, HandController hand)
        {
            if (board == null || hand == null || !hand.HasStacks || hand.StackViews == null)
            {
                return false;
            }

            for (int i = 0; i < hand.StackViews.Count; i++)
            {
                HexStackView view = hand.StackViews[i];
                if (view != null && board.HasLegalPlacement(view.Stack))
                {
                    return true;
                }
            }

            return false;
        }
    }
}
