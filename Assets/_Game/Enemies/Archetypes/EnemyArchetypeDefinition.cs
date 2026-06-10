using System;
using System.Collections.Generic;
using UnityEngine;

namespace _Game.Enemies
{
    /// <summary>
    /// Defines reusable enemy composition data stored on scene or prefab components; runtime state, view lifecycle, and behavior execution stay outside this data class.
    /// </summary>
    [Serializable]
    public class EnemyArchetypeDefinition
    {
        [SerializeField] private string enemyId = "basic";
        [SerializeField] private string displayName = "Basic Enemy";
        [SerializeReference] private List<EnemyComponent> components = new List<EnemyComponent>
        {
            new EnemyHealth(1),
            new EnemyVisualReference()
        };

        [SerializeField, HideInInspector] private GameObject prefab;
        [SerializeField, HideInInspector] private int baseHealth = 1;
        [SerializeField, HideInInspector] private Vector3 positionOffset = new Vector3(0f, 0.35f, 0f);
        [SerializeField, HideInInspector] private GameObject defaultHitVfx;
        [SerializeField, HideInInspector] private GameObject defaultDeathVfx;

        public EnemyArchetypeDefinition()
        {
        }

        protected EnemyArchetypeDefinition(string enemyId, string displayName)
        {
            this.enemyId = enemyId;
            this.displayName = displayName;
            components = new List<EnemyComponent>();
        }

        public string DisplayName => string.IsNullOrWhiteSpace(displayName) ? EffectiveId : displayName;
        public IReadOnlyList<EnemyComponent> Components => components;
        public int BaseHealth => TryGetComponent(out EnemyHealth health) ? health.MaxHealth : Mathf.Max(1, baseHealth);
        public GameObject Prefab => TryGetComponent(out EnemyVisualReference visual) && visual.Prefab != null ? visual.Prefab : prefab;
        public Vector3 PositionOffset => TryGetComponent(out EnemyVisualReference visual) ? visual.PositionOffset : positionOffset;
        public GameObject DefaultHitVfx => TryGetComponent(out EnemyVisualReference visual) && visual.DefaultHitVfx != null ? visual.DefaultHitVfx : defaultHitVfx;
        public GameObject DefaultDeathVfx => TryGetComponent(out EnemyVisualReference visual) && visual.DefaultDeathVfx != null ? visual.DefaultDeathVfx : defaultDeathVfx;
        public string EffectiveId => string.IsNullOrWhiteSpace(enemyId) ? "basic" : enemyId;

        public bool TryGetComponent<TComponent>(out TComponent component)
            where TComponent : EnemyComponent
        {
            if (components != null)
            {
                for (int i = 0; i < components.Count; i++)
                {
                    if (components[i] is TComponent typedComponent)
                    {
                        component = typedComponent;
                        return true;
                    }
                }
            }

            component = null;
            return false;
        }

        protected void AddComponentIfMissing<TComponent>(TComponent component)
            where TComponent : EnemyComponent
        {
            if (component == null)
            {
                return;
            }

            if (components == null)
            {
                components = new List<EnemyComponent>();
            }

            if (TryGetComponent<TComponent>(out _))
            {
                return;
            }

            components.Add(component);
        }
    }
}
