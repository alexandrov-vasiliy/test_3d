using System;
using UnityEngine;
using UnityEngine.Scripting.APIUpdating;

namespace _Game.Runes.Tags
{
    /// <summary>
    /// Configures projectile presentation for a completed rune cast; hit timing is reported back to RuneCombatController.
    /// </summary>
    [Serializable]
    [MovedFrom(true, sourceNamespace: "_Game.Runes")]
    public sealed class RuneProjectileVisualTag : RuneTag
    {
        [SerializeField] private GameObject prefab;
        [SerializeField] private float speed = 17f;
        [SerializeField] private float hitDistance = 0.18f;
        [SerializeField] private float dissipateDuration = 0.2f;

        public GameObject Prefab => prefab;
        public float Speed => Mathf.Max(0.1f, speed);
        public float HitDistance => Mathf.Max(0.01f, hitDistance);
        public float DissipateDuration => Mathf.Max(0f, dissipateDuration);
    }
}
