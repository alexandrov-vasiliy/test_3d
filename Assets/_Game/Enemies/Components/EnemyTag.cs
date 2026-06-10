using System;

namespace _Game.Enemies
{
    /// <summary>
    /// Provides the common base for serialized enemy data tags; tags carry enemy configuration or runtime state without being Unity components.
    /// </summary>
    [Serializable]
    public abstract class EnemyTag
    {
    }
}
