using System;
using UnityEngine;
using UnityEngine.Scripting.APIUpdating;

namespace _Game.Runes.Tags
{
    /// <summary>
    /// Defines presentation color for rune pieces and cast visuals; gameplay identity and matching stay in separate tags.
    /// </summary>
    [Serializable]
    [MovedFrom(true, sourceNamespace: "_Game.Runes")]
    public sealed class RuneColorTag : RuneTag
    {
        [SerializeField] private Color color = Color.white;

        public RuneColorTag()
        {
        }

        public RuneColorTag(Color color)
        {
            this.color = color;
        }

        public Color Color => color;
    }
}
