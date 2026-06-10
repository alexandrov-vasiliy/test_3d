using System.Collections.Generic;
using _Game.Configs;
using _Game.Stacks;
using UnityEngine;

namespace _Game.Levels
{
    /// <summary>
        /// Creates runtime hand stacks from level rules, including biased same-color runs; it owns deterministic generation state but not tray visuals or input.
    /// </summary>
    public sealed class HandGenerator
    {
        private LevelConfig levelConfig;
        private System.Random random;
        private int generatedHands;
        private int finiteDeckIndex;

        public void Begin(LevelConfig levelConfig)
        {
            this.levelConfig = levelConfig;
            generatedHands = 0;
            finiteDeckIndex = 0;

            int seed = levelConfig != null && levelConfig.handGeneration != null && levelConfig.handGeneration.useRandomSeed
                ? levelConfig.handGeneration.randomSeed
                : UnityEngine.Random.Range(int.MinValue, int.MaxValue);
            random = new System.Random(seed);
        }

        public bool TryGenerateInitialHand(out List<HexStack> stacks)
        {
            stacks = new List<HexStack>();
            if (levelConfig == null)
            {
                return false;
            }

            IReadOnlyList<LevelConfig.StackDefinition> predefined = levelConfig.GetInitialHandDefinitions();
            AddDefinitions(stacks, predefined, levelConfig.HandSize, 0);

            while (stacks.Count < levelConfig.HandSize && TryGenerateStack(out HexStack generatedStack))
            {
                stacks.Add(generatedStack);
            }

            generatedHands++;
            return stacks.Count > 0;
        }

        public bool TryGenerateNextHand(out List<HexStack> stacks)
        {
            stacks = new List<HexStack>();
            if (levelConfig == null)
            {
                return false;
            }

            LevelConfig.HandGenerationSettings settings = levelConfig.handGeneration;
            if (settings != null && settings.finiteDeckMode)
            {
                AddDefinitions(stacks, settings.finiteDeckStacks, levelConfig.HandSize, finiteDeckIndex);
                finiteDeckIndex += stacks.Count;
                generatedHands++;
                return stacks.Count > 0;
            }

            while (stacks.Count < levelConfig.HandSize && TryGenerateStack(out HexStack stack))
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
            LevelConfig.HandGenerationSettings settings = levelConfig != null ? levelConfig.handGeneration : null;
            if (settings == null || settings.allowedColors == null || settings.allowedColors.Count == 0)
            {
                return false;
            }

            int minHeight = Mathf.Max(1, settings.minStackHeight);
            int maxHeight = Mathf.Max(minHeight, settings.maxStackHeight);
            int height = random.Next(minHeight, maxHeight + 1);
            List<HexColor> colors = new List<HexColor>(height);

            if (!settings.generateColorRuns)
            {
                for (int i = 0; i < height; i++)
                {
                    colors.Add(PickRandomColor(settings.allowedColors));
                }

                stack = new HexStack(colors);
                return true;
            }

            while (colors.Count < height)
            {
                HexColor? previousColor = colors.Count > 0 ? colors[colors.Count - 1] : (HexColor?)null;
                HexColor color = PickRandomColor(settings.allowedColors, previousColor);
                int runLength = PickRunLength(settings, height - colors.Count);
                for (int i = 0; i < runLength && colors.Count < height; i++)
                {
                    colors.Add(color);
                }
            }

            stack = new HexStack(colors);
            return true;
        }

        private HexColor PickRandomColor(IReadOnlyList<HexColor> allowedColors)
        {
            return allowedColors[random.Next(0, allowedColors.Count)];
        }

        private HexColor PickRandomColor(IReadOnlyList<HexColor> allowedColors, HexColor? excludedColor)
        {
            if (!excludedColor.HasValue || allowedColors.Count <= 1)
            {
                return PickRandomColor(allowedColors);
            }

            HexColor color;
            int guard = 0;
            do
            {
                color = PickRandomColor(allowedColors);
                guard++;
            }
            while (color == excludedColor.Value && guard < 16);

            return color;
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
    }
}
