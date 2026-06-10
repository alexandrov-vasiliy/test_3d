using System;
using _Game.Player;
using UnityEngine;

namespace _Game.Enemies
{
    /// <summary>
    /// Owns runtime combat state, active intent progression, and presentation lifecycle for one enemy; victory and goal tracking stay outside this controller.
    /// </summary>
    public sealed class EnemyController : MonoBehaviour
    {
        private bool defeatPublished;

        public event Action<EnemyController> Defeated;

        public EnemyRuntime Runtime { get; private set; }
        public string EnemyId => Runtime != null ? Runtime.EnemyId : string.Empty;
        public Vector2Int Coordinate => Runtime != null ? Runtime.Coordinate : default;
        public bool IsAlive => Runtime != null && Runtime.IsAlive;
        public int Defence => Runtime != null ? Runtime.Defence : 0;
        public EnemyIntent ActiveIntent => TryGetIntentLoop(out EnemyIntentLoop loop, out EnemyActiveIntent activeIntent) ? loop.Intents[activeIntent.ActiveIndex % loop.Intents.Count] : null;

        public void Initialize(EnemyRuntime runtime)
        {
            Runtime = runtime;
            defeatPublished = false;
            if (Runtime != null && Runtime.TryGetTag(out EnemyActiveIntent activeIntent))
            {
                activeIntent.Reset();
            }
            SetPresentationVisible(true);
        }

        public bool ApplyDamage(int amount)
        {
            if (Runtime == null || !Runtime.IsAlive)
            {
                return false;
            }

            bool defeated = Runtime.ApplyDamage(amount);
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

        public bool ExecuteActiveIntent(PlayerHealth playerHealth)
        {
            if (!IsAlive)
            {
                return false;
            }

            EnemyIntent intent = ActiveIntent;
            if (intent == null)
            {
                AdvanceIntent();
                return false;
            }

            intent.Execute(this, playerHealth);
            AdvanceIntent();
            return true;
        }

        public void Defeat()
        {
            if (Runtime == null || !Runtime.IsAlive)
            {
                return;
            }

            Runtime.ApplyDamage(Runtime.CurrentHealth + Runtime.Defence);
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
