using System;
using UnityEngine;

namespace _Game.Enemies
{
    /// <summary>
    /// Stores the board coordinate occupied by a runtime enemy; movement rules and placement validation remain outside this tag.
    /// </summary>
    [Serializable]
    public sealed class EnemyBoardPosition : EnemyTag
    {
        [SerializeField] private Vector2Int coordinate;

        public EnemyBoardPosition()
        {
        }

        public EnemyBoardPosition(Vector2Int coordinate)
        {
            this.coordinate = coordinate;
        }

        public Vector2Int Coordinate => coordinate;
    }
}
