using System;
using UnityEngine;
using UnityEngine.Scripting.APIUpdating;

namespace _Game.Runes.Tags
{
    /// <summary>
    /// Stores stable authored identity for a rune; runtime matching and effects are supplied by other rune tags.
    /// </summary>
    [Serializable]
    [MovedFrom(true, sourceNamespace: "_Game.Runes")]
    public sealed class RuneIdentityTag : RuneTag
    {
        [SerializeField] private string runeId = "rune";
        [SerializeField] private string displayName = "Rune";

        public RuneIdentityTag()
        {
        }

        public RuneIdentityTag(string runeId, string displayName)
        {
            this.runeId = string.IsNullOrWhiteSpace(runeId) ? "rune" : runeId;
            this.displayName = string.IsNullOrWhiteSpace(displayName) ? this.runeId : displayName;
        }

        public string RuneId => string.IsNullOrWhiteSpace(runeId) ? "rune" : runeId;
        public string DisplayName => string.IsNullOrWhiteSpace(displayName) ? RuneId : displayName;
    }
}
