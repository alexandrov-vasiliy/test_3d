using _Game.Board;
using _Game.Enemies;
using _Game.Player;
using UnityEngine;

namespace _Game.Runes
{
    /// <summary>
    /// Carries immutable data for one cleared rune group so combat and presentation can coordinate without reading merge internals.
    /// </summary>
    public readonly struct RuneClearContext
    {
        public RuneClearContext(int castId, RuneDefinition rune, int count, HexCell cell, Vector2Int coordinate, Vector3 worldPosition, int chainIndex)
        {
            CastId = castId;
            Rune = rune;
            Count = count;
            Cell = cell;
            Coordinate = coordinate;
            WorldPosition = worldPosition;
            ChainIndex = chainIndex;
        }

        public int CastId { get; }
        public RuneDefinition Rune { get; }
        public int Count { get; }
        public HexCell Cell { get; }
        public Vector2Int Coordinate { get; }
        public Vector3 WorldPosition { get; }
        public int ChainIndex { get; }
    }

    /// <summary>
    /// Provides target-selection dependencies for rune target tags; target tags read this context but do not apply effects.
    /// </summary>
    public readonly struct RuneTargetContext
    {
        public RuneTargetContext(RuneClearContext clearContext, EnemyRegistry enemyRegistry, Vector3 origin)
        {
            ClearContext = clearContext;
            EnemyRegistry = enemyRegistry;
            Origin = origin;
        }

        public RuneClearContext ClearContext { get; }
        public EnemyRegistry EnemyRegistry { get; }
        public Vector3 Origin { get; }
    }

    /// <summary>
    /// Provides dependencies and selected target data to rune effects at projectile hit time.
    /// </summary>
    public sealed class RuneEffectContext
    {
        public RuneEffectContext(RuneClearContext clearContext, EnemyController target, PlayerHealth playerHealth)
        {
            ClearContext = clearContext;
            Target = target;
            PlayerHealth = playerHealth;
        }

        public RuneClearContext ClearContext { get; }
        public RuneDefinition Rune => ClearContext.Rune;
        public int Count => ClearContext.Count;
        public EnemyController Target { get; }
        public PlayerHealth PlayerHealth { get; }
    }
}
