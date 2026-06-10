using System;

namespace _Game.Enemies
{
    /// <summary>
    /// Marks one serialized enemy behavior intent; execution systems decide how and when these tags affect gameplay.
    /// </summary>
    [Serializable]
    public abstract class EnemyIntent : EnemyComponent
    {
    }

    /// <summary>
    /// Tags an enemy as capable of attack behavior; damage application remains outside this configuration component.
    /// </summary>
    [Serializable]
    public sealed class EnemyIntentAttack : EnemyIntent
    {
    }

    /// <summary>
    /// Tags an enemy as capable of defensive behavior; shield or mitigation rules belong to dedicated gameplay systems.
    /// </summary>
    [Serializable]
    public sealed class EnemyIntentDefence : EnemyIntent
    {
    }
}
