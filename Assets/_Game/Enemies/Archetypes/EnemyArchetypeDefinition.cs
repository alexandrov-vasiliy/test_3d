using System;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Serialization;

namespace _Game.Enemies
{
    /// <summary>
    /// Defines reusable enemy composition data stored as serialized tags; runtime state, view lifecycle, and behavior execution stay outside this data class.
    /// </summary>
    [Serializable]
    public class EnemyArchetypeDefinition
    {
        [SerializeField] private string enemyId = "basic";
        [SerializeField] private string displayName = "Basic Enemy";
        [SerializeReference, FormerlySerializedAs("components")] private List<EnemyTag> tags = new List<EnemyTag>
        {
            new EnemyIdentity("basic", "Basic Enemy"),
            new EnemyHealth(1),
            new EnemyDefence(),
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
            tags = new List<EnemyTag>();
        }

        public string DisplayName => TryGetTag(out EnemyIdentity identity) ? identity.DisplayName : string.IsNullOrWhiteSpace(displayName) ? EffectiveId : displayName;
        public IReadOnlyList<EnemyTag> Tags => tags;
        public int BaseHealth => TryGetTag(out EnemyHealth health) ? health.MaxHealth : Mathf.Max(1, baseHealth);
        public int StartingDefence => TryGetTag(out EnemyDefence defence) ? defence.StartingDefence : 0;
        public GameObject Prefab => TryGetTag(out EnemyVisualReference visual) && visual.Prefab != null ? visual.Prefab : prefab;
        public Vector3 PositionOffset => TryGetTag(out EnemyVisualReference visual) ? visual.PositionOffset : positionOffset;
        public GameObject DefaultHitVfx => TryGetTag(out EnemyVisualReference visual) && visual.DefaultHitVfx != null ? visual.DefaultHitVfx : defaultHitVfx;
        public GameObject DefaultDeathVfx => TryGetTag(out EnemyVisualReference visual) && visual.DefaultDeathVfx != null ? visual.DefaultDeathVfx : defaultDeathVfx;
        public string EffectiveId => TryGetTag(out EnemyIdentity identity) ? identity.EnemyId : string.IsNullOrWhiteSpace(enemyId) ? "basic" : enemyId;

        public bool TryGetTag<TTag>(out TTag tag)
            where TTag : EnemyTag
        {
            if (tags != null)
            {
                for (int i = 0; i < tags.Count; i++)
                {
                    if (tags[i] is TTag typedTag)
                    {
                        tag = typedTag;
                        return true;
                    }
                }
            }

            tag = null;
            return false;
        }

        protected void AddTagIfMissing<TTag>(TTag tag)
            where TTag : EnemyTag
        {
            if (tag == null)
            {
                return;
            }

            if (tags == null)
            {
                tags = new List<EnemyTag>();
            }

            if (TryGetTag<TTag>(out _))
            {
                return;
            }

            tags.Add(tag);
        }
    }
}
