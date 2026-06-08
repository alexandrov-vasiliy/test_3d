using System.Collections;
using UnityEngine;

public class LevelFlowController : MonoBehaviour
{
    private BoardController board;
    private StackTrayController tray;
    private DragController drag;
    private MergeSystem mergeSystem;
    private TutorialHandController tutorial;
    private PackshotController packshot;

    public LevelFlowState State { get; private set; } = LevelFlowState.Initializing;

    [Inject]
    private void Construct(BoardController board, StackTrayController tray, DragController drag, MergeSystem mergeSystem, TutorialHandController tutorial, PackshotController packshot)
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
        packshot.Hide();
        drag.SetInputEnabled(true);
        SetState(LevelFlowState.Tutorial);
        tutorial.Show();
        SetState(LevelFlowState.WaitingForInput);
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

        yield return mergeSystem.RunMerge(cell);

        if (tray.RemainingStacks <= 0)
        {
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
}
