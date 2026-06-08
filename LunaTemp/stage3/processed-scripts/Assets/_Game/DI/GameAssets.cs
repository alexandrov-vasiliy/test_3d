using _Game.Configs;
using UnityEngine;

namespace _Game.DI
{
    public sealed class GameAssets
    {
        public GameAssets(GameObject hexCellPrefab, GameObject hexPiecePrefab, HexColorConfig hexColorConfig, Sprite tutorialHandSprite)
        {
            HexCellPrefab = hexCellPrefab;
            HexPiecePrefab = hexPiecePrefab;
            HexColorConfig = hexColorConfig;
            TutorialHandSprite = tutorialHandSprite;
        }

        public GameObject HexCellPrefab { get; }
        public GameObject HexPiecePrefab { get; }
        public HexColorConfig HexColorConfig { get; }
        public Sprite TutorialHandSprite { get; }
    }
}
