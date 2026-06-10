using System;

namespace _Game.Enemies
{
    /// <summary>
    /// Defines the default skeleton composition; it is enemy configuration only and delegates runtime state, visuals, and behavior execution elsewhere.
    /// </summary>
    [Serializable]
    public sealed class SkeletonEnemy : EnemyArchetypeDefinition
    {
        public SkeletonEnemy()
            : base("skeleton", "Skeleton")
        {
            AddComponentIfMissing(new EnemyHealth(3));
            AddComponentIfMissing(new EnemyIntentLoop(new EnemyIntentAttack(), new EnemyIntentDefence()));
            AddComponentIfMissing(new EnemyVisualReference());
        }
    }
}
