using _Game.Stacks;

namespace _Game.Runes
{
    /// <summary>
    /// Resolves legacy stack piece data to rune definitions during the migration away from enum-driven HexColor gameplay.
    /// </summary>
    public interface IRuneResolver
    {
        bool TryResolveLegacyColor(HexColor color, out RuneDefinition rune);
    }
}
