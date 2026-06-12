using System;
using UnityEngine;
using UnityEngine.Scripting.APIUpdating;

namespace _Game.Runes.Tags.Effects
{
    /// <summary>
    /// Heals the injected player health at projectile hit time using RuneHealPlayerTag and optional RuneAdditionalHealPlayerTag; no enemy target is required.
    /// </summary>
    [Serializable]
    [MovedFrom(true, sourceNamespace: "_Game.Runes")]
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

            int additional = context.Rune.TryGetTag(out RuneAdditionalHealPlayerTag additionalTag) ? additionalTag.Value : 0;
            int healAmount = healTag.Value + Mathf.Max(0, context.Count - 10) * additional;
            context.PlayerHealth.Heal(healAmount);
        }
    }
}
