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
            AddTagIfMissing(new EnemyIdentity("skeleton", "Skeleton"));
            AddTagIfMissing(new EnemyHealth(3));
            AddTagIfMissing(new EnemyDefence());
            AddTagIfMissing(new EnemyIntentLoop(new EnemyIntentAttack(1), new EnemyIntentDefence(1)));
            AddTagIfMissing(new EnemyVisualReference());
        }
    }
}
