using System.Collections.Generic;
using _Game.Configs;
using _Game.Runes;
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
            if (GUILayout.Button("Open Rune Composer", GUILayout.Height(28f)))
            {
                RuneComposerEditorWindow.Open();
            }
            if (GUILayout.Button("Ping Asset", GUILayout.Height(28f), GUILayout.Width(100f)))
            {
                EditorGUIUtility.PingObject(target);
            }
        }

        DrawDefaultInspector();
        DrawSelectedRunePicker();
        serializedObject.ApplyModifiedProperties();

        LevelConfig config = (LevelConfig)target;
        EditorGUILayout.Space(8f);
        DrawPreview(config);
        DrawValidation(config);
    }

    private void DrawSelectedRunePicker()
    {
        SerializedProperty selectedRuneIds = serializedObject.FindProperty("selectedRuneIds");
        if (selectedRuneIds == null)
        {
            return;
        }

        RuneCatalog catalog = FindRuneCatalog();
        EditorGUILayout.Space(8f);
        EditorGUILayout.LabelField("Catalog Rune Selection", EditorStyles.boldLabel);
        if (catalog == null || catalog.Runes == null || catalog.Runes.Count == 0)
        {
            EditorGUILayout.HelpBox("No RuneCatalog asset with runes was found. Create one via Tools/Runes/Rune Composer.", MessageType.Info);
            return;
        }

        using (new EditorGUILayout.HorizontalScope())
        {
            if (GUILayout.Button("Add From Catalog"))
            {
                ShowAddRuneMenu(selectedRuneIds, catalog);
            }
            if (GUILayout.Button("Open Catalog", GUILayout.Width(100f)))
            {
                Selection.activeObject = catalog;
                EditorGUIUtility.PingObject(catalog);
            }
        }
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
        RuneCatalog catalog = FindRuneCatalog();
        List<string> allowedRuneIds = GetCatalogRuneIds(catalog);
        if (settings == null || allowedRuneIds == null || allowedRuneIds.Count == 0)
        {
            EditorGUILayout.HelpBox("No predefined hand and no runes were found in RuneCatalog.", MessageType.Warning);
            return;
        }

        System.Random random = new System.Random(settings.useRandomSeed ? settings.randomSeed : 1);
        int minHeight = Mathf.Max(1, settings.minStackHeight);
        int maxHeight = Mathf.Max(minHeight, settings.maxStackHeight);
        for (int i = 0; i < handSize; i++)
        {
            int height = random.Next(minHeight, maxHeight + 1);
            List<string> runeIds = GeneratePreviewStack(settings, allowedRuneIds, random, height);
            EditorGUILayout.LabelField("Slot " + (i + 1), string.Join(", ", runeIds));
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
        RuneCatalog catalog = FindRuneCatalog();
        HashSet<Vector2Int> boardCells = BuildBoardCells(config);
        HashSet<string> availableRuneIds = new HashSet<string>();
        HashSet<Vector2Int> startStackCells = new HashSet<Vector2Int>();
        HashSet<Vector2Int> enemyCells = new HashSet<Vector2Int>();
        int occupiedCells = 0;
        bool hasDefeatAllEnemiesGoal = false;

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
                    startStackCells.Add(stack.coordinate);
                }

                AddStackRuneIds(availableRuneIds, stack.stack);
            }
        }

        if (config.enemies != null)
        {
            for (int i = 0; i < config.enemies.Count; i++)
            {
                LevelConfig.EnemyDefinition enemy = config.enemies[i];
                if (enemy == null)
                {
                    continue;
                }

                if (string.IsNullOrWhiteSpace(enemy.enemyId))
                {
                    errors.Add("Enemy " + i + " has empty enemyId.");
                }

                if (!boardCells.Contains(enemy.coordinate))
                {
                    errors.Add("Enemy is outside board shape: " + enemy.coordinate);
                    continue;
                }

                if (startStackCells.Contains(enemy.coordinate))
                {
                    errors.Add("Enemy conflicts with a starting stack at: " + enemy.coordinate);
                }

                if (!enemyCells.Add(enemy.coordinate))
                {
                    errors.Add("Multiple enemies are placed on the same cell: " + enemy.coordinate);
                    continue;
                }

                if (!startStackCells.Contains(enemy.coordinate))
                {
                    occupiedCells++;
                }
            }
        }

        IReadOnlyList<LevelConfig.StackDefinition> initialHand = config.GetInitialHandDefinitions();
        if (initialHand != null)
        {
            for (int i = 0; i < initialHand.Count; i++)
            {
                AddStackRuneIds(availableRuneIds, initialHand[i]);
            }
        }

        LevelConfig.HandGenerationSettings settings = config.handGeneration;
        if (config.selectedRuneIds != null)
        {
            for (int i = 0; i < config.selectedRuneIds.Count; i++)
            {
                availableRuneIds.Add(config.selectedRuneIds[i]);
            }
        }
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
            if (settings.generateRuneRuns && (settings.minColorRunLength < 2 || settings.maxColorRunLength < settings.minColorRunLength))
            {
                errors.Add("Invalid rune run length range.");
            }
            if (!settings.finiteDeckMode && (catalog == null || catalog.Runes == null || catalog.Runes.Count == 0))
            {
                errors.Add("Infinite generation requires at least one rune in RuneCatalog.");
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
                if (goal == null)
                {
                    errors.Add("Goal " + i + " is missing.");
                    continue;
                }

                if (goal.type == LevelGoalType.DefeatAllEnemies)
                {
                    hasDefeatAllEnemiesGoal = true;
                    continue;
                }

                if (goal.type == LevelGoalType.DefeatEnemies)
                {
                    if (goal.requiredCount <= 0)
                    {
                        errors.Add("DefeatEnemies goal " + i + " has invalid required count.");
                    }
                    continue;
                }

                if (goal.requiredCount <= 0)
                {
                    errors.Add("Goal " + i + " has invalid required count.");
                    continue;
                }

                if (goal.type == LevelGoalType.ClearPieces && !availableRuneIds.Contains(goal.runeId))
                {
                    errors.Add("Goal rune id is not present in board, initial hand, or generation settings: " + goal.runeId);
                }
            }
        }

        if (hasDefeatAllEnemiesGoal && enemyCells.Count == 0)
        {
            errors.Add("DefeatAllEnemies goal has no valid enemies on the level.");
        }

        if (boardCells.Count > 0 && occupiedCells >= boardCells.Count)
        {
            errors.Add("No empty cells at level start. This is usually invalid for placement gameplay.");
        }

        return errors;
    }

    private static List<string> GeneratePreviewStack(LevelConfig.HandGenerationSettings settings, IReadOnlyList<string> allowedRuneIds, System.Random random, int height)
    {
        List<string> runeIds = new List<string>();
        if (!settings.generateRuneRuns)
        {
            for (int i = 0; i < height; i++)
            {
                runeIds.Add(allowedRuneIds[random.Next(0, allowedRuneIds.Count)]);
            }
            return runeIds;
        }

        while (runeIds.Count < height)
        {
            string previousRuneId = runeIds.Count > 0 ? runeIds[runeIds.Count - 1] : null;
            string runeId = PickPreviewRuneId(allowedRuneIds, previousRuneId, random);
            int runLength = PickPreviewRunLength(settings, random, height - runeIds.Count);
            for (int i = 0; i < runLength && runeIds.Count < height; i++)
            {
                runeIds.Add(runeId);
            }
        }

        return runeIds;
    }

    private static string PickPreviewRuneId(IReadOnlyList<string> allowedRuneIds, string excludedRuneId, System.Random random)
    {
        if (string.IsNullOrWhiteSpace(excludedRuneId) || allowedRuneIds.Count <= 1)
        {
            return allowedRuneIds[random.Next(0, allowedRuneIds.Count)];
        }

        string runeId;
        int guard = 0;
        do
        {
            runeId = allowedRuneIds[random.Next(0, allowedRuneIds.Count)];
            guard++;
        }
        while (runeId == excludedRuneId && guard < 16);

        return runeId;
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

    private static void AddStackRuneIds(HashSet<string> runeIds, LevelConfig.StackDefinition stack)
    {
        if (stack == null || stack.runeIdsBottomToTop == null)
        {
            return;
        }

        for (int i = 0; i < stack.runeIdsBottomToTop.Count; i++)
        {
            runeIds.Add(stack.runeIdsBottomToTop[i]);
        }
    }

    private static string StackSummary(LevelConfig.StackDefinition stack)
    {
        if (stack == null || stack.runeIdsBottomToTop == null || stack.runeIdsBottomToTop.Count == 0)
        {
            return "Empty";
        }

        return string.Join(", ", stack.runeIdsBottomToTop);
    }

    private static RuneCatalog FindRuneCatalog()
    {
        string[] guids = AssetDatabase.FindAssets("t:RuneCatalog");
        if (guids == null || guids.Length == 0)
        {
            return null;
        }

        string path = AssetDatabase.GUIDToAssetPath(guids[0]);
        return AssetDatabase.LoadAssetAtPath<RuneCatalog>(path);
    }

    private static List<string> GetCatalogRuneIds(RuneCatalog catalog)
    {
        if (catalog == null || catalog.Runes == null || catalog.Runes.Count == 0)
        {
            return null;
        }

        List<string> runeIds = new List<string>(catalog.Runes.Count);
        for (int i = 0; i < catalog.Runes.Count; i++)
        {
            RuneDefinition rune = catalog.Runes[i];
            if (rune != null && !string.IsNullOrWhiteSpace(rune.RuneId))
            {
                runeIds.Add(rune.RuneId);
            }
        }

        return runeIds;
    }

    private static void ShowAddRuneMenu(SerializedProperty selectedRuneIds, RuneCatalog catalog)
    {
        GenericMenu menu = new GenericMenu();
        HashSet<string> existingIds = new HashSet<string>();
        for (int i = 0; i < selectedRuneIds.arraySize; i++)
        {
            existingIds.Add(selectedRuneIds.GetArrayElementAtIndex(i).stringValue);
        }

        for (int i = 0; i < catalog.Runes.Count; i++)
        {
            RuneDefinition rune = catalog.Runes[i];
            if (rune == null || string.IsNullOrWhiteSpace(rune.RuneId) || existingIds.Contains(rune.RuneId))
            {
                continue;
            }

            string runeId = rune.RuneId;
            string displayName = string.IsNullOrWhiteSpace(rune.DisplayName) ? runeId : rune.DisplayName;
            menu.AddItem(new GUIContent(displayName + " (" + runeId + ")"), false, () =>
            {
                selectedRuneIds.InsertArrayElementAtIndex(selectedRuneIds.arraySize);
                selectedRuneIds.GetArrayElementAtIndex(selectedRuneIds.arraySize - 1).stringValue = runeId;
                selectedRuneIds.serializedObject.ApplyModifiedProperties();
            });
        }

        if (menu.GetItemCount() == 0)
        {
            menu.AddDisabledItem(new GUIContent("No available runes"));
        }

        menu.ShowAsContext();
    }
}
