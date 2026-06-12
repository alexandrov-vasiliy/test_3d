using _Game.Configs;
using UnityEngine;

/// <summary>
/// Shares editor-only fallback rune ids and preview colors for legacy level authoring windows that now write rune ids instead of enum colors.
/// </summary>
public static class RuneEditorDefaults
{
    public static readonly string[] DefaultRuneIds =
    {
        "fire",
        "water",
        "heal",
        "light",
        "arcane",
        "ember"
    };

    public static Color GetPreviewColor(string runeId)
    {
        switch (runeId)
        {
            case "fire": return new Color(1f, 0.28f, 0.22f, 1f);
            case "water": return new Color(0.22f, 0.55f, 1f, 1f);
            case "heal": return new Color(0.25f, 0.82f, 0.35f, 1f);
            case "light": return new Color(1f, 0.9f, 0.2f, 1f);
            case "arcane": return new Color(0.72f, 0.35f, 1f, 1f);
            case "ember": return new Color(1f, 0.52f, 0.16f, 1f);
            default: return Color.white;
        }
    }
}
