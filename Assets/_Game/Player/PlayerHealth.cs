using System;
using UnityEngine;

namespace _Game.Player
{
    /// <summary>
    /// Owns mutable player health gameplay state and publishes death; flow/UI reactions are handled by injected listeners.
    /// </summary>
    public sealed class PlayerHealth : MonoBehaviour
    {
        [SerializeField] private int maxHealth = 3;

        public event Action<int, int> HealthChanged;
        public event Action Died;

        public int MaxHealth => Mathf.Max(1, maxHealth);
        public int CurrentHealth { get; private set; }
        public bool IsAlive => CurrentHealth > 0;

        private void Awake()
        {
            ResetHealth();
        }

        public void ResetHealth()
        {
            CurrentHealth = MaxHealth;
            HealthChanged?.Invoke(CurrentHealth, MaxHealth);
        }

        public void ApplyDamage(int amount)
        {
            if (!IsAlive || amount <= 0)
            {
                return;
            }

            CurrentHealth = Mathf.Max(0, CurrentHealth - amount);
            HealthChanged?.Invoke(CurrentHealth, MaxHealth);

            if (CurrentHealth == 0)
            {
                Died?.Invoke();
            }
        }

        public void Heal(int amount)
        {
            if (!IsAlive || amount <= 0)
            {
                return;
            }

            CurrentHealth = Mathf.Min(MaxHealth, CurrentHealth + amount);
            HealthChanged?.Invoke(CurrentHealth, MaxHealth);
        }
    }
}
