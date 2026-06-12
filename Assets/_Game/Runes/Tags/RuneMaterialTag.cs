using System;
using UnityEngine;
using UnityEngine.Scripting.APIUpdating;

namespace _Game.Runes.Tags
{
    /// <summary>
    /// Defines optional material presentation for rune visuals; gameplay effects do not depend on this tag.
    /// </summary>
    [Serializable]
    [MovedFrom(true, sourceNamespace: "_Game.Runes")]
    public sealed class RuneMaterialTag : RuneTag
    {
        [SerializeField] private Material material;

        public Material Material => material;
    }
}
