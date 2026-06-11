using System;
using System.Collections.Generic;
using UnityEngine;

namespace _Game.Enemies
{
    /// <summary>
    /// Holds the ECS-like runtime tag bag and damage resolution for one spawned enemy; view, registry, goal progress, and spawning are handled elsewhere.
    /// </summary>
    public sealed class EnemyRuntime
    {
        private readonly List<EnemyTag> tags = new List<EnemyTag>();

        public EnemyRuntime(IEnumerable<EnemyTag> tags)
        {
            if (tags == null)
            {
                return;
            }

            foreach (EnemyTag tag in tags)
            {
                if (tag != null)
                {
                    this.tags.Add(tag);
                }
            }
        }

        public IReadOnlyList<EnemyTag> Tags => tags;
        public string EnemyId => TryGetTag(out EnemyIdentity identity) ? identity.EnemyId : "basic";
        public string DisplayName => TryGetTag(out EnemyIdentity identity) ? identity.DisplayName : EnemyId;
        public Vector2Int Coordinate => TryGetTag(out EnemyBoardPosition position) ? position.Coordinate : default;
        public int MaxHealth => TryGetTag(out EnemyHealth health) ? health.MaxHealth : 0;
        public int CurrentHealth => TryGetTag(out EnemyHealth health) ? health.CurrentHealth : 0;
        public int Defence => TryGetTag(out EnemyDefence defence) ? defence.Amount : 0;
        public bool IsAlive => TryGetTag(out EnemyHealth health) && health.IsAlive;

        public bool TryGetTag<TTag>(out TTag tag)
            where TTag : EnemyTag
        {
            for (int i = 0; i < tags.Count; i++)
            {
                if (tags[i] is TTag typedTag)
                {
                    tag = typedTag;
                    return true;
                }
            }

            tag = null;
            return false;
        }

        public TTag GetTag<TTag>()
            where TTag : EnemyTag
        {
            if (TryGetTag(out TTag tag))
            {
                return tag;
            }

            throw new InvalidOperationException("Enemy runtime tag is missing: " + typeof(TTag).Name);
        }

        public bool ApplyDamage(int amount)
        {
            return ApplyDamage(amount, false);
        }

        public bool ApplyDamage(int amount, bool ignoreDefence)
        {
            if (!IsAlive || amount <= 0 || !TryGetTag(out EnemyHealth health))
            {
                return false;
            }

            int remainingDamage = amount;
            if (!ignoreDefence && TryGetTag(out EnemyDefence defence))
            {
                remainingDamage = defence.AbsorbDamage(remainingDamage);
            }

            if (remainingDamage <= 0)
            {
                return false;
            }

            health.ApplyDamage(remainingDamage);
            return !IsAlive;
        }

        public void AddDefence(int amount)
        {
            if (!IsAlive || amount <= 0)
            {
                return;
            }

            if (TryGetTag(out EnemyDefence defence))
            {
                defence.Add(amount);
                return;
            }

            tags.Add(new EnemyDefence(amount));
        }
    }
}
