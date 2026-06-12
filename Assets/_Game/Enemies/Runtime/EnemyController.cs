using System;
using _Game.Enemies.Statuses;
using _Game.Player;
using UnityEngine;

namespace _Game.Enemies
{
    /// <summary>
    /// Owns runtime combat state, active intent progression, status turn hooks, damage requests, and view-facing events for one enemy; victory and goal tracking stay outside.
    /// </summary>
    public sealed class EnemyController : MonoBehaviour
    {
        private bool defeatPublished;
        private EnemyStatusController statusController;

        public event Action<EnemyController> Defeated;
        public event Action<int, int> HealthChanged;
        public event Action<EnemyController, int> Damaged;

        public EnemyRuntime Runtime { get; private set; }
        public string EnemyId => Runtime != null ? Runtime.EnemyId : string.Empty;
        public Vector2Int Coordinate => Runtime != null ? Runtime.Coordinate : default;
        public bool IsAlive => Runtime != null && Runtime.IsAlive;
        public int Defence => Runtime != null ? Runtime.Defence : 0;
        public EnemyIntent ActiveIntent => TryGetIntentLoop(out EnemyIntentLoop loop, out EnemyActiveIntent activeIntent) ? loop.Intents[activeIntent.ActiveIndex % loop.Intents.Count] : null;
        public EnemyStatusController Statuses => statusController;

        public void Initialize(EnemyRuntime runtime)
        {
            Runtime = runtime;
            defeatPublished = false;
            statusController = GetComponent<EnemyStatusController>();
            if (statusController == null)
            {
                statusController = gameObject.AddComponent<EnemyStatusController>();
            }

            statusController.Initialize(this);
            if (Runtime != null && Runtime.TryGetTag(out EnemyActiveIntent activeIntent))
            {
                activeIntent.Reset();
            }
            SetPresentationVisible(true);
        }

        public bool ApplyDamage(int amount)
        {
            return ApplyDamage(amount, false);
        }

        public bool ApplyDamage(int amount, bool ignoreDefence)
        {
            if (Runtime == null || !Runtime.IsAlive)
            {
                return false;
            }

            int previousHealth = Runtime.CurrentHealth;
            bool defeated = Runtime.ApplyDamage(amount, ignoreDefence);
            int healthDamage = Mathf.Max(0, previousHealth - Runtime.CurrentHealth);
            if (healthDamage > 0)
            {
                HealthChanged?.Invoke(Runtime.CurrentHealth, Runtime.MaxHealth);
                Damaged?.Invoke(this, healthDamage);
            }

            if (defeated)
            {
                PublishDefeated();
            }

            return defeated;
        }

        public void AddDefence(int amount)
        {
            Runtime?.AddDefence(amount);
        }

        public void AddStatus(EnemyStatusEffect status)
        {
            statusController?.AddOrRefresh(status);
        }

        public bool ExecuteActiveIntent(PlayerHealth playerHealth)
        {
            if (!IsAlive)
            {
                return false;
            }

            bool skipIntent = statusController != null && statusController.BeginTurn();
            if (!IsAlive)
            {
                statusController?.Clear();
                return true;
            }

            if (skipIntent)
            {
                statusController?.CompleteTurn();
                return true;
            }

            EnemyIntent intent = ActiveIntent;
            if (intent == null)
            {
                AdvanceIntent();
                statusController?.CompleteTurn();
                return false;
            }

            intent.Execute(this, playerHealth);
            AdvanceIntent();
            statusController?.CompleteTurn();
            return true;
        }

        public void Defeat()
        {
            if (Runtime == null || !Runtime.IsAlive)
            {
                return;
            }

            Runtime.ApplyDamage(Runtime.CurrentHealth + Runtime.Defence);
            HealthChanged?.Invoke(Runtime.CurrentHealth, Runtime.MaxHealth);
            PublishDefeated();
        }

        private void AdvanceIntent()
        {
            if (!TryGetIntentLoop(out EnemyIntentLoop loop, out EnemyActiveIntent activeIntent))
            {
                return;
            }

            activeIntent.Advance(loop.Intents.Count);
        }

        private bool TryGetIntentLoop(out EnemyIntentLoop loop, out EnemyActiveIntent activeIntent)
        {
            loop = null;
            activeIntent = null;
            return Runtime != null
                && Runtime.TryGetTag(out loop)
                && Runtime.TryGetTag(out activeIntent)
                && loop.Intents != null
                && loop.Intents.Count > 0;
        }

        private void PublishDefeated()
        {
            if (defeatPublished)
            {
                return;
            }

            defeatPublished = true;
            statusController?.Clear();
            SetPresentationVisible(false);
            Defeated?.Invoke(this);
        }

        private void SetPresentationVisible(bool visible)
        {
            Renderer[] renderers = GetComponentsInChildren<Renderer>(true);
            for (int i = 0; i < renderers.Length; i++)
            {
                if (renderers[i] != null)
                {
                    renderers[i].enabled = visible;
                }
            }

            Collider[] colliders = GetComponentsInChildren<Collider>(true);
            for (int i = 0; i < colliders.Length; i++)
            {
                if (colliders[i] != null)
                {
                    colliders[i].enabled = visible;
                }
            }
        }
    }
}
