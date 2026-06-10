using System;
using UnityEngine;

namespace _Game.Enemies
{
    /// <summary>
    /// Stores enemy combat health for archetype defaults and runtime mutation; damage orchestration remains in EnemyRuntime.
    /// </summary>
    [Serializable]
    public sealed class EnemyHealth : EnemyTag
    {
        [SerializeField] private int maxHealth = 1;
        [SerializeField, HideInInspector] private int currentHealth = -1;

        public EnemyHealth()
        {
        }

        public EnemyHealth(int maxHealth)
        {
            this.maxHealth = maxHealth;
            currentHealth = Mathf.Max(1, maxHealth);
        }

        public int MaxHealth => Mathf.Max(1, maxHealth);
        public int CurrentHealth => currentHealth >= 0 ? Mathf.Min(currentHealth, MaxHealth) : MaxHealth;
        public bool IsAlive => CurrentHealth > 0;

        public void ApplyDamage(int amount)
        {
            if (!IsAlive || amount <= 0)
            {
                return;
            }

            currentHealth = Mathf.Max(0, CurrentHealth - amount);
        }
    }
}
