using System.Collections.Generic;
using _Game.Board;
using UnityEngine;

namespace _Game.Stacks
{
    /// <summary>
    /// Owns the visible draggable hand slots in the scene; hand generation decides what stacks appear here.
    /// </summary>
    public class StackTrayController : MonoBehaviour
    {
        [SerializeField] private float spacing = 1.75f;
        [SerializeField] private float hitRadius = 0.8f;

        private readonly List<HexStackView> stackViews = new List<HexStackView>();
        private readonly Dictionary<HexStackView, Vector3> localHomePositions = new Dictionary<HexStackView, Vector3>();
        private readonly List<Renderer> renderers = new List<Renderer>();
        private BoardController board;

        public int RemainingStacks => stackViews.Count;
        public IReadOnlyList<HexStackView> StackViews => stackViews;

        public void SetBoard(BoardController board)
        {
            this.board = board;
        }

        public void Initialize(List<HexStack> stacks)
        {
            Clear();
            float startX = (stacks.Count - 1) * spacing * -0.5f;
            for (int i = 0; i < stacks.Count; i++)
            {
                Vector3 localPosition = new Vector3(startX + i * spacing, 0f, 0f);
                HexStackView view = board.CreateStackView(stacks[i], transform, transform.TransformPoint(localPosition));
                view.name = "TrayStack_" + i;
                stackViews.Add(view);
                localHomePositions[view] = localPosition;
            }
        }

        public HexStackView GetStackUnderPointer(Vector2 screenPosition, Camera inputCamera)
        {
            Camera cam = inputCamera != null ? inputCamera : Camera.main;
            if (cam == null)
            {
                return null;
            }

            if (!TryGetWorldPointOnTrayPlane(cam, screenPosition, out Vector3 world))
            {
                return null;
            }

            for (int i = stackViews.Count - 1; i >= 0; i--)
            {
                HexStackView view = stackViews[i];
                if (view != null && DistanceXZ(world, view.transform.position) <= hitRadius)
                {
                    return view;
                }
            }

            return null;
        }

        public Vector3 GetHomePosition(HexStackView view)
        {
            return localHomePositions.TryGetValue(view, out Vector3 localPosition)
                ? transform.TransformPoint(localPosition)
                : view.transform.position;
        }

        public void RemoveStack(HexStackView view)
        {
            stackViews.Remove(view);
            localHomePositions.Remove(view);
        }

        public void Clear()
        {
            for (int i = stackViews.Count - 1; i >= 0; i--)
            {
                if (stackViews[i] != null)
                {
                    Destroy(stackViews[i].gameObject);
                }
            }
            stackViews.Clear();
            localHomePositions.Clear();
        }

        public bool GetWorldBoundsCorners(List<Vector3> corners)
        {
            if (corners == null)
            {
                return false;
            }

            corners.Clear();
            for (int i = 0; i < stackViews.Count; i++)
            {
                HexStackView stackView = stackViews[i];
                if (stackView == null || !stackView.transform.IsChildOf(transform))
                {
                    continue;
                }

                renderers.Clear();
                stackView.GetComponentsInChildren(false, renderers);
                if (renderers.Count == 0)
                {
                    corners.Add(stackView.transform.position);
                    continue;
                }

                for (int rendererIndex = 0; rendererIndex < renderers.Count; rendererIndex++)
                {
                    Renderer renderer = renderers[rendererIndex];
                    if (renderer != null && renderer.enabled)
                    {
                        AddBoundsCorners(renderer.bounds, corners);
                    }
                }
            }

            return corners.Count > 0;
        }

        private bool TryGetWorldPointOnTrayPlane(Camera cam, Vector2 screenPosition, out Vector3 world)
        {
            world = default;
            Ray ray = cam.ScreenPointToRay(screenPosition);
            Plane plane = new Plane(Vector3.up, transform.position);
            if (!plane.Raycast(ray, out float distance))
            {
                return false;
            }

            world = ray.GetPoint(distance);
            return true;
        }

        private static float DistanceXZ(Vector3 a, Vector3 b)
        {
            return Vector2.Distance(new Vector2(a.x, a.z), new Vector2(b.x, b.z));
        }

        private static void AddBoundsCorners(Bounds bounds, List<Vector3> corners)
        {
            Vector3 min = bounds.min;
            Vector3 max = bounds.max;
            corners.Add(new Vector3(min.x, min.y, min.z));
            corners.Add(new Vector3(min.x, min.y, max.z));
            corners.Add(new Vector3(min.x, max.y, min.z));
            corners.Add(new Vector3(min.x, max.y, max.z));
            corners.Add(new Vector3(max.x, min.y, min.z));
            corners.Add(new Vector3(max.x, min.y, max.z));
            corners.Add(new Vector3(max.x, max.y, min.z));
            corners.Add(new Vector3(max.x, max.y, max.z));
        }
    }
}
