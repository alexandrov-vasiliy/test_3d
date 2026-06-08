using _Game.Stacks;
using UnityEngine;

namespace _Game.Board
{
    [System.Serializable]
    public class HexCell
    {
        public Vector2Int coordinate;
        public HexStack stack;

        public bool IsEmpty => stack == null || stack.IsEmpty;

        public HexCell(Vector2Int coordinate)
        {
            this.coordinate = coordinate;
        }
    }
}
