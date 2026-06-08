using System.Collections;
using UnityEngine;

public class LevelFlowController : MonoBehaviour
{
    [SerializeField] private BoardController board;
    [SerializeField] private StackTrayController tray;
    [SerializeField] private DragController drag;
    [SerializeField] private MergeSystem mergeSystem;
    [SerializeField] private TutorialHandController tutorial;
    [SerializeField] private PackshotController packshot;

    public LevelFlowState State { get; private set; } = LevelFlowState.Initializing;

    public void Initialize(BoardController board, StackTrayController tray, DragController drag, MergeSystem mergeSystem, TutorialHandController tutorial, PackshotController packshot)
    {
        this.board = board;
        this.tray = tray;
        this.drag = drag;
        this.mergeSystem = mergeSystem;
        this.tutorial = tutorial;
        this.packshot = packshot;

        drag.DragStarted += OnDragStarted;
        drag.DragFailed += OnDragFailed;
        drag.StackPlaced += OnStackPlaced;

        SetState(LevelFlowState.Initializing);
        StartLevel();
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
}
