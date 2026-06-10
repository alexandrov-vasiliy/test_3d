using System;

namespace _Game.Enemies
{
    /// <summary>
    /// Provides the common base for serialized enemy data components; it stores configuration only and does not own runtime gameplay state.
    /// </summary>
    [Serializable]
    public abstract class EnemyComponent
    {
    }
}
