using System;
using DG.Tweening;
using UnityEngine;
using UnityEngine.InputSystem;

public class DragController : MonoBehaviour
{
    [SerializeField] private float returnDuration = 0.2f;
    [SerializeField] private float dragHeight = 1.15f;

    private Camera inputCamera;
    private BoardController board;
    private StackTrayController tray;
    private bool inputEnabled = true;
    private HexStackView draggedStack;
    private Vector3 draggedHome;
    private HexCell highlightedCell;

    public event Action<HexStackView> DragStarted;
    public event Action<HexStackView> DragFailed;
    public event Action<HexStackView, HexCell> StackPlaced;

    public bool IsDragging => draggedStack != null;

    [Inject]
    private void Construct(Camera inputCamera, BoardController board, StackTrayController tray)
    {
        this.inputCamera = inputCamera;
        this.board = board;
        this.tray = tray;
    }

    public void SetInputEnabled(bool enabled)
    {
        inputEnabled = enabled;
        if (!enabled && draggedStack == null)
        {
            board.ClearHighlights();
        }
    }

    private void Update()
    {
        if (!inputEnabled || board == null || tray == null)
        {
            return;
        }

        if (TryGetPointerDown(out Vector2 downPosition))
        {
            TryBeginDrag(downPosition);
        }

        if (draggedStack == null)
        {
            return;
        }

        if (TryGetPointerPosition(out Vector2 position))
        {
            UpdateDrag(position);
        }

        if (TryGetPointerUp(out Vector2 upPosition))
        {
            EndDrag(upPosition);
        }
    }

    private void TryBeginDrag(Vector2 screenPosition)
    {
        HexStackView stack = tray.GetStackUnderPointer(screenPosition, inputCamera);
        if (stack == null)
        {
            return;
        }

        draggedStack = stack;
        draggedHome = tray.GetHomePosition(stack);
        draggedStack.transform.DOKill();
        draggedStack.transform.SetParent(transform, true);
        DragStarted?.Invoke(stack);
        UpdateDrag(screenPosition);
    }

    private void UpdateDrag(Vector2 screenPosition)
    {
        Camera cam = inputCamera != null ? inputCamera : Camera.main;
        if (TryGetWorldPointOnPlane(cam, screenPosition, dragHeight, out Vector3 world))
        {
            draggedStack.transform.position = world;
        }

        highlightedCell = board.GetCellUnderPointer(screenPosition);
        bool valid = board.IsCellEmpty(highlightedCell);
        board.HighlightCell(highlightedCell, highlightedCell != null, valid);
    }

    private void EndDrag(Vector2 screenPosition)
    {
        HexCell targetCell = board.GetCellUnderPointer(screenPosition);
        bool valid = board.IsCellEmpty(targetCell);
        board.ClearHighlights();

        HexStackView stack = draggedStack;
        draggedStack = null;
        highlightedCell = null;

        if (valid)
        {
            tray.RemoveStack(stack);
            board.PlaceStack(targetCell, stack.Stack);
            board.PlaceStackView(targetCell, stack);
            StackPlaced?.Invoke(stack, targetCell);
        }
        else
        {
            stack.transform.DOMove(draggedHome, returnDuration).SetEase(Ease.OutQuad).OnComplete(() =>
            {
                if (tray != null)
                {
                    stack.transform.SetParent(tray.transform, true);
                }
            });
            DragFailed?.Invoke(stack);
        }
    }

    private bool TryGetPointerDown(out Vector2 position)
    {
        Touchscreen touchScreen = Touchscreen.current;
        if (touchScreen != null && touchScreen.primaryTouch.press.wasPressedThisFrame)
        {
            position = touchScreen.primaryTouch.position.ReadValue();
            return true;
        }

        Mouse mouse = Mouse.current;
        if (mouse != null)
        {
            position = mouse.position.ReadValue();
            return mouse.leftButton.wasPressedThisFrame;
        }

        position = default;
        return false;
    }

    private bool TryGetPointerPosition(out Vector2 position)
    {
        Touchscreen touchScreen = Touchscreen.current;
        if (touchScreen != null && touchScreen.primaryTouch.press.isPressed)
        {
            position = touchScreen.primaryTouch.position.ReadValue();
            return true;
        }

        Mouse mouse = Mouse.current;
        if (mouse != null && mouse.leftButton.isPressed)
        {
            position = mouse.position.ReadValue();
            return true;
        }

        position = default;
        return false;
    }

    private bool TryGetPointerUp(out Vector2 position)
    {
        Touchscreen touchScreen = Touchscreen.current;
        if (touchScreen != null && touchScreen.primaryTouch.press.wasReleasedThisFrame)
        {
            position = touchScreen.primaryTouch.position.ReadValue();
            return true;
        }

        Mouse mouse = Mouse.current;
        if (mouse != null)
        {
            position = mouse.position.ReadValue();
            return mouse.leftButton.wasReleasedThisFrame;
        }

        position = default;
        return false;
    }

    private static bool TryGetWorldPointOnPlane(Camera cam, Vector2 screenPosition, float y, out Vector3 world)
    {
        world = default;
        if (cam == null)
        {
            return false;
        }

        Ray ray = cam.ScreenPointToRay(screenPosition);
        Plane plane = new Plane(Vector3.up, new Vector3(0f, y, 0f));
        if (!plane.Raycast(ray, out float distance))
        {
            return false;
        }

        world = ray.GetPoint(distance);
        return true;
    }
}
