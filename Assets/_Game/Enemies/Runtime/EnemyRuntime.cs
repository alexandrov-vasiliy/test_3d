using System;
using UnityEngine;

namespace _Game.Enemies
{
    /// <summary>
    /// Holds mutable combat state for one spawned enemy; view, registry, goal progress, and spawning are handled elsewhere.
    /// </summary>
    public sealed class EnemyRuntime
    {
        public EnemyRuntime(string enemyId, Vector2Int coordinate, int maxHealth)
        {
            EnemyId = string.IsNullOrWhiteSpace(enemyId) ? "basic" : enemyId;
            Coordinate = coordinate;
            MaxHealth = Math.Max(1, maxHealth);
            CurrentHealth = MaxHealth;
        }

        public string EnemyId { get; }
        public Vector2Int Coordinate { get; }
        public int MaxHealth { get; }
        public int CurrentHealth { get; private set; }
        public bool IsAlive => CurrentHealth > 0;

        public bool ApplyDamage(int amount)
        {
            if (!IsAlive || amount <= 0)
            {
                return false;
            }

            CurrentHealth = Math.Max(0, CurrentHealth - amount);
            return !IsAlive;
        }
    }
}
