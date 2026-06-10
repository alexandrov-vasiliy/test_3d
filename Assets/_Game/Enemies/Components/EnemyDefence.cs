using System;
using UnityEngine;

namespace _Game.Enemies
{
    /// <summary>
    /// Stores enemy combat defence for archetype defaults and runtime mutation; broader damage resolution remains in EnemyRuntime.
    /// </summary>
    [Serializable]
    public sealed class EnemyDefence : EnemyTag
    {
        [SerializeField] private int defence;

        public EnemyDefence()
        {
        }

        public EnemyDefence(int defence)
        {
            this.defence = defence;
        }

        public int Amount => Mathf.Max(0, defence);
        public int StartingDefence => Amount;

        public int AbsorbDamage(int amount)
        {
            if (amount <= 0 || Amount <= 0)
            {
                return amount;
            }

            int absorbed = Mathf.Min(Amount, amount);
            defence = Amount - absorbed;
            return amount - absorbed;
        }

        public void Add(int amount)
        {
            if (amount <= 0)
            {
                return;
            }

            defence = Amount + amount;
        }
    }
}
