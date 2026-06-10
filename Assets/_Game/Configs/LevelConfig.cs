using System.Collections.Generic;
using _Game.Board;
using _Game.Stacks;
using UnityEngine;

namespace _Game.Configs
{
    /// <summary>
    /// Stores all designer-authored data needed to load one level; runtime services consume this asset but do not mutate it as save state.
    /// </summary>
    [CreateAssetMenu(menuName = "Hex Merge/Level Config")]
    public class LevelConfig : ScriptableObject
    {
        /// <summary>
        /// Describes a stack from bottom to top so loaders and hand generators can create runtime stack models without owning level data.
        /// </summary>
        [System.Serializable]
        public class StackDefinition
        {
            public List<HexColor> colorsBottomToTop = new List<HexColor>();

            public HexStack CreateStack()
            {
                return new HexStack(colorsBottomToTop);
            }
        }

        /// <summary>
        /// Defines a stack that starts on a specific board coordinate; board placement is performed by the level loader.
        /// </summary>
        [System.Serializable]
        public class BoardStackDefinition
        {
            public Vector2Int coordinate;
            public StackDefinition stack = new StackDefinition();
        }

        /// <summary>
        /// Configures generated hands, color-run bias, and optional finite deck behavior for the hand generator.
        /// </summary>
        [System.Serializable]
        public class HandGenerationSettings
        {
            public int handSize = 3;
            public bool useRandomSeed = true;
            public int randomSeed = 1;
            public List<HexColor> allowedColors = new List<HexColor>
            {
                HexColor.Red,
                HexColor.Blue,
                HexColor.Green,
                HexColor.Yellow,
                HexColor.Purple,
                HexColor.Orange
            };
            public int minStackHeight = 1;
            public int maxStackHeight = 3;
            public bool generateColorRuns = true;
            [Range(0f, 1f)] public float sameColorRunChance = 0.85f;
            public int minColorRunLength = 2;
            public int maxColorRunLength = 4;
            public bool finiteDeckMode;
            public List<StackDefinition> finiteDeckStacks = new List<StackDefinition>();
        }

        /// <summary>
        /// Describes one level goal; goal tracking is performed by GoalTracker rather than by merge animation or level data.
        /// </summary>
        [System.Serializable]
        public class GoalDefinition
        {
            public LevelGoalType type = LevelGoalType.ClearPieces;
            public HexColor color = HexColor.Red;
            public int requiredCount = 10;
        }

        /// <summary>
        /// Stores lose-condition switches for the flow controller and move availability service.
        /// </summary>
        [System.Serializable]
        public class LoseRuleSettings
        {
            public bool loseWhenNoMovesRemain = true;
            public int moveLimit;
        }

        public string levelId = "level_001";
        public int levelNumber = 1;
        public string displayName = "Level 1";

        [Header("Board")]
        public int boardRadius = 2;
        public HexGridGenerator.BoardShape boardShape = HexGridGenerator.BoardShape.Square;
        public HexGridGenerator.BoardShape customBaseShape = HexGridGenerator.BoardShape.Square;
        public HexGridGenerator.HexOrientation orientation = HexGridGenerator.HexOrientation.FlatTop;
        public List<Vector2Int> customCoordinates = new List<Vector2Int>();
        public List<BoardStackDefinition> startingBoardStacks = new List<BoardStackDefinition>();

        [Header("Hand")]
        public List<StackDefinition> initialHandStacks = new List<StackDefinition>();
        public HandGenerationSettings handGeneration = new HandGenerationSettings();

        [Header("Goals")]
        public List<GoalDefinition> goals = new List<GoalDefinition>();

        [Header("Lose Rules")]
        public LoseRuleSettings loseRules = new LoseRuleSettings();

        [Header("Tutorial")]
        public Vector2Int tutorialTargetCell = new Vector2Int(0, 0);

        [Header("Legacy Prototype Data")]
        public List<StackDefinition> trayStacks = new List<StackDefinition>();
        public bool completeWhenTrayEmpty = true;

        public int HandSize => Mathf.Max(1, handGeneration != null ? handGeneration.handSize : 3);

        public IReadOnlyList<StackDefinition> GetInitialHandDefinitions()
        {
            if (initialHandStacks != null && initialHandStacks.Count > 0)
            {
                return initialHandStacks;
            }

            return trayStacks;
        }
    }

    /// <summary>
    /// Enumerates level goal modes; current gameplay supports cleared-piece collection and leaves room for future board goals.
    /// </summary>
    public enum LevelGoalType
    {
        ClearPieces,
        ClearBoard,
        ClearStacks
    }
}
