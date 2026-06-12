using UnityEngine;

namespace _Game.Enemies.Statuses
{
    /// <summary>
    /// Holds one enemy's mutable status duration and turn hooks; rune tags create these runtime instances while visuals are owned by EnemyStatusController.
    /// </summary>
    public abstract class EnemyStatusEffect
    {
        protected EnemyStatusEffect(int durationTurns, GameObject visualPrefab)
        {
            RemainingTurns = Mathf.Max(1, durationTurns);
            VisualPrefab = visualPrefab;
        }

        public int RemainingTurns { get; private set; }
        public GameObject VisualPrefab { get; }
        public virtual bool SkipsIntent => false;

        public virtual void OnTurnStarted(EnemyController enemy)
        {
        }

        public void Refresh(int durationTurns)
        {
            RemainingTurns = Mathf.Max(RemainingTurns, Mathf.Max(1, durationTurns));
        }

        public void CompleteTurn()
        {
            RemainingTurns = Mathf.Max(0, RemainingTurns - 1);
        }
    }

    /// <summary>
    /// Applies normal combat damage at the start of each enemy turn; defence absorption and defeat publication stay in EnemyController.
    /// </summary>
    public sealed class PeriodicDamageEnemyStatus : EnemyStatusEffect
    {
        public PeriodicDamageEnemyStatus(int durationTurns, int damagePerTurn, GameObject visualPrefab)
            : base(durationTurns, visualPrefab)
        {
            DamagePerTurn = Mathf.Max(1, damagePerTurn);
        }

        public int DamagePerTurn { get; private set; }

        public override void OnTurnStarted(EnemyController enemy)
        {
            enemy?.ApplyDamage(DamagePerTurn);
        }

        public void Refresh(int durationTurns, int damagePerTurn)
        {
            Refresh(durationTurns);
            DamagePerTurn = Mathf.Max(DamagePerTurn, Mathf.Max(1, damagePerTurn));
        }
    }

    /// <summary>
    /// Marks enemy turns as skipped without executing or advancing the currently displayed intent.
    /// </summary>
    public sealed class SkipEnemyIntentStatus : EnemyStatusEffect
    {
        public SkipEnemyIntentStatus(int durationTurns, GameObject visualPrefab)
            : base(durationTurns, visualPrefab)
        {
        }

        public override bool SkipsIntent => true;
    }
}
