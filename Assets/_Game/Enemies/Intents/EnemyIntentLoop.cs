using System;
using System.Collections.Generic;
using UnityEngine;

namespace _Game.Enemies
{
    /// <summary>
    /// Stores an ordered loop of enemy intent tags; it is configuration data and does not advance turns by itself.
    /// </summary>
    [Serializable]
    public sealed class EnemyIntentLoop : EnemyTag
    {
        [SerializeReference] private List<EnemyIntent> intents = new List<EnemyIntent>();

        public EnemyIntentLoop()
        {
        }

        public EnemyIntentLoop(params EnemyIntent[] intents)
        {
            if (intents == null)
            {
                return;
            }

            for (int i = 0; i < intents.Length; i++)
            {
                if (intents[i] != null)
                {
                    this.intents.Add(intents[i]);
                }
            }
        }

        public IReadOnlyList<EnemyIntent> Intents => intents;
    }
}
