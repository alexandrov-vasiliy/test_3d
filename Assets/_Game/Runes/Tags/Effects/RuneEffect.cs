using System;

namespace _Game.Runes.Tags.Effects
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
}