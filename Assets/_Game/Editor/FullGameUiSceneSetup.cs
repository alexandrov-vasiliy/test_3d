using System.IO;
using _Game.UI;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

/// <summary>
/// Builds editor-authored full-game UI prefabs, places prefab instances and required UI event infrastructure in the Game scene, and wires them into Main.
/// </summary>
[InitializeOnLoad]
public static class FullGameUiSceneSetup
{
    private const string ScenePath = "Assets/_Game/Scenes/Game.unity";
    private const string PrefabFolder = "Assets/_Game/Prefabs/UI";
    private const string CanvasName = "FullGameCanvas";
    private const string AutoRunMarkerPath = "Temp/RunFullGameUiSceneSetup.marker";

    static FullGameUiSceneSetup()
    {
        EditorApplication.delayCall += RunIfMarked;
    }

    [MenuItem("Tools/Hex Merge/Setup Full Game UI")]
    public static void SetupFullGameUi()
    {
        if (!Application.isBatchMode && !EditorSceneManager.SaveCurrentModifiedScenesIfUserWantsTo())
        {
            Debug.Log("Full-game UI setup was cancelled before switching scenes.");
            return;
        }

        EnsurePrefabFolder();
        Scene scene = EditorSceneManager.OpenScene(ScenePath, OpenSceneMode.Single);
        Canvas canvas = EnsureCanvas();
        EnsureEventSystem();

        LevelHudView hudView = EnsurePrefabInstance<LevelHudView>(canvas.transform, "LevelHud", CreateLevelHudPrefab);
        GoalsPanelView goalsPanelView = EnsurePrefabInstance<GoalsPanelView>(canvas.transform, "GoalsPanel", CreateGoalsPanelPrefab);
        WinScreenView winScreenView = EnsurePrefabInstance<WinScreenView>(canvas.transform, "WinScreen", CreateWinScreenPrefab);
        LoseScreenView loseScreenView = EnsurePrefabInstance<LoseScreenView>(canvas.transform, "LoseScreen", CreateLoseScreenPrefab);
        LevelTransitionView transitionView = EnsurePrefabInstance<LevelTransitionView>(canvas.transform, "LevelTransition", CreateTransitionPrefab);
        hudView.gameObject.SetActive(true);
        goalsPanelView.gameObject.SetActive(true);
        winScreenView.gameObject.SetActive(false);
        loseScreenView.gameObject.SetActive(false);
        transitionView.gameObject.SetActive(false);

        GameObject mainObject = GameObject.Find("[Main]");
        Main main = mainObject != null ? mainObject.GetComponent<Main>() : Object.FindObjectOfType<Main>();
        if (main == null)
        {
            throw new MissingReferenceException("Main was not found in " + ScenePath + ".");
        }

        SerializedObject mainSerialized = new SerializedObject(main);
        mainSerialized.FindProperty("levelHudView").objectReferenceValue = hudView;
        mainSerialized.FindProperty("goalsPanelView").objectReferenceValue = goalsPanelView;
        mainSerialized.FindProperty("winScreenView").objectReferenceValue = winScreenView;
        mainSerialized.FindProperty("loseScreenView").objectReferenceValue = loseScreenView;
        mainSerialized.FindProperty("levelTransitionView").objectReferenceValue = transitionView;
        mainSerialized.ApplyModifiedPropertiesWithoutUndo();
        EditorUtility.SetDirty(main);

        EditorSceneManager.MarkSceneDirty(scene);
        EditorSceneManager.SaveScene(scene);
        AssetDatabase.SaveAssets();
        Debug.Log("Full-game UI prefabs were created/updated, placed in Game scene, and wired into Main.");
    }

    private static void RunIfMarked()
    {
        if (!File.Exists(AutoRunMarkerPath))
        {
            return;
        }

        File.Delete(AutoRunMarkerPath);
        SetupFullGameUi();
    }

    private static Canvas EnsureCanvas()
    {
        GameObject existing = GameObject.Find(CanvasName);
        if (existing != null && existing.TryGetComponent(out Canvas existingCanvas))
        {
            return existingCanvas;
        }

        GameObject canvasObject = new GameObject(CanvasName, typeof(RectTransform), typeof(Canvas), typeof(CanvasScaler), typeof(GraphicRaycaster));
        Canvas canvas = canvasObject.GetComponent<Canvas>();
        canvas.renderMode = RenderMode.ScreenSpaceOverlay;
        canvas.sortingOrder = 20;

        CanvasScaler scaler = canvasObject.GetComponent<CanvasScaler>();
        scaler.uiScaleMode = CanvasScaler.ScaleMode.ScaleWithScreenSize;
        scaler.referenceResolution = new Vector2(1080f, 1920f);
        scaler.matchWidthOrHeight = 0.5f;

        return canvas;
    }

    private static void EnsureEventSystem()
    {
        EventSystem existing = Object.FindObjectOfType<EventSystem>();
        if (existing != null)
        {
            if (existing.GetComponent<BaseInputModule>() == null)
            {
                existing.gameObject.AddComponent<StandaloneInputModule>();
            }

            return;
        }

        GameObject eventSystemObject = new GameObject("EventSystem", typeof(EventSystem), typeof(StandaloneInputModule));
        eventSystemObject.transform.SetAsLastSibling();
    }

    private static T EnsurePrefabInstance<T>(Transform parent, string instanceName, System.Func<GameObject> prefabFactory) where T : Component
    {
        T existing = FindChildComponent<T>(parent, instanceName);
        if (existing != null)
        {
            return existing;
        }

        GameObject prefab = prefabFactory();
        GameObject instance = (GameObject)PrefabUtility.InstantiatePrefab(prefab, parent.gameObject.scene);
        instance.name = instanceName;
        instance.transform.SetParent(parent, false);
        RectTransform rectTransform = instance.GetComponent<RectTransform>();
        if (rectTransform != null)
        {
            rectTransform.localScale = Vector3.one;
        }

        T component = instance.GetComponent<T>();
        if (component == null)
        {
            throw new MissingComponentException("Created UI prefab has no " + typeof(T).Name + ": " + instanceName);
        }

        return component;
    }

    private static T FindChildComponent<T>(Transform parent, string objectName) where T : Component
    {
        for (int i = 0; i < parent.childCount; i++)
        {
            Transform child = parent.GetChild(i);
            if (child.name == objectName && child.TryGetComponent(out T component))
            {
                return component;
            }
        }

        return null;
    }

    private static GameObject CreateLevelHudPrefab()
    {
        string path = PrefabFolder + "/LevelHud.prefab";
        GameObject existing = AssetDatabase.LoadAssetAtPath<GameObject>(path);
        if (existing != null)
        {
            return existing;
        }

        GameObject root = CreatePanelRoot("LevelHud", new Color(0.05f, 0.08f, 0.1f, 0.72f));
        RectTransform rootRect = root.GetComponent<RectTransform>();
        SetAnchor(rootRect, new Vector2(0f, 1f), new Vector2(0f, 1f), new Vector2(24f, -24f), new Vector2(320f, 88f));
        Text levelText = CreateText("LevelText", root.transform, "Level 1", 38, TextAnchor.MiddleLeft, Color.white);
        SetStretch(levelText.rectTransform, new Vector2(22f, 0f), new Vector2(-22f, 0f));

        LevelHudView view = root.AddComponent<LevelHudView>();
        SetObjectReference(view, "levelText", levelText);
        return SavePrefabAndDestroy(root, path);
    }

    private static GameObject CreateGoalsPanelPrefab()
    {
        string path = PrefabFolder + "/GoalsPanel.prefab";
        GameObject existing = AssetDatabase.LoadAssetAtPath<GameObject>(path);
        if (existing != null)
        {
            return existing;
        }

        GameObject root = CreatePanelRoot("GoalsPanel", new Color(0.08f, 0.06f, 0.03f, 0.76f));
        RectTransform rootRect = root.GetComponent<RectTransform>();
        SetAnchor(rootRect, new Vector2(1f, 1f), new Vector2(1f, 1f), new Vector2(-24f, -24f), new Vector2(360f, 150f));
        Text goalsText = CreateText("GoalsText", root.transform, "Clear Red: 0/10", 28, TextAnchor.UpperLeft, Color.white);
        SetStretch(goalsText.rectTransform, new Vector2(22f, 16f), new Vector2(-22f, -16f));

        GoalsPanelView view = root.AddComponent<GoalsPanelView>();
        SetObjectReference(view, "goalsText", goalsText);
        return SavePrefabAndDestroy(root, path);
    }

    private static GameObject CreateWinScreenPrefab()
    {
        string path = PrefabFolder + "/WinScreen.prefab";
        GameObject existing = AssetDatabase.LoadAssetAtPath<GameObject>(path);
        if (existing != null)
        {
            return existing;
        }

        GameObject root = CreateScreenRoot("WinScreen", new Color(0.02f, 0.12f, 0.08f, 0.88f));
        CreateTextBlock(root.transform, "Level Complete", "Goals finished", new Color(0.75f, 1f, 0.75f, 1f));
        Button button = CreateButton("NextLevelButton", root.transform, "Next Level", new Color(0.12f, 0.72f, 0.38f, 1f));
        SetAnchor(button.GetComponent<RectTransform>(), new Vector2(0.5f, 0.5f), new Vector2(0.5f, 0.5f), new Vector2(0f, -190f), new Vector2(420f, 96f));

        WinScreenView view = root.AddComponent<WinScreenView>();
        SetObjectReference(view, "nextLevelButton", button);
        return SavePrefabAndDestroy(root, path);
    }

    private static GameObject CreateLoseScreenPrefab()
    {
        string path = PrefabFolder + "/LoseScreen.prefab";
        GameObject existing = AssetDatabase.LoadAssetAtPath<GameObject>(path);
        if (existing != null)
        {
            return existing;
        }

        GameObject root = CreateScreenRoot("LoseScreen", new Color(0.14f, 0.04f, 0.04f, 0.9f));
        CreateTextBlock(root.transform, "No Moves", "Try this level again", new Color(1f, 0.78f, 0.68f, 1f));
        Button button = CreateButton("RetryButton", root.transform, "Retry", new Color(0.78f, 0.2f, 0.14f, 1f));
        SetAnchor(button.GetComponent<RectTransform>(), new Vector2(0.5f, 0.5f), new Vector2(0.5f, 0.5f), new Vector2(0f, -190f), new Vector2(420f, 96f));

        LoseScreenView view = root.AddComponent<LoseScreenView>();
        SetObjectReference(view, "retryButton", button);
        return SavePrefabAndDestroy(root, path);
    }

    private static GameObject CreateTransitionPrefab()
    {
        string path = PrefabFolder + "/LevelTransition.prefab";
        GameObject existing = AssetDatabase.LoadAssetAtPath<GameObject>(path);
        if (existing != null)
        {
            return existing;
        }

        GameObject root = CreateScreenRoot("LevelTransition", new Color(0.02f, 0.03f, 0.06f, 0.82f));
        Text text = CreateText("TransitionText", root.transform, "Loading...", 54, TextAnchor.MiddleCenter, Color.white);
        SetAnchor(text.rectTransform, new Vector2(0.5f, 0.5f), new Vector2(0.5f, 0.5f), Vector2.zero, new Vector2(600f, 120f));
        root.AddComponent<LevelTransitionView>();
        return SavePrefabAndDestroy(root, path);
    }

    private static GameObject CreatePanelRoot(string name, Color color)
    {
        GameObject root = new GameObject(name, typeof(RectTransform), typeof(Image));
        Image image = root.GetComponent<Image>();
        image.color = color;
        return root;
    }

    private static GameObject CreateScreenRoot(string name, Color color)
    {
        GameObject root = CreatePanelRoot(name, color);
        RectTransform rectTransform = root.GetComponent<RectTransform>();
        rectTransform.anchorMin = Vector2.zero;
        rectTransform.anchorMax = Vector2.one;
        rectTransform.offsetMin = Vector2.zero;
        rectTransform.offsetMax = Vector2.zero;
        return root;
    }

    private static void CreateTextBlock(Transform parent, string title, string subtitle, Color titleColor)
    {
        Text titleText = CreateText("Title", parent, title, 72, TextAnchor.MiddleCenter, titleColor);
        SetAnchor(titleText.rectTransform, new Vector2(0.5f, 0.5f), new Vector2(0.5f, 0.5f), new Vector2(0f, 80f), new Vector2(780f, 110f));
        Text subtitleText = CreateText("Subtitle", parent, subtitle, 34, TextAnchor.MiddleCenter, Color.white);
        SetAnchor(subtitleText.rectTransform, new Vector2(0.5f, 0.5f), new Vector2(0.5f, 0.5f), new Vector2(0f, 0f), new Vector2(680f, 80f));
    }

    private static Text CreateText(string name, Transform parent, string value, int fontSize, TextAnchor alignment, Color color)
    {
        GameObject textObject = new GameObject(name, typeof(RectTransform), typeof(Text));
        textObject.transform.SetParent(parent, false);
        Text text = textObject.GetComponent<Text>();
        text.text = value;
        text.font = Resources.GetBuiltinResource<Font>("LegacyRuntime.ttf");
        text.fontSize = fontSize;
        text.alignment = alignment;
        text.color = color;
        text.horizontalOverflow = HorizontalWrapMode.Wrap;
        text.verticalOverflow = VerticalWrapMode.Truncate;
        return text;
    }

    private static Button CreateButton(string name, Transform parent, string label, Color color)
    {
        GameObject buttonObject = new GameObject(name, typeof(RectTransform), typeof(Image), typeof(Button));
        buttonObject.transform.SetParent(parent, false);
        Image image = buttonObject.GetComponent<Image>();
        image.color = color;
        Button button = buttonObject.GetComponent<Button>();
        ColorBlock colors = button.colors;
        colors.normalColor = color;
        colors.highlightedColor = Color.Lerp(color, Color.white, 0.15f);
        colors.pressedColor = Color.Lerp(color, Color.black, 0.18f);
        button.colors = colors;

        Text labelText = CreateText("Label", buttonObject.transform, label, 36, TextAnchor.MiddleCenter, Color.white);
        SetStretch(labelText.rectTransform, Vector2.zero, Vector2.zero);
        return button;
    }

    private static void SetAnchor(RectTransform rectTransform, Vector2 anchorMin, Vector2 anchorMax, Vector2 anchoredPosition, Vector2 size)
    {
        rectTransform.anchorMin = anchorMin;
        rectTransform.anchorMax = anchorMax;
        rectTransform.pivot = new Vector2(0.5f, 0.5f);
        rectTransform.anchoredPosition = anchoredPosition;
        rectTransform.sizeDelta = size;
    }

    private static void SetStretch(RectTransform rectTransform, Vector2 offsetMin, Vector2 offsetMax)
    {
        rectTransform.anchorMin = Vector2.zero;
        rectTransform.anchorMax = Vector2.one;
        rectTransform.offsetMin = offsetMin;
        rectTransform.offsetMax = offsetMax;
    }

    private static void SetObjectReference(Object target, string propertyName, Object value)
    {
        SerializedObject serializedObject = new SerializedObject(target);
        serializedObject.FindProperty(propertyName).objectReferenceValue = value;
        serializedObject.ApplyModifiedPropertiesWithoutUndo();
    }

    private static GameObject SavePrefabAndDestroy(GameObject root, string path)
    {
        GameObject prefab = PrefabUtility.SaveAsPrefabAsset(root, path);
        Object.DestroyImmediate(root);
        return prefab;
    }

    private static void EnsurePrefabFolder()
    {
        if (!AssetDatabase.IsValidFolder("Assets/_Game/Prefabs"))
        {
            AssetDatabase.CreateFolder("Assets/_Game", "Prefabs");
        }
        if (!AssetDatabase.IsValidFolder(PrefabFolder))
        {
            AssetDatabase.CreateFolder("Assets/_Game/Prefabs", "UI");
        }
    }
}
