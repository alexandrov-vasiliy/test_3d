using System;
using UnityEngine;
using UnityEngine.Scripting.APIUpdating;

namespace _Game.Runes.Tags
{
    /// <summary>
    /// Stores extra damage per cleared rune beyond the first ten; damage resolution remains in rune effects.
    /// </summary>
    [Serializable]
    [MovedFrom(true, sourceNamespace: "_Game.Runes")]
    public sealed class RuneAdditionalDamageTag : RuneTag
    {
        [SerializeField] private int value;

        public RuneAdditionalDamageTag()
        {
        }

        public RuneAdditionalDamageTag(int value)
        {
            this.value = value;
        }

        public int Value => Mathf.Max(0, value);
    }
}
