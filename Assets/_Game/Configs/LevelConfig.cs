using System.Collections.Generic;
using _Game.Board;
using _Game.Runes;
using _Game.Stacks;
using UnityEngine;
using UnityEngine.Serialization;

namespace _Game.Configs
{
    /// <summary>
    /// Stores all designer-authored data needed to load one level, including board, enemies, goals, and selected rune ids; rune composition itself lives in the shared RuneCatalog.
    /// </summary>
    [CreateAssetMenu(menuName = "Hex Merge/Level Config")]
    public class LevelConfig : ScriptableObject, ISerializationCallbackReceiver
    {
        /// <summary>
        /// Describes a stack from bottom to top so loaders and hand generators can create runtime stack models without owning level data.
        /// </summary>
        [System.Serializable]
        public class StackDefinition : ISerializationCallbackReceiver
        {
            public List<string> runeIdsBottomToTop = new List<string>();
            [FormerlySerializedAs("colorsBottomToTop")]
            [SerializeField, HideInInspector] private List<int> legacyColorIndexesBottomToTop = new List<int>();

            public HexStack CreateStack()
            {
                return new HexStack(runeIdsBottomToTop);
            }

            public void OnBeforeSerialize()
            {
            }

            public void OnAfterDeserialize()
            {
                ConvertLegacyColorIndexes(legacyColorIndexesBottomToTop, runeIdsBottomToTop);
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
        /// Configures generated hands, same-rune run bias, and optional finite deck behavior for the hand generator; the rune pool itself is selected at the level root.
        /// </summary>
        [System.Serializable]
        public class HandGenerationSettings
        {
            public int handSize = 3;
            public bool useRandomSeed = true;
            public int randomSeed = 1;
            public int minStackHeight = 1;
            public int maxStackHeight = 3;
            public bool generateRuneRuns = true;
            [Range(0f, 1f)] public float sameColorRunChance = 0.85f;
            public int minColorRunLength = 2;
            public int maxColorRunLength = 4;
            public bool finiteDeckMode;
            public List<StackDefinition> finiteDeckStacks = new List<StackDefinition>();
            [FormerlySerializedAs("allowedRuneIds")]
            [SerializeField, HideInInspector] private List<string> legacyAllowedRuneIds = new List<string>();
            [FormerlySerializedAs("allowedColors")]
            [SerializeField, HideInInspector] private List<int> legacyAllowedColorIndexes = new List<int>();

            public IReadOnlyList<string> LegacyAllowedRuneIds => legacyAllowedRuneIds;
            public IReadOnlyList<int> LegacyAllowedColorIndexes => legacyAllowedColorIndexes;
        }

        /// <summary>
        /// Describes one level goal; goal tracking is performed by GoalTracker rather than by merge animation or level data.
        /// </summary>
        [System.Serializable]
        public class GoalDefinition : ISerializationCallbackReceiver
        {
            public LevelGoalType type = LevelGoalType.ClearPieces;
            public string runeId = "fire";
            public int requiredCount = 10;
            [FormerlySerializedAs("color")]
            [SerializeField, HideInInspector] private int legacyColorIndex = -1;

            public void OnBeforeSerialize()
            {
            }

            public void OnAfterDeserialize()
            {
                if (legacyColorIndex >= 0)
                {
                    runeId = LegacyColorIndexToRuneId(legacyColorIndex);
                }
            }
        }

        /// <summary>
        /// Places one enemy archetype on a board coordinate; runtime enemy behavior is provided by enemy prefab composition and spawner wiring.
        /// </summary>
        [System.Serializable]
        public class EnemyDefinition
        {
            public string enemyId = "basic";
            public Vector2Int coordinate;
            public int healthOverride;
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
        public List<string> selectedRuneIds = new List<string>();
        public HandGenerationSettings handGeneration = new HandGenerationSettings();
        [FormerlySerializedAs("availableRunes")]
        [SerializeField, HideInInspector] private List<RuneDefinition> legacyAvailableRunes = new List<RuneDefinition>();

        [Header("Enemies")]
        public List<EnemyDefinition> enemies = new List<EnemyDefinition>();

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

        public IReadOnlyList<string> GetAllowedGeneratedRuneIds()
        {
            return selectedRuneIds;
        }

        public void OnBeforeSerialize()
        {
        }

        public void OnAfterDeserialize()
        {
            if ((selectedRuneIds == null || selectedRuneIds.Count == 0) && legacyAvailableRunes != null)
            {
                if (selectedRuneIds == null)
                {
                    selectedRuneIds = new List<string>();
                }

                for (int i = 0; i < legacyAvailableRunes.Count; i++)
                {
                    RuneDefinition rune = legacyAvailableRunes[i];
                    if (rune != null && !string.IsNullOrWhiteSpace(rune.RuneId) && !selectedRuneIds.Contains(rune.RuneId))
                    {
                        selectedRuneIds.Add(rune.RuneId);
                    }
                }
            }

            if (selectedRuneIds == null)
            {
                selectedRuneIds = new List<string>();
            }

            if (selectedRuneIds.Count == 0 && handGeneration != null)
            {
                AppendMissingRuneIds(selectedRuneIds, handGeneration.LegacyAllowedRuneIds);
                AppendLegacyColorIndexes(selectedRuneIds, handGeneration.LegacyAllowedColorIndexes);
            }
        }

        private static void ConvertLegacyColorIndexes(List<int> legacyColorIndexes, List<string> runeIds)
        {
            if (legacyColorIndexes == null || legacyColorIndexes.Count == 0 || runeIds == null || runeIds.Count > 0)
            {
                return;
            }

            for (int i = 0; i < legacyColorIndexes.Count; i++)
            {
                runeIds.Add(LegacyColorIndexToRuneId(legacyColorIndexes[i]));
            }
        }

        private static void AppendLegacyColorIndexes(List<string> runeIds, IReadOnlyList<int> legacyColorIndexes)
        {
            if (runeIds == null || legacyColorIndexes == null)
            {
                return;
            }

            for (int i = 0; i < legacyColorIndexes.Count; i++)
            {
                string runeId = LegacyColorIndexToRuneId(legacyColorIndexes[i]);
                if (!runeIds.Contains(runeId))
                {
                    runeIds.Add(runeId);
                }
            }
        }

        private static void AppendMissingRuneIds(List<string> runeIds, IReadOnlyList<string> legacyRuneIds)
        {
            if (runeIds == null || legacyRuneIds == null)
            {
                return;
            }

            for (int i = 0; i < legacyRuneIds.Count; i++)
            {
                string runeId = legacyRuneIds[i];
                if (!string.IsNullOrWhiteSpace(runeId) && !runeIds.Contains(runeId))
                {
                    runeIds.Add(runeId);
                }
            }
        }

        private static string LegacyColorIndexToRuneId(int legacyColorIndex)
        {
            switch (legacyColorIndex)
            {
                case 0: return "fire";
                case 1: return "water";
                case 2: return "heal";
                case 3: return "light";
                case 4: return "arcane";
                case 5: return "ember";
                default: return "fire";
            }
        }
    }

    /// <summary>
    /// Enumerates level goal modes tracked by GoalTracker; merge, board, and enemy systems only report progress events.
    /// </summary>
    public enum LevelGoalType
    {
        ClearPieces,
        ClearBoard,
        ClearStacks,
        DefeatAllEnemies,
        DefeatEnemies
    }
}
