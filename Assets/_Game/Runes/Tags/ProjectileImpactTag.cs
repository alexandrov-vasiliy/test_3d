using System;
using UnityEngine;

namespace _Game.Runes.Tags
{
    /// <summary>
    /// Configures the visual prefab spawned when a rune projectile reaches its target; gameplay effects remain owned by RuneCombatController.
    /// </summary>
    [Serializable]
    public sealed class ProjectileImpactTag : RuneTag
    {
        [SerializeField] private GameObject prefab;

        public GameObject Prefab => prefab;
    }
}
