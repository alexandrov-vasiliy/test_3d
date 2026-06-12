using System.Collections.Generic;
using _Game.Board;
using _Game.Configs;
using _Game.Stacks;
using UnityEditor;
using UnityEngine;

/// <summary>
/// Provides a HexGridShape-style editor for LevelConfig assets, including board shape, starting stacks, enemy placement, initial hand, and goals.
/// </summary>
public class LevelConfigHexGridEditorWindow : EditorWindow
{
    private enum EditMode
    {
        Shape,
        StartStacks,
        Enemies,
        InitialHand,
        Goals
    }

    private enum ShapeBrush
    {
        Toggle,
        Add,
        Erase,
        Select
    }

    private const float HexPixelRadius = 28f;
    private const float CanvasPadding = 44f;
    private const float MinCanvasHeight = 320f;
    private const float StackChipSize = 18f;
    private const float StackCardHeight = 58f;

    private static readonly Color ActiveCellColor = new Color(0.18f, 0.72f, 0.9f, 1f);
    private static readonly Color InactiveCellColor = new Color(0.3f, 0.3f, 0.3f, 1f);
    private static readonly Color StartCellColor = new Color(1f, 0.66f, 0.16f, 1f);
    private static readonly Color EnemyCellColor = new Color(0.92f, 0.2f, 0.18f, 1f);
    private static readonly Color ConflictCellColor = new Color(1f, 0.08f, 0.08f, 1f);
    private static readonly Color SelectedCellColor = new Color(0.35f, 1f, 0.45f, 1f);
    private static readonly Color TutorialCellColor = new Color(1f, 0.35f, 0.95f, 1f);

    private LevelConfig levelConfig;
    private SerializedObject levelObject;
    private SerializedProperty levelId;
    private SerializedProperty levelNumber;
    private SerializedProperty displayName;
    private SerializedProperty boardRadius;
    private SerializedProperty boardShape;
    private SerializedProperty customBaseShape;
    private SerializedProperty orientation;
    private SerializedProperty customCoordinates;
    private SerializedProperty startingBoardStacks;
    private SerializedProperty enemies;
    private SerializedProperty initialHandStacks;
    private SerializedProperty handGeneration;
    private SerializedProperty goals;
    private SerializedProperty loseRules;
    private SerializedProperty tutorialTargetCell;

    private Vector2 scroll;
    private Vector2 windowScroll;
    private Vector2Int selectedCell;
    private bool hasSelectedCell;
    private EditMode editMode;
    private ShapeBrush shapeBrush;
    private bool showAdvancedSettings;
    private bool showRawStartStacks;
    private bool showRawEnemies;
    private bool showRawHandStacks;
    private bool showRawGoals;
    private int selectedHandStackIndex = -1;
    private int selectedEnemyIndex = -1;
    private string enemyBrushId = "basic";

    [MenuItem("Tools/Hex Level Config Editor")]
    public static void Open()
    {
        Open(Selection.activeObject as LevelConfig);
    }

    public static void Open(LevelConfig config)
    {
        LevelConfigHexGridEditorWindow window = GetWindow<LevelConfigHexGridEditorWindow>("Hex Level Config");
        window.minSize = new Vector2(680f, 560f);
        window.levelConfig = config;
        window.RefreshTarget();
        window.Show();
    }

    private void OnEnable()
    {
        if (levelConfig == null)
        {
            levelConfig = Selection.activeObject as LevelConfig;
        }
        RefreshTarget();
    }

    private void OnSelectionChange()
    {
        LevelConfig selectedConfig = Selection.activeObject as LevelConfig;
        if (selectedConfig != null && selectedConfig != levelConfig)
        {
            levelConfig = selectedConfig;
            RefreshTarget();
            Repaint();
        }
    }

    private void OnGUI()
    {
        DrawTargetSection();
        if (levelConfig == null || levelObject == null)
        {
            EditorGUILayout.HelpBox("Assign a LevelConfig asset to edit its board, stacks, hand, and goals.", MessageType.Warning);
            return;
        }

        levelObject.Update();
        windowScroll = EditorGUILayout.BeginScrollView(windowScroll);
        DrawHeader();
        DrawModeTabs();
        DrawIdentityAndBoardSettings();
        levelObject.ApplyModifiedProperties();
        levelObject.Update();

        DrawContextTools();
        DrawLegendAndStats();
        if (editMode == EditMode.InitialHand)
        {
            DrawInitialHandEditor();
        }
        else if (editMode == EditMode.Goals)
        {
            DrawGoalsEditor();
        }
        else
        {
            DrawGridEditor();
            DrawSelectedCellEditor();
        }

        if (showRawStartStacks && startingBoardStacks != null)
        {
            EditorGUILayout.Space(4f);
            EditorGUILayout.PropertyField(startingBoardStacks, true);
        }
        if (showRawEnemies && enemies != null)
        {
            EditorGUILayout.Space(4f);
            EditorGUILayout.PropertyField(enemies, true);
        }
        if (showRawHandStacks && initialHandStacks != null)
        {
            EditorGUILayout.Space(4f);
            EditorGUILayout.PropertyField(initialHandStacks, true);
        }
        if (showRawGoals && goals != null)
        {
            EditorGUILayout.Space(4f);
            EditorGUILayout.PropertyField(goals, true);
        }

        EditorGUILayout.EndScrollView();
        levelObject.ApplyModifiedProperties();
    }

    private void DrawTargetSection()
    {
        using (new EditorGUILayout.VerticalScope(EditorStyles.helpBox))
        {
            EditorGUI.BeginChangeCheck();
            levelConfig = (LevelConfig)EditorGUILayout.ObjectField("Level Config", levelConfig, typeof(LevelConfig), false);
            if (EditorGUI.EndChangeCheck())
            {
                RefreshTarget();
            }

            if (levelConfig != null)
            {
                using (new EditorGUILayout.HorizontalScope())
                {
                    if (GUILayout.Button("Select Asset"))
                    {
                        Selection.activeObject = levelConfig;
                        EditorGUIUtility.PingObject(levelConfig);
                    }
                    if (GUILayout.Button("Save Asset"))
                    {
                        EditorUtility.SetDirty(levelConfig);
                        AssetDatabase.SaveAssets();
                    }
                }
            }
        }
    }

    private void DrawHeader()
    {
        EditorGUILayout.Space(2f);
        EditorGUILayout.LabelField("Level Config Layout", EditorStyles.boldLabel);
        EditorGUILayout.HelpBox("Edit the level asset directly. Shape, starts, enemies, hand, goals, and tutorial target are saved into LevelConfig, not into Main or scene objects.", MessageType.None);
        using (new EditorGUILayout.HorizontalScope())
        {
            DrawWorkflowStep("1", "Shape", "Choose active cells.", editMode == EditMode.Shape);
            DrawWorkflowStep("2", "Board Starts", "Place stacks on cells.", editMode == EditMode.StartStacks);
            DrawWorkflowStep("3", "Enemies", "Block cells with enemies.", editMode == EditMode.Enemies);
            DrawWorkflowStep("4", "Initial Hand", "Build first hand.", editMode == EditMode.InitialHand);
            DrawWorkflowStep("5", "Goals", "Set win targets.", editMode == EditMode.Goals);
        }
    }

    private void DrawModeTabs()
    {
        string[] modes = { "1. Shape", "2. Board Starts", "3. Enemies", "4. Initial Hand", "5. Goals" };
        editMode = (EditMode)GUILayout.Toolbar((int)editMode, modes, GUILayout.Height(28f));
        EditorGUILayout.Space(4f);
    }

    private void DrawWorkflowStep(string number, string title, string description, bool active)
    {
        Color previous = GUI.backgroundColor;
        GUI.backgroundColor = active ? SelectedCellColor : Color.white;
        using (new EditorGUILayout.VerticalScope(EditorStyles.helpBox, GUILayout.MinHeight(48f)))
        {
            GUI.backgroundColor = previous;
            EditorGUILayout.LabelField(number + ". " + title, EditorStyles.boldLabel);
            EditorGUILayout.LabelField(description, EditorStyles.miniLabel);
        }
        GUI.backgroundColor = previous;
    }

    private void DrawIdentityAndBoardSettings()
    {
        using (new EditorGUILayout.VerticalScope(EditorStyles.helpBox))
        {
            using (new EditorGUILayout.HorizontalScope())
            {
                EditorGUILayout.PropertyField(levelNumber, GUILayout.Width(160f));
                EditorGUILayout.PropertyField(levelId);
                EditorGUILayout.PropertyField(displayName);
            }

            using (new EditorGUILayout.HorizontalScope())
            {
                boardRadius.intValue = EditorGUILayout.IntSlider(new GUIContent("Edit Radius", "Visible edit area around coordinate 0,0."), Mathf.Max(0, boardRadius.intValue), 0, 8);
                if (GUILayout.Button("-", GUILayout.Width(28f)))
                {
                    boardRadius.intValue = Mathf.Max(0, boardRadius.intValue - 1);
                }
                if (GUILayout.Button("+", GUILayout.Width(28f)))
                {
                    boardRadius.intValue = Mathf.Min(20, boardRadius.intValue + 1);
                }
            }

            using (new EditorGUILayout.HorizontalScope())
            {
                EditorGUILayout.PropertyField(orientation);
                EditorGUILayout.PropertyField(boardShape, new GUIContent("Runtime Shape"));
            }

            showAdvancedSettings = EditorGUILayout.Foldout(showAdvancedSettings, "Advanced", true);
            if (showAdvancedSettings)
            {
                using (new EditorGUI.DisabledScope((HexGridGenerator.BoardShape)boardShape.enumValueIndex != HexGridGenerator.BoardShape.Custom))
                {
                    DrawCustomLayoutPopup();
                }
                EditorGUILayout.PropertyField(tutorialTargetCell);
                EditorGUILayout.PropertyField(handGeneration, true);
                EditorGUILayout.PropertyField(loseRules, true);
                showRawStartStacks = EditorGUILayout.Toggle("Show Raw Board Start Stacks", showRawStartStacks);
                showRawEnemies = EditorGUILayout.Toggle("Show Raw Enemies", showRawEnemies);
                showRawHandStacks = EditorGUILayout.Toggle("Show Raw Initial Hand", showRawHandStacks);
                showRawGoals = EditorGUILayout.Toggle("Show Raw Goals", showRawGoals);
            }
        }
    }

    private void DrawCustomLayoutPopup()
    {
        HexGridGenerator.BoardShape current = GetNonCustomShape((HexGridGenerator.BoardShape)customBaseShape.enumValueIndex);
        int selected = current == HexGridGenerator.BoardShape.Hexagon ? 1 : 0;
        int next = EditorGUILayout.Popup("Custom Layout", selected, new[] { "Square", "Hexagon" });
        customBaseShape.enumValueIndex = next == 1 ? (int)HexGridGenerator.BoardShape.Hexagon : (int)HexGridGenerator.BoardShape.Square;
    }

    private void DrawContextTools()
    {
        using (new EditorGUILayout.VerticalScope(EditorStyles.helpBox))
        {
            if (editMode == EditMode.Shape)
            {
                DrawShapeTools();
            }
            else if (editMode == EditMode.StartStacks)
            {
                DrawStartStackTools();
            }
            else if (editMode == EditMode.Enemies)
            {
                DrawEnemyTools();
            }
            else if (editMode == EditMode.InitialHand)
            {
                DrawInitialHandTools();
            }
            else
            {
                DrawGoalTools();
            }
        }
    }

    private void DrawShapeTools()
    {
        EditorGUILayout.LabelField("Shape Brush", EditorStyles.boldLabel);
        EditorGUILayout.HelpBox("Pick a brush, then click cells in the canvas. Presets replace the custom shape inside Edit Radius.", MessageType.None);
        shapeBrush = (ShapeBrush)GUILayout.Toolbar((int)shapeBrush, new[] { "Toggle", "Add", "Erase", "Select" }, GUILayout.Height(26f));

        using (new EditorGUILayout.HorizontalScope())
        {
            if (GUILayout.Button("Use Square Preset"))
            {
                SetCustomCoordinates(GenerateSquareCoordinates(boardRadius.intValue), HexGridGenerator.BoardShape.Square);
            }
            if (GUILayout.Button("Use Hex Preset"))
            {
                SetCustomCoordinates(GenerateHexagonCoordinates(boardRadius.intValue), HexGridGenerator.BoardShape.Hexagon);
            }
            if (GUILayout.Button("Invert Visible"))
            {
                InvertVisibleShape();
            }
            if (GUILayout.Button("Clear Shape"))
            {
                if (EditorUtility.DisplayDialog("Clear Shape", "Remove all custom cells, start stacks, and enemies outside the empty shape?", "Clear", "Cancel"))
                {
                    SetCustomCoordinates(new List<Vector2Int>(), GetPreviewShape());
                    RemoveStartStacksOutsideShape();
                    RemoveEnemiesOutsideShape();
                }
            }
        }
    }

    private void DrawStartStackTools()
    {
        EditorGUILayout.LabelField("Board Start Stack Tools", EditorStyles.boldLabel);
        EditorGUILayout.HelpBox("Click an active cell to select it. If it has no stack or enemy, Board Starts mode creates a red starter stack.", MessageType.None);
        using (new EditorGUILayout.HorizontalScope())
        {
            if (GUILayout.Button("Clean Stacks Outside Shape"))
            {
                Undo.RecordObject(levelConfig, "Remove Start Stacks Outside Shape");
                RemoveStartStacksOutsideShape();
                MarkDirty();
            }
            using (new EditorGUI.DisabledScope(!hasSelectedCell))
            {
                if (GUILayout.Button("Use Selected As Tutorial Target"))
                {
                    Undo.RecordObject(levelConfig, "Set Tutorial Target");
                    tutorialTargetCell.vector2IntValue = selectedCell;
                    MarkDirty();
                }
            }
        }
    }

    private void DrawEnemyTools()
    {
        EditorGUILayout.LabelField("Enemy Tools", EditorStyles.boldLabel);
        EditorGUILayout.HelpBox("Click an active empty cell to place or select an enemy. Enemy cells block stack placement at runtime.", MessageType.None);
        using (new EditorGUILayout.HorizontalScope())
        {
            enemyBrushId = EditorGUILayout.TextField("Enemy Id", string.IsNullOrEmpty(enemyBrushId) ? "basic" : enemyBrushId);
            using (new EditorGUI.DisabledScope(!hasSelectedCell || !CanPlaceEnemyAt(selectedCell)))
            {
                if (GUILayout.Button("Place On Selected", GUILayout.Width(130f)))
                {
                    Undo.RecordObject(levelConfig, "Place Enemy");
                    selectedEnemyIndex = AddOrUpdateEnemy(selectedCell, enemyBrushId);
                    MarkDirty();
                }
            }
        }

        using (new EditorGUILayout.HorizontalScope())
        {
            if (GUILayout.Button("Add DefeatAllEnemies Goal"))
            {
                Undo.RecordObject(levelConfig, "Add DefeatAllEnemies Goal");
                AddGoal(LevelGoalType.DefeatAllEnemies, "fire", 0);
                MarkDirty();
            }
            if (GUILayout.Button("Clean Enemies Outside Shape"))
            {
                Undo.RecordObject(levelConfig, "Remove Enemies Outside Shape");
                RemoveEnemiesOutsideShape();
                MarkDirty();
            }
            using (new EditorGUI.DisabledScope(enemies == null || enemies.arraySize == 0))
            {
                if (GUILayout.Button("Clear Enemies"))
                {
                    if (EditorUtility.DisplayDialog("Clear Enemies", "Remove every enemy from this level?", "Clear", "Cancel"))
                    {
                        Undo.RecordObject(levelConfig, "Clear Enemies");
                        enemies.ClearArray();
                        selectedEnemyIndex = -1;
                        MarkDirty();
                    }
                }
            }
        }
    }

    private void DrawInitialHandTools()
    {
        EditorGUILayout.LabelField("Initial Hand Tools", EditorStyles.boldLabel);
        EditorGUILayout.HelpBox("Edit predefined first hand stacks. If empty, runtime generation rules fill the hand.", MessageType.None);
        using (new EditorGUILayout.HorizontalScope())
        {
            if (GUILayout.Button("Add Stack"))
            {
                Undo.RecordObject(levelConfig, "Add Initial Hand Stack");
                selectedHandStackIndex = AddHandStack();
                MarkDirty();
            }
            using (new EditorGUI.DisabledScope(!HasSelectedHandStack()))
            {
                if (GUILayout.Button("Duplicate Selected"))
                {
                    Undo.RecordObject(levelConfig, "Duplicate Initial Hand Stack");
                    DuplicateSelectedHandStack(GetSelectedHandStackColors());
                    MarkDirty();
                }
                if (GUILayout.Button("Move Left"))
                {
                    Undo.RecordObject(levelConfig, "Move Initial Hand Stack");
                    MoveSelectedHandStack(-1);
                    MarkDirty();
                }
                if (GUILayout.Button("Move Right"))
                {
                    Undo.RecordObject(levelConfig, "Move Initial Hand Stack");
                    MoveSelectedHandStack(1);
                    MarkDirty();
                }
                if (GUILayout.Button("Delete Selected"))
                {
                    Undo.RecordObject(levelConfig, "Remove Initial Hand Stack");
                    RemoveSelectedHandStack();
                    MarkDirty();
                }
            }
        }
    }

    private void DrawGoalTools()
    {
        EditorGUILayout.LabelField("Goal Tools", EditorStyles.boldLabel);
        EditorGUILayout.HelpBox("Create color collection goals. Goal progress is driven by MergeSystem.PiecesCleared at runtime.", MessageType.None);
        using (new EditorGUILayout.HorizontalScope())
        {
            if (GUILayout.Button("Add Clear Goal"))
            {
                Undo.RecordObject(levelConfig, "Add Goal");
                AddGoal("fire", 10);
                MarkDirty();
            }
            if (GUILayout.Button("Add Defeat All"))
            {
                Undo.RecordObject(levelConfig, "Add DefeatAllEnemies Goal");
                AddGoal(LevelGoalType.DefeatAllEnemies, "fire", 0);
                MarkDirty();
            }
            if (GUILayout.Button("Add Defeat N"))
            {
                Undo.RecordObject(levelConfig, "Add DefeatEnemies Goal");
                AddGoal(LevelGoalType.DefeatEnemies, "fire", 3);
                MarkDirty();
            }
            if (GUILayout.Button("Create Goals From Start Stacks"))
            {
                Undo.RecordObject(levelConfig, "Create Goals From Start Stacks");
                CreateGoalsFromStartStacks();
                MarkDirty();
            }
            using (new EditorGUI.DisabledScope(goals == null || goals.arraySize == 0))
            {
                if (GUILayout.Button("Clear Goals"))
                {
                    if (EditorUtility.DisplayDialog("Clear Goals", "Remove every goal from this level?", "Clear", "Cancel"))
                    {
                        Undo.RecordObject(levelConfig, "Clear Goals");
                        goals.ClearArray();
                        MarkDirty();
                    }
                }
            }
        }
    }

    private void DrawLegendAndStats()
    {
        int activeCount = BuildActiveCells().Count;
        int startCount = startingBoardStacks != null ? startingBoardStacks.arraySize : 0;
        int enemyCount = enemies != null ? enemies.arraySize : 0;
        int handCount = initialHandStacks != null ? initialHandStacks.arraySize : 0;
        int goalCount = goals != null ? goals.arraySize : 0;
        string selected = hasSelectedCell ? selectedCell.ToString() : "none";

        using (new EditorGUILayout.HorizontalScope(EditorStyles.helpBox))
        {
            if (editMode == EditMode.InitialHand)
            {
                EditorGUILayout.LabelField("Initial Hand: " + handCount + "   Selected: " + (HasSelectedHandStack() ? selectedHandStackIndex.ToString() : "none"), EditorStyles.boldLabel);
                GUILayout.FlexibleSpace();
                EditorGUILayout.LabelField("Colors are bottom -> top. T marks the top piece.", EditorStyles.miniLabel, GUILayout.Width(260f));
                return;
            }

            if (editMode == EditMode.Enemies)
            {
                EditorGUILayout.LabelField("Enemies: " + enemyCount + "   Selected: " + (HasSelectedEnemy() ? selectedEnemyIndex.ToString() : selected), EditorStyles.boldLabel);
                GUILayout.FlexibleSpace();
                EditorGUILayout.LabelField("Enemies block stack placement on their cells.", EditorStyles.miniLabel, GUILayout.Width(300f));
                return;
            }

            if (editMode == EditMode.Goals)
            {
                EditorGUILayout.LabelField("Goals: " + goalCount, EditorStyles.boldLabel);
                GUILayout.FlexibleSpace();
                EditorGUILayout.LabelField("Validation remains available in the LevelConfig inspector.", EditorStyles.miniLabel, GUILayout.Width(300f));
                return;
            }

            DrawLegendSwatch(ActiveCellColor, "Active");
            DrawLegendSwatch(InactiveCellColor, "Off");
            DrawLegendSwatch(StartCellColor, "Start");
            DrawLegendSwatch(EnemyCellColor, "Enemy");
            DrawLegendSwatch(ConflictCellColor, "Conflict");
            DrawLegendSwatch(TutorialCellColor, "Tutorial");
            DrawLegendSwatch(SelectedCellColor, "Selected");
            GUILayout.FlexibleSpace();
            EditorGUILayout.LabelField("Cells: " + activeCount + "   Board: " + startCount + "   Enemies: " + enemyCount + "   Hand: " + handCount + "   Goals: " + goalCount + "   Selected: " + selected, GUILayout.Width(500f));
        }
    }

    private void DrawLegendSwatch(Color color, string label)
    {
        Color previous = GUI.backgroundColor;
        GUI.backgroundColor = color;
        GUILayout.Box(GUIContent.none, GUILayout.Width(18f), GUILayout.Height(14f));
        GUI.backgroundColor = previous;
        EditorGUILayout.LabelField(label, GUILayout.Width(54f));
    }

    private void DrawGridEditor()
    {
        EditorGUILayout.Space(4f);
        string hint = editMode == EditMode.Shape
            ? "Shape mode: use the brush above, then click hexes. The canvas uses the same layout formulas as the runtime board."
            : editMode == EditMode.Enemies
                ? "Enemies mode: only active cells without start stacks can receive enemies. Enemy cells block stack placement."
                : "Board Starts mode: only active hexes without enemies are editable. The label shows stack colors from bottom to top.";
        EditorGUILayout.HelpBox(hint, MessageType.None);

        int editRadius = Mathf.Max(0, boardRadius.intValue);
        HashSet<Vector2Int> active = BuildActiveCells();
        List<Vector2Int> visibleCoordinates = GenerateSquareCoordinates(editRadius);
        Dictionary<Vector2Int, Vector2> centers = BuildCanvasCenters(visibleCoordinates, out Rect contentBounds);
        Rect contentRect = new Rect(0f, 0f, contentBounds.width + CanvasPadding * 2f, contentBounds.height + CanvasPadding * 2f);
        float canvasHeight = Mathf.Clamp(position.height - 450f, MinCanvasHeight, 620f);
        Rect viewport = GUILayoutUtility.GetRect(GUIContent.none, GUIStyle.none, GUILayout.ExpandWidth(true), GUILayout.Height(canvasHeight));

        GUI.Box(viewport, GUIContent.none, EditorStyles.helpBox);
        scroll = GUI.BeginScrollView(viewport, scroll, contentRect, true, true);
        EditorGUI.DrawRect(contentRect, new Color(0.12f, 0.12f, 0.12f, 1f));

        Event currentEvent = Event.current;
        foreach (Vector2Int coordinate in visibleCoordinates)
        {
            bool isActive = active.Contains(coordinate);
            bool hasStart = FindStartStackIndex(coordinate) >= 0;
            bool hasEnemy = FindEnemyIndex(coordinate) >= 0;
            bool conflict = hasStart && hasEnemy;
            bool selected = hasSelectedCell && selectedCell == coordinate;
            bool tutorial = tutorialTargetCell.vector2IntValue == coordinate;
            DrawHexCell(coordinate, centers[coordinate], isActive, hasStart, hasEnemy, conflict, selected, tutorial, currentEvent);
        }
        GUI.EndScrollView();
    }

    private Dictionary<Vector2Int, Vector2> BuildCanvasCenters(List<Vector2Int> coordinates, out Rect contentBounds)
    {
        Dictionary<Vector2Int, Vector2> centers = new Dictionary<Vector2Int, Vector2>();
        Vector2 min = new Vector2(float.MaxValue, float.MaxValue);
        Vector2 max = new Vector2(float.MinValue, float.MinValue);
        HexGridGenerator.BoardShape previewShape = GetPreviewShape();
        HexGridGenerator.HexOrientation hexOrientation = (HexGridGenerator.HexOrientation)orientation.enumValueIndex;

        foreach (Vector2Int coordinate in coordinates)
        {
            Vector2 center = CoordinateToCanvasPosition(coordinate, previewShape, hexOrientation, HexPixelRadius);
            centers.Add(coordinate, center);
            min = Vector2.Min(min, center);
            max = Vector2.Max(max, center);
        }

        contentBounds = Rect.MinMaxRect(min.x - HexPixelRadius, min.y - HexPixelRadius, max.x + HexPixelRadius, max.y + HexPixelRadius);
        List<Vector2Int> keys = new List<Vector2Int>(centers.Keys);
        foreach (Vector2Int key in keys)
        {
            centers[key] = centers[key] - contentBounds.min + Vector2.one * CanvasPadding;
        }

        return centers;
    }

    private void DrawHexCell(Vector2Int coordinate, Vector2 center, bool isActive, bool hasStart, bool hasEnemy, bool conflict, bool selected, bool tutorial, Event currentEvent)
    {
        bool disabled = editMode != EditMode.Shape && !isActive;
        Color fill = selected ? SelectedCellColor : conflict ? ConflictCellColor : tutorial ? TutorialCellColor : hasEnemy ? EnemyCellColor : hasStart ? StartCellColor : isActive ? ActiveCellColor : InactiveCellColor;
        if (disabled)
        {
            fill = new Color(fill.r, fill.g, fill.b, 0.35f);
        }

        Vector3[] points = GetHexGuiPoints(center, HexPixelRadius, (HexGridGenerator.HexOrientation)orientation.enumValueIndex);
        Handles.BeginGUI();
        Handles.color = fill;
        Handles.DrawAAConvexPolygon(points);
        Handles.color = selected ? Color.white : new Color(0f, 0f, 0f, disabled ? 0.35f : 0.75f);
        Handles.DrawAAPolyLine(2f, ClosePolygon(points));
        Handles.EndGUI();

        Rect labelRect = new Rect(center.x - HexPixelRadius * 0.78f, center.y - 14f, HexPixelRadius * 1.56f, 30f);
        GUIStyle labelStyle = new GUIStyle(EditorStyles.miniBoldLabel)
        {
            alignment = TextAnchor.MiddleCenter,
            clipping = TextClipping.Clip
        };
        labelStyle.normal.textColor = disabled ? new Color(1f, 1f, 1f, 0.42f) : Color.white;
        GUI.Label(labelRect, BuildCellLabel(coordinate, isActive, hasStart, hasEnemy, conflict), labelStyle);

        if (!disabled && currentEvent.type == EventType.MouseDown && currentEvent.button == 0 && IsPointInsidePolygon(currentEvent.mousePosition, points))
        {
            HandleCellClick(coordinate, isActive, hasStart, hasEnemy);
            currentEvent.Use();
            Repaint();
        }
    }

    private string BuildCellLabel(Vector2Int coordinate, bool isActive, bool hasStart, bool hasEnemy, bool conflict)
    {
        if (conflict)
        {
            return coordinate.x + "," + coordinate.y + "\nCONFLICT";
        }

        if (hasEnemy)
        {
            int index = FindEnemyIndex(coordinate);
            SerializedProperty enemy = enemies.GetArrayElementAtIndex(index);
            string enemyId = enemy.FindPropertyRelative("enemyId").stringValue;
            return coordinate.x + "," + coordinate.y + "\nE:" + (string.IsNullOrEmpty(enemyId) ? "basic" : enemyId);
        }

        if (hasStart)
        {
            int index = FindStartStackIndex(coordinate);
            return coordinate.x + "," + coordinate.y + "\n" + StackSummary(GetBoardStackColorsProperty(startingBoardStacks.GetArrayElementAtIndex(index)));
        }

        return isActive ? coordinate.x + "," + coordinate.y : "+";
    }

    private void HandleCellClick(Vector2Int coordinate, bool isActive, bool hasStart, bool hasEnemy)
    {
        hasSelectedCell = true;
        selectedCell = coordinate;
        selectedEnemyIndex = FindEnemyIndex(coordinate);

        if (editMode == EditMode.Shape)
        {
            ApplyShapeBrush(coordinate, isActive);
            return;
        }

        if (editMode == EditMode.Enemies)
        {
            if (isActive && !hasEnemy && !hasStart)
            {
                Undo.RecordObject(levelConfig, "Add Enemy");
                selectedEnemyIndex = AddOrUpdateEnemy(coordinate, enemyBrushId);
                MarkDirty();
            }
            return;
        }

        if (isActive && !hasStart && !hasEnemy)
        {
            Undo.RecordObject(levelConfig, "Add Start Stack");
            AddOrUpdateStartStack(coordinate);
            MarkDirty();
        }
    }

    private void DrawSelectedCellEditor()
    {
        if (editMode == EditMode.Enemies)
        {
            DrawSelectedEnemyCellEditor();
            return;
        }

        EditorGUILayout.Space(6f);
        using (new EditorGUILayout.VerticalScope(EditorStyles.helpBox))
        {
            EditorGUILayout.LabelField("Selected Cell", EditorStyles.boldLabel);
            if (!hasSelectedCell)
            {
                EditorGUILayout.HelpBox("Select a cell in the grid.", MessageType.None);
                return;
            }

            bool isActive = BuildActiveCells().Contains(selectedCell);
            bool hasEnemy = FindEnemyIndex(selectedCell) >= 0;
            EditorGUILayout.LabelField("Coordinate", selectedCell.ToString());
            EditorGUILayout.LabelField("State", isActive ? "Active" : "Inactive");

            if (!isActive)
            {
                EditorGUILayout.HelpBox("This cell is not part of the board shape. Add it in Shape mode before assigning a start stack.", MessageType.Warning);
                return;
            }

            if (hasEnemy)
            {
                EditorGUILayout.HelpBox("This cell has an enemy. Remove the enemy before assigning a start stack.", MessageType.Warning);
            }

            using (new EditorGUILayout.HorizontalScope())
            {
                using (new EditorGUI.DisabledScope(hasEnemy))
                {
                    if (GUILayout.Button("Add/Update Start Stack"))
                    {
                        Undo.RecordObject(levelConfig, "Add Start Stack");
                        AddOrUpdateStartStack(selectedCell);
                        MarkDirty();
                    }
                }
                if (GUILayout.Button("Remove Start Stack"))
                {
                    Undo.RecordObject(levelConfig, "Remove Start Stack");
                    RemoveStartStack(selectedCell);
                    MarkDirty();
                }
                if (GUILayout.Button("Tutorial Target"))
                {
                    Undo.RecordObject(levelConfig, "Set Tutorial Target");
                    tutorialTargetCell.vector2IntValue = selectedCell;
                    MarkDirty();
                }
            }

            int index = FindStartStackIndex(selectedCell);
            if (index < 0)
            {
                EditorGUILayout.HelpBox("Selected active cell has no start stack.", MessageType.None);
                return;
            }

            SerializedProperty item = startingBoardStacks.GetArrayElementAtIndex(index);
            SerializedProperty colors = GetBoardStackColorsProperty(item);
            EditorGUILayout.LabelField("Stack", StackSummary(colors), EditorStyles.boldLabel);
            DrawStackPreview(colors);
            EditorGUILayout.PropertyField(colors, new GUIContent("Colors Bottom To Top"), true);
            DrawColorPalette(colors, "Add Stack Color");

            using (new EditorGUILayout.HorizontalScope())
            {
                if (GUILayout.Button("Remove Top"))
                {
                    Undo.RecordObject(levelConfig, "Remove Stack Color");
                    RemoveTopColor(colors);
                    MarkDirty();
                }
                if (GUILayout.Button("Clear Stack"))
                {
                    Undo.RecordObject(levelConfig, "Clear Stack");
                    colors?.ClearArray();
                    MarkDirty();
                }
            }
        }
    }

    private void DrawSelectedEnemyCellEditor()
    {
        EditorGUILayout.Space(6f);
        using (new EditorGUILayout.VerticalScope(EditorStyles.helpBox))
        {
            EditorGUILayout.LabelField("Selected Enemy Cell", EditorStyles.boldLabel);
            if (!hasSelectedCell)
            {
                EditorGUILayout.HelpBox("Select a cell in the grid.", MessageType.None);
                return;
            }

            HashSet<Vector2Int> active = BuildActiveCells();
            bool isActive = active.Contains(selectedCell);
            bool hasStart = FindStartStackIndex(selectedCell) >= 0;
            int enemyIndex = FindEnemyIndex(selectedCell);
            selectedEnemyIndex = enemyIndex;

            EditorGUILayout.LabelField("Coordinate", selectedCell.ToString());
            EditorGUILayout.LabelField("State", isActive ? "Active" : "Inactive");

            if (!isActive)
            {
                EditorGUILayout.HelpBox("This cell is outside the board shape. Add it in Shape mode before placing an enemy.", MessageType.Warning);
                return;
            }

            if (hasStart)
            {
                EditorGUILayout.HelpBox("This cell has a starting stack. Enemies cannot share a cell with a stack.", MessageType.Warning);
            }

            using (new EditorGUILayout.HorizontalScope())
            {
                using (new EditorGUI.DisabledScope(hasStart))
                {
                    if (GUILayout.Button(enemyIndex >= 0 ? "Update Enemy Here" : "Place Enemy Here"))
                    {
                        Undo.RecordObject(levelConfig, enemyIndex >= 0 ? "Update Enemy" : "Place Enemy");
                        selectedEnemyIndex = AddOrUpdateEnemy(selectedCell, enemyBrushId);
                        MarkDirty();
                    }
                }

                using (new EditorGUI.DisabledScope(enemyIndex < 0))
                {
                    if (GUILayout.Button("Remove Enemy"))
                    {
                        Undo.RecordObject(levelConfig, "Remove Enemy");
                        RemoveEnemy(selectedCell);
                        selectedEnemyIndex = -1;
                        MarkDirty();
                    }
                }
            }

            if (enemyIndex < 0)
            {
                EditorGUILayout.HelpBox("Selected active cell has no enemy.", MessageType.None);
                return;
            }

            SerializedProperty enemy = enemies.GetArrayElementAtIndex(enemyIndex);
            SerializedProperty enemyId = enemy.FindPropertyRelative("enemyId");
            SerializedProperty coordinate = enemy.FindPropertyRelative("coordinate");
            SerializedProperty healthOverride = enemy.FindPropertyRelative("healthOverride");

            EditorGUILayout.Space(4f);
            EditorGUILayout.PropertyField(enemyId);
            using (new EditorGUI.DisabledScope(true))
            {
                EditorGUILayout.PropertyField(coordinate);
            }
            EditorGUILayout.PropertyField(healthOverride, new GUIContent("Health Override", "0 uses the archetype base health."));
        }
    }

    private void DrawInitialHandEditor()
    {
        EditorGUILayout.Space(6f);
        using (new EditorGUILayout.VerticalScope(EditorStyles.helpBox))
        {
            EditorGUILayout.LabelField("Initial Hand Stacks", EditorStyles.boldLabel);
            if (initialHandStacks.arraySize == 0)
            {
                EditorGUILayout.HelpBox("Initial hand is empty. Runtime will use hand generation settings.", MessageType.None);
                using (new EditorGUILayout.HorizontalScope())
                {
                    if (GUILayout.Button("Add First Stack"))
                    {
                        Undo.RecordObject(levelConfig, "Add Initial Hand Stack");
                        selectedHandStackIndex = AddHandStack();
                        MarkDirty();
                    }
                    if (GUILayout.Button("Generate Defaults"))
                    {
                        Undo.RecordObject(levelConfig, "Generate Initial Hand");
                        GenerateDefaultHandStacks();
                        selectedHandStackIndex = initialHandStacks.arraySize > 0 ? 0 : -1;
                        MarkDirty();
                    }
                }
                return;
            }

            ClampSelectedHandStackIndex();
            DrawHandStackCards();
            SerializedProperty colors = GetSelectedHandStackColors();
            if (colors == null)
            {
                EditorGUILayout.HelpBox("Selected hand stack has no runeIdsBottomToTop property.", MessageType.Warning);
                return;
            }

            EditorGUILayout.Space(4f);
            EditorGUILayout.LabelField("Selected Initial Hand Stack " + selectedHandStackIndex, EditorStyles.boldLabel);
            DrawStackPreview(colors);
            EditorGUILayout.PropertyField(colors, new GUIContent("Colors Bottom To Top"), true);
            DrawColorPalette(colors, "Add Initial Hand Stack Color");

            using (new EditorGUILayout.HorizontalScope())
            {
                if (GUILayout.Button("Remove Top"))
                {
                    Undo.RecordObject(levelConfig, "Remove Initial Hand Color");
                    RemoveTopColor(colors);
                    MarkDirty();
                }
                if (GUILayout.Button("Clear Stack"))
                {
                    Undo.RecordObject(levelConfig, "Clear Initial Hand Stack");
                    colors?.ClearArray();
                    MarkDirty();
                }
                if (GUILayout.Button("Duplicate Stack"))
                {
                    Undo.RecordObject(levelConfig, "Duplicate Initial Hand Stack");
                    DuplicateSelectedHandStack(colors);
                    MarkDirty();
                }
            }
        }
    }

    private void DrawGoalsEditor()
    {
        EditorGUILayout.Space(6f);
        using (new EditorGUILayout.VerticalScope(EditorStyles.helpBox))
        {
            EditorGUILayout.LabelField("Goals", EditorStyles.boldLabel);
            if (goals == null || goals.arraySize == 0)
            {
                EditorGUILayout.HelpBox("Level has no goals. Add at least one goal for full-game win conditions.", MessageType.Warning);
                return;
            }

            for (int i = 0; i < goals.arraySize; i++)
            {
                SerializedProperty goal = goals.GetArrayElementAtIndex(i);
                using (new EditorGUILayout.VerticalScope(EditorStyles.helpBox))
                {
                    using (new EditorGUILayout.HorizontalScope())
                    {
                        EditorGUILayout.LabelField("Goal " + (i + 1), EditorStyles.boldLabel);
                        if (GUILayout.Button("Delete", GUILayout.Width(70f)))
                        {
                            Undo.RecordObject(levelConfig, "Delete Goal");
                            goals.DeleteArrayElementAtIndex(i);
                            MarkDirty();
                            break;
                        }
                    }

                    EditorGUILayout.PropertyField(goal.FindPropertyRelative("type"));
                    SerializedProperty type = goal.FindPropertyRelative("type");
                    LevelGoalType goalType = (LevelGoalType)type.enumValueIndex;
                    if (goalType == LevelGoalType.ClearPieces)
                    {
                        EditorGUILayout.PropertyField(goal.FindPropertyRelative("runeId"));
                    }

                    using (new EditorGUI.DisabledScope(goalType == LevelGoalType.DefeatAllEnemies))
                    {
                        EditorGUILayout.PropertyField(goal.FindPropertyRelative("requiredCount"));
                    }

                    if (goalType == LevelGoalType.DefeatAllEnemies)
                    {
                        EditorGUILayout.HelpBox("Required count is filled at runtime from the number of spawned enemies.", MessageType.None);
                    }
                }
            }
        }
    }

    private void DrawHandStackCards()
    {
        float availableWidth = Mathf.Max(260f, position.width - 54f);
        int columns = Mathf.Clamp(Mathf.FloorToInt(availableWidth / 220f), 1, 4);
        float cardWidth = Mathf.Floor((availableWidth - (columns - 1) * 6f) / columns);

        for (int rowStart = 0; rowStart < initialHandStacks.arraySize; rowStart += columns)
        {
            using (new EditorGUILayout.HorizontalScope())
            {
                for (int column = 0; column < columns; column++)
                {
                    int index = rowStart + column;
                    if (index < initialHandStacks.arraySize)
                    {
                        DrawHandStackCard(index, cardWidth);
                    }
                    else
                    {
                        GUILayout.Space(cardWidth);
                    }
                }
            }
        }
    }

    private void DrawHandStackCard(int index, float width)
    {
        SerializedProperty colors = GetStackColorsProperty(initialHandStacks.GetArrayElementAtIndex(index));
        int colorCount = colors != null ? colors.arraySize : 0;
        Rect rect = GUILayoutUtility.GetRect(width, StackCardHeight, GUILayout.Width(width), GUILayout.Height(StackCardHeight));

        if (Event.current.type == EventType.Repaint)
        {
            EditorStyles.helpBox.Draw(rect, GUIContent.none, false, false, false, false);
            if (selectedHandStackIndex == index)
            {
                DrawRectOutline(rect, SelectedCellColor, 2f);
            }
        }

        if (Event.current.type == EventType.MouseDown && Event.current.button == 0 && rect.Contains(Event.current.mousePosition))
        {
            selectedHandStackIndex = index;
            GUI.FocusControl(null);
            Event.current.Use();
            Repaint();
        }

        Rect titleRect = new Rect(rect.x + 10f, rect.y + 6f, rect.width - 20f, 18f);
        GUI.Label(titleRect, "Hand " + index + "  |  " + colorCount + " colors", EditorStyles.boldLabel);
        Rect previewRect = new Rect(rect.x + 10f, rect.y + 30f, rect.width - 20f, StackChipSize);
        DrawStackPreview(previewRect, colors, StackChipSize);
    }

    private void ApplyShapeBrush(Vector2Int coordinate, bool isActive)
    {
        if (shapeBrush == ShapeBrush.Select)
        {
            return;
        }

        Undo.RecordObject(levelConfig, "Edit Level Shape");
        EnsureCustomShapeFromCurrent();

        if (shapeBrush == ShapeBrush.Toggle)
        {
            if (isActive)
            {
                RemoveShapeCell(coordinate);
            }
            else
            {
                AddCustomCoordinate(coordinate);
            }
        }
        else if (shapeBrush == ShapeBrush.Add)
        {
            AddCustomCoordinate(coordinate);
        }
        else if (shapeBrush == ShapeBrush.Erase)
        {
            RemoveShapeCell(coordinate);
        }

        boardShape.enumValueIndex = (int)HexGridGenerator.BoardShape.Custom;
        MarkDirty();
    }

    private void RemoveShapeCell(Vector2Int coordinate)
    {
        RemoveCustomCoordinate(coordinate);
        RemoveStartStack(coordinate);
        RemoveEnemy(coordinate);
    }

    private void EnsureCustomShapeFromCurrent()
    {
        if ((HexGridGenerator.BoardShape)boardShape.enumValueIndex == HexGridGenerator.BoardShape.Custom)
        {
            return;
        }

        HexGridGenerator.BoardShape sourceShape = GetNonCustomShape((HexGridGenerator.BoardShape)boardShape.enumValueIndex);
        customBaseShape.enumValueIndex = (int)sourceShape;
        SetCustomCoordinates(BuildActiveCellList(), sourceShape, false);
        boardShape.enumValueIndex = (int)HexGridGenerator.BoardShape.Custom;
    }

    private void SetCustomCoordinates(List<Vector2Int> coordinates, HexGridGenerator.BoardShape layoutShape)
    {
        SetCustomCoordinates(coordinates, layoutShape, true);
    }

    private void SetCustomCoordinates(List<Vector2Int> coordinates, HexGridGenerator.BoardShape layoutShape, bool recordUndo)
    {
        if (recordUndo)
        {
            Undo.RecordObject(levelConfig, "Set Level Shape");
        }

        customBaseShape.enumValueIndex = (int)GetNonCustomShape(layoutShape);
        customCoordinates.ClearArray();
        HashSet<Vector2Int> unique = new HashSet<Vector2Int>();
        for (int i = 0; i < coordinates.Count; i++)
        {
            if (!unique.Add(coordinates[i]))
            {
                continue;
            }

            customCoordinates.InsertArrayElementAtIndex(customCoordinates.arraySize);
            customCoordinates.GetArrayElementAtIndex(customCoordinates.arraySize - 1).vector2IntValue = coordinates[i];
        }
        SortCustomCoordinates();
        boardShape.enumValueIndex = (int)HexGridGenerator.BoardShape.Custom;
        MarkDirty();
    }

    private void InvertVisibleShape()
    {
        Undo.RecordObject(levelConfig, "Invert Level Shape");
        EnsureCustomShapeFromCurrent();

        HashSet<Vector2Int> active = BuildActiveCells();
        List<Vector2Int> inverted = new List<Vector2Int>();
        int editRadius = Mathf.Max(0, boardRadius.intValue);
        for (int x = -editRadius; x <= editRadius; x++)
        {
            for (int y = -editRadius; y <= editRadius; y++)
            {
                Vector2Int coordinate = new Vector2Int(x, y);
                if (!active.Contains(coordinate))
                {
                    inverted.Add(coordinate);
                }
            }
        }

        SetCustomCoordinates(inverted, GetPreviewShape(), false);
        RemoveStartStacksOutsideShape();
        RemoveEnemiesOutsideShape();
        MarkDirty();
    }

    private void RemoveStartStacksOutsideShape()
    {
        if (startingBoardStacks == null)
        {
            return;
        }

        HashSet<Vector2Int> active = BuildActiveCells();
        for (int i = startingBoardStacks.arraySize - 1; i >= 0; i--)
        {
            Vector2Int coordinate = startingBoardStacks.GetArrayElementAtIndex(i).FindPropertyRelative("coordinate").vector2IntValue;
            if (!active.Contains(coordinate))
            {
                startingBoardStacks.DeleteArrayElementAtIndex(i);
            }
        }
    }

    private void RemoveEnemiesOutsideShape()
    {
        if (enemies == null)
        {
            return;
        }

        HashSet<Vector2Int> active = BuildActiveCells();
        for (int i = enemies.arraySize - 1; i >= 0; i--)
        {
            Vector2Int coordinate = enemies.GetArrayElementAtIndex(i).FindPropertyRelative("coordinate").vector2IntValue;
            if (!active.Contains(coordinate))
            {
                enemies.DeleteArrayElementAtIndex(i);
            }
        }
        selectedEnemyIndex = -1;
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

    private int FindEnemyIndex(Vector2Int coordinate)
    {
        if (enemies == null)
        {
            return -1;
        }

        for (int i = 0; i < enemies.arraySize; i++)
        {
            SerializedProperty item = enemies.GetArrayElementAtIndex(i);
            if (item.FindPropertyRelative("coordinate").vector2IntValue == coordinate)
            {
                return i;
            }
        }
        return -1;
    }

    private bool HasSelectedEnemy()
    {
        return enemies != null && selectedEnemyIndex >= 0 && selectedEnemyIndex < enemies.arraySize;
    }

    private bool CanPlaceEnemyAt(Vector2Int coordinate)
    {
        return BuildActiveCells().Contains(coordinate) && FindStartStackIndex(coordinate) < 0;
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
            AddColorToStack(colors, "fire");
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

    private int AddOrUpdateEnemy(Vector2Int coordinate, string enemyId)
    {
        if (enemies == null)
        {
            return -1;
        }

        int index = FindEnemyIndex(coordinate);
        if (index < 0)
        {
            enemies.InsertArrayElementAtIndex(enemies.arraySize);
            index = enemies.arraySize - 1;
        }

        SerializedProperty item = enemies.GetArrayElementAtIndex(index);
        item.FindPropertyRelative("enemyId").stringValue = string.IsNullOrWhiteSpace(enemyId) ? "basic" : enemyId;
        item.FindPropertyRelative("coordinate").vector2IntValue = coordinate;
        SerializedProperty healthOverride = item.FindPropertyRelative("healthOverride");
        if (healthOverride.intValue < 0)
        {
            healthOverride.intValue = 0;
        }

        return index;
    }

    private void RemoveEnemy(Vector2Int coordinate)
    {
        if (enemies == null)
        {
            return;
        }

        int index = FindEnemyIndex(coordinate);
        if (index >= 0)
        {
            enemies.DeleteArrayElementAtIndex(index);
        }
    }

    private void DrawColorPalette(SerializedProperty colors, string undoLabel)
    {
        if (colors == null)
        {
            EditorGUILayout.HelpBox("Stack color list is missing.", MessageType.Warning);
            return;
        }

        EditorGUILayout.LabelField("Add Color On Top");
        using (new EditorGUILayout.HorizontalScope())
        {
            foreach (string color in RuneEditorDefaults.DefaultRuneIds)
            {
                Color previousColor = GUI.backgroundColor;
                GUI.backgroundColor = GetHexColorPreview(color);
                if (GUILayout.Button(new GUIContent(color.ToString(), "Add " + color + " to the top of this stack."), GUILayout.Height(26f)))
                {
                    Undo.RecordObject(levelConfig, undoLabel);
                    AddColorToStack(colors, color);
                    MarkDirty();
                }
                GUI.backgroundColor = previousColor;
            }
        }
    }

    private void DrawStackPreview(SerializedProperty colors)
    {
        using (new EditorGUILayout.HorizontalScope())
        {
            EditorGUILayout.LabelField("Bottom -> Top", GUILayout.Width(92f));
            Rect rect = GUILayoutUtility.GetRect(10f, StackChipSize, GUILayout.ExpandWidth(true), GUILayout.Height(StackChipSize));
            DrawStackPreview(rect, colors, StackChipSize);
        }
    }

    private static void DrawStackPreview(Rect rect, SerializedProperty colors, float chipSize)
    {
        if (colors == null || colors.arraySize == 0)
        {
            GUI.Label(rect, "empty", EditorStyles.miniLabel);
            return;
        }

        float step = chipSize + 4f;
        int maxVisible = Mathf.Max(1, Mathf.FloorToInt((rect.width - 34f) / step));
        int visibleCount = Mathf.Min(colors.arraySize, maxVisible);
        for (int i = 0; i < visibleCount; i++)
        {
            string color = colors.GetArrayElementAtIndex(i).stringValue;
            Rect chipRect = new Rect(rect.x + i * step, rect.y, chipSize, chipSize);
            DrawColorChip(chipRect, color, i == colors.arraySize - 1);
        }

        if (visibleCount < colors.arraySize)
        {
            Rect moreRect = new Rect(rect.x + visibleCount * step, rect.y, 34f, chipSize);
            GUI.Label(moreRect, "+" + (colors.arraySize - visibleCount), EditorStyles.miniBoldLabel);
        }
    }

    private static void DrawColorChip(Rect rect, string color, bool isTop)
    {
        Color preview = GetHexColorPreview(color);
        EditorGUI.DrawRect(rect, preview);
        DrawRectOutline(rect, Color.black, 1f);

        GUIStyle labelStyle = new GUIStyle(EditorStyles.miniBoldLabel)
        {
            alignment = TextAnchor.MiddleCenter
        };
        labelStyle.normal.textColor = GetReadableTextColor(preview);
        GUI.Label(rect, isTop ? "T" : color.ToString()[0].ToString(), labelStyle);
    }

    private bool HasSelectedHandStack()
    {
        return initialHandStacks != null && selectedHandStackIndex >= 0 && selectedHandStackIndex < initialHandStacks.arraySize;
    }

    private SerializedProperty GetSelectedHandStackColors()
    {
        if (!HasSelectedHandStack())
        {
            return null;
        }

        return GetStackColorsProperty(initialHandStacks.GetArrayElementAtIndex(selectedHandStackIndex));
    }

    private void MoveSelectedHandStack(int direction)
    {
        if (!HasSelectedHandStack())
        {
            return;
        }

        int nextIndex = Mathf.Clamp(selectedHandStackIndex + direction, 0, initialHandStacks.arraySize - 1);
        if (nextIndex == selectedHandStackIndex)
        {
            return;
        }

        initialHandStacks.MoveArrayElement(selectedHandStackIndex, nextIndex);
        selectedHandStackIndex = nextIndex;
    }

    private void ClampSelectedHandStackIndex()
    {
        if (initialHandStacks == null || initialHandStacks.arraySize == 0)
        {
            selectedHandStackIndex = -1;
            return;
        }

        selectedHandStackIndex = Mathf.Clamp(selectedHandStackIndex, 0, initialHandStacks.arraySize - 1);
    }

    private int AddHandStack()
    {
        initialHandStacks.InsertArrayElementAtIndex(initialHandStacks.arraySize);
        int index = initialHandStacks.arraySize - 1;
        SerializedProperty item = initialHandStacks.GetArrayElementAtIndex(index);
        SerializedProperty colors = GetStackColorsProperty(item);
        colors?.ClearArray();
        AddColorToStack(colors, "fire");
        return index;
    }

    private void RemoveSelectedHandStack()
    {
        if (!HasSelectedHandStack())
        {
            return;
        }

        initialHandStacks.DeleteArrayElementAtIndex(selectedHandStackIndex);
        ClampSelectedHandStackIndex();
    }

    private void DuplicateSelectedHandStack(SerializedProperty sourceColors)
    {
        if (sourceColors == null)
        {
            return;
        }

        List<string> colors = ReadColors(sourceColors);
        initialHandStacks.InsertArrayElementAtIndex(selectedHandStackIndex + 1);
        selectedHandStackIndex++;
        SetColors(GetStackColorsProperty(initialHandStacks.GetArrayElementAtIndex(selectedHandStackIndex)), colors);
    }

    private void GenerateDefaultHandStacks()
    {
        initialHandStacks.ClearArray();
        AddGeneratedHandStack("water", "fire");
        AddGeneratedHandStack("light", "water");
        AddGeneratedHandStack("arcane", "heal");
    }

    private void AddGeneratedHandStack(params string[] colors)
    {
        initialHandStacks.InsertArrayElementAtIndex(initialHandStacks.arraySize);
        SerializedProperty item = initialHandStacks.GetArrayElementAtIndex(initialHandStacks.arraySize - 1);
        SetColors(GetStackColorsProperty(item), colors);
    }

    private void AddGoal(string color, int requiredCount)
    {
        AddGoal(LevelGoalType.ClearPieces, color, requiredCount);
    }

    private void AddGoal(LevelGoalType type, string color, int requiredCount)
    {
        goals.InsertArrayElementAtIndex(goals.arraySize);
        SerializedProperty goal = goals.GetArrayElementAtIndex(goals.arraySize - 1);
        goal.FindPropertyRelative("type").enumValueIndex = (int)type;
        goal.FindPropertyRelative("runeId").stringValue = color;
        goal.FindPropertyRelative("requiredCount").intValue = type == LevelGoalType.DefeatAllEnemies ? 0 : Mathf.Max(1, requiredCount);
    }

    private void CreateGoalsFromStartStacks()
    {
        Dictionary<string, int> counts = new Dictionary<string, int>();
        for (int i = 0; i < startingBoardStacks.arraySize; i++)
        {
            SerializedProperty colors = GetBoardStackColorsProperty(startingBoardStacks.GetArrayElementAtIndex(i));
            if (colors == null)
            {
                continue;
            }

            for (int colorIndex = 0; colorIndex < colors.arraySize; colorIndex++)
            {
                string color = colors.GetArrayElementAtIndex(colorIndex).stringValue;
                counts[color] = counts.TryGetValue(color, out int value) ? value + 1 : 1;
            }
        }

        goals.ClearArray();
        foreach (KeyValuePair<string, int> pair in counts)
        {
            AddGoal(pair.Key, Mathf.Max(10, pair.Value));
        }
    }

    private HashSet<Vector2Int> BuildActiveCells()
    {
        return new HashSet<Vector2Int>(BuildActiveCellList());
    }

    private List<Vector2Int> BuildActiveCellList()
    {
        HexGridGenerator.BoardShape shape = (HexGridGenerator.BoardShape)boardShape.enumValueIndex;
        if (shape == HexGridGenerator.BoardShape.Custom)
        {
            List<Vector2Int> coordinates = new List<Vector2Int>();
            HashSet<Vector2Int> unique = new HashSet<Vector2Int>();
            for (int i = 0; i < customCoordinates.arraySize; i++)
            {
                Vector2Int coordinate = customCoordinates.GetArrayElementAtIndex(i).vector2IntValue;
                if (unique.Add(coordinate))
                {
                    coordinates.Add(coordinate);
                }
            }
            coordinates.Sort(CompareCoordinates);
            return coordinates;
        }

        if (shape == HexGridGenerator.BoardShape.Hexagon)
        {
            return GenerateHexagonCoordinates(boardRadius.intValue);
        }

        return GenerateSquareCoordinates(boardRadius.intValue);
    }

    private HexGridGenerator.BoardShape GetPreviewShape()
    {
        HexGridGenerator.BoardShape shape = (HexGridGenerator.BoardShape)boardShape.enumValueIndex;
        return shape == HexGridGenerator.BoardShape.Custom ? GetNonCustomShape((HexGridGenerator.BoardShape)customBaseShape.enumValueIndex) : GetNonCustomShape(shape);
    }

    private static HexGridGenerator.BoardShape GetNonCustomShape(HexGridGenerator.BoardShape shape)
    {
        return shape == HexGridGenerator.BoardShape.Hexagon ? HexGridGenerator.BoardShape.Hexagon : HexGridGenerator.BoardShape.Square;
    }

    private void AddCustomCoordinate(Vector2Int coordinate)
    {
        if (ContainsCustomCoordinate(coordinate))
        {
            return;
        }

        customCoordinates.InsertArrayElementAtIndex(customCoordinates.arraySize);
        customCoordinates.GetArrayElementAtIndex(customCoordinates.arraySize - 1).vector2IntValue = coordinate;
        SortCustomCoordinates();
    }

    private void RemoveCustomCoordinate(Vector2Int coordinate)
    {
        for (int i = customCoordinates.arraySize - 1; i >= 0; i--)
        {
            if (customCoordinates.GetArrayElementAtIndex(i).vector2IntValue == coordinate)
            {
                customCoordinates.DeleteArrayElementAtIndex(i);
            }
        }
    }

    private bool ContainsCustomCoordinate(Vector2Int coordinate)
    {
        for (int i = 0; i < customCoordinates.arraySize; i++)
        {
            if (customCoordinates.GetArrayElementAtIndex(i).vector2IntValue == coordinate)
            {
                return true;
            }
        }

        return false;
    }

    private void SortCustomCoordinates()
    {
        List<Vector2Int> coordinates = new List<Vector2Int>();
        HashSet<Vector2Int> unique = new HashSet<Vector2Int>();
        for (int i = 0; i < customCoordinates.arraySize; i++)
        {
            Vector2Int coordinate = customCoordinates.GetArrayElementAtIndex(i).vector2IntValue;
            if (unique.Add(coordinate))
            {
                coordinates.Add(coordinate);
            }
        }
        coordinates.Sort(CompareCoordinates);
        customCoordinates.ClearArray();
        for (int i = 0; i < coordinates.Count; i++)
        {
            customCoordinates.InsertArrayElementAtIndex(i);
            customCoordinates.GetArrayElementAtIndex(i).vector2IntValue = coordinates[i];
        }
    }

    private void RefreshTarget()
    {
        levelObject = levelConfig != null ? new SerializedObject(levelConfig) : null;
        levelId = levelObject?.FindProperty("levelId");
        levelNumber = levelObject?.FindProperty("levelNumber");
        displayName = levelObject?.FindProperty("displayName");
        boardRadius = levelObject?.FindProperty("boardRadius");
        boardShape = levelObject?.FindProperty("boardShape");
        customBaseShape = levelObject?.FindProperty("customBaseShape");
        orientation = levelObject?.FindProperty("orientation");
        customCoordinates = levelObject?.FindProperty("customCoordinates");
        startingBoardStacks = levelObject?.FindProperty("startingBoardStacks");
        enemies = levelObject?.FindProperty("enemies");
        initialHandStacks = levelObject?.FindProperty("initialHandStacks");
        handGeneration = levelObject?.FindProperty("handGeneration");
        goals = levelObject?.FindProperty("goals");
        loseRules = levelObject?.FindProperty("loseRules");
        tutorialTargetCell = levelObject?.FindProperty("tutorialTargetCell");
        ClampSelectedHandStackIndex();
        if (!HasSelectedEnemy())
        {
            selectedEnemyIndex = -1;
        }
    }

    private void MarkDirty()
    {
        levelObject.ApplyModifiedProperties();
        EditorUtility.SetDirty(levelConfig);
    }

    private static SerializedProperty GetBoardStackColorsProperty(SerializedProperty boardStack)
    {
        SerializedProperty stack = boardStack.FindPropertyRelative("stack");
        return stack != null ? stack.FindPropertyRelative("runeIdsBottomToTop") : null;
    }

    private static SerializedProperty GetStackColorsProperty(SerializedProperty stack)
    {
        return stack != null ? stack.FindPropertyRelative("runeIdsBottomToTop") : null;
    }

    private static void AddColorToStack(SerializedProperty colors, string color)
    {
        if (colors == null)
        {
            return;
        }

        colors.InsertArrayElementAtIndex(colors.arraySize);
        colors.GetArrayElementAtIndex(colors.arraySize - 1).stringValue = color;
    }

    private static void RemoveTopColor(SerializedProperty colors)
    {
        if (colors != null && colors.arraySize > 0)
        {
            colors.DeleteArrayElementAtIndex(colors.arraySize - 1);
        }
    }

    private static List<string> ReadColors(SerializedProperty colors)
    {
        List<string> result = new List<string>();
        if (colors == null)
        {
            return result;
        }

        for (int i = 0; i < colors.arraySize; i++)
        {
            result.Add(colors.GetArrayElementAtIndex(i).stringValue);
        }

        return result;
    }

    private static void SetColors(SerializedProperty colorsProperty, IReadOnlyList<string> colors)
    {
        if (colorsProperty == null)
        {
            return;
        }

        colorsProperty.ClearArray();
        for (int i = 0; i < colors.Count; i++)
        {
            colorsProperty.InsertArrayElementAtIndex(i);
            colorsProperty.GetArrayElementAtIndex(i).stringValue = colors[i];
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
            string runeName = colors.GetArrayElementAtIndex(i).stringValue;
            names.Add(string.IsNullOrEmpty(runeName) ? "?" : runeName[0].ToString().ToUpperInvariant());
        }
        return string.Join("", names);
    }

    private static Vector3[] GetHexGuiPoints(Vector2 center, float size, HexGridGenerator.HexOrientation hexOrientation)
    {
        Vector3[] points = new Vector3[6];
        float angleOffset = hexOrientation == HexGridGenerator.HexOrientation.FlatTop ? 0f : 30f;
        for (int i = 0; i < points.Length; i++)
        {
            float angle = Mathf.Deg2Rad * (60f * i + angleOffset);
            points[i] = new Vector3(center.x + Mathf.Cos(angle) * size, center.y + Mathf.Sin(angle) * size, 0f);
        }
        return points;
    }

    private static Vector3[] ClosePolygon(Vector3[] points)
    {
        Vector3[] closed = new Vector3[points.Length + 1];
        for (int i = 0; i < points.Length; i++)
        {
            closed[i] = points[i];
        }
        closed[closed.Length - 1] = points[0];
        return closed;
    }

    private static bool IsPointInsidePolygon(Vector2 point, Vector3[] polygon)
    {
        bool inside = false;
        for (int i = 0, j = polygon.Length - 1; i < polygon.Length; j = i++)
        {
            Vector2 a = polygon[i];
            Vector2 b = polygon[j];
            bool intersects = a.y > point.y != b.y > point.y && point.x < (b.x - a.x) * (point.y - a.y) / (b.y - a.y) + a.x;
            if (intersects)
            {
                inside = !inside;
            }
        }
        return inside;
    }

    private static Vector2 CoordinateToCanvasPosition(Vector2Int coordinate, HexGridGenerator.BoardShape shape, HexGridGenerator.HexOrientation hexOrientation, float size)
    {
        Vector2 position;
        if (shape == HexGridGenerator.BoardShape.Hexagon)
        {
            if (hexOrientation == HexGridGenerator.HexOrientation.FlatTop)
            {
                position = new Vector2(size * 1.5f * coordinate.x, size * Mathf.Sqrt(3f) * (coordinate.y + coordinate.x * 0.5f));
                return new Vector2(position.x, -position.y);
            }

            position = new Vector2(size * Mathf.Sqrt(3f) * (coordinate.x + coordinate.y * 0.5f), size * 1.5f * coordinate.y);
            return new Vector2(position.x, -position.y);
        }

        if (hexOrientation == HexGridGenerator.HexOrientation.FlatTop)
        {
            int parity = PositiveModulo(coordinate.x, 2);
            position = new Vector2(size * 1.5f * coordinate.x, size * Mathf.Sqrt(3f) * (coordinate.y + parity * 0.5f));
            return new Vector2(position.x, -position.y);
        }

        int rowParity = PositiveModulo(coordinate.y, 2);
        position = new Vector2(size * Mathf.Sqrt(3f) * (coordinate.x + rowParity * 0.5f), size * 1.5f * coordinate.y);
        return new Vector2(position.x, -position.y);
    }

    private static void DrawRectOutline(Rect rect, Color color, float thickness)
    {
        EditorGUI.DrawRect(new Rect(rect.x, rect.y, rect.width, thickness), color);
        EditorGUI.DrawRect(new Rect(rect.x, rect.yMax - thickness, rect.width, thickness), color);
        EditorGUI.DrawRect(new Rect(rect.x, rect.y, thickness, rect.height), color);
        EditorGUI.DrawRect(new Rect(rect.xMax - thickness, rect.y, thickness, rect.height), color);
    }

    private static Color GetReadableTextColor(Color background)
    {
        float luminance = background.r * 0.299f + background.g * 0.587f + background.b * 0.114f;
        return luminance > 0.58f ? Color.black : Color.white;
    }

    private static Color GetHexColorPreview(string color)
    {
        switch (color)
        {
            case "fire":
                return new Color(1f, 0.28f, 0.22f, 1f);
            case "water":
                return new Color(0.22f, 0.55f, 1f, 1f);
            case "heal":
                return new Color(0.25f, 0.82f, 0.35f, 1f);
            case "light":
                return new Color(1f, 0.9f, 0.2f, 1f);
            case "arcane":
                return new Color(0.72f, 0.35f, 1f, 1f);
            case "ember":
                return new Color(1f, 0.52f, 0.16f, 1f);
            default:
                return Color.white;
        }
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

    private static int CompareCoordinates(Vector2Int a, Vector2Int b)
    {
        int yCompare = b.y.CompareTo(a.y);
        return yCompare != 0 ? yCompare : a.x.CompareTo(b.x);
    }

    private static int PositiveModulo(int value, int modulo)
    {
        return (value % modulo + modulo) % modulo;
    }
}
