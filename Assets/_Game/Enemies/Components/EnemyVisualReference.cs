using System;
using UnityEngine;

namespace _Game.Enemies
{
    /// <summary>
    /// Defines prefab and presentation offsets for an enemy archetype; spawning owns instantiation and runtime view lifecycle.
    /// </summary>
    [Serializable]
    public sealed class EnemyVisualReference : EnemyComponent
    {
        [SerializeField] private GameObject prefab;
        [SerializeField] private Vector3 positionOffset = new Vector3(0f, 0.35f, 0f);
        [SerializeField] private GameObject defaultHitVfx;
        [SerializeField] private GameObject defaultDeathVfx;

        public GameObject Prefab => prefab;
        public Vector3 PositionOffset => positionOffset;
        public GameObject DefaultHitVfx => defaultHitVfx;
        public GameObject DefaultDeathVfx => defaultDeathVfx;
    }
}
