using System.Collections.Generic;
using _Game.Board;
using _Game.Stacks;
using UnityEditor;
using UnityEngine;

public class HexGridShapeEditorWindow : EditorWindow
{
    private enum EditMode
    {
        Shape,
        StartStacks,
        TrayStacks
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
    private const float TrayCardHeight = 58f;

    private static readonly Color ActiveCellColor = new Color(0.18f, 0.72f, 0.9f, 1f);
    private static readonly Color InactiveCellColor = new Color(0.3f, 0.3f, 0.3f, 1f);
    private static readonly Color StartCellColor = new Color(1f, 0.66f, 0.16f, 1f);
    private static readonly Color SelectedCellColor = new Color(0.35f, 1f, 0.45f, 1f);
    private static readonly Color TutorialCellColor = new Color(1f, 0.35f, 0.95f, 1f);

    private Main main;
    private SerializedObject mainObject;
    private SerializedProperty boardRadius;
    private SerializedProperty startingBoardStacks;
    private SerializedProperty trayStacks;
    private SerializedProperty tutorialTargetCell;

    private HexGridGenerator generator;
    private SerializedObject generatorObject;
    private SerializedProperty radius;
    private SerializedProperty cellSize;
    private SerializedProperty boardShape;
    private SerializedProperty customBaseShape;
    private SerializedProperty orientation;

    private Vector2 scroll;
    private Vector2 windowScroll;
    private Vector2Int selectedCell;
    private bool hasSelectedCell;
    private EditMode editMode;
    private ShapeBrush shapeBrush;
    private bool showAdvancedSettings;
    private bool showRawStartStacks;
    private bool showRawTrayStacks;
    private int selectedTrayStackIndex = -1;

    [MenuItem("Tools/Hex Grid Shape Editor")]
    public static void Open()
    {
        Open(null);
    }

    public static void Open(Main sourceMain)
    {
        HexGridShapeEditorWindow window = GetWindow<HexGridShapeEditorWindow>("Hex Grid Shape");
        window.minSize = new Vector2(620f, 520f);
        window.main = sourceMain != null ? sourceMain : Selection.activeGameObject != null ? Selection.activeGameObject.GetComponent<Main>() : null;
        window.RefreshTargets();
        window.Show();
    }

    private void OnEnable()
    {
        if (main == null && Selection.activeGameObject != null)
        {
            main = Selection.activeGameObject.GetComponent<Main>();
        }
        RefreshTargets();
    }

    private void OnSelectionChange()
    {
        if (main == null && Selection.activeGameObject != null)
        {
            Main selectedMain = Selection.activeGameObject.GetComponent<Main>();
            if (selectedMain != null)
            {
                main = selectedMain;
                RefreshTargets();
                Repaint();
            }
        }
    }

    private void OnGUI()
    {
        DrawTargetSection();
        if (main == null || generator == null)
        {
            EditorGUILayout.HelpBox("Assign Main with a BoardController/HexGridGenerator, or run Setup Scene Objects first.", MessageType.Warning);
            return;
        }

        mainObject.Update();
        generatorObject.Update();

        windowScroll = EditorGUILayout.BeginScrollView(windowScroll);
        DrawHeader();
        DrawModeTabs();
        DrawGridSettings();
        generatorObject.ApplyModifiedProperties();
        mainObject.ApplyModifiedProperties();
        generatorObject.Update();
        mainObject.Update();

        DrawContextTools();
        DrawLegendAndStats();
        if (editMode == EditMode.TrayStacks)
        {
            DrawTrayStackEditor();
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
        if (showRawTrayStacks && trayStacks != null)
        {
            EditorGUILayout.Space(4f);
            EditorGUILayout.PropertyField(trayStacks, true);
        }
        EditorGUILayout.EndScrollView();

        generatorObject.ApplyModifiedProperties();
        mainObject.ApplyModifiedProperties();
    }

    private void DrawTargetSection()
    {
        using (new EditorGUILayout.VerticalScope(EditorStyles.helpBox))
        {
            EditorGUI.BeginChangeCheck();
            main = (Main)EditorGUILayout.ObjectField("Main", main, typeof(Main), true);
            if (EditorGUI.EndChangeCheck())
            {
                RefreshTargets();
            }

            using (new EditorGUI.DisabledScope(true))
            {
                EditorGUILayout.ObjectField("Grid Generator", generator, typeof(HexGridGenerator), true);
            }
        }
    }

    private void DrawHeader()
    {
        EditorGUILayout.Space(2f);
        EditorGUILayout.LabelField("Hex Board Layout", EditorStyles.boldLabel);
        EditorGUILayout.HelpBox("Edit board shape first, then place starting board stacks or tray stacks. Shape edits are saved in HexGridGenerator, stack edits are saved in Main.", MessageType.None);
        using (new EditorGUILayout.HorizontalScope())
        {
            DrawWorkflowStep("1", "Shape", "Choose active cells.", editMode == EditMode.Shape);
            DrawWorkflowStep("2", "Board Starts", "Place stacks on cells.", editMode == EditMode.StartStacks);
            DrawWorkflowStep("3", "Tray Starts", "Build draggable stacks.", editMode == EditMode.TrayStacks);
        }
    }

    private void DrawModeTabs()
    {
        string[] modes = { "1. Shape", "2. Board Starts", "3. Tray Starts" };
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

    private void DrawGridSettings()
    {
        using (new EditorGUILayout.VerticalScope(EditorStyles.helpBox))
        {
            using (new EditorGUILayout.HorizontalScope())
            {
                radius.intValue = EditorGUILayout.IntSlider(new GUIContent("Edit Radius", "Visible edit area around coordinate 0,0."), Mathf.Max(0, radius.intValue), 0, 8);
                if (GUILayout.Button("-", GUILayout.Width(28f)))
                {
                    radius.intValue = Mathf.Max(0, radius.intValue - 1);
                }
                if (GUILayout.Button("+", GUILayout.Width(28f)))
                {
                    radius.intValue = Mathf.Min(20, radius.intValue + 1);
                }
            }

            using (new EditorGUILayout.HorizontalScope())
            {
                EditorGUILayout.PropertyField(orientation);
                EditorGUILayout.PropertyField(boardShape, new GUIContent("Runtime Shape"));
            }

            if ((HexGridGenerator.BoardShape)boardShape.enumValueIndex != HexGridGenerator.BoardShape.Custom && generator.CustomCoordinates.Count == 0)
            {
                EditorGUILayout.HelpBox("Custom shape is empty, but Runtime Shape is not Custom. Runtime will still generate Square/Hex cells.", MessageType.Warning);
                if (GUILayout.Button("Use Empty Custom Shape"))
                {
                    Undo.RecordObject(generator, "Use Empty Custom Shape");
                    generator.CustomBaseShape = GetNonCustomShape((HexGridGenerator.BoardShape)boardShape.enumValueIndex);
                    generator.Shape = HexGridGenerator.BoardShape.Custom;
                    EditorUtility.SetDirty(generator);
                    RefreshTargets();
                }
            }

            if (boardRadius != null && boardRadius.intValue != radius.intValue)
            {
                using (new EditorGUILayout.HorizontalScope())
                {
                    EditorGUILayout.HelpBox("Main.boardRadius differs from Edit Radius. Runtime Initialize copies Main.boardRadius into HexGridGenerator.Radius.", MessageType.Warning);
                    if (GUILayout.Button("Sync Main", GUILayout.Width(90f)))
                    {
                        Undo.RecordObject(main, "Sync Board Radius");
                        boardRadius.intValue = radius.intValue;
                    }
                }
            }

            showAdvancedSettings = EditorGUILayout.Foldout(showAdvancedSettings, "Advanced", true);
            if (showAdvancedSettings)
            {
                EditorGUILayout.PropertyField(cellSize);
                using (new EditorGUI.DisabledScope((HexGridGenerator.BoardShape)boardShape.enumValueIndex != HexGridGenerator.BoardShape.Custom))
                {
                    DrawCustomLayoutPopup();
                }
                showRawStartStacks = EditorGUILayout.Toggle("Show Raw Board Start Stacks", showRawStartStacks);
                showRawTrayStacks = EditorGUILayout.Toggle("Show Raw Tray Start Stacks", showRawTrayStacks);
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
            else
            {
                DrawTrayStackTools();
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
            if (GUILayout.Button(new GUIContent("Use Square Preset", "Replace custom shape with a square using Edit Radius.")))
            {
                SetCustomCoordinates(GenerateSquareCoordinates(radius.intValue), HexGridGenerator.BoardShape.Square);
            }
            if (GUILayout.Button(new GUIContent("Use Hex Preset", "Replace custom shape with a hexagon using Edit Radius.")))
            {
                SetCustomCoordinates(GenerateHexagonCoordinates(radius.intValue), HexGridGenerator.BoardShape.Hexagon);
            }
            if (GUILayout.Button(new GUIContent("Invert Visible", "Invert active cells inside the visible edit area.")))
            {
                InvertVisibleShape();
            }
            if (GUILayout.Button(new GUIContent("Clear Shape", "Remove every custom cell.")))
            {
                if (EditorUtility.DisplayDialog("Clear Shape", "Remove all custom cells and start stacks outside the empty shape?", "Clear", "Cancel"))
                {
                    SetCustomCoordinates(new List<Vector2Int>(), GetPreviewShape());
                    RemoveStartStacksOutsideShape();
                }
            }
        }
    }

    private void DrawStartStackTools()
    {
        EditorGUILayout.LabelField("Board Start Stack Tools", EditorStyles.boldLabel);
        EditorGUILayout.HelpBox("Click an active cell to select it. If the selected cell is empty, use Add Stack or click it in Board Starts mode to create a red starter stack.", MessageType.None);

        using (new EditorGUILayout.HorizontalScope())
        {
            if (GUILayout.Button("Clean Stacks Outside Shape"))
            {
                Undo.RecordObject(main, "Remove Start Stacks Outside Shape");
                RemoveStartStacksOutsideShape();
                EditorUtility.SetDirty(main);
            }
            using (new EditorGUI.DisabledScope(!hasSelectedCell))
            {
                if (GUILayout.Button("Use Selected As Tutorial Target"))
                {
                    Undo.RecordObject(main, "Set Tutorial Target");
                    tutorialTargetCell.vector2IntValue = selectedCell;
                    EditorUtility.SetDirty(main);
                }
            }
        }
    }

    private void DrawTrayStackTools()
    {
        EditorGUILayout.LabelField("Tray Start Stack Tools", EditorStyles.boldLabel);
        EditorGUILayout.HelpBox("Edit draggable stacks that appear in the tray at level start. Colors are stored bottom to top.", MessageType.None);
        if (trayStacks == null)
        {
            EditorGUILayout.HelpBox("Main.trayStacks was not found.", MessageType.Warning);
            return;
        }

        using (new EditorGUILayout.HorizontalScope())
        {
            if (GUILayout.Button("Add Stack"))
            {
                Undo.RecordObject(main, "Add Tray Stack");
                selectedTrayStackIndex = AddTrayStack();
                EditorUtility.SetDirty(main);
            }
            using (new EditorGUI.DisabledScope(!HasSelectedTrayStack()))
            {
                if (GUILayout.Button("Duplicate Selected"))
                {
                    Undo.RecordObject(main, "Duplicate Tray Stack");
                    DuplicateSelectedTrayStack(GetSelectedTrayStackColors());
                    EditorUtility.SetDirty(main);
                }
                if (GUILayout.Button("Move Left"))
                {
                    Undo.RecordObject(main, "Move Tray Stack");
                    MoveSelectedTrayStack(-1);
                    EditorUtility.SetDirty(main);
                }
                if (GUILayout.Button("Move Right"))
                {
                    Undo.RecordObject(main, "Move Tray Stack");
                    MoveSelectedTrayStack(1);
                    EditorUtility.SetDirty(main);
                }
                if (GUILayout.Button("Delete Selected"))
                {
                    Undo.RecordObject(main, "Remove Tray Stack");
                    RemoveSelectedTrayStack();
                    EditorUtility.SetDirty(main);
                }
            }
        }

        using (new EditorGUILayout.HorizontalScope())
        {
            if (GUILayout.Button("Generate Default Tray"))
            {
                bool replace = trayStacks.arraySize == 0 || EditorUtility.DisplayDialog("Generate Default Tray", "Replace all tray stacks with the default generated set?", "Replace", "Cancel");
                if (replace)
                {
                    Undo.RecordObject(main, "Generate Tray Stacks");
                    GenerateTrayStacks();
                    selectedTrayStackIndex = trayStacks.arraySize > 0 ? 0 : -1;
                    EditorUtility.SetDirty(main);
                }
            }
            using (new EditorGUI.DisabledScope(trayStacks.arraySize == 0))
            {
                if (GUILayout.Button("Clear All Tray Stacks"))
                {
                    if (EditorUtility.DisplayDialog("Clear Tray Stacks", "Remove every tray stack?", "Clear", "Cancel"))
                    {
                        Undo.RecordObject(main, "Clear Tray Stacks");
                        trayStacks.ClearArray();
                        selectedTrayStackIndex = -1;
                        EditorUtility.SetDirty(main);
                    }
                }
            }
        }
    }

    private void DrawLegendAndStats()
    {
        int activeCount = generator.GenerateCoordinates().Count;
        int startCount = startingBoardStacks.arraySize;
        int trayCount = trayStacks != null ? trayStacks.arraySize : 0;
        string selected = hasSelectedCell ? selectedCell.ToString() : "none";

        if (editMode == EditMode.TrayStacks)
        {
            using (new EditorGUILayout.HorizontalScope(EditorStyles.helpBox))
            {
                EditorGUILayout.LabelField("Tray Stacks: " + trayCount + "   Selected Tray: " + (HasSelectedTrayStack() ? selectedTrayStackIndex.ToString() : "none"), EditorStyles.boldLabel);
                GUILayout.FlexibleSpace();
                EditorGUILayout.LabelField("Colors are shown bottom -> top. T marks the top piece.", EditorStyles.miniLabel, GUILayout.Width(260f));
            }
            return;
        }

        using (new EditorGUILayout.HorizontalScope(EditorStyles.helpBox))
        {
            DrawLegendSwatch(ActiveCellColor, "Active");
            DrawLegendSwatch(InactiveCellColor, "Off");
            DrawLegendSwatch(StartCellColor, "Start");
            DrawLegendSwatch(TutorialCellColor, "Tutorial");
            DrawLegendSwatch(SelectedCellColor, "Selected");
            GUILayout.FlexibleSpace();
            EditorGUILayout.LabelField("Cells: " + activeCount + "   Board: " + startCount + "   Tray: " + trayCount + "   Selected: " + selected, GUILayout.Width(330f));
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
            : editMode == EditMode.StartStacks
                ? "Board Starts mode: only active hexes are editable. The label shows stack colors from bottom to top."
                : "Tray Starts mode: the board canvas is read-only here. Use the tray editor below.";
        EditorGUILayout.HelpBox(hint, MessageType.None);

        int editRadius = Mathf.Max(0, radius.intValue);
        HashSet<Vector2Int> active = new HashSet<Vector2Int>(generator.GenerateCoordinates());
        List<Vector2Int> visibleCoordinates = GenerateSquareCoordinates(editRadius);
        Dictionary<Vector2Int, Vector2> centers = BuildCanvasCenters(visibleCoordinates, out Rect contentBounds);
        Rect contentRect = new Rect(0f, 0f, contentBounds.width + CanvasPadding * 2f, contentBounds.height + CanvasPadding * 2f);
        float canvasHeight = Mathf.Clamp(position.height - 430f, MinCanvasHeight, 620f);
        Rect viewport = GUILayoutUtility.GetRect(GUIContent.none, GUIStyle.none, GUILayout.ExpandWidth(true), GUILayout.Height(canvasHeight));

        GUI.Box(viewport, GUIContent.none, EditorStyles.helpBox);
        scroll = GUI.BeginScrollView(viewport, scroll, contentRect, true, true);
        DrawCanvasBackground(contentRect);

        Event currentEvent = Event.current;
        foreach (Vector2Int coordinate in visibleCoordinates)
        {
            bool isActive = active.Contains(coordinate);
            bool hasStart = FindStartStackIndex(coordinate) >= 0;
            bool selected = hasSelectedCell && selectedCell == coordinate;
            bool tutorial = tutorialTargetCell.vector2IntValue == coordinate;
            DrawHexCell(coordinate, centers[coordinate], isActive, hasStart, selected, tutorial, currentEvent);
        }
        GUI.EndScrollView();
    }

    private Dictionary<Vector2Int, Vector2> BuildCanvasCenters(List<Vector2Int> coordinates, out Rect contentBounds)
    {
        Dictionary<Vector2Int, Vector2> centers = new Dictionary<Vector2Int, Vector2>();
        Vector2 min = new Vector2(float.MaxValue, float.MaxValue);
        Vector2 max = new Vector2(float.MinValue, float.MinValue);
        HexGridGenerator.BoardShape previewShape = GetPreviewShape();

        foreach (Vector2Int coordinate in coordinates)
        {
            Vector2 center = CoordinateToCanvasPosition(coordinate, previewShape, generator.Orientation, HexPixelRadius);
            centers.Add(coordinate, center);
            min = Vector2.Min(min, center);
            max = Vector2.Max(max, center);
        }

        contentBounds = Rect.MinMaxRect(min.x - HexPixelRadius, min.y - HexPixelRadius, max.x + HexPixelRadius, max.y + HexPixelRadius);
        List<Vector2Int> keys = new List<Vector2Int>(centers.Keys);
        foreach (Vector2Int key in keys)
        {
            Vector2 shifted = centers[key] - contentBounds.min + Vector2.one * CanvasPadding;
            centers[key] = shifted;
        }

        return centers;
    }

    private HexGridGenerator.BoardShape GetPreviewShape()
    {
        HexGridGenerator.BoardShape shape = generator.Shape;
        return shape == HexGridGenerator.BoardShape.Custom ? GetNonCustomShape(generator.CustomBaseShape) : GetNonCustomShape(shape);
    }

    private static HexGridGenerator.BoardShape GetNonCustomShape(HexGridGenerator.BoardShape shape)
    {
        return shape == HexGridGenerator.BoardShape.Hexagon ? HexGridGenerator.BoardShape.Hexagon : HexGridGenerator.BoardShape.Square;
    }

    private void DrawCanvasBackground(Rect contentRect)
    {
        EditorGUI.DrawRect(contentRect, new Color(0.12f, 0.12f, 0.12f, 1f));
    }

    private void DrawHexCell(Vector2Int coordinate, Vector2 center, bool isActive, bool hasStart, bool selected, bool tutorial, Event currentEvent)
    {
        bool disabled = editMode == EditMode.StartStacks && !isActive;
        Color fill = selected ? SelectedCellColor : tutorial ? TutorialCellColor : hasStart ? StartCellColor : isActive ? ActiveCellColor : InactiveCellColor;
        if (disabled)
        {
            fill = new Color(fill.r, fill.g, fill.b, 0.35f);
        }

        Vector3[] points = GetHexGuiPoints(center, HexPixelRadius, generator.Orientation);
        Handles.BeginGUI();
        Handles.color = fill;
        Handles.DrawAAConvexPolygon(points);
        Handles.color = selected ? Color.white : new Color(0f, 0f, 0f, disabled ? 0.35f : 0.75f);
        Handles.DrawAAPolyLine(2f, ClosePolygon(points));
        Handles.EndGUI();

        Rect labelRect = new Rect(center.x - HexPixelRadius * 0.78f, center.y - 14f, HexPixelRadius * 1.56f, 30f);
        GUIStyle labelStyle = new GUIStyle(EditorStyles.miniBoldLabel);
        labelStyle.alignment = TextAnchor.MiddleCenter;
        labelStyle.normal.textColor = disabled ? new Color(1f, 1f, 1f, 0.42f) : Color.white;
        labelStyle.clipping = TextClipping.Clip;
        GUI.Label(labelRect, BuildCellLabel(coordinate, isActive, hasStart), labelStyle);

        if (!disabled && currentEvent.type == EventType.MouseDown && currentEvent.button == 0 && IsPointInsidePolygon(currentEvent.mousePosition, points))
        {
            HandleCellClick(coordinate, isActive, hasStart);
            currentEvent.Use();
            Repaint();
        }
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

    private string BuildCellLabel(Vector2Int coordinate, bool isActive, bool hasStart)
    {
        if (hasStart)
        {
            int index = FindStartStackIndex(coordinate);
            return coordinate.x + "," + coordinate.y + "\n" + StackSummary(GetBoardStackColorsProperty(startingBoardStacks.GetArrayElementAtIndex(index)));
        }

        return isActive ? coordinate.x + "," + coordinate.y : "+";
    }

    private string BuildCellTooltip(Vector2Int coordinate, bool isActive, bool hasStart)
    {
        string state = isActive ? "active" : "inactive";
        string stack = hasStart ? "has start stack" : "no start stack";
        return coordinate + " - " + state + ", " + stack;
    }

    private void HandleCellClick(Vector2Int coordinate, bool isActive, bool hasStart)
    {
        hasSelectedCell = true;
        selectedCell = coordinate;

        if (editMode == EditMode.Shape)
        {
            ApplyShapeBrush(coordinate, isActive);
            return;
        }

        if (editMode == EditMode.TrayStacks)
        {
            return;
        }

        if (isActive && !hasStart)
        {
            Undo.RecordObject(main, "Add Start Stack");
            AddOrUpdateStartStack(coordinate);
            EditorUtility.SetDirty(main);
        }
    }

    private void DrawSelectedCellEditor()
    {
        EditorGUILayout.Space(6f);
        using (new EditorGUILayout.VerticalScope(EditorStyles.helpBox))
        {
            EditorGUILayout.LabelField("Selected Cell", EditorStyles.boldLabel);
            if (!hasSelectedCell)
            {
                EditorGUILayout.HelpBox("Select a cell in the grid.", MessageType.None);
                return;
            }

            bool isActive = new HashSet<Vector2Int>(generator.GenerateCoordinates()).Contains(selectedCell);
            EditorGUILayout.LabelField("Coordinate", selectedCell.ToString());
            EditorGUILayout.LabelField("State", isActive ? "Active" : "Inactive");

            if (!isActive)
            {
                EditorGUILayout.HelpBox("This cell is not part of the board shape. Add it in Shape mode before assigning a start stack.", MessageType.Warning);
                return;
            }

            using (new EditorGUILayout.HorizontalScope())
            {
                if (GUILayout.Button("Add/Update Start Stack"))
                {
                    Undo.RecordObject(main, "Add Start Stack");
                    AddOrUpdateStartStack(selectedCell);
                    EditorUtility.SetDirty(main);
                }
                if (GUILayout.Button("Remove Start Stack"))
                {
                    Undo.RecordObject(main, "Remove Start Stack");
                    RemoveStartStack(selectedCell);
                    EditorUtility.SetDirty(main);
                }
                if (GUILayout.Button("Tutorial Target"))
                {
                    Undo.RecordObject(main, "Set Tutorial Target");
                    tutorialTargetCell.vector2IntValue = selectedCell;
                    EditorUtility.SetDirty(main);
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
                    Undo.RecordObject(main, "Remove Stack Color");
                    RemoveTopColor(colors);
                    EditorUtility.SetDirty(main);
                }
                if (GUILayout.Button("Clear Stack"))
                {
                    Undo.RecordObject(main, "Clear Stack");
                    colors?.ClearArray();
                    EditorUtility.SetDirty(main);
                }
            }
        }
    }

    private void RefreshTargets()
    {
        if (main == null)
        {
            main = FindObjectOfType<Main>();
        }

        mainObject = main != null ? new SerializedObject(main) : null;
        boardRadius = mainObject?.FindProperty("boardRadius");
        startingBoardStacks = mainObject?.FindProperty("startingBoardStacks");
        trayStacks = mainObject?.FindProperty("trayStacks");
        tutorialTargetCell = mainObject?.FindProperty("tutorialTargetCell");

        BoardController controller = main != null ? main.FindSceneComponent<BoardController>() : null;
        generator = controller != null ? controller.GetComponent<HexGridGenerator>() : null;
        generatorObject = generator != null ? new SerializedObject(generator) : null;
        radius = generatorObject?.FindProperty("radius");
        cellSize = generatorObject?.FindProperty("cellSize");
        boardShape = generatorObject?.FindProperty("boardShape");
        customBaseShape = generatorObject?.FindProperty("customBaseShape");
        orientation = generatorObject?.FindProperty("orientation");
        ClampSelectedTrayStackIndex();
    }

    private void DrawTrayStackEditor()
    {
        EditorGUILayout.Space(6f);
        using (new EditorGUILayout.VerticalScope(EditorStyles.helpBox))
        {
            EditorGUILayout.LabelField("Tray Start Stacks", EditorStyles.boldLabel);
            if (trayStacks == null)
            {
                EditorGUILayout.HelpBox("Main.trayStacks was not found.", MessageType.Warning);
                return;
            }

            if (trayStacks.arraySize == 0)
            {
                EditorGUILayout.HelpBox("Tray has no start stacks. Add one or generate defaults.", MessageType.None);
                using (new EditorGUILayout.HorizontalScope())
                {
                    if (GUILayout.Button("Add First Stack"))
                    {
                        Undo.RecordObject(main, "Add Tray Stack");
                        selectedTrayStackIndex = AddTrayStack();
                        EditorUtility.SetDirty(main);
                    }
                    if (GUILayout.Button("Generate Defaults"))
                    {
                        Undo.RecordObject(main, "Generate Tray Stacks");
                        GenerateTrayStacks();
                        selectedTrayStackIndex = trayStacks.arraySize > 0 ? 0 : -1;
                        EditorUtility.SetDirty(main);
                    }
                }
                return;
            }

            ClampSelectedTrayStackIndex();
            DrawTrayStackCards();

            SerializedProperty colors = GetSelectedTrayStackColors();
            if (colors == null)
            {
                EditorGUILayout.HelpBox("Selected tray stack has no colorsBottomToTop property.", MessageType.Warning);
                return;
            }

            EditorGUILayout.Space(4f);
            EditorGUILayout.LabelField("Selected Tray Stack " + selectedTrayStackIndex, EditorStyles.boldLabel);
            DrawStackPreview(colors);
            EditorGUILayout.PropertyField(colors, new GUIContent("Colors Bottom To Top"), true);

            DrawColorPalette(colors, "Add Tray Stack Color");

            using (new EditorGUILayout.HorizontalScope())
            {
                if (GUILayout.Button("Remove Top"))
                {
                    Undo.RecordObject(main, "Remove Tray Stack Color");
                    RemoveTopColor(colors);
                    EditorUtility.SetDirty(main);
                }
                if (GUILayout.Button("Clear Stack"))
                {
                    Undo.RecordObject(main, "Clear Tray Stack");
                    colors?.ClearArray();
                    EditorUtility.SetDirty(main);
                }
                if (GUILayout.Button("Duplicate Stack"))
                {
                    Undo.RecordObject(main, "Duplicate Tray Stack");
                    DuplicateSelectedTrayStack(colors);
                    EditorUtility.SetDirty(main);
                }
            }
        }
    }

    private void DrawTrayStackCards()
    {
        float availableWidth = Mathf.Max(260f, position.width - 54f);
        int columns = Mathf.Clamp(Mathf.FloorToInt(availableWidth / 220f), 1, 4);
        float cardWidth = Mathf.Floor((availableWidth - (columns - 1) * 6f) / columns);

        for (int rowStart = 0; rowStart < trayStacks.arraySize; rowStart += columns)
        {
            using (new EditorGUILayout.HorizontalScope())
            {
                for (int column = 0; column < columns; column++)
                {
                    int index = rowStart + column;
                    if (index < trayStacks.arraySize)
                    {
                        DrawTrayStackCard(index, cardWidth);
                    }
                    else
                    {
                        GUILayout.Space(cardWidth);
                    }
                }
            }
        }
    }

    private void DrawTrayStackCard(int index, float width)
    {
        SerializedProperty colors = GetTrayStackColorsProperty(trayStacks.GetArrayElementAtIndex(index));
        int colorCount = colors != null ? colors.arraySize : 0;
        Rect rect = GUILayoutUtility.GetRect(width, TrayCardHeight, GUILayout.Width(width), GUILayout.Height(TrayCardHeight));

        if (Event.current.type == EventType.Repaint)
        {
            EditorStyles.helpBox.Draw(rect, GUIContent.none, false, false, false, false);
            if (selectedTrayStackIndex == index)
            {
                DrawRectOutline(rect, SelectedCellColor, 2f);
            }
        }

        if (Event.current.type == EventType.MouseDown && Event.current.button == 0 && rect.Contains(Event.current.mousePosition))
        {
            selectedTrayStackIndex = index;
            GUI.FocusControl(null);
            Event.current.Use();
            Repaint();
        }

        Rect titleRect = new Rect(rect.x + 10f, rect.y + 6f, rect.width - 20f, 18f);
        GUI.Label(titleRect, "Tray " + index + "  |  " + colorCount + " colors", EditorStyles.boldLabel);
        Rect previewRect = new Rect(rect.x + 10f, rect.y + 30f, rect.width - 20f, StackChipSize);
        DrawStackPreview(previewRect, colors, StackChipSize);
    }

    private void ApplyShapeBrush(Vector2Int coordinate, bool isActive)
    {
        if (shapeBrush == ShapeBrush.Select)
        {
            return;
        }

        Undo.RecordObject(generator, "Edit Hex Grid Shape");
        Undo.RecordObject(main, "Edit Hex Grid Shape");
        EnsureCustomShapeFromCurrent();

        if (shapeBrush == ShapeBrush.Toggle)
        {
            if (isActive)
            {
                RemoveShapeCell(coordinate);
            }
            else
            {
                generator.AddCustomCoordinate(coordinate);
            }
        }
        else if (shapeBrush == ShapeBrush.Add)
        {
            generator.AddCustomCoordinate(coordinate);
        }
        else if (shapeBrush == ShapeBrush.Erase)
        {
            RemoveShapeCell(coordinate);
        }

        generator.Shape = HexGridGenerator.BoardShape.Custom;
        EditorUtility.SetDirty(generator);
        EditorUtility.SetDirty(main);
        mainObject.ApplyModifiedProperties();
        RefreshTargets();
    }

    private void RemoveShapeCell(Vector2Int coordinate)
    {
        generator.RemoveCustomCoordinate(coordinate);
        RemoveStartStack(coordinate);
    }

    private void EnsureCustomShapeFromCurrent()
    {
        if (generator.Shape == HexGridGenerator.BoardShape.Custom)
        {
            return;
        }

        HexGridGenerator.BoardShape sourceShape = GetNonCustomShape(generator.Shape);
        List<Vector2Int> currentCoordinates = generator.GenerateCoordinates();
        generator.CustomBaseShape = sourceShape;
        generator.SetCustomCoordinates(currentCoordinates);
        generator.Shape = HexGridGenerator.BoardShape.Custom;
    }

    private void SetCustomCoordinates(List<Vector2Int> coordinates, HexGridGenerator.BoardShape layoutShape)
    {
        Undo.RecordObject(generator, "Set Hex Grid Shape");
        generator.CustomBaseShape = GetNonCustomShape(layoutShape);
        generator.SetCustomCoordinates(coordinates);
        generator.Shape = HexGridGenerator.BoardShape.Custom;
        EditorUtility.SetDirty(generator);
        RefreshTargets();
    }

    private void InvertVisibleShape()
    {
        Undo.RecordObject(generator, "Invert Hex Grid Shape");
        Undo.RecordObject(main, "Invert Hex Grid Shape");
        EnsureCustomShapeFromCurrent();

        HashSet<Vector2Int> active = new HashSet<Vector2Int>(generator.GenerateCoordinates());
        List<Vector2Int> inverted = new List<Vector2Int>();
        int editRadius = Mathf.Max(0, radius.intValue);
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

        generator.SetCustomCoordinates(inverted);
        RemoveStartStacksOutsideShape();
        EditorUtility.SetDirty(generator);
        EditorUtility.SetDirty(main);
        mainObject.ApplyModifiedProperties();
        RefreshTargets();
    }

    private void RemoveStartStacksOutsideShape()
    {
        HashSet<Vector2Int> active = new HashSet<Vector2Int>(generator.GenerateCoordinates());
        for (int i = startingBoardStacks.arraySize - 1; i >= 0; i--)
        {
            Vector2Int coordinate = startingBoardStacks.GetArrayElementAtIndex(i).FindPropertyRelative("coordinate").vector2IntValue;
            if (!active.Contains(coordinate))
            {
                startingBoardStacks.DeleteArrayElementAtIndex(i);
            }
        }
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
            foreach (HexColor color in System.Enum.GetValues(typeof(HexColor)))
            {
                Color previousColor = GUI.backgroundColor;
                GUI.backgroundColor = GetHexColorPreview(color);
                if (GUILayout.Button(new GUIContent(color.ToString(), "Add " + color + " to the top of this stack."), GUILayout.Height(26f)))
                {
                    Undo.RecordObject(main, undoLabel);
                    AddColorToStack(colors, color);
                    EditorUtility.SetDirty(main);
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
            HexColor color = (HexColor)colors.GetArrayElementAtIndex(i).enumValueIndex;
            Rect chipRect = new Rect(rect.x + i * step, rect.y, chipSize, chipSize);
            DrawColorChip(chipRect, color, i == colors.arraySize - 1);
        }

        if (visibleCount < colors.arraySize)
        {
            Rect moreRect = new Rect(rect.x + visibleCount * step, rect.y, 34f, chipSize);
            GUI.Label(moreRect, "+" + (colors.arraySize - visibleCount), EditorStyles.miniBoldLabel);
        }
    }

    private static void DrawColorChip(Rect rect, HexColor color, bool isTop)
    {
        Color preview = GetHexColorPreview(color);
        EditorGUI.DrawRect(rect, preview);
        DrawRectOutline(rect, Color.black, 1f);

        GUIStyle labelStyle = new GUIStyle(EditorStyles.miniBoldLabel);
        labelStyle.alignment = TextAnchor.MiddleCenter;
        labelStyle.normal.textColor = GetReadableTextColor(preview);
        GUI.Label(rect, isTop ? "T" : color.ToString()[0].ToString(), labelStyle);
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

    private bool HasSelectedTrayStack()
    {
        return trayStacks != null && selectedTrayStackIndex >= 0 && selectedTrayStackIndex < trayStacks.arraySize;
    }

    private SerializedProperty GetSelectedTrayStackColors()
    {
        if (!HasSelectedTrayStack())
        {
            return null;
        }

        return GetTrayStackColorsProperty(trayStacks.GetArrayElementAtIndex(selectedTrayStackIndex));
    }

    private void MoveSelectedTrayStack(int direction)
    {
        if (!HasSelectedTrayStack())
        {
            return;
        }

        int nextIndex = Mathf.Clamp(selectedTrayStackIndex + direction, 0, trayStacks.arraySize - 1);
        if (nextIndex == selectedTrayStackIndex)
        {
            return;
        }

        trayStacks.MoveArrayElement(selectedTrayStackIndex, nextIndex);
        selectedTrayStackIndex = nextIndex;
    }

    private void ClampSelectedTrayStackIndex()
    {
        if (trayStacks == null || trayStacks.arraySize == 0)
        {
            selectedTrayStackIndex = -1;
            return;
        }

        selectedTrayStackIndex = Mathf.Clamp(selectedTrayStackIndex, 0, trayStacks.arraySize - 1);
    }

    private int AddTrayStack()
    {
        trayStacks.InsertArrayElementAtIndex(trayStacks.arraySize);
        int index = trayStacks.arraySize - 1;
        SerializedProperty item = trayStacks.GetArrayElementAtIndex(index);
        SerializedProperty colors = GetTrayStackColorsProperty(item);
        colors?.ClearArray();
        AddColorToStack(colors, HexColor.Red);
        return index;
    }

    private void RemoveSelectedTrayStack()
    {
        if (!HasSelectedTrayStack())
        {
            return;
        }

        trayStacks.DeleteArrayElementAtIndex(selectedTrayStackIndex);
        ClampSelectedTrayStackIndex();
    }

    private void DuplicateSelectedTrayStack(SerializedProperty sourceColors)
    {
        if (sourceColors == null)
        {
            return;
        }

        List<HexColor> colors = new List<HexColor>();
        for (int i = 0; i < sourceColors.arraySize; i++)
        {
            colors.Add((HexColor)sourceColors.GetArrayElementAtIndex(i).enumValueIndex);
        }

        trayStacks.InsertArrayElementAtIndex(selectedTrayStackIndex + 1);
        selectedTrayStackIndex++;
        SetColors(GetTrayStackColorsProperty(trayStacks.GetArrayElementAtIndex(selectedTrayStackIndex)), colors);
    }

    private void GenerateTrayStacks()
    {
        trayStacks.ClearArray();
        AddGeneratedTrayStack(HexColor.Blue, HexColor.Red);
        AddGeneratedTrayStack(HexColor.Yellow, HexColor.Blue);
        AddGeneratedTrayStack(HexColor.Purple, HexColor.Green);
    }

    private void AddGeneratedTrayStack(params HexColor[] colors)
    {
        trayStacks.InsertArrayElementAtIndex(trayStacks.arraySize);
        SerializedProperty item = trayStacks.GetArrayElementAtIndex(trayStacks.arraySize - 1);
        SetColors(GetTrayStackColorsProperty(item), colors);
    }

    private void RemoveStartStack(Vector2Int coordinate)
    {
        int index = FindStartStackIndex(coordinate);
        if (index >= 0)
        {
            startingBoardStacks.DeleteArrayElementAtIndex(index);
        }
    }

    private static SerializedProperty GetBoardStackColorsProperty(SerializedProperty boardStack)
    {
        SerializedProperty stack = boardStack.FindPropertyRelative("stack");
        return stack != null ? stack.FindPropertyRelative("colorsBottomToTop") : null;
    }

    private static SerializedProperty GetTrayStackColorsProperty(SerializedProperty trayStack)
    {
        return trayStack != null ? trayStack.FindPropertyRelative("colorsBottomToTop") : null;
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

    private static Color GetHexColorPreview(HexColor color)
    {
        switch (color)
        {
            case HexColor.Red:
                return new Color(1f, 0.28f, 0.22f, 1f);
            case HexColor.Blue:
                return new Color(0.22f, 0.55f, 1f, 1f);
            case HexColor.Green:
                return new Color(0.25f, 0.82f, 0.35f, 1f);
            case HexColor.Yellow:
                return new Color(1f, 0.9f, 0.2f, 1f);
            case HexColor.Purple:
                return new Color(0.72f, 0.35f, 1f, 1f);
            case HexColor.Orange:
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

    private static int PositiveModulo(int value, int modulo)
    {
        return (value % modulo + modulo) % modulo;
    }
}
