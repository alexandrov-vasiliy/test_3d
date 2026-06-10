using System.Collections.Generic;
using _Game.Audio;
using _Game.Board;
using _Game.Drag;
using _Game.Enemies;
using _Game.Flow;
using _Game.Merge;
using _Game.Packshot;
using _Game.Stacks;
using _Game.Tutorial;
using _Game.UI;
using UnityEditor;
using UnityEngine;

/// <summary>
/// Provides scene and inspector tooling for the Main composition root; level authoring details belong to LevelConfig assets.
/// </summary>
[CustomEditor(typeof(Main))]
public class MainEditor : Editor
{
    private const float DefaultCellSize = 1.05f;
    private static readonly Color BoardLineColor = new Color(0.2f, 0.9f, 1f, 0.9f);
    private static readonly Color EmptyCellColor = new Color(0.2f, 0.9f, 1f, 0.08f);
    private static readonly Color StartStackColor = new Color(1f, 0.72f, 0.1f, 0.35f);
    private static readonly Color SelectedCellColor = new Color(0.2f, 1f, 0.35f, 0.5f);
    private static readonly Color TutorialCellColor = new Color(1f, 0.2f, 0.9f, 0.45f);
    private static readonly Color TrayColor = new Color(0.3f, 1f, 0.45f, 0.95f);

    private SerializedProperty hexCellPrefab;
    private SerializedProperty hexPiecePrefab;
    private SerializedProperty hexColorConfig;
    private SerializedProperty gameCamera;
    private SerializedProperty levelDatabase;
    private SerializedProperty fallbackLevelConfig;
    private SerializedProperty levelHudView;
    private SerializedProperty goalsPanelView;
    private SerializedProperty winScreenView;
    private SerializedProperty loseScreenView;
    private SerializedProperty levelTransitionView;
    private SerializedProperty boardRadius;
    private SerializedProperty boardPosition;
    private SerializedProperty trayPosition;
    private SerializedProperty tutorialTargetCell;
    private SerializedProperty startingBoardStacks;
    private SerializedProperty trayStacks;
    private SerializedProperty configureCameraOnStart;
    private SerializedProperty cameraPosition;
    private SerializedProperty cameraEulerAngles;
    private SerializedProperty orthographicSize;
    private SerializedProperty cellHighlight;

    private Vector2Int selectedCell;
    private bool hasSelectedCell;
    private bool showAssets = true;
    private bool showControllers = true;
    private bool showLevel = true;
    private bool showCamera = false;
    private bool showHighlight = true;
    private bool showRawLists = true;

    private void OnEnable()
    {
        hexCellPrefab = serializedObject.FindProperty("hexCellPrefab");
        hexPiecePrefab = serializedObject.FindProperty("hexPiecePrefab");
        hexColorConfig = serializedObject.FindProperty("hexColorConfig");
        gameCamera = serializedObject.FindProperty("gameCamera");
        levelDatabase = serializedObject.FindProperty("levelDatabase");
        fallbackLevelConfig = serializedObject.FindProperty("fallbackLevelConfig");
        levelHudView = serializedObject.FindProperty("levelHudView");
        goalsPanelView = serializedObject.FindProperty("goalsPanelView");
        winScreenView = serializedObject.FindProperty("winScreenView");
        loseScreenView = serializedObject.FindProperty("loseScreenView");
        levelTransitionView = serializedObject.FindProperty("levelTransitionView");
        boardRadius = serializedObject.FindProperty("boardRadius");
        boardPosition = serializedObject.FindProperty("boardPosition");
        trayPosition = serializedObject.FindProperty("trayPosition");
        tutorialTargetCell = serializedObject.FindProperty("tutorialTargetCell");
        startingBoardStacks = serializedObject.FindProperty("startingBoardStacks");
        trayStacks = serializedObject.FindProperty("trayStacks");
        configureCameraOnStart = serializedObject.FindProperty("configureCameraOnStart");
        cameraPosition = serializedObject.FindProperty("cameraPosition");
        cameraEulerAngles = serializedObject.FindProperty("cameraEulerAngles");
        orthographicSize = serializedObject.FindProperty("orthographicSize");
        cellHighlight = serializedObject.FindProperty("cellHighlight");
    }

    public override void OnInspectorGUI()
    {
        serializedObject.Update();

        DrawToolbar();
        DrawSelectedCellPanel();
        DrawAssetsSection();
        DrawLevelSourcesSection();
        DrawUiSection();
        DrawControllersSection();
        DrawLevelSection();
        DrawHighlightSection();
        DrawCameraSection();

        serializedObject.ApplyModifiedProperties();
    }

    private void OnSceneGUI()
    {
        serializedObject.Update();
        DrawBoardSceneGui();
        DrawTraySceneGui();
        serializedObject.ApplyModifiedProperties();
    }

    private void DrawToolbar()
    {
        EditorGUILayout.Space(4f);
        using (new EditorGUILayout.HorizontalScope())
        {
            if (GUILayout.Button("Setup Scene Objects"))
            {
                foreach (Object targetObject in targets)
                {
                    Main main = (Main)targetObject;
                    main.SetupSceneObjects();
                    EditorUtility.SetDirty(main);
                }
                serializedObject.Update();
            }

            if (GUILayout.Button("Frame Board"))
            {
                SceneView.lastActiveSceneView?.Frame(new Bounds(boardPosition.vector3Value, Vector3.one * Mathf.Max(4f, boardRadius.intValue * 3f)), false);
            }
        }
        if (GUILayout.Button("Open Hex Grid Shape Editor"))
        {
            HexGridShapeEditorWindow.Open((Main)target);
        }
        EditorGUILayout.Space(4f);
    }

    private void DrawSelectedCellPanel()
    {
        EditorGUILayout.LabelField("Scene Cell Editing", EditorStyles.boldLabel);
        EditorGUILayout.HelpBox("Click a cell in Scene View to select it. Use buttons below to edit start stacks or tutorial target.", MessageType.Info);

        using (new EditorGUI.DisabledScope(!hasSelectedCell))
        {
            EditorGUILayout.LabelField("Selected Cell", hasSelectedCell ? selectedCell.ToString() : "None");
            using (new EditorGUILayout.HorizontalScope())
            {
                if (GUILayout.Button("Add/Update Start Stack"))
                {
                    AddOrUpdateStartStack(selectedCell);
                }
                if (GUILayout.Button("Remove Start Stack"))
                {
                    RemoveStartStack(selectedCell);
                }
                if (GUILayout.Button("Set Tutorial Target"))
                {
                    tutorialTargetCell.vector2IntValue = selectedCell;
                }
            }

            DrawSelectedStackEditor();
        }
        EditorGUILayout.Space(6f);
    }

    private void DrawAssetsSection()
    {
        showAssets = EditorGUILayout.Foldout(showAssets, "Assets", true);
        if (!showAssets)
        {
            return;
        }

        EditorGUILayout.PropertyField(hexCellPrefab);
        EditorGUILayout.PropertyField(hexPiecePrefab);
        EditorGUILayout.PropertyField(hexColorConfig);
        EditorGUILayout.PropertyField(gameCamera);
        EditorGUILayout.Space(4f);
    }

    private void DrawLevelSourcesSection()
    {
        EditorGUILayout.LabelField("Level Sources", EditorStyles.boldLabel);
        EditorGUILayout.PropertyField(levelDatabase);
        EditorGUILayout.PropertyField(fallbackLevelConfig);
        if (levelDatabase.objectReferenceValue == null && fallbackLevelConfig.objectReferenceValue == null)
        {
            EditorGUILayout.HelpBox("No LevelDatabase or fallback LevelConfig is assigned. Runtime will build a temporary level from Legacy Fallback Level fields.", MessageType.Info);
        }
        EditorGUILayout.Space(4f);
    }

    private void DrawUiSection()
    {
        EditorGUILayout.LabelField("Injected UI Views", EditorStyles.boldLabel);
        EditorGUILayout.PropertyField(levelHudView);
        EditorGUILayout.PropertyField(goalsPanelView);
        EditorGUILayout.PropertyField(winScreenView);
        EditorGUILayout.PropertyField(loseScreenView);
        EditorGUILayout.PropertyField(levelTransitionView);
        if (winScreenView.objectReferenceValue == null || loseScreenView.objectReferenceValue == null)
        {
            EditorGUILayout.HelpBox("Win/Lose screens are optional references, but full-game result buttons require scene or prefab UI view instances assigned here.", MessageType.Warning);
        }
        EditorGUILayout.Space(4f);
    }

    private void DrawControllersSection()
    {
        showControllers = EditorGUILayout.Foldout(showControllers, "Scene Controllers", true);
        if (!showControllers)
        {
            return;
        }

        Main main = (Main)target;
        EditorGUILayout.HelpBox("Runtime controllers are resolved by Main and injected through the local DI container. They are intentionally not assigned through the Inspector.", MessageType.None);
        DrawControllerStatus("BoardController", main.FindSceneComponent<BoardController>());
        DrawControllerStatus("StackTrayController", main.FindSceneComponent<StackTrayController>());
        DrawControllerStatus("DragController", main.FindSceneComponent<DragController>());
        DrawControllerStatus("MergeAnimator", main.FindSceneComponent<MergeAnimator>());
        DrawControllerStatus("MergeSystem", main.FindSceneComponent<MergeSystem>());
        DrawControllerStatus("SoundPlayer", main.FindSceneComponent<SoundPlayer>());
        DrawControllerStatus("EnemyCatalog", main.FindSceneComponent<EnemyCatalog>());
        DrawControllerStatus("EnemySpawner", main.FindSceneComponent<EnemySpawner>());
        DrawControllerStatus("TutorialHandController", main.FindSceneComponent<TutorialHandController>());
        DrawControllerStatus("PackshotController", main.FindSceneComponent<PackshotController>());
        DrawControllerStatus("LevelFlowController", main.FindSceneComponent<LevelFlowController>());
        DrawControllerStatus("LevelHudView", main.FindSceneComponent<LevelHudView>());
        DrawControllerStatus("GoalsPanelView", main.FindSceneComponent<GoalsPanelView>());
        DrawControllerStatus("WinScreenView", main.FindSceneComponent<WinScreenView>());
        DrawControllerStatus("LoseScreenView", main.FindSceneComponent<LoseScreenView>());
        EditorGUILayout.Space(4f);
    }

    private static void DrawControllerStatus(string label, Component component)
    {
        using (new EditorGUI.DisabledScope(true))
        {
            EditorGUILayout.ObjectField(label, component, typeof(Component), true);
        }
    }

    private void DrawLevelSection()
    {
        showLevel = EditorGUILayout.Foldout(showLevel, "Legacy Fallback Level Layout", true);
        if (!showLevel)
        {
            return;
        }

        EditorGUILayout.HelpBox("These fields are a compatibility fallback. Author full-game levels in LevelConfig assets and assign them through LevelDatabase.", MessageType.None);

        EditorGUILayout.PropertyField(boardRadius);
        EditorGUILayout.PropertyField(boardPosition);
        EditorGUILayout.PropertyField(trayPosition);
        EditorGUILayout.PropertyField(tutorialTargetCell);

        EditorGUILayout.Space(4f);
        EditorGUILayout.LabelField("Board Fill Tools", EditorStyles.boldLabel);
        using (new EditorGUILayout.HorizontalScope())
        {
            if (GUILayout.Button("Generate Playable Layout"))
            {
                GeneratePlayableLayout();
            }
            if (GUILayout.Button("Fill Every Cell"))
            {
                FillEveryCell();
            }
            if (GUILayout.Button("Clear Board"))
            {
                startingBoardStacks.ClearArray();
            }
        }

        using (new EditorGUILayout.HorizontalScope())
        {
            if (GUILayout.Button("Generate Tray"))
            {
                GenerateTrayStacks();
            }
            if (GUILayout.Button("Clear Tray"))
            {
                trayStacks.ClearArray();
            }
        }

        showRawLists = EditorGUILayout.Foldout(showRawLists, "Stacks Data", true);
        if (showRawLists)
        {
            EditorGUILayout.PropertyField(startingBoardStacks, true);
            EditorGUILayout.PropertyField(trayStacks, true);
        }

        EditorGUILayout.Space(4f);
    }

    private void DrawCameraSection()
    {
        showCamera = EditorGUILayout.Foldout(showCamera, "Camera Defaults", true);
        if (!showCamera)
        {
            return;
        }

        EditorGUILayout.PropertyField(configureCameraOnStart);
        EditorGUILayout.PropertyField(cameraPosition);
        EditorGUILayout.PropertyField(cameraEulerAngles);
        EditorGUILayout.PropertyField(orthographicSize);
        EditorGUILayout.Space(4f);
    }

    private void DrawHighlightSection()
    {
        showHighlight = EditorGUILayout.Foldout(showHighlight, "Cell Highlight", true);
        if (!showHighlight)
        {
            return;
        }

        SerializedProperty useMaterialTint = cellHighlight.FindPropertyRelative("useMaterialTint");
        SerializedProperty useOutline = cellHighlight.FindPropertyRelative("useOutline");
        SerializedProperty validColor = cellHighlight.FindPropertyRelative("validColor");
        SerializedProperty outlineMaterial = cellHighlight.FindPropertyRelative("outlineMaterial");
        SerializedProperty outlineLineWidth = cellHighlight.FindPropertyRelative("outlineLineWidth");
        SerializedProperty outlineVerticalOffset = cellHighlight.FindPropertyRelative("outlineVerticalOffset");
        SerializedProperty outlineRadiusMultiplier = cellHighlight.FindPropertyRelative("outlineRadiusMultiplier");

        EditorGUILayout.PropertyField(useMaterialTint);
        EditorGUILayout.PropertyField(useOutline);
        EditorGUILayout.PropertyField(validColor, new GUIContent("Highlight Color"));
        EditorGUILayout.PropertyField(outlineMaterial);
        EditorGUILayout.PropertyField(outlineLineWidth);
        EditorGUILayout.PropertyField(outlineVerticalOffset);
        EditorGUILayout.PropertyField(outlineRadiusMultiplier);
        EditorGUILayout.Space(4f);
    }

    private void DrawBoardSceneGui()
    {
        int radius = Mathf.Max(0, boardRadius.intValue);
        Vector3 origin = boardPosition.vector3Value;
        float cellSize = GetSceneCellSize();
        HexGridGenerator.BoardShape shape = GetSceneShape();
        HexGridGenerator.HexOrientation orientation = GetSceneOrientation();
        Vector2Int tutorialTarget = tutorialTargetCell.vector2IntValue;
        HexGridGenerator generator = GetSceneGridGenerator();

        Handles.zTest = UnityEngine.Rendering.CompareFunction.Always;
        foreach (Vector2Int coordinate in GetSceneCoordinates(radius, shape))
        {
            Vector3 center = origin + (generator != null && generator.Shape == HexGridGenerator.BoardShape.Custom
                ? generator.CoordinateToWorld(coordinate)
                : CoordinateToWorld(coordinate, cellSize, shape, orientation));
            bool hasStack = FindStartStackIndex(coordinate) >= 0;
            bool isSelected = hasSelectedCell && selectedCell == coordinate;
            bool isTutorial = tutorialTarget == coordinate;

            Color fill = EmptyCellColor;
            if (hasStack)
            {
                fill = StartStackColor;
            }
            if (isTutorial)
            {
                fill = TutorialCellColor;
            }
            if (isSelected)
            {
                fill = SelectedCellColor;
            }

            DrawHex(center, cellSize, orientation, fill, BoardLineColor);
            DrawCellButton(center, coordinate, cellSize);
            DrawCellLabel(center, coordinate, hasStack, isTutorial);
        }
    }

    private void DrawTraySceneGui()
    {
        Vector3 trayOrigin = trayPosition.vector3Value;
        int count = Mathf.Max(0, trayStacks.arraySize);
        float spacing = 1.75f;
        StackTrayController tray = ((Main)target).FindSceneComponent<StackTrayController>();
        if (tray != null)
        {
            SerializedObject trayObject = new SerializedObject(tray);
            SerializedProperty spacingProperty = trayObject.FindProperty("spacing");
            if (spacingProperty != null)
            {
                spacing = spacingProperty.floatValue;
            }
        }

        Handles.color = TrayColor;
        Handles.DrawWireCube(trayOrigin, new Vector3(Mathf.Max(1f, count) * spacing + 0.75f, 0.1f, 1.3f));
        Handles.Label(trayOrigin + Vector3.forward * 0.8f, "TRAY / draggable stacks");

        float startX = (count - 1) * spacing * -0.5f;
        for (int i = 0; i < count; i++)
        {
            Vector3 position = trayOrigin + new Vector3(startX + i * spacing, 0f, 0f);
            Handles.color = TrayColor;
            Handles.DrawWireDisc(position, Vector3.up, 0.45f);
            Handles.Label(position + Vector3.up * 0.25f, "Tray " + i + "\n" + StackSummary(trayStacks.GetArrayElementAtIndex(i).FindPropertyRelative("colorsBottomToTop")));
        }
    }

    private void DrawHex(Vector3 center, float size, HexGridGenerator.HexOrientation orientation, Color fill, Color outline)
    {
        Vector3[] points = GetHexPoints(center, size, orientation);
        Handles.DrawSolidRectangleWithOutline(points, fill, outline);
    }

    private void DrawCellButton(Vector3 center, Vector2Int coordinate, float size)
    {
        float handleSize = HandleUtility.GetHandleSize(center) * 0.08f;
        if (Handles.Button(center + Vector3.up * 0.04f, Quaternion.identity, handleSize, handleSize * 1.4f, Handles.SphereHandleCap))
        {
            hasSelectedCell = true;
            selectedCell = coordinate;
            Repaint();
        }
    }

    private void DrawCellLabel(Vector3 center, Vector2Int coordinate, bool hasStack, bool isTutorial)
    {
        string text = coordinate.x + "," + coordinate.y;
        if (hasStack)
        {
            int index = FindStartStackIndex(coordinate);
            SerializedProperty stackProperty = GetBoardStackColorsProperty(startingBoardStacks.GetArrayElementAtIndex(index));
            text += "\nStart: " + StackSummary(stackProperty);
        }
        if (isTutorial)
        {
            text += "\nTutorial";
        }

        Handles.Label(center + Vector3.up * 0.08f, text);
    }

    private Vector3[] GetHexPoints(Vector3 center, float size, HexGridGenerator.HexOrientation orientation)
    {
        Vector3[] points = new Vector3[6];
        float angleOffset = orientation == HexGridGenerator.HexOrientation.FlatTop ? 0f : 30f;
        for (int i = 0; i < points.Length; i++)
        {
            float angle = Mathf.Deg2Rad * (60f * i + angleOffset);
            points[i] = center + new Vector3(Mathf.Cos(angle) * size, 0f, Mathf.Sin(angle) * size);
        }
        return points;
    }

    private static List<Vector2Int> GenerateCoordinates(int radius, HexGridGenerator.BoardShape shape)
    {
        if (shape == HexGridGenerator.BoardShape.Custom)
        {
            return GenerateSquareCoordinates(radius);
        }

        return shape == HexGridGenerator.BoardShape.Square ? GenerateSquareCoordinates(radius) : GenerateHexagonCoordinates(radius);
    }

    private static List<Vector2Int> GenerateSquareCoordinates(int radius)
    {
        List<Vector2Int> coordinates = new List<Vector2Int>();
        for (int x = -radius; x <= radius; x++)
        {
            for (int y = -radius; y <= radius; y++)
            {
                coordinates.Add(new Vector2Int(x, y));
            }
        }
        return coordinates;
    }

    private static List<Vector2Int> GenerateHexagonCoordinates(int radius)
    {
        List<Vector2Int> coordinates = new List<Vector2Int>();
        for (int q = -radius; q <= radius; q++)
        {
            int r1 = Mathf.Max(-radius, -q - radius);
            int r2 = Mathf.Min(radius, -q + radius);
            for (int r = r1; r <= r2; r++)
            {
                coordinates.Add(new Vector2Int(q, r));
            }
        }
        return coordinates;
    }

    private static Vector3 CoordinateToWorld(Vector2Int coordinate, float cellSize, HexGridGenerator.BoardShape shape, HexGridGenerator.HexOrientation orientation)
    {
        if (shape == HexGridGenerator.BoardShape.Square || shape == HexGridGenerator.BoardShape.Custom)
        {
            if (orientation == HexGridGenerator.HexOrientation.FlatTop)
            {
                int parity = PositiveModulo(coordinate.x, 2);
                float x = cellSize * 1.5f * coordinate.x;
                float z = cellSize * Mathf.Sqrt(3f) * (coordinate.y + parity * 0.5f);
                return new Vector3(x, 0f, z);
            }

            int rowParity = PositiveModulo(coordinate.y, 2);
            float pointyOffsetX = cellSize * Mathf.Sqrt(3f) * (coordinate.x + rowParity * 0.5f);
            float pointyOffsetZ = cellSize * 1.5f * coordinate.y;
            return new Vector3(pointyOffsetX, 0f, pointyOffsetZ);
        }

        if (orientation == HexGridGenerator.HexOrientation.FlatTop)
        {
            float x = cellSize * 1.5f * coordinate.x;
            float z = cellSize * Mathf.Sqrt(3f) * (coordinate.y + coordinate.x * 0.5f);
            return new Vector3(x, 0f, z);
        }

        float pointyX = cellSize * Mathf.Sqrt(3f) * (coordinate.x + coordinate.y * 0.5f);
        float pointyZ = cellSize * 1.5f * coordinate.y;
        return new Vector3(pointyX, 0f, pointyZ);
    }

    private float GetSceneCellSize()
    {
        HexGridGenerator generator = GetSceneGridGenerator();
        return generator != null ? generator.CellSize : DefaultCellSize;
    }

    private HexGridGenerator.BoardShape GetSceneShape()
    {
        HexGridGenerator generator = GetSceneGridGenerator();
        return generator != null ? generator.Shape : HexGridGenerator.BoardShape.Square;
    }

    private HexGridGenerator.HexOrientation GetSceneOrientation()
    {
        HexGridGenerator generator = GetSceneGridGenerator();
        return generator != null ? generator.Orientation : HexGridGenerator.HexOrientation.FlatTop;
    }

    private HexGridGenerator GetSceneGridGenerator()
    {
        BoardController board = ((Main)target).FindSceneComponent<BoardController>();
        return board != null ? board.GetComponent<HexGridGenerator>() : null;
    }

    private List<Vector2Int> GetSceneCoordinates(int radius, HexGridGenerator.BoardShape shape)
    {
        HexGridGenerator generator = GetSceneGridGenerator();
        if (generator != null && generator.Shape == HexGridGenerator.BoardShape.Custom)
        {
            return generator.GenerateCoordinates();
        }

        return GenerateCoordinates(radius, shape);
    }

    private static int PositiveModulo(int value, int modulo)
    {
        return (value % modulo + modulo) % modulo;
    }

    private int FindStartStackIndex(Vector2Int coordinate)
    {
        for (int i = 0; i < startingBoardStacks.arraySize; i++)
        {
            SerializedProperty item = startingBoardStacks.GetArrayElementAtIndex(i);
            if (item.FindPropertyRelative("coordinate").vector2IntValue == coordinate)
            {
                return i;
            }
        }
        return -1;
    }

    private void DrawSelectedStackEditor()
    {
        int index = FindStartStackIndex(selectedCell);
        if (index < 0)
        {
            EditorGUILayout.HelpBox("Selected cell has no start stack. Add one to edit colors.", MessageType.None);
            return;
        }

        SerializedProperty item = startingBoardStacks.GetArrayElementAtIndex(index);
        SerializedProperty colors = GetBoardStackColorsProperty(item);
        EditorGUILayout.Space(4f);
        EditorGUILayout.LabelField("Selected Stack", StackSummary(colors));

        if (colors != null)
        {
            EditorGUILayout.PropertyField(colors, new GUIContent("Colors Bottom To Top"), true);
        }

        EditorGUILayout.LabelField("Add Color On Top");
        using (new EditorGUILayout.HorizontalScope())
        {
            foreach (HexColor color in System.Enum.GetValues(typeof(HexColor)))
            {
                if (GUILayout.Button(color.ToString()[0].ToString()))
                {
                    AddColorToStack(colors, color);
                }
            }
        }

        using (new EditorGUILayout.HorizontalScope())
        {
            if (GUILayout.Button("Remove Top"))
            {
                RemoveTopColor(colors);
            }
            if (GUILayout.Button("Clear Stack"))
            {
                colors?.ClearArray();
            }
        }
    }

    private void AddOrUpdateStartStack(Vector2Int coordinate)
    {
        int index = FindStartStackIndex(coordinate);
        bool created = false;
        if (index < 0)
        {
            startingBoardStacks.InsertArrayElementAtIndex(startingBoardStacks.arraySize);
            index = startingBoardStacks.arraySize - 1;
            created = true;
        }

        SerializedProperty item = startingBoardStacks.GetArrayElementAtIndex(index);
        item.FindPropertyRelative("coordinate").vector2IntValue = coordinate;
        SerializedProperty colors = GetBoardStackColorsProperty(item);
        if (created && colors != null)
        {
            colors.ClearArray();
        }
        if (colors != null && colors.arraySize == 0)
        {
            colors.InsertArrayElementAtIndex(0);
            colors.GetArrayElementAtIndex(0).enumValueIndex = (int)HexColor.Red;
        }
    }

    private void GeneratePlayableLayout()
    {
        startingBoardStacks.ClearArray();
        int radius = Mathf.Max(0, boardRadius.intValue);
        HexGridGenerator.BoardShape shape = GetSceneShape();
        List<Vector2Int> coordinates = GetSceneCoordinates(radius, shape);
        HashSet<Vector2Int> emptyCells = new HashSet<Vector2Int>
        {
            tutorialTargetCell.vector2IntValue,
            new Vector2Int(-radius, -radius),
            new Vector2Int(radius, radius)
        };

        foreach (Vector2Int coordinate in coordinates)
        {
            if (emptyCells.Contains(coordinate))
            {
                continue;
            }

            HexColor top = PickTopColorForCoordinate(coordinate);
            AddGeneratedBoardStack(coordinate, CreateGeneratedColors(coordinate, top));
        }

        EnsureMergeSetupAroundTutorialTarget();
        GenerateTrayStacks();
    }

    private void FillEveryCell()
    {
        startingBoardStacks.ClearArray();
        int radius = Mathf.Max(0, boardRadius.intValue);
        HexGridGenerator.BoardShape shape = GetSceneShape();
        foreach (Vector2Int coordinate in GetSceneCoordinates(radius, shape))
        {
            HexColor top = PickTopColorForCoordinate(coordinate);
            AddGeneratedBoardStack(coordinate, CreateGeneratedColors(coordinate, top));
        }
    }

    private void GenerateTrayStacks()
    {
        trayStacks.ClearArray();
        AddGeneratedTrayStack(HexColor.Blue, HexColor.Red);
        AddGeneratedTrayStack(HexColor.Yellow, HexColor.Blue);
        AddGeneratedTrayStack(HexColor.Purple, HexColor.Green);
    }

    private void EnsureMergeSetupAroundTutorialTarget()
    {
        Vector2Int target = tutorialTargetCell.vector2IntValue;
        Vector2Int right = target + new Vector2Int(1, 0);
        Vector2Int left = target + new Vector2Int(-1, 0);

        RemoveStartStack(target);
        AddGeneratedBoardStack(right, new[] { HexColor.Yellow, HexColor.Red, HexColor.Red, HexColor.Red });
        AddGeneratedBoardStack(left, new[] { HexColor.Blue, HexColor.Blue, HexColor.Red, HexColor.Red });
    }

    private void AddGeneratedBoardStack(Vector2Int coordinate, IReadOnlyList<HexColor> colors)
    {
        if (!IsCoordinateOnBoard(coordinate))
        {
            return;
        }

        int index = FindStartStackIndex(coordinate);
        if (index < 0)
        {
            startingBoardStacks.InsertArrayElementAtIndex(startingBoardStacks.arraySize);
            index = startingBoardStacks.arraySize - 1;
        }

        SerializedProperty item = startingBoardStacks.GetArrayElementAtIndex(index);
        item.FindPropertyRelative("coordinate").vector2IntValue = coordinate;
        SerializedProperty stackColors = GetBoardStackColorsProperty(item);
        SetColors(stackColors, colors);
    }

    private bool IsCoordinateOnBoard(Vector2Int coordinate)
    {
        int radius = Mathf.Max(0, boardRadius.intValue);
        HexGridGenerator.BoardShape shape = GetSceneShape();
        return GetSceneCoordinates(radius, shape).Contains(coordinate);
    }

    private void AddGeneratedTrayStack(params HexColor[] colors)
    {
        trayStacks.InsertArrayElementAtIndex(trayStacks.arraySize);
        SerializedProperty item = trayStacks.GetArrayElementAtIndex(trayStacks.arraySize - 1);
        SetColors(item.FindPropertyRelative("colorsBottomToTop"), colors);
    }

    private static HexColor PickTopColorForCoordinate(Vector2Int coordinate)
    {
        HexColor[] palette =
        {
            HexColor.Red,
            HexColor.Blue,
            HexColor.Green,
            HexColor.Yellow,
            HexColor.Purple,
            HexColor.Orange
        };
        int index = PositiveModulo(coordinate.x * 3 + coordinate.y * 5, palette.Length);
        return palette[index];
    }

    private static HexColor[] CreateGeneratedColors(Vector2Int coordinate, HexColor top)
    {
        HexColor[] palette =
        {
            HexColor.Red,
            HexColor.Blue,
            HexColor.Green,
            HexColor.Yellow,
            HexColor.Purple,
            HexColor.Orange
        };
        HexColor bottom = palette[PositiveModulo(coordinate.x + coordinate.y * 2, palette.Length)];
        HexColor middle = palette[PositiveModulo(coordinate.x * 2 - coordinate.y, palette.Length)];
        return new[] { bottom, middle, top };
    }

    private static void SetColors(SerializedProperty colorsProperty, IReadOnlyList<HexColor> colors)
    {
        if (colorsProperty == null)
        {
            return;
        }

        colorsProperty.ClearArray();
        for (int i = 0; i < colors.Count; i++)
        {
            colorsProperty.InsertArrayElementAtIndex(i);
            colorsProperty.GetArrayElementAtIndex(i).enumValueIndex = (int)colors[i];
        }
    }

    private static void AddColorToStack(SerializedProperty colors, HexColor color)
    {
        if (colors == null)
        {
            return;
        }

        colors.InsertArrayElementAtIndex(colors.arraySize);
        colors.GetArrayElementAtIndex(colors.arraySize - 1).enumValueIndex = (int)color;
    }

    private static void RemoveTopColor(SerializedProperty colors)
    {
        if (colors != null && colors.arraySize > 0)
        {
            colors.DeleteArrayElementAtIndex(colors.arraySize - 1);
        }
    }

    private void RemoveStartStack(Vector2Int coordinate)
    {
        int index = FindStartStackIndex(coordinate);
        if (index >= 0)
        {
            startingBoardStacks.DeleteArrayElementAtIndex(index);
        }
    }

    private static string StackSummary(SerializedProperty colors)
    {
        if (colors == null || colors.arraySize == 0)
        {
            return "empty";
        }

        List<string> names = new List<string>();
        for (int i = 0; i < colors.arraySize; i++)
        {
            names.Add(((HexColor)colors.GetArrayElementAtIndex(i).enumValueIndex).ToString()[0].ToString());
        }
        return string.Join("", names);
    }

    private static SerializedProperty GetBoardStackColorsProperty(SerializedProperty boardStack)
    {
        SerializedProperty stack = boardStack.FindPropertyRelative("stack");
        return stack != null ? stack.FindPropertyRelative("colorsBottomToTop") : null;
    }
}
