using System.Collections.Generic;
using UnityEngine;

namespace _Game.Enemies
{
    /// <summary>
    /// Stores available enemy archetypes as ECS-like serialized component bundles so level loading can resolve enemy ids without ScriptableObjects.
    /// </summary>
    public sealed class EnemyCatalog : MonoBehaviour
    {
        [SerializeReference] private List<EnemyArchetypeDefinition> archetypes = new List<EnemyArchetypeDefinition>
        {
            new SkeletonEnemy()
        };

        public IReadOnlyList<EnemyArchetypeDefinition> Archetypes => archetypes;

        public bool TryGetArchetype(string enemyId, out EnemyArchetypeDefinition archetype)
        {
            string requestedId = string.IsNullOrWhiteSpace(enemyId) ? "basic" : enemyId;
            for (int i = 0; i < archetypes.Count; i++)
            {
                EnemyArchetypeDefinition candidate = archetypes[i];
                if (candidate != null && candidate.EffectiveId == requestedId)
                {
                    archetype = candidate;
                    return true;
                }
            }

            if (requestedId == "basic" && archetypes != null && archetypes.Count > 0)
            {
                archetype = archetypes[0];
                return archetype != null;
            }

            archetype = null;
            return false;
        }

        private void Reset()
        {
            if (archetypes == null)
            {
                archetypes = new List<EnemyArchetypeDefinition>();
            }

            if (archetypes.Count == 0)
            {
                archetypes.Add(new SkeletonEnemy());
            }
        }
    }
}
