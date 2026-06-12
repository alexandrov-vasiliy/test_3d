using System;
using UnityEngine.Scripting.APIUpdating;

namespace _Game.Runes.Tags
{
    /// <summary>
    /// Marks a damage rune effect as ignoring enemy defence; it does not remove or mutate defence by itself.
    /// </summary>
    [Serializable]
    [MovedFrom(true, sourceNamespace: "_Game.Runes")]
    public sealed class RuneTrueDamageTag : RuneTag
    {
    }
}
