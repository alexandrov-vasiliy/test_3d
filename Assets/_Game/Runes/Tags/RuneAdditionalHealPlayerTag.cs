using System;
using UnityEngine;
using UnityEngine.Scripting.APIUpdating;

namespace _Game.Runes.Tags
{
    /// <summary>
    /// Stores extra healing per cleared rune beyond the first ten; healing resolution remains in rune effects.
    /// </summary>
    [Serializable]
    [MovedFrom(true, sourceNamespace: "_Game.Runes")]
    public sealed class RuneAdditionalHealPlayerTag : RuneTag
    {
        [SerializeField] private int value;

        public RuneAdditionalHealPlayerTag()
        {
        }

        public RuneAdditionalHealPlayerTag(int value)
        {
            this.value = value;
        }

        public int Value => Mathf.Max(0, value);
    }
}
