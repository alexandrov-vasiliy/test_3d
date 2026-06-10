using System.Collections.Generic;
using _Game.Audio;
using _Game.Board;
using _Game.Configs;
using _Game.DI;
using _Game.Drag;
using _Game.Enemies;
using _Game.Flow;
using _Game.Goals;
using _Game.Levels;
using _Game.Merge;
using _Game.Packshot;
using _Game.Player;
using _Game.Stacks;
using _Game.Tutorial;
using _Game.UI;
using UnityEngine;
#if UNITY_EDITOR
using UnityEditor;
#endif

/// <summary>
/// Wires scene controllers, assets, UI views, and runtime services; level content is loaded from LevelConfig data instead of being owned here.
/// </summary>
public class Main : MonoBehaviour
{
    private const string TutorialHandResource = "TutorialHand";

    [Header("Assets")]
    [SerializeField] private GameObject hexCellPrefab;
    [SerializeField] private GameObject hexPiecePrefab;
    [SerializeField] private HexColorConfig hexColorConfig;
    [SerializeField] private Camera gameCamera;

    [Header("Levels")]
    [SerializeField] private LevelDatabase levelDatabase;
    [SerializeField] private LevelConfig fallbackLevelConfig;

    [Header("UI Views")]
    [SerializeField] private LevelHudView levelHudView;
    [SerializeField] private HealthView healthView;
    [SerializeField] private GoalsPanelView goalsPanelView;
    [SerializeField] private WinScreenView winScreenView;
    [SerializeField] private LoseScreenView loseScreenView;
    [SerializeField] private LevelTransitionView levelTransitionView;

    [Header("Legacy Fallback Level")]
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

    [Header("Valid Cell Highlight")]
    [SerializeField] private HexCellHighlightSettings cellHighlight = new HexCellHighlightSettings();

    private bool sceneBuilt;
    private Transform runtimeRoot;
    private BoardController boardController;
    private StackTrayController stackTrayController;
    private DragController dragController;
    private MergeAnimator mergeAnimator;
    private MergeSystem mergeSystem;
    private SoundPlayer soundPlayer;
    private EnemyCatalog enemyCatalog;
    private EnemySpawner enemySpawner;
    private PlayerHealth playerHealth;
    private TutorialHandController tutorialHandController;
    private PackshotController packshotController;
    private LevelFlowController levelFlowController;
    private HandGenerator handGenerator;
    private HandController handController;
    private GoalTracker goalTracker;
    private MoveAvailabilityService moveAvailabilityService;
    private LevelProgressService levelProgressService;
    private LevelLoader levelLoader;
    private LevelConfig runtimeFallbackLevelConfig;

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
        BuildGameScene();
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
        enemyCatalog = EnsureSceneComponent<EnemyCatalog>("EnemyCatalog");
        enemySpawner = EnsureSceneComponent<EnemySpawner>("EnemySpawner");
        playerHealth = EnsureSceneComponent<PlayerHealth>("PlayerHealth");
        tutorialHandController = EnsureSceneComponent<TutorialHandController>("TutorialHandController");
        packshotController = EnsureSceneComponent<PackshotController>("PackshotController");
        levelFlowController = EnsureSceneComponent<LevelFlowController>("LevelFlowController");
        EnsureLevelLists();
        EditorUtility.SetDirty(this);
    }
#endif

    private void BuildGameScene()
    {
        EnsureLevelLists();
        Camera camera = SetupCamera();
        GameAssets assets = new GameAssets(ResolveHexCellPrefab(), ResolveHexPiecePrefab(), hexColorConfig, LoadTutorialHandSprite());
        Transform root = EnsureRuntimeRoot();

        BoardController board = ResolveSceneComponent<BoardController>("BoardController");
        board.transform.SetParent(root, false);
        board.transform.position = boardPosition;
        boardController = board;

        StackTrayController tray = ResolveSceneComponent<StackTrayController>("StackTrayController");
        tray.transform.SetParent(root, false);
        tray.transform.position = trayPosition;
        stackTrayController = tray;

        DragController drag = ResolveSceneComponent<DragController>("DragController");
        drag.transform.SetParent(root, false);
        dragController = drag;

        SoundPlayer sounds = ResolveSceneComponent<SoundPlayer>("SoundPlayer");
        sounds.transform.SetParent(root, false);
        soundPlayer = sounds;

        EnemyCatalog catalog = ResolveSceneComponent<EnemyCatalog>("EnemyCatalog");
        catalog.transform.SetParent(root, false);
        enemyCatalog = catalog;

        EnemySpawner spawner = ResolveSceneComponent<EnemySpawner>("EnemySpawner");
        spawner.transform.SetParent(root, false);
        enemySpawner = spawner;

        PlayerHealth health = ResolveSceneComponent<PlayerHealth>("PlayerHealth");
        health.transform.SetParent(root, false);
        playerHealth = health;

        MergeAnimator animator = ResolveSceneComponent<MergeAnimator>("MergeAnimator");
        animator.transform.SetParent(root, false);
        mergeAnimator = animator;

        MergeSystem merger = ResolveSceneComponent<MergeSystem>("MergeSystem");
        merger.transform.SetParent(root, false);
        mergeSystem = merger;

        TutorialHandController tutorial = ResolveSceneComponent<TutorialHandController>("TutorialHandController");
        tutorial.transform.SetParent(root, false);
        tutorialHandController = tutorial;

        PackshotController packshot = ResolveSceneComponent<PackshotController>("PackshotController");
        packshot.transform.SetParent(root, false);
        packshotController = packshot;

        LevelFlowController flow = ResolveSceneComponent<LevelFlowController>("LevelFlowController");
        flow.transform.SetParent(root, false);
        levelFlowController = flow;

        InitializeRuntimeDependencies(camera, assets, ResolveFallbackLevelConfig(board));

        packshot.Initialize();
        flow.StartLevelFlow();
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

    private void InitializeRuntimeDependencies(Camera camera, GameAssets assets, LevelConfig fallbackLevel)
    {
        if (cellHighlight == null)
        {
            cellHighlight = new HexCellHighlightSettings();
        }

        boardController.InitializeDependencies(assets, camera, cellHighlight, soundPlayer);
        enemySpawner.Initialize(enemyCatalog);
        boardController.SetEnemyRegistry(enemySpawner.Registry);
        stackTrayController.SetBoard(boardController);
        dragController.Initialize(camera, boardController, stackTrayController);
        soundPlayer.Initialize(dragController);
        mergeAnimator.Initialize(assets, soundPlayer);
        mergeSystem.Initialize(boardController, mergeAnimator);
        tutorialHandController.Initialize(assets, camera);
        healthView?.Bind(playerHealth);

        handGenerator = new HandGenerator();
        handController = new HandController(stackTrayController, handGenerator);
        goalTracker = new GoalTracker();
        moveAvailabilityService = new MoveAvailabilityService();
        levelProgressService = new LevelProgressService();
        levelLoader = new LevelLoader(boardController, handController, handGenerator, enemySpawner, goalTracker, tutorialHandController, levelHudView, goalsPanelView);

        levelFlowController.Initialize(
            boardController,
            stackTrayController,
            dragController,
            mergeSystem,
            tutorialHandController,
            packshotController,
            enemySpawner,
            levelLoader,
            levelProgressService,
            levelDatabase,
            fallbackLevel,
            handController,
            goalTracker,
            moveAvailabilityService,
            playerHealth,
            levelHudView,
            goalsPanelView,
            winScreenView,
            loseScreenView,
            levelTransitionView);
    }

    public T FindSceneComponent<T>() where T : Component
    {
        if (runtimeRoot == null)
        {
            GameObject existingRoot = GameObject.Find("_Game_Runtime");
            if (existingRoot != null)
            {
                runtimeRoot = existingRoot.transform;
            }
        }

        T existing = runtimeRoot != null ? runtimeRoot.GetComponentInChildren<T>(true) : null;
        return existing != null ? existing : FindObjectOfType<T>();
    }

    private T ResolveSceneComponent<T>(string objectName) where T : Component
    {
        T existing = FindSceneComponent<T>();
        if (existing != null)
        {
            return existing;
        }

        GameObject objectInstance = new GameObject(objectName);
        return objectInstance.AddComponent<T>();
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

    private LevelConfig ResolveFallbackLevelConfig(BoardController board)
    {
        if (fallbackLevelConfig != null)
        {
            return fallbackLevelConfig;
        }

        if (runtimeFallbackLevelConfig != null)
        {
            return runtimeFallbackLevelConfig;
        }

        runtimeFallbackLevelConfig = ScriptableObject.CreateInstance<LevelConfig>();
        runtimeFallbackLevelConfig.name = "RuntimeFallbackLevelConfig";
        runtimeFallbackLevelConfig.levelId = "legacy_fallback";
        runtimeFallbackLevelConfig.levelNumber = 1;
        runtimeFallbackLevelConfig.displayName = "Level 1";
        runtimeFallbackLevelConfig.boardRadius = boardRadius;
        runtimeFallbackLevelConfig.tutorialTargetCell = tutorialTargetCell;
        runtimeFallbackLevelConfig.startingBoardStacks = CloneBoardStacks(startingBoardStacks);
        runtimeFallbackLevelConfig.initialHandStacks = CloneStacks(trayStacks);
        runtimeFallbackLevelConfig.trayStacks = CloneStacks(trayStacks);
        runtimeFallbackLevelConfig.goals.Add(CreateGoal(HexColor.Red, 10));

        HexGridGenerator generator = board != null ? board.GetComponent<HexGridGenerator>() : null;
        if (generator != null)
        {
            runtimeFallbackLevelConfig.boardShape = generator.Shape;
            runtimeFallbackLevelConfig.customBaseShape = generator.CustomBaseShape;
            runtimeFallbackLevelConfig.orientation = generator.Orientation;
            runtimeFallbackLevelConfig.customCoordinates = new List<Vector2Int>(generator.CustomCoordinates);
        }

        return runtimeFallbackLevelConfig;
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

    private static List<LevelConfig.BoardStackDefinition> CloneBoardStacks(List<LevelConfig.BoardStackDefinition> source)
    {
        List<LevelConfig.BoardStackDefinition> result = new List<LevelConfig.BoardStackDefinition>();
        if (source == null)
        {
            return result;
        }

        for (int i = 0; i < source.Count; i++)
        {
            LevelConfig.BoardStackDefinition definition = source[i];
            if (definition == null)
            {
                continue;
            }

            result.Add(new LevelConfig.BoardStackDefinition
            {
                coordinate = definition.coordinate,
                stack = CloneStack(definition.stack)
            });
        }

        return result;
    }

    private static List<LevelConfig.StackDefinition> CloneStacks(List<LevelConfig.StackDefinition> source)
    {
        List<LevelConfig.StackDefinition> result = new List<LevelConfig.StackDefinition>();
        if (source == null)
        {
            return result;
        }

        for (int i = 0; i < source.Count; i++)
        {
            LevelConfig.StackDefinition definition = source[i];
            if (definition != null)
            {
                result.Add(CloneStack(definition));
            }
        }

        return result;
    }

    private static LevelConfig.StackDefinition CloneStack(LevelConfig.StackDefinition source)
    {
        LevelConfig.StackDefinition clone = new LevelConfig.StackDefinition();
        if (source != null && source.colorsBottomToTop != null)
        {
            clone.colorsBottomToTop.AddRange(source.colorsBottomToTop);
        }

        return clone;
    }

    private static LevelConfig.GoalDefinition CreateGoal(HexColor color, int requiredCount)
    {
        return new LevelConfig.GoalDefinition
        {
            type = LevelGoalType.ClearPieces,
            color = color,
            requiredCount = requiredCount
        };
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
