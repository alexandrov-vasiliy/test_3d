using System;
using _Game.Enemies.Statuses;
using UnityEngine;

namespace _Game.Runes.Tags.Effects
{
    /// <summary>
    /// Adds or refreshes a turn-based periodic damage status on the selected enemy and supplies its attached visual prefab.
    /// </summary>
    [Serializable]
    public sealed class PeriodicDamageStatusRuneEffect : RuneEffect
    {
        [SerializeField, Min(1)] private int durationTurns = 2;
        [SerializeField, Min(1)] private int damagePerTurn = 1;
        [SerializeField] private GameObject visualPrefab;

        public override void Apply(RuneEffectContext context)
        {
            if (context == null || context.Target == null || !context.Target.IsAlive)
            {
                return;
            }

            context.Target.AddStatus(new PeriodicDamageEnemyStatus(durationTurns, damagePerTurn, visualPrefab));
        }
    }
}
