using System.Collections.Generic;
using UnityEditor;
using UnityEngine;

public class HexGridShapeEditorWindow : EditorWindow
{
    private enum EditMode
    {
        Shape,
        StartStacks
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

    private static readonly Color ActiveCellColor = new Color(0.18f, 0.72f, 0.9f, 1f);
    private static readonly Color InactiveCellColor = new Color(0.3f, 0.3f, 0.3f, 1f);
    private static readonly Color StartCellColor = new Color(1f, 0.66f, 0.16f, 1f);
    private static readonly Color SelectedCellColor = new Color(0.35f, 1f, 0.45f, 1f);
    private static readonly Color TutorialCellColor = new Color(1f, 0.35f, 0.95f, 1f);

    private Main main;
    private SerializedObject mainObject;
    private SerializedProperty boardRadius;
    private SerializedProperty startingBoardStacks;
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
        DrawGridEditor();
        DrawSelectedCellEditor();

        if (showRawStartStacks)
        {
            EditorGUILayout.Space(4f);
            EditorGUILayout.PropertyField(startingBoardStacks, true);
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
        EditorGUILayout.HelpBox("Edit board shape first, then place starting stacks on active cells. Shape edits are saved in HexGridGenerator, stack edits are saved in Main.", MessageType.None);
    }

    private void DrawModeTabs()
    {
        string[] modes = { "1. Shape", "2. Start Stacks" };
        editMode = (EditMode)GUILayout.Toolbar((int)editMode, modes, GUILayout.Height(28f));
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
                showRawStartStacks = EditorGUILayout.Toggle("Show Raw Start Stacks", showRawStartStacks);
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
            else
            {
                DrawStartStackTools();
            }
        }
    }

    private void DrawShapeTools()
    {
        EditorGUILayout.LabelField("Shape Brush", EditorStyles.boldLabel);
        shapeBrush = (ShapeBrush)GUILayout.Toolbar((int)shapeBrush, new[] { "Toggle", "Add", "Erase", "Select" }, GUILayout.Height(26f));

        using (new EditorGUILayout.HorizontalScope())
        {
            if (GUILayout.Button(new GUIContent("Square Preset", "Replace custom shape with a square using Edit Radius.")))
            {
                SetCustomCoordinates(GenerateSquareCoordinates(radius.intValue), HexGridGenerator.BoardShape.Square);
            }
            if (GUILayout.Button(new GUIContent("Hex Preset", "Replace custom shape with a hexagon using Edit Radius.")))
            {
                SetCustomCoordinates(GenerateHexagonCoordinates(radius.intValue), HexGridGenerator.BoardShape.Hexagon);
            }
            if (GUILayout.Button(new GUIContent("Invert", "Invert active cells inside the visible edit area.")))
            {
                InvertVisibleShape();
            }
            if (GUILayout.Button(new GUIContent("Clear", "Remove every custom cell.")))
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
        EditorGUILayout.LabelField("Start Stack Tools", EditorStyles.boldLabel);
        EditorGUILayout.HelpBox("Click an active cell to select it. Empty active cells get a red starter stack on first click.", MessageType.None);

        using (new EditorGUILayout.HorizontalScope())
        {
            if (GUILayout.Button("Remove Stacks Outside Shape"))
            {
                Undo.RecordObject(main, "Remove Start Stacks Outside Shape");
                RemoveStartStacksOutsideShape();
                EditorUtility.SetDirty(main);
            }
            using (new EditorGUI.DisabledScope(!hasSelectedCell))
            {
                if (GUILayout.Button("Set Tutorial To Selected"))
                {
                    Undo.RecordObject(main, "Set Tutorial Target");
                    tutorialTargetCell.vector2IntValue = selectedCell;
                }
            }
        }
    }

    private void DrawLegendAndStats()
    {
        int activeCount = generator.GenerateCoordinates().Count;
        int startCount = startingBoardStacks.arraySize;
        string selected = hasSelectedCell ? selectedCell.ToString() : "none";

        using (new EditorGUILayout.HorizontalScope(EditorStyles.helpBox))
        {
            DrawLegendSwatch(ActiveCellColor, "Active");
            DrawLegendSwatch(InactiveCellColor, "Off");
            DrawLegendSwatch(StartCellColor, "Start");
            DrawLegendSwatch(TutorialCellColor, "Tutorial");
            DrawLegendSwatch(SelectedCellColor, "Selected");
            GUILayout.FlexibleSpace();
            EditorGUILayout.LabelField("Cells: " + activeCount + "   Starts: " + startCount + "   Selected: " + selected, GUILayout.Width(260f));
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
            : "Start Stacks mode: only active hexes are editable. The label shows stack colors from bottom to top.";
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

        if (isActive && !hasStart)
        {
            Undo.RecordObject(main, "Add Start Stack");
            AddOrUpdateStartStack(coordinate);
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
                }
                if (GUILayout.Button("Remove Start Stack"))
                {
                    Undo.RecordObject(main, "Remove Start Stack");
                    RemoveStartStack(selectedCell);
                }
                if (GUILayout.Button("Tutorial Target"))
                {
                    Undo.RecordObject(main, "Set Tutorial Target");
                    tutorialTargetCell.vector2IntValue = selectedCell;
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
            EditorGUILayout.LabelField("Stack", StackSummary(colors));
            EditorGUILayout.PropertyField(colors, new GUIContent("Colors Bottom To Top"), true);

            using (new EditorGUILayout.HorizontalScope())
            {
                foreach (HexColor color in System.Enum.GetValues(typeof(HexColor)))
                {
                    Color previousColor = GUI.backgroundColor;
                    GUI.backgroundColor = GetHexColorPreview(color);
                    if (GUILayout.Button(color.ToString()[0].ToString(), GUILayout.Height(24f)))
                    {
                        Undo.RecordObject(main, "Add Stack Color");
                        AddColorToStack(colors, color);
                    }
                    GUI.backgroundColor = previousColor;
                }
            }

            using (new EditorGUILayout.HorizontalScope())
            {
                if (GUILayout.Button("Remove Top"))
                {
                    Undo.RecordObject(main, "Remove Stack Color");
                    RemoveTopColor(colors);
                }
                if (GUILayout.Button("Clear Stack"))
                {
                    Undo.RecordObject(main, "Clear Stack");
                    colors?.ClearArray();
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
        tutorialTargetCell = mainObject?.FindProperty("tutorialTargetCell");

        BoardController controller = main != null ? main.FindSceneComponent<BoardController>() : null;
        generator = controller != null ? controller.GetComponent<HexGridGenerator>() : null;
        generatorObject = generator != null ? new SerializedObject(generator) : null;
        radius = generatorObject?.FindProperty("radius");
        cellSize = generatorObject?.FindProperty("cellSize");
        boardShape = generatorObject?.FindProperty("boardShape");
        customBaseShape = generatorObject?.FindProperty("customBaseShape");
        orientation = generatorObject?.FindProperty("orientation");
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
