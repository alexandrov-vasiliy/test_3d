using System;
using _Game.Player;
using UnityEngine;

namespace _Game.Enemies
{
    /// <summary>
    /// Defines one serialized enemy behavior intent tag and applies its gameplay effect; turn timing and animation sequencing stay outside this data tag.
    /// </summary>
    [Serializable]
    public abstract class EnemyIntent : EnemyTag
    {
        public abstract void Execute(EnemyController enemy, PlayerHealth playerHealth);
    }

    /// <summary>
    /// Applies direct player damage for an enemy turn; targeting, animation, and turn sequencing are handled by the flow/spawner layer.
    /// </summary>
    [Serializable]
    public sealed class EnemyIntentAttack : EnemyIntent
    {
        [SerializeField] private int damage = 1;

        public EnemyIntentAttack()
        {
        }

        public EnemyIntentAttack(int damage)
        {
            this.damage = damage;
        }

        public int Damage => Mathf.Max(0, damage);

        public override void Execute(EnemyController enemy, PlayerHealth playerHealth)
        {
            if (enemy == null || !enemy.IsAlive || playerHealth == null)
            {
                return;
            }

            playerHealth.ApplyDamage(Damage);
        }
    }

    /// <summary>
    /// Adds runtime defence to the acting enemy; damage absorption is owned by EnemyRuntime.
    /// </summary>
    [Serializable]
    public sealed class EnemyIntentDefence : EnemyIntent
    {
        [SerializeField] private int defence = 1;

        public EnemyIntentDefence()
        {
        }

        public EnemyIntentDefence(int defence)
        {
            this.defence = defence;
        }

        public int Defence => Mathf.Max(0, defence);

        public override void Execute(EnemyController enemy, PlayerHealth playerHealth)
        {
            if (enemy == null || !enemy.IsAlive)
            {
                return;
            }

            enemy.AddDefence(Defence);
        }
    }
}
