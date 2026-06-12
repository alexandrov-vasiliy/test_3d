using System;
using System.Collections.Generic;
using UnityEngine;

namespace _Game.Enemies.Statuses
{
    /// <summary>
    /// Owns active status instances and their attached visual prefabs for one enemy; rune tags define statuses and EnemyController drives turn timing.
    /// </summary>
    public sealed class EnemyStatusController : MonoBehaviour
    {
        /// <summary>
        /// Couples one runtime status with the visual instance owned by this controller.
        /// </summary>
        private sealed class ActiveStatus
        {
            public ActiveStatus(EnemyStatusEffect effect, GameObject visual)
            {
                Effect = effect;
                Visual = visual;
            }

            public EnemyStatusEffect Effect { get; }
            public GameObject Visual { get; }
        }

        private readonly List<ActiveStatus> activeStatuses = new List<ActiveStatus>();
        private EnemyController enemy;

        public IReadOnlyList<EnemyStatusEffect> ActiveStatuses
        {
            get
            {
                List<EnemyStatusEffect> effects = new List<EnemyStatusEffect>(activeStatuses.Count);
                for (int i = 0; i < activeStatuses.Count; i++)
                {
                    effects.Add(activeStatuses[i].Effect);
                }

                return effects;
            }
        }

        public void Initialize(EnemyController owner)
        {
            Clear();
            enemy = owner;
        }

        public void AddOrRefresh(EnemyStatusEffect effect)
        {
            if (effect == null || enemy == null || !enemy.IsAlive)
            {
                return;
            }

            for (int i = 0; i < activeStatuses.Count; i++)
            {
                EnemyStatusEffect current = activeStatuses[i].Effect;
                if (current.GetType() != effect.GetType())
                {
                    continue;
                }

                if (current is PeriodicDamageEnemyStatus currentDamage && effect is PeriodicDamageEnemyStatus newDamage)
                {
                    currentDamage.Refresh(newDamage.RemainingTurns, newDamage.DamagePerTurn);
                }
                else
                {
                    current.Refresh(effect.RemainingTurns);
                }

                return;
            }

            GameObject visual = effect.VisualPrefab != null
                ? Instantiate(effect.VisualPrefab, transform, false)
                : null;
            activeStatuses.Add(new ActiveStatus(effect, visual));
        }

        public bool BeginTurn()
        {
            bool skipIntent = false;
            for (int i = activeStatuses.Count - 1; i >= 0; i--)
            {
                EnemyStatusEffect effect = activeStatuses[i].Effect;
                effect.OnTurnStarted(enemy);
                skipIntent |= effect.SkipsIntent;
                if (enemy == null || !enemy.IsAlive)
                {
                    break;
                }
            }

            return skipIntent;
        }

        public void CompleteTurn()
        {
            for (int i = activeStatuses.Count - 1; i >= 0; i--)
            {
                ActiveStatus status = activeStatuses[i];
                status.Effect.CompleteTurn();
                if (status.Effect.RemainingTurns <= 0)
                {
                    RemoveAt(i);
                }
            }
        }

        public void Clear()
        {
            for (int i = activeStatuses.Count - 1; i >= 0; i--)
            {
                RemoveAt(i);
            }
        }

        private void OnDestroy()
        {
            Clear();
        }

        private void RemoveAt(int index)
        {
            GameObject visual = activeStatuses[index].Visual;
            activeStatuses.RemoveAt(index);
            if (visual == null)
            {
                return;
            }

            if (Application.isPlaying)
            {
                Destroy(visual);
            }
            else
            {
                DestroyImmediate(visual);
            }
        }
    }
}
