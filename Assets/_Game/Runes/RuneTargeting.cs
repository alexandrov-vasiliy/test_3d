using System;
using _Game.Enemies;
using UnityEngine;

namespace _Game.Runes
{
    /// <summary>
    /// Defines a serialized enemy-targeting strategy for a rune cast; effects and presentation consume the chosen target later.
    /// </summary>
    [Serializable]
    public abstract class RuneTargetTag : RuneTag
    {
        public abstract bool TrySelectTarget(RuneTargetContext context, out EnemyController target);
    }

    /// <summary>
    /// Selects the living enemy nearest to the provided cast origin; retargets use the projectile's current world position as origin.
    /// </summary>
    [Serializable]
    public sealed class TargetNearestEnemyTag : RuneTargetTag
    {
        public override bool TrySelectTarget(RuneTargetContext context, out EnemyController target)
        {
            target = null;
            return context.EnemyRegistry != null && context.EnemyRegistry.TryGetNearestAliveEnemy(context.Origin, out target);
        }
    }
}
