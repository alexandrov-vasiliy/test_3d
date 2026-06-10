using System.Collections;
using _Game.Board;
using _Game.Configs;
using _Game.Drag;
using _Game.Goals;
using _Game.Levels;
using _Game.Merge;
using _Game.Packshot;
using _Game.Stacks;
using _Game.Tutorial;
using _Game.UI;
using UnityEngine;

namespace _Game.Flow
{
    /// <summary>
    /// Orchestrates full-game level state: input gating, merge waiting, hand refill, win/lose screens, and level reloads.
    /// </summary>
    public class LevelFlowController : MonoBehaviour
    {
        private BoardController board;
        private StackTrayController tray;
        private DragController drag;
        private MergeSystem mergeSystem;
        private TutorialHandController tutorial;
        private PackshotController packshot;
        private LevelLoader levelLoader;
        private LevelProgressService progressService;
        private LevelDatabase levelDatabase;
        private LevelConfig fallbackLevel;
        private HandController hand;
        private GoalTracker goalTracker;
        private MoveAvailabilityService moveAvailability;
        private LevelHudView hudView;
        private GoalsPanelView goalsView;
        private WinScreenView winScreen;
        private LoseScreenView loseScreen;
        private LevelTransitionView transitionView;
        private LevelConfig currentLevel;
        private int movesUsed;

        public LevelFlowState State { get; private set; } = LevelFlowState.Initializing;

        public void Initialize(
            BoardController board,
            StackTrayController tray,
            DragController drag,
            MergeSystem mergeSystem,
            TutorialHandController tutorial,
            PackshotController packshot,
            LevelLoader levelLoader,
            LevelProgressService progressService,
            LevelDatabase levelDatabase,
            LevelConfig fallbackLevel,
            HandController hand,
            GoalTracker goalTracker,
            MoveAvailabilityService moveAvailability,
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
            this.mergeSystem = mergeSystem;
            this.tutorial = tutorial;
            this.packshot = packshot;
            this.levelLoader = levelLoader;
            this.progressService = progressService;
            this.levelDatabase = levelDatabase;
            this.fallbackLevel = fallbackLevel;
            this.hand = hand;
            this.goalTracker = goalTracker;
            this.moveAvailability = moveAvailability;
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
            if (currentLevel == null || levelLoader == null || !levelLoader.LoadLevel(currentLevel))
            {
                Debug.LogWarning("Unable to load current level. Check LevelDatabase or fallback LevelConfig assignment.");
                SetState(LevelFlowState.Lose);
                loseScreen?.Show();
                return;
            }

            tutorial?.Show();
            SetState(LevelFlowState.Playing);
            SetInput(true);
            CheckLoseBeforeInput();
        }

        private LevelConfig ResolveCurrentLevel()
        {
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
            if (State != LevelFlowState.Playing)
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

            SetState(LevelFlowState.Playing);
            tutorial?.RestartAfterInactivity();
        }

        private void OnStackPlaced(HexStackView stackView, HexCell cell)
        {
            if (State != LevelFlowState.Dragging && State != LevelFlowState.Playing)
            {
                return;
            }

            StartCoroutine(HandleStackPlaced(cell));
        }

        private IEnumerator HandleStackPlaced(HexCell cell)
        {
            movesUsed++;
            tutorial?.Complete();
            SetInput(false);
            SetState(LevelFlowState.ResolvingMerge);

            if (mergeSystem != null)
            {
                yield return StartCoroutine(mergeSystem.RunMerge(cell));
            }
            else
            {
                Debug.LogWarning("MergeSystem is missing; placed stack will not merge.");
            }

            if (goalTracker != null && goalTracker.IsComplete)
            {
                ShowWin();
                yield break;
            }

            if (hand != null && hand.IsHandEmpty)
            {
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
        }

        private void SetState(LevelFlowState state)
        {
            State = state;
        }
    }
}
