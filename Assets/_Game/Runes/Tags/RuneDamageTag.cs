using System;
using UnityEngine;
using UnityEngine.Scripting.APIUpdating;

namespace _Game.Runes.Tags
{
    /// <summary>
    /// Stores the base damage applied by a target-dependent damage rune effect after a cast projectile hits.
    /// </summary>
    [Serializable]
    [MovedFrom(true, sourceNamespace: "_Game.Runes")]
    public sealed class RuneDamageTag : RuneTag
    {
        [SerializeField] private int value = 1;

        public RuneDamageTag()
        {
        }

        public RuneDamageTag(int value)
        {
            this.value = value;
        }

        public int Value => Mathf.Max(0, value);
    }
}
