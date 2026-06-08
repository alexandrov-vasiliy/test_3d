using System.Collections.Generic;
using UnityEngine;
#if UNITY_EDITOR
using UnityEditor;
#endif

public class Main : MonoBehaviour
{
    private const string TutorialHandResource = "TutorialHand";

    [Header("Assets")]
    [SerializeField] private GameObject hexCellPrefab;
    [SerializeField] private GameObject hexPiecePrefab;
    [SerializeField] private HexColorConfig hexColorConfig;
    [SerializeField] private Camera gameCamera;

    [Header("Scene Controllers")]
    [SerializeField] private Transform runtimeRoot;
    [SerializeField] private BoardController boardController;
    [SerializeField] private StackTrayController stackTrayController;
    [SerializeField] private DragController dragController;
    [SerializeField] private MergeAnimator mergeAnimator;
    [SerializeField] private MergeSystem mergeSystem;
    [SerializeField] private SoundPlayer soundPlayer;
    [SerializeField] private TutorialHandController tutorialHandController;
    [SerializeField] private PackshotController packshotController;
    [SerializeField] private LevelFlowController levelFlowController;

    [Header("Level")]
    [SerializeField] private int boardRadius = 2;
    [SerializeField] private Vector3 boardPosition = Vector3.zero;
    [SerializeField] private Vector3 trayPosition = new Vector3(0f, 0f, -5.25f);
    [SerializeField] private Vector2Int tutorialTargetCell = new Vector2Int(0, 1);
    [SerializeField] private List<LevelConfig.BoardStackDefinition> startingBoardStacks = new List<LevelConfig.BoardStackDefinition>();
    [SerializeField] private List<LevelConfig.StackDefinition> trayStacks = new List<LevelConfig.StackDefinition>();

    [Header("Camera Defaults")]
    [SerializeField] private bool configureCameraOnStart = true;
    [SerializeField] private Vector3 cameraPosition = new Vector3(0f, 8.5f, -8.5f);
    [SerializeField] private Vector3 cameraEulerAngles = new Vector3(55f, 0f, 0f);
    [SerializeField] private float orthographicSize = 6.2f;

    [Header("Lighting Defaults")]
    [SerializeField] private bool configureLightingOnStart = true;
    [SerializeField] private Vector3 lightEulerAngles = new Vector3(55f, -35f, 0f);
    [SerializeField] private float lightIntensity = 1.25f;
    [SerializeField] private Color ambientLight = new Color(0.36f, 0.39f, 0.43f);

    private static bool sceneBuilt;

    private void Reset()
    {
        EnsureDefaultLevelData();
    }

    private void Start()
    {
        if (sceneBuilt)
        {
            return;
        }

        sceneBuilt = true;
        BuildPrototypeScene();
    }

#if UNITY_EDITOR
    [ContextMenu("Setup Scene Objects")]
    public void SetupSceneObjects()
    {
        EnsureRuntimeRoot();
        boardController = EnsureSceneComponent<BoardController>("BoardController");
        if (boardController.GetComponent<HexGridGenerator>() == null)
        {
            boardController.gameObject.AddComponent<HexGridGenerator>();
        }
        stackTrayController = EnsureSceneComponent<StackTrayController>("StackTrayController");
        dragController = EnsureSceneComponent<DragController>("DragController");
        mergeAnimator = EnsureSceneComponent<MergeAnimator>("MergeAnimator");
        mergeSystem = EnsureSceneComponent<MergeSystem>("MergeSystem");
        soundPlayer = EnsureSceneComponent<SoundPlayer>("SoundPlayer");
        tutorialHandController = EnsureSceneComponent<TutorialHandController>("TutorialHandController");
        packshotController = EnsureSceneComponent<PackshotController>("PackshotController");
        levelFlowController = EnsureSceneComponent<LevelFlowController>("LevelFlowController");
        EnsureLevelLists();
        EditorUtility.SetDirty(this);
    }
#endif

    private void BuildPrototypeScene()
    {
        EnsureLevelLists();
        Camera camera = SetupCamera();
        SetupLighting();
        Sprite handSprite = LoadTutorialHandSprite();
        GameObject resolvedCellPrefab = ResolveHexCellPrefab();
        GameObject resolvedPiecePrefab = ResolveHexPiecePrefab();
        Transform root = EnsureRuntimeRoot();

        BoardController board = ResolveSceneComponent(ref boardController, "BoardController");
        board.transform.SetParent(root, false);
        board.transform.position = boardPosition;
        board.Initialize(boardRadius, resolvedCellPrefab, resolvedPiecePrefab, hexColorConfig, camera);

        PlaceStartingBoardStacks(board);

        StackTrayController tray = ResolveSceneComponent(ref stackTrayController, "StackTrayController");
        tray.transform.SetParent(root, false);
        tray.transform.position = trayPosition;
        tray.Initialize(CreateTrayStacks(), board);

        DragController drag = ResolveSceneComponent(ref dragController, "DragController");
        drag.transform.SetParent(root, false);
        drag.Initialize(camera, board, tray);

        SoundPlayer sounds = ResolveSceneComponent(ref soundPlayer, "SoundPlayer");
        sounds.transform.SetParent(root, false);
        sounds.Initialize(drag);

        MergeAnimator animator = ResolveSceneComponent(ref mergeAnimator, "MergeAnimator");
        animator.transform.SetParent(root, false);
        animator.Initialize(hexColorConfig, sounds);

        MergeSystem merger = ResolveSceneComponent(ref mergeSystem, "MergeSystem");
        merger.transform.SetParent(root, false);
        merger.Initialize(board, animator);

        TutorialHandController tutorial = ResolveSceneComponent(ref tutorialHandController, "TutorialHandController");
        tutorial.transform.SetParent(root, false);
        tutorial.Initialize(handSprite, camera);
        HexStackView firstTrayStack = tray.StackViews.Count > 0 ? tray.StackViews[0] : null;
        HexCell targetHexCell = board.GetCell(tutorialTargetCell);
        if (targetHexCell == null)
        {
            Debug.LogWarning("Tutorial target cell " + tutorialTargetCell + " is outside the generated board for radius " + boardRadius + ".");
        }
        HexCellView targetCell = board.GetCellView(targetHexCell);
        tutorial.SetTargets(firstTrayStack, targetCell);

        PackshotController packshot = ResolveSceneComponent(ref packshotController, "PackshotController");
        packshot.transform.SetParent(root, false);
        packshot.Initialize();

        LevelFlowController flow = ResolveSceneComponent(ref levelFlowController, "LevelFlowController");
        flow.transform.SetParent(root, false);
        flow.Initialize(board, tray, drag, merger, tutorial, packshot);
    }

    private Camera SetupCamera()
    {
        Camera camera = gameCamera != null ? gameCamera : Camera.main;
        if (camera == null)
        {
            GameObject cameraObject = new GameObject("Main Camera");
            cameraObject.tag = "MainCamera";
            camera = cameraObject.AddComponent<Camera>();
            gameCamera = camera;
        }

        if (configureCameraOnStart)
        {
            camera.transform.position = cameraPosition;
            camera.transform.rotation = Quaternion.Euler(cameraEulerAngles);
            camera.orthographic = true;
            camera.orthographicSize = orthographicSize;
        }

        return camera;
    }

    private void SetupLighting()
    {
        if (!configureLightingOnStart)
        {
            return;
        }

        Light existingLight = FindFirstObjectByType<Light>();
        if (existingLight == null)
        {
            GameObject lightObject = new GameObject("Directional Light");
            existingLight = lightObject.AddComponent<Light>();
            existingLight.type = LightType.Directional;
        }

        existingLight.transform.rotation = Quaternion.Euler(lightEulerAngles);
        existingLight.intensity = lightIntensity;
        RenderSettings.ambientLight = ambientLight;
    }

    private Transform EnsureRuntimeRoot()
    {
        if (runtimeRoot != null)
        {
            return runtimeRoot;
        }

        GameObject existing = GameObject.Find("_Game_Runtime");
        if (existing != null)
        {
            runtimeRoot = existing.transform;
            return runtimeRoot;
        }

        GameObject rootObject = new GameObject("_Game_Runtime");
        runtimeRoot = rootObject.transform;
        return runtimeRoot;
    }

    private T ResolveSceneComponent<T>(ref T component, string objectName) where T : Component
    {
        if (component != null)
        {
            return component;
        }

        T existing = FindFirstObjectByType<T>();
        if (existing != null)
        {
            component = existing;
            return component;
        }

        GameObject objectInstance = new GameObject(objectName);
        component = objectInstance.AddComponent<T>();
        return component;
    }

#if UNITY_EDITOR
    private T EnsureSceneComponent<T>(string objectName) where T : Component
    {
        T existing = runtimeRoot != null ? runtimeRoot.GetComponentInChildren<T>(true) : null;
        if (existing != null)
        {
            return existing;
        }

        GameObject objectInstance = new GameObject(objectName);
        Undo.RegisterCreatedObjectUndo(objectInstance, "Create " + objectName);
        objectInstance.transform.SetParent(EnsureRuntimeRoot(), false);
        return objectInstance.AddComponent<T>();
    }
#endif

    private GameObject ResolveHexPiecePrefab()
    {
        if (hexPiecePrefab != null)
        {
            return hexPiecePrefab;
        }

#if UNITY_EDITOR
        return AssetDatabase.LoadAssetAtPath<GameObject>("Assets/HexAssets/hex smooth 1.fbx");
#else
        return null;
#endif
    }

    private GameObject ResolveHexCellPrefab()
    {
        if (hexCellPrefab != null)
        {
            return hexCellPrefab;
        }

#if UNITY_EDITOR
        return AssetDatabase.LoadAssetAtPath<GameObject>("Assets/HexAssets/hex smooth 2.fbx");
#else
        return null;
#endif
    }

    private static Sprite LoadTutorialHandSprite()
    {
        Sprite sprite = Resources.Load<Sprite>(TutorialHandResource);
        if (sprite == null)
        {
            Debug.LogWarning("Tutorial hand sprite was not found in Resources: " + TutorialHandResource);
        }

        return sprite;
    }

    private void PlaceStartingBoardStacks(BoardController board)
    {
        foreach (LevelConfig.BoardStackDefinition definition in startingBoardStacks)
        {
            if (definition == null || definition.stack == null)
            {
                continue;
            }

            Place(board, definition.coordinate, definition.stack.CreateStack());
        }
    }

    private static void Place(BoardController board, Vector2Int coordinate, HexStack stack)
    {
        HexCell cell = board.GetCell(coordinate);
        if (cell == null || stack == null)
        {
            return;
        }

        board.PlaceStack(cell, stack);
        HexCellView cellView = board.GetCellView(cell);
        HexStackView stackView = board.CreateStackView(stack, cellView.transform, cellView.transform.position);
        stackView.name = "BoardStack_" + coordinate.x + "_" + coordinate.y;
        board.PlaceStackView(cell, stackView);
    }

    private List<HexStack> CreateTrayStacks()
    {
        List<HexStack> stacks = new List<HexStack>();
        foreach (LevelConfig.StackDefinition definition in trayStacks)
        {
            if (definition != null)
            {
                stacks.Add(definition.CreateStack());
            }
        }
        return stacks;
    }

    private void EnsureDefaultLevelData()
    {
        EnsureLevelLists();

        if (startingBoardStacks.Count == 0)
        {
            startingBoardStacks.Add(CreateBoardStack(new Vector2Int(0, 0), HexColor.Red, HexColor.Red, HexColor.Red, HexColor.Red, HexColor.Red, HexColor.Red, HexColor.Red));
            startingBoardStacks.Add(CreateBoardStack(new Vector2Int(1, 0), HexColor.Red, HexColor.Red, HexColor.Red));
            startingBoardStacks.Add(CreateBoardStack(new Vector2Int(-1, 1), HexColor.Blue, HexColor.Blue, HexColor.Blue, HexColor.Blue));
            startingBoardStacks.Add(CreateBoardStack(new Vector2Int(-1, 0), HexColor.Green, HexColor.Green, HexColor.Green));
            startingBoardStacks.Add(CreateBoardStack(new Vector2Int(1, -1), HexColor.Yellow, HexColor.Orange, HexColor.Orange));
        }

        if (trayStacks.Count == 0)
        {
            trayStacks.Add(CreateStack(HexColor.Blue, HexColor.Red));
            trayStacks.Add(CreateStack(HexColor.Yellow, HexColor.Blue));
            trayStacks.Add(CreateStack(HexColor.Purple, HexColor.Green));
        }
    }

    private void EnsureLevelLists()
    {
        if (startingBoardStacks == null)
        {
            startingBoardStacks = new List<LevelConfig.BoardStackDefinition>();
        }

        if (trayStacks == null)
        {
            trayStacks = new List<LevelConfig.StackDefinition>();
        }
    }

    private static LevelConfig.BoardStackDefinition CreateBoardStack(Vector2Int coordinate, params HexColor[] colors)
    {
        return new LevelConfig.BoardStackDefinition
        {
            coordinate = coordinate,
            stack = CreateStack(colors)
        };
    }

    private static LevelConfig.StackDefinition CreateStack(params HexColor[] colors)
    {
        LevelConfig.StackDefinition definition = new LevelConfig.StackDefinition();
        definition.colorsBottomToTop.AddRange(colors);
        return definition;
    }
}
