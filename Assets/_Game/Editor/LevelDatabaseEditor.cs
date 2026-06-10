using System.IO;
using _Game.Configs;
using _Game.Levels;
using _Game.Stacks;
using UnityEditor;
using UnityEngine;

/// <summary>
/// Provides level-list management for LevelDatabase assets and launches the HexGridShape-style LevelConfig editor.
/// </summary>
[CustomEditor(typeof(LevelDatabase))]
public class LevelDatabaseEditor : Editor
{
    private SerializedProperty levels;
    private int selectedIndex;

    private void OnEnable()
    {
        levels = serializedObject.FindProperty("levels");
    }

    public override void OnInspectorGUI()
    {
        serializedObject.Update();
        DrawToolbar();
        DrawLevelList();
        DrawSelectedLevelActions();
        serializedObject.ApplyModifiedProperties();
    }

    private void DrawToolbar()
    {
        using (new EditorGUILayout.VerticalScope(EditorStyles.helpBox))
        {
            EditorGUILayout.LabelField("Level Database", EditorStyles.boldLabel);
            EditorGUILayout.HelpBox("Manage ordered LevelConfig assets. Select a row, then open it in the Hex Level Editor to edit board shape, starts, hand, and goals.", MessageType.None);

            using (new EditorGUILayout.HorizontalScope())
            {
                if (GUILayout.Button("Add Existing Level"))
                {
                    AddExistingLevel();
                }
                if (GUILayout.Button("Create New Level"))
                {
                    CreateNewLevelAsset();
                }
                if (GUILayout.Button("Save Assets", GUILayout.Width(100f)))
                {
                    AssetDatabase.SaveAssets();
                }
            }
        }
    }

    private void DrawLevelList()
    {
        if (levels == null)
        {
            EditorGUILayout.HelpBox("LevelDatabase.levels property was not found.", MessageType.Error);
            return;
        }

        if (levels.arraySize == 0)
        {
            EditorGUILayout.HelpBox("Database has no levels. Create or add a LevelConfig asset.", MessageType.Warning);
            return;
        }

        selectedIndex = Mathf.Clamp(selectedIndex, 0, levels.arraySize - 1);
        for (int i = 0; i < levels.arraySize; i++)
        {
            DrawLevelRow(i);
        }
    }

    private void DrawLevelRow(int index)
    {
        SerializedProperty item = levels.GetArrayElementAtIndex(index);
        LevelConfig config = item.objectReferenceValue as LevelConfig;
        Color previous = GUI.backgroundColor;
        if (selectedIndex == index)
        {
            GUI.backgroundColor = new Color(0.65f, 0.95f, 1f, 1f);
        }

        using (new EditorGUILayout.VerticalScope(EditorStyles.helpBox))
        {
            GUI.backgroundColor = previous;
            using (new EditorGUILayout.HorizontalScope())
            {
                if (GUILayout.Toggle(selectedIndex == index, string.Empty, GUILayout.Width(18f)) && selectedIndex != index)
                {
                    selectedIndex = index;
                    GUI.FocusControl(null);
                }

                EditorGUILayout.PropertyField(item, new GUIContent("Level " + (index + 1)));

                using (new EditorGUI.DisabledScope(config == null))
                {
                    if (GUILayout.Button("Edit", GUILayout.Width(56f)))
                    {
                        selectedIndex = index;
                        LevelConfigHexGridEditorWindow.Open(config);
                    }
                    if (GUILayout.Button("Ping", GUILayout.Width(56f)))
                    {
                        Selection.activeObject = config;
                        EditorGUIUtility.PingObject(config);
                    }
                }
            }

            if (config != null)
            {
                EditorGUILayout.LabelField(BuildLevelSummary(config), EditorStyles.miniLabel);
            }

            using (new EditorGUILayout.HorizontalScope())
            {
                using (new EditorGUI.DisabledScope(index <= 0))
                {
                    if (GUILayout.Button("Move Up"))
                    {
                        levels.MoveArrayElement(index, index - 1);
                        selectedIndex = index - 1;
                    }
                }

                using (new EditorGUI.DisabledScope(index >= levels.arraySize - 1))
                {
                    if (GUILayout.Button("Move Down"))
                    {
                        levels.MoveArrayElement(index, index + 1);
                        selectedIndex = index + 1;
                    }
                }

                if (GUILayout.Button("Duplicate Ref"))
                {
                    levels.InsertArrayElementAtIndex(index + 1);
                    levels.GetArrayElementAtIndex(index + 1).objectReferenceValue = config;
                    selectedIndex = index + 1;
                }

                if (GUILayout.Button("Remove Ref"))
                {
                    levels.DeleteArrayElementAtIndex(index);
                    selectedIndex = Mathf.Clamp(index, 0, Mathf.Max(0, levels.arraySize - 1));
                }
            }
        }

        GUI.backgroundColor = previous;
    }

    private void DrawSelectedLevelActions()
    {
        if (levels == null || levels.arraySize == 0)
        {
            return;
        }

        selectedIndex = Mathf.Clamp(selectedIndex, 0, levels.arraySize - 1);
        LevelConfig selectedLevel = levels.GetArrayElementAtIndex(selectedIndex).objectReferenceValue as LevelConfig;
        using (new EditorGUILayout.VerticalScope(EditorStyles.helpBox))
        {
            EditorGUILayout.LabelField("Selected Level", EditorStyles.boldLabel);
            if (selectedLevel == null)
            {
                EditorGUILayout.HelpBox("Selected slot has no LevelConfig reference.", MessageType.Warning);
                return;
            }

            EditorGUILayout.LabelField(BuildLevelSummary(selectedLevel));
            using (new EditorGUILayout.HorizontalScope())
            {
                if (GUILayout.Button("Open Hex Level Editor", GUILayout.Height(30f)))
                {
                    LevelConfigHexGridEditorWindow.Open(selectedLevel);
                }
                if (GUILayout.Button("Select Asset", GUILayout.Height(30f), GUILayout.Width(120f)))
                {
                    Selection.activeObject = selectedLevel;
                    EditorGUIUtility.PingObject(selectedLevel);
                }
            }
        }
    }

    private void AddExistingLevel()
    {
        levels.InsertArrayElementAtIndex(levels.arraySize);
        levels.GetArrayElementAtIndex(levels.arraySize - 1).objectReferenceValue = null;
        selectedIndex = levels.arraySize - 1;
    }

    private void CreateNewLevelAsset()
    {
        string directory = GetDatabaseDirectory();
        string path = EditorUtility.SaveFilePanelInProject("Create Level Config", "LevelConfig_" + (levels.arraySize + 1), "asset", "Choose where to create the level config asset.", directory);
        if (string.IsNullOrEmpty(path))
        {
            return;
        }

        LevelConfig config = CreateInstance<LevelConfig>();
        config.levelNumber = levels.arraySize + 1;
        config.levelId = "level_" + config.levelNumber.ToString("000");
        config.displayName = "Level " + config.levelNumber;
        config.goals.Add(new LevelConfig.GoalDefinition
        {
            type = LevelGoalType.ClearPieces,
            color = HexColor.Red,
            requiredCount = 10
        });

        AssetDatabase.CreateAsset(config, path);
        AssetDatabase.SaveAssets();
        levels.InsertArrayElementAtIndex(levels.arraySize);
        levels.GetArrayElementAtIndex(levels.arraySize - 1).objectReferenceValue = config;
        selectedIndex = levels.arraySize - 1;
        Selection.activeObject = config;
        LevelConfigHexGridEditorWindow.Open(config);
    }

    private string GetDatabaseDirectory()
    {
        string databasePath = AssetDatabase.GetAssetPath(target);
        if (string.IsNullOrEmpty(databasePath))
        {
            return "Assets";
        }

        string directory = Path.GetDirectoryName(databasePath);
        return string.IsNullOrEmpty(directory) ? "Assets" : directory;
    }

    private static string BuildLevelSummary(LevelConfig config)
    {
        if (config == null)
        {
            return "Missing LevelConfig";
        }

        int customCells = config.customCoordinates != null ? config.customCoordinates.Count : 0;
        int startStacks = config.startingBoardStacks != null ? config.startingBoardStacks.Count : 0;
        int handStacks = config.initialHandStacks != null ? config.initialHandStacks.Count : 0;
        int goals = config.goals != null ? config.goals.Count : 0;
        return "#" + config.levelNumber + "  " + config.displayName + "  |  Shape: " + config.boardShape + " r" + config.boardRadius + " custom " + customCells + "  |  Starts: " + startStacks + "  Hand: " + handStacks + "  Goals: " + goals;
    }
}
