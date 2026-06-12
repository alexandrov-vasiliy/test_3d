using System;
using UnityEngine;
using UnityEngine.Scripting.APIUpdating;

namespace _Game.Runes.Tags
{
    /// <summary>
    /// Configures the visual charge created above a stack while cleared rune pieces disappear.
    /// </summary>
    [Serializable]
    [MovedFrom(true, sourceNamespace: "_Game.Runes")]
    public sealed class RuneChargeVisualTag : RuneTag
    {
        [SerializeField] private GameObject prefab;
        [SerializeField] private float baseScale = 0.25f;
        [SerializeField] private float scalePerPiece = 0.04f;
        [SerializeField] private float maxScale = 1.5f;
        [SerializeField] private Vector3 offset = new Vector3(0f, 0.85f, 0f);

        public GameObject Prefab => prefab;
        public float BaseScale => Mathf.Max(0.01f, baseScale);
        public float ScalePerPiece => Mathf.Max(0f, scalePerPiece);
        public float MaxScale => Mathf.Max(BaseScale, maxScale);
        public Vector3 Offset => offset;
    }
}
