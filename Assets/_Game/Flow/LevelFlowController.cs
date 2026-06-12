using System.Collections;
using _Game.Board;
using _Game.Configs;
using _Game.Drag;
using _Game.Enemies;
using _Game.Goals;
using _Game.Levels;
using _Game.Merge;
using _Game.Packshot;
using _Game.Player;
using _Game.Stacks;
using _Game.Tutorial;
using _Game.UI;
using UnityEngine;

namespace _Game.Flow
{
    /// <summary>
    /// Orchestrates level loading and full-game state, including input gating, merge completion, enemy turns, hand refill, result screens, progression, and editor-only debug level selection.
    /// </summary>
    public class LevelFlowController : MonoBehaviour
    {
#if UNITY_EDITOR
        [Header("Debug")]
        [Tooltip("Loads this level instead of the saved progression level while running in the Unity Editor. Leave empty to use normal progression.")]
        [SerializeField] private LevelConfig debugLevelOverride;
#endif

        private BoardController board;
        private StackTrayController tray;
        private DragController drag;
        private BoardRotationController rotation;
        private MergeSystem mergeSystem;
        private TutorialHandController tutorial;
        private PackshotController packshot;
        private EnemySpawner enemySpawner;
        private LevelLoader levelLoader;
        private LevelProgressService progressService;
        private LevelDatabase levelDatabase;
        private LevelConfig fallbackLevel;
        private HandController hand;
        private GoalTracker goalTracker;
        private MoveAvailabilityService moveAvailability;
        private PlayerHealth playerHealth;
        private LevelHudView hudView;
        private GoalsPanelView goalsView;
        private WinScreenView winScreen;
        private LoseScreenView loseScreen;
        private LevelTransitionView transitionView;
        private LevelConfig currentLevel;
        private Coroutine mergeResolutionRoutine;
        private int movesUsed;

        public LevelFlowState State { get; private set; } = LevelFlowState.Initializing;

        public void Initialize(
            BoardController board,
            StackTrayController tray,
            DragController drag,
            BoardRotationController rotation,
            MergeSystem mergeSystem,
            TutorialHandController tutorial,
            PackshotController packshot,
            EnemySpawner enemySpawner,
            LevelLoader levelLoader,
            LevelProgressService progressService,
            LevelDatabase levelDatabase,
            LevelConfig fallbackLevel,
            HandController hand,
            GoalTracker goalTracker,
            MoveAvailabilityService moveAvailability,
            PlayerHealth playerHealth,
            LevelHudView hudView,
            GoalsPanelView goalsView,
            WinScreenView winScreen,
            LoseScreenView loseScreen,
            LevelTransitionView transitionView)
        {
            Unsubscribe();

            this.board = board;
            this.tray = tray;
            this.drag = drag;
            this.rotation = rotation;
            this.mergeSystem = mergeSystem;
            this.tutorial = tutorial;
            this.packshot = packshot;
            this.enemySpawner = enemySpawner;
            this.levelLoader = levelLoader;
            this.progressService = progressService;
            this.levelDatabase = levelDatabase;
            this.fallbackLevel = fallbackLevel;
            this.hand = hand;
            this.goalTracker = goalTracker;
            this.moveAvailability = moveAvailability;
            this.playerHealth = playerHealth;
            this.hudView = hudView;
            this.goalsView = goalsView;
            this.winScreen = winScreen;
            this.loseScreen = loseScreen;
            this.transitionView = transitionView;

            Subscribe();
        }

        public void StartLevelFlow()
        {
            SetState(LevelFlowState.Initializing);
            LoadCurrentLevel();
        }

        private void OnDestroy()
        {
            Unsubscribe();
        }

        private void Subscribe()
        {
            if (drag != null)
            {
                drag.DragStarted += OnDragStarted;
                drag.DragFailed += OnDragFailed;
                drag.StackPlaced += OnStackPlaced;
            }

            if (mergeSystem != null && goalTracker != null)
            {
                mergeSystem.PiecesCleared += goalTracker.OnPiecesCleared;
            }

            if (goalTracker != null)
            {
                goalTracker.Completed += OnGoalsCompleted;
            }

            if (enemySpawner != null && goalTracker != null)
            {
                enemySpawner.EnemyDefeated += OnEnemyDefeated;
            }

            if (playerHealth != null)
            {
                playerHealth.Died += OnPlayerDied;
            }

            if (winScreen != null)
            {
                winScreen.NextLevelRequested += OnNextLevelRequested;
            }

            if (loseScreen != null)
            {
                loseScreen.RetryRequested += OnRetryRequested;
            }
        }

        private void Unsubscribe()
        {
            if (drag != null)
            {
                drag.DragStarted -= OnDragStarted;
                drag.DragFailed -= OnDragFailed;
                drag.StackPlaced -= OnStackPlaced;
            }

            if (mergeSystem != null && goalTracker != null)
            {
                mergeSystem.PiecesCleared -= goalTracker.OnPiecesCleared;
            }

            if (goalTracker != null)
            {
                goalTracker.Completed -= OnGoalsCompleted;
            }

            if (enemySpawner != null && goalTracker != null)
            {
                enemySpawner.EnemyDefeated -= OnEnemyDefeated;
            }

            if (playerHealth != null)
            {
                playerHealth.Died -= OnPlayerDied;
            }

            if (winScreen != null)
            {
                winScreen.NextLevelRequested -= OnNextLevelRequested;
            }

            if (loseScreen != null)
            {
                loseScreen.RetryRequested -= OnRetryRequested;
            }
        }

        private void LoadCurrentLevel()
        {
            SetState(LevelFlowState.LoadingLevel);
            SetInput(false);
            HideResultScreens();
            transitionView?.Hide();
            packshot?.Hide();
            hudView?.SetVisible(true);
            goalsView?.SetVisible(true);

            currentLevel = ResolveCurrentLevel();
            movesUsed = 0;
            playerHealth?.ResetHealth();
            if (currentLevel == null || levelLoader == null || !levelLoader.LoadLevel(currentLevel))
            {
                Debug.LogWarning("Unable to load current level. Check LevelDatabase or fallback LevelConfig assignment.");
                SetState(LevelFlowState.Lose);
                loseScreen?.Show();
                return;
            }

            if (goalTracker != null && goalTracker.IsComplete)
            {
                ShowWin();
                return;
            }

            tutorial?.Show();
            SetState(LevelFlowState.Playing);
            SetInput(true);
            CheckLoseBeforeInput();
        }

        private LevelConfig ResolveCurrentLevel()
        {
#if UNITY_EDITOR
            if (debugLevelOverride != null)
            {
                return debugLevelOverride;
            }
#endif

            int index = progressService != null ? progressService.CurrentLevelIndex : 0;
            if (levelDatabase != null && levelDatabase.Count > 0)
            {
                LevelConfig databaseLevel = levelDatabase.GetLevel(index);
                if (databaseLevel != null)
                {
                    return databaseLevel;
                }
            }

            return fallbackLevel;
        }

        private void OnDragStarted(HexStackView stackView)
        {
            if (State != LevelFlowState.Playing && State != LevelFlowState.ResolvingMerge)
            {
                return;
            }

            SetState(LevelFlowState.Dragging);
            tutorial?.Hide();
        }

        private void OnDragFailed(HexStackView stackView)
        {
            if (State != LevelFlowState.Dragging)
            {
                return;
            }

            SetState(IsMergeResolutionActive() ? LevelFlowState.ResolvingMerge : LevelFlowState.Playing);
            tutorial?.RestartAfterInactivity();
        }

        private void OnStackPlaced(HexStackView stackView, HexCell cell)
        {
            if (State != LevelFlowState.Dragging && State != LevelFlowState.Playing && State != LevelFlowState.ResolvingMerge)
            {
                return;
            }

            movesUsed++;
            tutorial?.Complete();
            SetState(LevelFlowState.ResolvingMerge);
            SetInput(true);

            if (mergeSystem != null)
            {
                mergeSystem.RequestMerge(cell);
                if (mergeResolutionRoutine == null)
                {
                    mergeResolutionRoutine = StartCoroutine(HandleMergeResolution(cell));
                }
            }
            else
            {
                Debug.LogWarning("MergeSystem is missing; placed stack will not merge.");
                StartCoroutine(HandlePostMergeState());
            }
        }

        private IEnumerator HandleMergeResolution(HexCell cell)
        {
            if (mergeSystem != null)
            {
                yield return StartCoroutine(mergeSystem.RunMerge(cell));
            }

            mergeResolutionRoutine = null;
            yield return StartCoroutine(HandlePostMergeState());
        }

        private IEnumerator HandlePostMergeState()
        {
            if (goalTracker != null && goalTracker.IsComplete)
            {
                ShowWin();
                yield break;
            }

            if (hand != null && hand.IsHandEmpty)
            {
                SetInput(false);
                SetState(LevelFlowState.ResolvingEnemyIntents);
                if (enemySpawner != null)
                {
                    yield return StartCoroutine(enemySpawner.ExecuteActiveIntents(playerHealth));
                }

                if (State == LevelFlowState.Win || (goalTracker != null && goalTracker.IsComplete))
                {
                    yield break;
                }

                if (State == LevelFlowState.Lose || (playerHealth != null && !playerHealth.IsAlive))
                {
                    yield break;
                }

                SetState(LevelFlowState.RefillingHand);
                if (!hand.RefillHand())
                {
                    ShowLose();
                    yield break;
                }
            }

            if (HasExceededMoveLimit() || HasNoLegalMoves())
            {
                ShowLose();
                yield break;
            }

            SetState(LevelFlowState.Playing);
            SetInput(true);
        }

        private bool IsMergeResolutionActive()
        {
            return mergeResolutionRoutine != null || (mergeSystem != null && mergeSystem.IsRunning);
        }

        private void CheckLoseBeforeInput()
        {
            if (HasNoLegalMoves())
            {
                ShowLose();
            }
        }

        private bool HasExceededMoveLimit()
        {
            return currentLevel != null && currentLevel.loseRules != null && currentLevel.loseRules.moveLimit > 0 && movesUsed >= currentLevel.loseRules.moveLimit;
        }

        private bool HasNoLegalMoves()
        {
            if (currentLevel == null || currentLevel.loseRules == null || !currentLevel.loseRules.loseWhenNoMovesRemain)
            {
                return false;
            }

            if (goalTracker != null && goalTracker.IsComplete)
            {
                return false;
            }

            return moveAvailability == null || !moveAvailability.HasAnyLegalMove(board, hand);
        }

        private void ShowWin()
        {
            SetInput(false);
            SetState(LevelFlowState.Win);
            winScreen?.Show();
        }

        private void OnGoalsCompleted()
        {
            if (State == LevelFlowState.Win || State == LevelFlowState.Lose)
            {
                return;
            }

            ShowWin();
        }

        private void OnEnemyDefeated(EnemyController enemy)
        {
            goalTracker?.OnEnemyDefeated();
        }

        private void OnPlayerDied()
        {
            if (State == LevelFlowState.Win || State == LevelFlowState.Lose)
            {
                return;
            }

            ShowLose();
        }

        private void ShowLose()
        {
            SetInput(false);
            SetState(LevelFlowState.Lose);
            loseScreen?.Show();
        }

        private void OnNextLevelRequested()
        {
            SetState(LevelFlowState.Transition);
            transitionView?.Show();
            progressService?.AdvanceToNextLevel(levelDatabase);
            LoadCurrentLevel();
        }

        private void OnRetryRequested()
        {
            SetState(LevelFlowState.Transition);
            transitionView?.Show();
            LoadCurrentLevel();
        }

        private void HideResultScreens()
        {
            winScreen?.Hide();
            loseScreen?.Hide();
        }

        private void SetInput(bool enabled)
        {
            drag?.SetInputEnabled(enabled);
            rotation?.SetInputEnabled(enabled);
        }

        private void SetState(LevelFlowState state)
        {
            State = state;
        }
    }
}
