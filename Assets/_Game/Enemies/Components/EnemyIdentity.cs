using System;
using UnityEngine;

namespace _Game.Enemies
{
    /// <summary>
    /// Stores enemy identity data used by catalog lookup and presentation; it does not own combat or board state.
    /// </summary>
    [Serializable]
    public sealed class EnemyIdentity : EnemyTag
    {
        [SerializeField] private string enemyId = "basic";
        [SerializeField] private string displayName = "Basic Enemy";

        public EnemyIdentity()
        {
        }

        public EnemyIdentity(string enemyId, string displayName)
        {
            this.enemyId = string.IsNullOrWhiteSpace(enemyId) ? "basic" : enemyId;
            this.displayName = string.IsNullOrWhiteSpace(displayName) ? this.enemyId : displayName;
        }

        public string EnemyId => string.IsNullOrWhiteSpace(enemyId) ? "basic" : enemyId;
        public string DisplayName => string.IsNullOrWhiteSpace(displayName) ? EnemyId : displayName;
    }
}
