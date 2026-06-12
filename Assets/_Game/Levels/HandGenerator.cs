using System.Collections.Generic;
using _Game.Configs;
using _Game.Runes;
using _Game.Stacks;
using UnityEngine;

namespace _Game.Levels
{
    /// <summary>
    /// Creates runtime hand stacks from level hand settings and the shared rune catalog; it owns deterministic generation state but not tray visuals or input.
    /// </summary>
    public sealed class HandGenerator
    {
        private readonly RuneCatalog runeCatalog;
        private IReadOnlyList<LevelConfig.StackDefinition> initialHandDefinitions;
        private LevelConfig.HandGenerationSettings handGenerationSettings;
        private int handSize;
        private System.Random random;
        private int generatedHands;
        private int finiteDeckIndex;

        public HandGenerator(RuneCatalog runeCatalog)
        {
            this.runeCatalog = runeCatalog;
        }

        public void Begin(IReadOnlyList<LevelConfig.StackDefinition> initialHandDefinitions, LevelConfig.HandGenerationSettings handGenerationSettings, int handSize)
        {
            this.initialHandDefinitions = initialHandDefinitions;
            this.handGenerationSettings = handGenerationSettings;
            this.handSize = Mathf.Max(1, handSize);
            generatedHands = 0;
            finiteDeckIndex = 0;

            int seed = handGenerationSettings != null && handGenerationSettings.useRandomSeed
                ? handGenerationSettings.randomSeed
                : UnityEngine.Random.Range(int.MinValue, int.MaxValue);
            random = new System.Random(seed);
        }

        public bool TryGenerateInitialHand(out List<HexStack> stacks)
        {
            stacks = new List<HexStack>();
            if (handGenerationSettings == null)
            {
                return false;
            }

            AddDefinitions(stacks, initialHandDefinitions, handSize, 0);

            while (stacks.Count < handSize && TryGenerateStack(out HexStack generatedStack))
            {
                stacks.Add(generatedStack);
            }

            generatedHands++;
            return stacks.Count > 0;
        }

        public bool TryGenerateNextHand(out List<HexStack> stacks)
        {
            stacks = new List<HexStack>();
            if (handGenerationSettings == null)
            {
                return false;
            }

            LevelConfig.HandGenerationSettings settings = handGenerationSettings;
            if (settings != null && settings.finiteDeckMode)
            {
                AddDefinitions(stacks, settings.finiteDeckStacks, handSize, finiteDeckIndex);
                finiteDeckIndex += stacks.Count;
                generatedHands++;
                return stacks.Count > 0;
            }

            while (stacks.Count < handSize && TryGenerateStack(out HexStack stack))
            {
                stacks.Add(stack);
            }

            generatedHands++;
            return stacks.Count > 0;
        }

        private static void AddDefinitions(List<HexStack> stacks, IReadOnlyList<LevelConfig.StackDefinition> definitions, int maxCount, int startIndex)
        {
            if (definitions == null)
            {
                return;
            }

            for (int i = startIndex; i < definitions.Count && stacks.Count < maxCount; i++)
            {
                LevelConfig.StackDefinition definition = definitions[i];
                if (definition != null)
                {
                    stacks.Add(definition.CreateStack());
                }
            }
        }

        private bool TryGenerateStack(out HexStack stack)
        {
            stack = null;
            LevelConfig.HandGenerationSettings settings = handGenerationSettings;
            IReadOnlyList<string> allowedRuneIds = GetCatalogRuneIds();
            if (settings == null || allowedRuneIds == null || allowedRuneIds.Count == 0)
            {
                return false;
            }

            int minHeight = Mathf.Max(1, settings.minStackHeight);
            int maxHeight = Mathf.Max(minHeight, settings.maxStackHeight);
            int height = random.Next(minHeight, maxHeight + 1);
            List<string> runeIds = new List<string>(height);

            if (!settings.generateRuneRuns)
            {
                for (int i = 0; i < height; i++)
                {
                    runeIds.Add(PickRandomRuneId(allowedRuneIds));
                }

                stack = new HexStack(runeIds);
                return true;
            }

            while (runeIds.Count < height)
            {
                string previousRuneId = runeIds.Count > 0 ? runeIds[runeIds.Count - 1] : null;
                string runeId = PickRandomRuneId(allowedRuneIds, previousRuneId);
                int runLength = PickRunLength(settings, height - runeIds.Count);
                for (int i = 0; i < runLength && runeIds.Count < height; i++)
                {
                    runeIds.Add(runeId);
                }
            }

            stack = new HexStack(runeIds);
            return true;
        }

        private string PickRandomRuneId(IReadOnlyList<string> allowedRuneIds)
        {
            return allowedRuneIds[random.Next(0, allowedRuneIds.Count)];
        }

        private string PickRandomRuneId(IReadOnlyList<string> allowedRuneIds, string excludedRuneId)
        {
            if (string.IsNullOrWhiteSpace(excludedRuneId) || allowedRuneIds.Count <= 1)
            {
                return PickRandomRuneId(allowedRuneIds);
            }

            string runeId;
            int guard = 0;
            do
            {
                runeId = PickRandomRuneId(allowedRuneIds);
                guard++;
            }
            while (string.Equals(runeId, excludedRuneId, System.StringComparison.Ordinal) && guard < 16);

            return runeId;
        }

        private int PickRunLength(LevelConfig.HandGenerationSettings settings, int remainingHeight)
        {
            remainingHeight = Mathf.Max(1, remainingHeight);
            float runChance = Mathf.Clamp01(settings.sameColorRunChance);
            if (remainingHeight <= 1 || random.NextDouble() > runChance)
            {
                return 1;
            }

            int minRunLength = Mathf.Max(2, settings.minColorRunLength);
            int maxRunLength = Mathf.Max(minRunLength, settings.maxColorRunLength);
            int runLength = random.Next(minRunLength, maxRunLength + 1);
            return Mathf.Clamp(runLength, 1, remainingHeight);
        }

        private IReadOnlyList<string> GetCatalogRuneIds()
        {
            if (runeCatalog == null || runeCatalog.Runes == null || runeCatalog.Runes.Count == 0)
            {
                return null;
            }

            List<string> runeIds = new List<string>(runeCatalog.Runes.Count);
            for (int i = 0; i < runeCatalog.Runes.Count; i++)
            {
                RuneDefinition rune = runeCatalog.Runes[i];
                if (rune != null && !string.IsNullOrWhiteSpace(rune.RuneId))
                {
                    runeIds.Add(rune.RuneId);
                }
            }

            return runeIds;
        }
    }
}
