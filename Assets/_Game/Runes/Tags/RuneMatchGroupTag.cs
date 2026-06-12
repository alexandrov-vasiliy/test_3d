using System;
using UnityEngine;
using UnityEngine.Scripting.APIUpdating;

namespace _Game.Runes.Tags
{
    /// <summary>
    /// Defines how rune pieces should be grouped for merge matching when rune ids should share a match family.
    /// </summary>
    [Serializable]
    [MovedFrom(true, sourceNamespace: "_Game.Runes")]
    public sealed class RuneMatchGroupTag : RuneTag
    {
        [SerializeField] private string matchGroup = "default";

        public RuneMatchGroupTag()
        {
        }

        public RuneMatchGroupTag(string matchGroup)
        {
            this.matchGroup = string.IsNullOrWhiteSpace(matchGroup) ? "default" : matchGroup;
        }

        public string MatchGroup => string.IsNullOrWhiteSpace(matchGroup) ? "default" : matchGroup;
    }
}
