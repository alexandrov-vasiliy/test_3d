using System;
using UnityEngine;

namespace _Game.Enemies
{
    /// <summary>
    /// Owns the runtime state and presentation lifecycle of one enemy instance; victory and goal tracking stay outside this component.
    /// </summary>
    public sealed class EnemyController : MonoBehaviour
    {
        private bool defeatPublished;

        public event Action<EnemyController> Defeated;

        public EnemyRuntime Runtime { get; private set; }
        public string EnemyId => Runtime != null ? Runtime.EnemyId : string.Empty;
        public Vector2Int Coordinate => Runtime != null ? Runtime.Coordinate : default;
        public bool IsAlive => Runtime != null && Runtime.IsAlive;

        public void Initialize(EnemyRuntime runtime)
        {
            Runtime = runtime;
            defeatPublished = false;
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

        public void Defeat()
        {
            if (Runtime == null || !Runtime.IsAlive)
            {
                return;
            }

            Runtime.ApplyDamage(Runtime.CurrentHealth);
            PublishDefeated();
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
