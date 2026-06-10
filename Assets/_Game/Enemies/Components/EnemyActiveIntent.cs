using System;
using UnityEngine;

namespace _Game.Enemies
{
    /// <summary>
    /// Tracks which intent in an EnemyIntentLoop is currently active; intent execution effects stay on the intent tags.
    /// </summary>
    [Serializable]
    public sealed class EnemyActiveIntent : EnemyTag
    {
        [SerializeField] private int activeIndex;

        public int ActiveIndex => Mathf.Max(0, activeIndex);

        public void Advance(int intentCount)
        {
            activeIndex = intentCount > 0 ? (ActiveIndex + 1) % intentCount : 0;
        }

        public void Reset()
        {
            activeIndex = 0;
        }
    }
}
