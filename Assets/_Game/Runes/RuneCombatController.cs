using System.Collections;
using System.Collections.Generic;
using _Game.Enemies;
using _Game.Merge;
using _Game.Player;
using _Game.Runes.Tags.Effects;
using UnityEngine;

namespace _Game.Runes
{
    /// <summary>
    /// Orchestrates rune clear lifecycles into visual casts, retargeting, and gameplay effects; win/loss and goal progress stay outside this controller.
    /// </summary>
    public sealed class RuneCombatController : MonoBehaviour
    {
        private readonly Dictionary<int, ActiveRuneCast> activeCasts = new Dictionary<int, ActiveRuneCast>();
        private MergeSystem mergeSystem;
        private EnemyRegistry enemyRegistry;
        private PlayerHealth playerHealth;
        private RuneCastPresenter presenter;
        private Transform playerAnchor;

        public void Initialize(MergeSystem mergeSystem, EnemyRegistry enemyRegistry, PlayerHealth playerHealth, RuneCastPresenter presenter, Transform playerAnchor)
        {
            Unsubscribe();
            StopAllCoroutines();
            ClearActiveCasts();
            this.mergeSystem = mergeSystem;
            this.enemyRegistry = enemyRegistry;
            this.playerHealth = playerHealth;
            this.presenter = presenter;
            this.playerAnchor = playerAnchor != null ? playerAnchor : (playerHealth != null ? playerHealth.transform : null);
            Subscribe();
        }

        private void OnDestroy()
        {
            Unsubscribe();
            ClearActiveCasts();
        }

        public void ClearLevelCasts()
        {
            StopAllCoroutines();
            ClearActiveCasts();
        }

        private void Subscribe()
        {
            if (mergeSystem == null)
            {
                return;
            }

            mergeSystem.RuneClearStarted += OnRuneClearStarted;
            mergeSystem.RunePieceConsumed += OnRunePieceConsumed;
            mergeSystem.RuneClearCompleted += OnRuneClearCompleted;
        }

        private void Unsubscribe()
        {
            if (mergeSystem == null)
            {
                return;
            }

            mergeSystem.RuneClearStarted -= OnRuneClearStarted;
            mergeSystem.RunePieceConsumed -= OnRunePieceConsumed;
            mergeSystem.RuneClearCompleted -= OnRuneClearCompleted;
        }

        private void OnRuneClearStarted(RuneClearContext context)
        {
            if (presenter == null || context.Rune == null)
            {
                return;
            }

            ActiveRuneCast cast = presenter.BeginCast(context);
            if (cast != null)
            {
                activeCasts[context.CastId] = cast;
            }
        }

        private void OnRunePieceConsumed(RuneClearContext context, int consumedIndex, Vector3 pieceWorldPosition)
        {
            if (activeCasts.TryGetValue(context.CastId, out ActiveRuneCast cast))
            {
                cast.ConsumePiece(pieceWorldPosition);
            }
        }

        private void OnRuneClearCompleted(RuneClearContext context)
        {
            if (!activeCasts.TryGetValue(context.CastId, out ActiveRuneCast cast))
            {
                return;
            }

            activeCasts.Remove(context.CastId);
            StartCoroutine(ResolveCast(context, cast));
        }

        private IEnumerator ResolveCast(RuneClearContext context, ActiveRuneCast cast)
        {
            if (cast == null || cast.IsReleased || context.Rune == null)
            {
                yield break;
            }

            List<RuneEffect> effects = new List<RuneEffect>();
            context.Rune.GetTags(effects);
            if (effects.Count == 0)
            {
                cast.Dissipate();
                yield break;
            }

            bool requiresEnemyTarget = RequiresEnemyTarget(effects);
            EnemyController target = null;
            Transform targetTransform = null;
            if (requiresEnemyTarget)
            {
                target = SelectTarget(context, cast.CurrentPosition);
                if (target == null)
                {
                    cast.Dissipate();
                    yield break;
                }

                targetTransform = target.transform;
            }
            else
            {
                targetTransform = playerAnchor;
                if (targetTransform == null)
                {
                    ApplyEffects(context, null, effects);
                    cast.Complete();
                    yield break;
                }
            }

            while (!cast.IsReleased)
            {
                if (requiresEnemyTarget && (target == null || !target.IsAlive))
                {
                    target = SelectTarget(context, cast.CurrentPosition);
                    if (target == null)
                    {
                        cast.Dissipate();
                        yield break;
                    }

                    targetTransform = target.transform;
                }

                if (targetTransform == null)
                {
                    cast.Dissipate();
                    yield break;
                }

                if (cast.MoveTowards(targetTransform, Time.deltaTime))
                {
                    if (requiresEnemyTarget && (target == null || !target.IsAlive))
                    {
                        continue;
                    }

                    cast.SpawnImpact();
                    ApplyEffects(context, target, effects);
                    cast.Complete();
                    yield break;
                }

                yield return null;
            }
        }

        private EnemyController SelectTarget(RuneClearContext context, Vector3 origin)
        {
            if (context.Rune == null)
            {
                return null;
            }

            RuneTargetContext targetContext = new RuneTargetContext(context, enemyRegistry, origin);
            if (context.Rune.TryGetTag(out RuneTargetTag targetTag) && targetTag.TrySelectTarget(targetContext, out EnemyController selected))
            {
                return selected;
            }

            return enemyRegistry != null && enemyRegistry.TryGetNearestAliveEnemy(origin, out EnemyController fallback) ? fallback : null;
        }

        private void ApplyEffects(RuneClearContext context, EnemyController target, List<RuneEffect> effects)
        {
            RuneEffectContext effectContext = new RuneEffectContext(context, target, playerHealth);
            for (int i = 0; i < effects.Count; i++)
            {
                RuneEffect effect = effects[i];
                if (effect == null)
                {
                    continue;
                }

                if (effect.RequiresEnemyTarget && (target == null || !target.IsAlive))
                {
                    continue;
                }

                effect.Apply(effectContext);
                if (effect.RequiresEnemyTarget && target != null && !target.IsAlive)
                {
                    break;
                }
            }

        }

        private static bool RequiresEnemyTarget(List<RuneEffect> effects)
        {
            for (int i = 0; i < effects.Count; i++)
            {
                if (effects[i] != null && effects[i].RequiresEnemyTarget)
                {
                    return true;
                }
            }

            return false;
        }

        private void ClearActiveCasts()
        {
            foreach (KeyValuePair<int, ActiveRuneCast> pair in activeCasts)
            {
                pair.Value?.Dissipate();
            }

            activeCasts.Clear();
        }
    }
}
