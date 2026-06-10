using System.Collections.Generic;
using _Game.Configs;
using _Game.Stacks;
using UnityEditor;
using UnityEngine;

/// <summary>
/// Provides validation and preview tooling for full-game LevelConfig assets; it does not modify runtime scene objects.
/// </summary>
[CustomEditor(typeof(LevelConfig))]
public class LevelConfigEditor : Editor
{
    public override void OnInspectorGUI()
    {
        serializedObject.Update();
        using (new EditorGUILayout.HorizontalScope(EditorStyles.helpBox))
        {
            if (GUILayout.Button("Open Hex Level Editor", GUILayout.Height(28f)))
            {
                LevelConfigHexGridEditorWindow.Open((LevelConfig)target);
            }
            if (GUILayout.Button("Ping Asset", GUILayout.Height(28f), GUILayout.Width(100f)))
            {
                EditorGUIUtility.PingObject(target);
            }
        }

        DrawDefaultInspector();
        serializedObject.ApplyModifiedProperties();

        LevelConfig config = (LevelConfig)target;
        EditorGUILayout.Space(8f);
        DrawPreview(config);
        DrawValidation(config);
    }

    private static void DrawPreview(LevelConfig config)
    {
        EditorGUILayout.LabelField("First Hand Preview", EditorStyles.boldLabel);
        IReadOnlyList<LevelConfig.StackDefinition> initialHand = config.GetInitialHandDefinitions();
        int handSize = config.HandSize;
        if (initialHand != null && initialHand.Count > 0)
        {
            for (int i = 0; i < initialHand.Count && i < handSize; i++)
            {
                EditorGUILayout.LabelField("Slot " + (i + 1), StackSummary(initialHand[i]));
            }
            return;
        }

        LevelConfig.HandGenerationSettings settings = config.handGeneration;
        if (settings == null || settings.allowedColors == null || settings.allowedColors.Count == 0)
        {
            EditorGUILayout.HelpBox("No predefined hand and no allowed generated colors.", MessageType.Warning);
            return;
        }

        System.Random random = new System.Random(settings.useRandomSeed ? settings.randomSeed : 1);
        int minHeight = Mathf.Max(1, settings.minStackHeight);
        int maxHeight = Mathf.Max(minHeight, settings.maxStackHeight);
        for (int i = 0; i < handSize; i++)
        {
            int height = random.Next(minHeight, maxHeight + 1);
            List<HexColor> colors = GeneratePreviewStack(settings, random, height);
            EditorGUILayout.LabelField("Slot " + (i + 1), string.Join(", ", colors));
        }
    }

    private static void DrawValidation(LevelConfig config)
    {
        EditorGUILayout.Space(8f);
        EditorGUILayout.LabelField("Validation", EditorStyles.boldLabel);
        List<string> errors = Validate(config);
        if (errors.Count == 0)
        {
            EditorGUILayout.HelpBox("Level data passed editor validation.", MessageType.Info);
            return;
        }

        for (int i = 0; i < errors.Count; i++)
        {
            EditorGUILayout.HelpBox(errors[i], MessageType.Warning);
        }
    }

    private static List<string> Validate(LevelConfig config)
    {
        List<string> errors = new List<string>();
        HashSet<Vector2Int> boardCells = BuildBoardCells(config);
        HashSet<HexColor> availableColors = new HashSet<HexColor>();
        int occupiedCells = 0;

        if (config.startingBoardStacks != null)
        {
            for (int i = 0; i < config.startingBoardStacks.Count; i++)
            {
                LevelConfig.BoardStackDefinition stack = config.startingBoardStacks[i];
                if (stack == null)
                {
                    continue;
                }

                if (!boardCells.Contains(stack.coordinate))
                {
                    errors.Add("Starting stack is outside board shape: " + stack.coordinate);
                }
                else
                {
                    occupiedCells++;
                }

                AddStackColors(availableColors, stack.stack);
            }
        }

        IReadOnlyList<LevelConfig.StackDefinition> initialHand = config.GetInitialHandDefinitions();
        if (initialHand != null)
        {
            for (int i = 0; i < initialHand.Count; i++)
            {
                AddStackColors(availableColors, initialHand[i]);
            }
        }

        LevelConfig.HandGenerationSettings settings = config.handGeneration;
        if (settings == null)
        {
            errors.Add("Hand generation settings are missing.");
        }
        else
        {
            if (settings.handSize <= 0)
            {
                errors.Add("Hand size must be greater than zero.");
            }
            if (settings.minStackHeight <= 0 || settings.maxStackHeight < settings.minStackHeight)
            {
                errors.Add("Invalid stack height range.");
            }
            if (settings.generateColorRuns && (settings.minColorRunLength < 2 || settings.maxColorRunLength < settings.minColorRunLength))
            {
                errors.Add("Invalid color run length range.");
            }
            if (!settings.finiteDeckMode && (settings.allowedColors == null || settings.allowedColors.Count == 0))
            {
                errors.Add("Infinite generation requires at least one allowed color.");
            }
            if (settings.allowedColors != null)
            {
                for (int i = 0; i < settings.allowedColors.Count; i++)
                {
                    availableColors.Add(settings.allowedColors[i]);
                }
            }
        }

        if (config.goals == null || config.goals.Count == 0)
        {
            errors.Add("Level has no goals.");
        }
        else
        {
            for (int i = 0; i < config.goals.Count; i++)
            {
                LevelConfig.GoalDefinition goal = config.goals[i];
                if (goal == null || goal.requiredCount <= 0)
                {
                    errors.Add("Goal " + i + " has invalid required count.");
                    continue;
                }

                if (goal.type == LevelGoalType.ClearPieces && !availableColors.Contains(goal.color))
                {
                    errors.Add("Goal color is not present in board, initial hand, or generation settings: " + goal.color);
                }
            }
        }

        if (boardCells.Count > 0 && occupiedCells >= boardCells.Count)
        {
            errors.Add("No empty cells at level start. This is usually invalid for placement gameplay.");
        }

        return errors;
    }

    private static List<HexColor> GeneratePreviewStack(LevelConfig.HandGenerationSettings settings, System.Random random, int height)
    {
        List<HexColor> colors = new List<HexColor>();
        if (!settings.generateColorRuns)
        {
            for (int i = 0; i < height; i++)
            {
                colors.Add(settings.allowedColors[random.Next(0, settings.allowedColors.Count)]);
            }
            return colors;
        }

        while (colors.Count < height)
        {
            HexColor? previousColor = colors.Count > 0 ? colors[colors.Count - 1] : (HexColor?)null;
            HexColor color = PickPreviewColor(settings.allowedColors, previousColor, random);
            int runLength = PickPreviewRunLength(settings, random, height - colors.Count);
            for (int i = 0; i < runLength && colors.Count < height; i++)
            {
                colors.Add(color);
            }
        }

        return colors;
    }

    private static HexColor PickPreviewColor(IReadOnlyList<HexColor> allowedColors, HexColor? excludedColor, System.Random random)
    {
        if (!excludedColor.HasValue || allowedColors.Count <= 1)
        {
            return allowedColors[random.Next(0, allowedColors.Count)];
        }

        HexColor color;
        int guard = 0;
        do
        {
            color = allowedColors[random.Next(0, allowedColors.Count)];
            guard++;
        }
        while (color == excludedColor.Value && guard < 16);

        return color;
    }

    private static int PickPreviewRunLength(LevelConfig.HandGenerationSettings settings, System.Random random, int remainingHeight)
    {
        remainingHeight = Mathf.Max(1, remainingHeight);
        if (remainingHeight <= 1 || random.NextDouble() > Mathf.Clamp01(settings.sameColorRunChance))
        {
            return 1;
        }

        int minRunLength = Mathf.Max(2, settings.minColorRunLength);
        int maxRunLength = Mathf.Max(minRunLength, settings.maxColorRunLength);
        return Mathf.Clamp(random.Next(minRunLength, maxRunLength + 1), 1, remainingHeight);
    }

    private static HashSet<Vector2Int> BuildBoardCells(LevelConfig config)
    {
        HashSet<Vector2Int> cells = new HashSet<Vector2Int>();
        if (config.boardShape == _Game.Board.HexGridGenerator.BoardShape.Custom)
        {
            if (config.customCoordinates != null)
            {
                for (int i = 0; i < config.customCoordinates.Count; i++)
                {
                    cells.Add(config.customCoordinates[i]);
                }
            }
            return cells;
        }

        int radius = Mathf.Max(0, config.boardRadius);
        if (config.boardShape == _Game.Board.HexGridGenerator.BoardShape.Hexagon)
        {
            for (int q = -radius; q <= radius; q++)
            {
                int r1 = Mathf.Max(-radius, -q - radius);
                int r2 = Mathf.Min(radius, -q + radius);
                for (int r = r1; r <= r2; r++)
                {
                    cells.Add(new Vector2Int(q, r));
                }
            }
            return cells;
        }

        for (int x = -radius; x <= radius; x++)
        {
            for (int y = -radius; y <= radius; y++)
            {
                cells.Add(new Vector2Int(x, y));
            }
        }

        return cells;
    }

    private static void AddStackColors(HashSet<HexColor> colors, LevelConfig.StackDefinition stack)
    {
        if (stack == null || stack.colorsBottomToTop == null)
        {
            return;
        }

        for (int i = 0; i < stack.colorsBottomToTop.Count; i++)
        {
            colors.Add(stack.colorsBottomToTop[i]);
        }
    }

    private static string StackSummary(LevelConfig.StackDefinition stack)
    {
        if (stack == null || stack.colorsBottomToTop == null || stack.colorsBottomToTop.Count == 0)
        {
            return "Empty";
        }

        return string.Join(", ", stack.colorsBottomToTop);
    }
}
