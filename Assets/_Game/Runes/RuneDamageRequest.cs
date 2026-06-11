namespace _Game.Runes
{
    /// <summary>
    /// Describes resolved rune damage before it is applied to an enemy; enemy runtime decides how health and defence mutate.
    /// </summary>
    public readonly struct RuneDamageRequest
    {
        public RuneDamageRequest(int amount, bool ignoreDefence)
        {
            Amount = amount;
            IgnoreDefence = ignoreDefence;
        }

        public int Amount { get; }
        public bool IgnoreDefence { get; }
    }
}
