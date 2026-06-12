using System;
using _Game.Enemies.Statuses;
using UnityEngine;

namespace _Game.Runes.Tags.Effects
{
    /// <summary>
    /// Adds or refreshes a turn-based status that prevents the selected enemy from executing or advancing its current intent.
    /// </summary>
    [Serializable]
    public sealed class SkipEnemyIntentStatusRuneEffect : RuneEffect
    {
        [SerializeField, Min(1)] private int durationTurns = 1;
        [SerializeField] private GameObject visualPrefab;

        public override void Apply(RuneEffectContext context)
        {
            if (context == null || context.Target == null || !context.Target.IsAlive)
            {
                return;
            }

            context.Target.AddStatus(new SkipEnemyIntentStatus(durationTurns, visualPrefab));
        }
    }
}
