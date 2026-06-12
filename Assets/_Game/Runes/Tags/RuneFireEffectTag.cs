using System;
using UnityEngine.Scripting.APIUpdating;

namespace _Game.Runes.Tags
{
    /// <summary>
    /// Marks a rune as fire-themed for presentation and future status effects; concrete gameplay stays in effect tags.
    /// </summary>
    [Serializable]
    [MovedFrom(true, sourceNamespace: "_Game.Runes")]
    public sealed class RuneFireEffectTag : RuneTag
    {
    }
}
