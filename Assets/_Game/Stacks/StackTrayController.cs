using System.Collections.Generic;
using _Game.Board;
using UnityEngine;

namespace _Game.Stacks
{
    public class StackTrayController : MonoBehaviour
    {
        [SerializeField] private float spacing = 1.75f;
        [SerializeField] private float hitRadius = 0.8f;

        private readonly List<HexStackView> stackViews = new List<HexStackView>();
        private readonly Dictionary<HexStackView, Vector3> homePositions = new Dictionary<HexStackView, Vector3>();
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
                homePositions[view] = view.transform.position;
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
            return homePositions.TryGetValue(view, out Vector3 position) ? position : view.transform.position;
        }

        public void RemoveStack(HexStackView view)
        {
            stackViews.Remove(view);
            homePositions.Remove(view);
        }

        private void Clear()
        {
            for (int i = stackViews.Count - 1; i >= 0; i--)
            {
                if (stackViews[i] != null)
                {
                    Destroy(stackViews[i].gameObject);
                }
            }
            stackViews.Clear();
            homePositions.Clear();
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
    }
}
