using _Game.Runes;
using UnityEngine;

namespace _Game.DI
{
    /// <summary>
    /// Carries prefab references, rune resolver access, and shared presentation assets from the composition root into runtime view builders; it does not own gameplay logic.
    /// </summary>
    public sealed class GameAssets
    {
        public GameAssets(GameObject hexCellPrefab, GameObject hexPiecePrefab, IRuneResolver runeResolver, Sprite tutorialHandSprite)
        {
            HexCellPrefab = hexCellPrefab;
            HexPiecePrefab = hexPiecePrefab;
            RuneResolver = runeResolver;
            TutorialHandSprite = tutorialHandSprite;
        }

        public GameObject HexCellPrefab { get; }
        public GameObject HexPiecePrefab { get; }
        public IRuneResolver RuneResolver { get; }
        public Sprite TutorialHandSprite { get; }
    }
}
