using System.Collections;
using _Game.Board;
using _Game.Drag;
using _Game.Merge;
using _Game.Packshot;
using _Game.Stacks;
using _Game.Tutorial;
using UnityEngine;

namespace _Game.Flow
{
    public class LevelFlowController : MonoBehaviour
    {
        private BoardController board;
        private StackTrayController tray;
        private DragController drag;
        private MergeSystem mergeSystem;
        private TutorialHandController tutorial;
        private PackshotController packshot;
        private bool fullGameInstallRequested;

        public LevelFlowState State { get; private set; } = LevelFlowState.Initializing;

        public void Initialize(BoardController board, StackTrayController tray, DragController drag, MergeSystem mergeSystem, TutorialHandController tutorial, PackshotController packshot)
        {
            UnsubscribeFromDrag();

            this.board = board;
            this.tray = tray;
            this.drag = drag;
            this.mergeSystem = mergeSystem;
            this.tutorial = tutorial;
            this.packshot = packshot;

            if (drag != null)
            {
                drag.DragStarted += OnDragStarted;
                drag.DragFailed += OnDragFailed;
                drag.StackPlaced += OnStackPlaced;
            }
        }

        public void StartLevelFlow()
        {
            SetState(LevelFlowState.Initializing);
            StartLevel();
        }

        private void OnDestroy()
        {
            UnsubscribeFromDrag();
        }

        private void StartLevel()
        {
            fullGameInstallRequested = false;
            packshot.Hide();
            drag.SetInputEnabled(true);
            SetState(LevelFlowState.Tutorial);
            tutorial.Show();
            SetState(LevelFlowState.WaitingForInput);
        }

        private void Update()
        {
            if (State != LevelFlowState.Packshot || fullGameInstallRequested || !WasPointerPressedThisFrame())
            {
                return;
            }

            fullGameInstallRequested = true;
            Luna.Unity.Playable.InstallFullGame();
        }

        private void OnDragStarted(HexStackView stackView)
        {
            if (State == LevelFlowState.Merging || State == LevelFlowState.Packshot)
            {
                return;
            }

            SetState(LevelFlowState.Dragging);
            tutorial.Hide();
        }

        private void OnDragFailed(HexStackView stackView)
        {
            if (State == LevelFlowState.Packshot)
            {
                return;
            }

            SetState(LevelFlowState.WaitingForInput);
            tutorial.RestartAfterInactivity();
        }

        private void OnStackPlaced(HexStackView stackView, HexCell cell)
        {
            StartCoroutine(HandleStackPlaced(cell));
        }

        private IEnumerator HandleStackPlaced(HexCell cell)
        {
            tutorial.Complete();
            drag.SetInputEnabled(false);
            SetState(LevelFlowState.Merging);

            if (mergeSystem != null)
            {
                yield return StartCoroutine(mergeSystem.RunMerge(cell));
            }
            else
            {
                Debug.LogWarning("MergeSystem is missing; placed stack will not merge.");
            }

            if (board.IsBoardEmpty)
            {
                Luna.Unity.LifeCycle.GameEnded();
                SetState(LevelFlowState.Packshot);
                packshot.Show();
                yield break;
            }

            SetState(LevelFlowState.WaitingForInput);
            drag.SetInputEnabled(true);
        }

        private void SetState(LevelFlowState state)
        {
            State = state;
        }

        private void UnsubscribeFromDrag()
        {
            if (drag == null)
            {
                return;
            }

            drag.DragStarted -= OnDragStarted;
            drag.DragFailed -= OnDragFailed;
            drag.StackPlaced -= OnStackPlaced;
        }

        private static bool WasPointerPressedThisFrame()
        {
            if (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Began)
            {
                return true;
            }

            return Input.GetMouseButtonDown(0);
        }
    }
}
