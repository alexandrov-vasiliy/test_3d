using System.Collections.Generic;
using _Game.Board;
using UnityEngine;

namespace _Game.Enemies
{
    /// <summary>
    /// Tracks which board coordinates are occupied by living enemies so placement checks can reject blocked cells.
    /// </summary>
    public sealed class EnemyRegistry
    {
        private readonly Dictionary<Vector2Int, EnemyController> enemiesByCoordinate = new Dictionary<Vector2Int, EnemyController>();

        public int ActiveCount => enemiesByCoordinate.Count;

        public bool TryRegister(EnemyController enemy)
        {
            if (enemy == null || !enemy.IsAlive || enemiesByCoordinate.ContainsKey(enemy.Coordinate))
            {
                return false;
            }

            enemiesByCoordinate.Add(enemy.Coordinate, enemy);
            return true;
        }

        public bool Unregister(EnemyController enemy)
        {
            if (enemy == null)
            {
                return false;
            }

            if (enemiesByCoordinate.TryGetValue(enemy.Coordinate, out EnemyController registered) && registered == enemy)
            {
                enemiesByCoordinate.Remove(enemy.Coordinate);
                return true;
            }

            Vector2Int removedCoordinate = default;
            bool found = false;
            foreach (KeyValuePair<Vector2Int, EnemyController> pair in enemiesByCoordinate)
            {
                if (pair.Value == enemy)
                {
                    removedCoordinate = pair.Key;
                    found = true;
                    break;
                }
            }

            if (!found)
            {
                return false;
            }

            enemiesByCoordinate.Remove(removedCoordinate);
            return true;
        }

        public bool IsOccupied(HexCell cell)
        {
            return cell != null && IsOccupied(cell.coordinate);
        }

        public bool IsOccupied(Vector2Int coordinate)
        {
            return enemiesByCoordinate.ContainsKey(coordinate);
        }

        public bool TryGetEnemy(Vector2Int coordinate, out EnemyController enemy)
        {
            return enemiesByCoordinate.TryGetValue(coordinate, out enemy);
        }

        public void Clear()
        {
            enemiesByCoordinate.Clear();
        }
    }
}
