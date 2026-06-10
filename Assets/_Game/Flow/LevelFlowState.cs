namespace _Game.Flow
{
    /// <summary>
    /// Enumerates full-game level flow states used to gate input, merge resolution, enemy intent execution, hand refill, and result screens.
    /// </summary>
    public enum LevelFlowState
    {
        Initializing,
        LoadingLevel,
        Playing,
        Dragging,
        ResolvingMerge,
        ResolvingEnemyIntents,
        RefillingHand,
        Win,
        Lose,
        Transition
    }
}
