namespace _Game.Runes
{
    /// <summary>
    /// Resolves runtime stack rune ids to composed rune definitions used by combat, visuals, and targeting.
    /// </summary>
    public interface IRuneResolver
    {
        bool TryResolveRuneId(string runeId, out RuneDefinition rune);
    }
}
