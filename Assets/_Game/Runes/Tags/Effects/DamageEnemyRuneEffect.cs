using System;
using UnityEngine;
using UnityEngine.Scripting.APIUpdating;

namespace _Game.Runes.Tags.Effects
{
    /// <summary>
    /// Applies target enemy damage at projectile hit time using RuneDamageTag, RuneAdditionalDamageTag, and optional RuneTrueDamageTag.
    /// </summary>
    [Serializable]
    [MovedFrom(true, sourceNamespace: "_Game.Runes")]
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
}
