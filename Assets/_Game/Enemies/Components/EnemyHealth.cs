using System;
using UnityEngine;

namespace _Game.Enemies
{
    /// <summary>
    /// Configures starting combat health for an enemy archetype; mutable health remains in EnemyRuntime.
    /// </summary>
    [Serializable]
    public sealed class EnemyHealth : EnemyComponent
    {
        [SerializeField] private int maxHealth = 1;

        public EnemyHealth()
        {
        }

        public EnemyHealth(int maxHealth)
        {
            this.maxHealth = maxHealth;
        }

        public int MaxHealth => Mathf.Max(1, maxHealth);
    }
}
