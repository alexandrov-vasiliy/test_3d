using System;
using UnityEngine;
using UnityEngine.Scripting.APIUpdating;

namespace _Game.Runes.Tags
{
    /// <summary>
    /// Stores player healing amount for non-target rune effects; application is performed by HealPlayerRuneEffect.
    /// </summary>
    [Serializable]
    [MovedFrom(true, sourceNamespace: "_Game.Runes")]
    public sealed class RuneHealPlayerTag : RuneTag
    {
        [SerializeField] private int value = 1;

        public RuneHealPlayerTag()
        {
        }

        public RuneHealPlayerTag(int value)
        {
            this.value = value;
        }

        public int Value => Mathf.Max(0, value);
    }
}
