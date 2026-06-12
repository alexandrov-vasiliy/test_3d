using _Game.Drag;
using _Game.Stacks;
using UnityEngine;

namespace _Game.Board
{
    /// <summary>
    /// Owns board-only rotation input around the Y axis; it reads Old Input System pointer gestures and never manages drag, tray, or gameplay state beyond gating rotation availability.
    /// </summary>
    public class BoardRotationController : MonoBehaviour
    {
        private const float SnapAngleStep = 60f;

        [SerializeField] private float boundsPadding = 1f;
        [SerializeField] private float rotationDegreesPerScreenPixel = 0.2f;
        [SerializeField] private float rotationDeadZonePixels = 6f;
        [SerializeField] private bool useSnapping = true;
        [SerializeField] private float snapDegreesPerSecond = 360f;

        private Camera inputCamera;
        private BoardController board;
        private StackTrayController tray;
        private DragController drag;
        private bool inputEnabled = true;
        private bool isRotating;
        private int activeFingerId = -1;
        private Vector2 lastPointerPosition;
        private float snapOriginYaw;

        public void Initialize(Camera inputCamera, BoardController board, StackTrayController tray, DragController drag)
        {
            this.inputCamera = inputCamera;
            this.board = board;
            this.tray = tray;
            this.drag = drag;

            if (board != null)
            {
                snapOriginYaw = board.transform.localEulerAngles.y;
            }
        }

        public void SetInputEnabled(bool enabled)
        {
            inputEnabled = enabled;
            if (!enabled)
            {
                CancelRotation();
            }
        }

        private void Update()
        {
            if (!inputEnabled || board == null)
            {
                return;
            }

            if (isRotating && !CanRotate())
            {
                CancelRotation();
            }

            if (TryGetPointerDown(out Vector2 downPosition))
            {
                TryBeginRotation(downPosition);
            }

            if (isRotating && TryGetPointerPosition(out Vector2 pointerPosition))
            {
                UpdateRotation(pointerPosition);
            }

            if (isRotating && TryGetPointerUp(out _))
            {
                EndRotation();
            }

            if (!isRotating && useSnapping)
            {
                SnapTowardsNearestStep();
            }
        }

        private void TryBeginRotation(Vector2 screenPosition)
        {
            if (!CanRotate() || !IsPointerInsideRotationArea(screenPosition))
            {
                return;
            }

            isRotating = true;
            lastPointerPosition = screenPosition;
        }

        private void UpdateRotation(Vector2 screenPosition)
        {
            float deltaX = screenPosition.x - lastPointerPosition.x;
            if (Mathf.Abs(deltaX) >= rotationDeadZonePixels)
            {
                Vector3 eulerAngles = board.transform.localEulerAngles;
                eulerAngles.y -= deltaX * rotationDegreesPerScreenPixel;
                board.transform.localRotation = Quaternion.Euler(eulerAngles);
            }

            lastPointerPosition = screenPosition;
        }

        private void EndRotation()
        {
            isRotating = false;
            activeFingerId = -1;
        }

        private void CancelRotation()
        {
            isRotating = false;
            activeFingerId = -1;
        }

        private void SnapTowardsNearestStep()
        {
            float currentYaw = board.transform.localEulerAngles.y;
            float targetYaw = GetNearestSnapYaw(currentYaw);
            float nextYaw = Mathf.MoveTowardsAngle(currentYaw, targetYaw, snapDegreesPerSecond * Time.deltaTime);
            board.transform.localRotation = Quaternion.Euler(0f, nextYaw, 0f);
        }

        private float GetNearestSnapYaw(float currentYaw)
        {
            float deltaFromOrigin = Mathf.DeltaAngle(snapOriginYaw, currentYaw);
            float snappedDelta = Mathf.Round(deltaFromOrigin / SnapAngleStep) * SnapAngleStep;
            return snapOriginYaw + snappedDelta;
        }

        private bool CanRotate()
        {
            return tray != null
                && (drag == null || !drag.IsDragging);
        }

        private bool IsPointerInsideRotationArea(Vector2 screenPosition)
        {
            Camera cam = inputCamera != null ? inputCamera : Camera.main;
            if (cam == null || board == null)
            {
                return false;
            }

            if (!TryGetWorldPointOnBoardPlane(cam, screenPosition, out Vector3 worldPosition))
            {
                return false;
            }

            if (!board.TryGetBoardBoundsXZ(out Vector2 min, out Vector2 max))
            {
                return false;
            }

            min -= Vector2.one * boundsPadding;
            max += Vector2.one * boundsPadding;

            return worldPosition.x >= min.x
                && worldPosition.x <= max.x
                && worldPosition.z >= min.y
                && worldPosition.z <= max.y;
        }

        private bool TryGetPointerDown(out Vector2 position)
        {
            if (Input.touchCount > 0)
            {
                for (int i = 0; i < Input.touchCount; i++)
                {
                    Touch touch = Input.GetTouch(i);
                    if (touch.phase != TouchPhase.Began)
                    {
                        continue;
                    }

                    activeFingerId = touch.fingerId;
                    position = touch.position;
                    return true;
                }
            }

            position = Input.mousePosition;
            activeFingerId = -1;
            return Input.GetMouseButtonDown(0);
        }

        private bool TryGetPointerPosition(out Vector2 position)
        {
            if (activeFingerId >= 0)
            {
                for (int i = 0; i < Input.touchCount; i++)
                {
                    Touch touch = Input.GetTouch(i);
                    if (touch.fingerId != activeFingerId)
                    {
                        continue;
                    }

                    position = touch.position;
                    return touch.phase != TouchPhase.Ended && touch.phase != TouchPhase.Canceled;
                }

                position = default;
                return false;
            }

            if (Input.GetMouseButton(0))
            {
                position = Input.mousePosition;
                return true;
            }

            position = default;
            return false;
        }

        private bool TryGetPointerUp(out Vector2 position)
        {
            if (activeFingerId >= 0)
            {
                for (int i = 0; i < Input.touchCount; i++)
                {
                    Touch touch = Input.GetTouch(i);
                    if (touch.fingerId != activeFingerId)
                    {
                        continue;
                    }

                    position = touch.position;
                    if (touch.phase == TouchPhase.Ended || touch.phase == TouchPhase.Canceled)
                    {
                        activeFingerId = -1;
                        return true;
                    }

                    return false;
                }

                position = lastPointerPosition;
                activeFingerId = -1;
                return true;
            }

            position = Input.mousePosition;
            return Input.GetMouseButtonUp(0);
        }

        private bool TryGetWorldPointOnBoardPlane(Camera cam, Vector2 screenPosition, out Vector3 world)
        {
            world = default;
            Ray ray = cam.ScreenPointToRay(screenPosition);
            Plane plane = new Plane(Vector3.up, board.transform.position);
            if (!plane.Raycast(ray, out float distance))
            {
                return false;
            }

            world = ray.GetPoint(distance);
            return true;
        }
    }
}
