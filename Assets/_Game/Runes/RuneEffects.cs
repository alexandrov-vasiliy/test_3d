using System;
using UnityEngine;

namespace _Game.Runes
{
    /// <summary>
    /// Defines one serialized gameplay effect for a rune; presentation and victory flow stay outside effect implementations.
    /// </summary>
    [Serializable]
    public abstract class RuneEffect : RuneTag
    {
        public virtual bool RequiresEnemyTarget => true;
        public abstract void Apply(RuneEffectContext context);
    }

    /// <summary>
    /// Applies target enemy damage at projectile hit time using RuneDamageTag, RuneAdditionalDamageTag, and optional RuneTrueDamageTag.
    /// </summary>
    [Serializable]
    public sealed class DamageEnemyRuneEffect : RuneEffect
    {
        public override void Apply(RuneEffectContext context)
        {
            if (context == null || context.Target == null || !context.Target.IsAlive || context.Rune == null)
            {
                return;
            }

            if (!context.Rune.TryGetTag(out RuneDamageTag damageTag))
            {
                Debug.LogWarning("DamageEnemyRuneEffect requires RuneDamageTag on rune: " + context.Rune.DisplayName);
                return;
            }

            int additional = context.Rune.TryGetTag(out RuneAdditionalDamageTag additionalTag) ? additionalTag.Value : 0;
            int damage = damageTag.Value + Mathf.Max(0, context.Count - 10) * additional;
            bool ignoreDefence = context.Rune.TryGetTag(out RuneTrueDamageTag _);
            context.Target.ApplyDamage(damage, ignoreDefence);
        }
    }

    /// <summary>
    /// Heals the injected player health at projectile hit time and does not require an enemy target.
    /// </summary>
    [Serializable]
    public sealed class HealPlayerRuneEffect : RuneEffect
    {
        public override bool RequiresEnemyTarget => false;

        public override void Apply(RuneEffectContext context)
        {
            if (context == null || context.PlayerHealth == null || context.Rune == null)
            {
                return;
            }

            if (!context.Rune.TryGetTag(out RuneHealPlayerTag healTag))
            {
                Debug.LogWarning("HealPlayerRuneEffect requires RuneHealPlayerTag on rune: " + context.Rune.DisplayName);
                return;
            }

            context.PlayerHealth.Heal(healTag.Value);
        }
    }
}
