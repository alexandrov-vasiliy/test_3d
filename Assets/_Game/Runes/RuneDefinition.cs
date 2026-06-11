using System;
using System.Collections.Generic;

namespace _Game.Runes
{
    /// <summary>
    /// Stores one rune as a composition of serialized tags; identity, visuals, targeting, and gameplay effects are resolved from tags.
    /// </summary>
    [Serializable]
    public sealed class RuneDefinition
    {
        private readonly List<RuneTag> runtimeTags = new List<RuneTag>();

        [UnityEngine.SerializeField] private string runeId = "rune";
        [UnityEngine.SerializeField] private string displayName = "Rune";
        [UnityEngine.SerializeReference] private List<RuneTag> tags = new List<RuneTag>();

        public RuneDefinition()
        {
        }

        public RuneDefinition(string runeId, string displayName, IEnumerable<RuneTag> tags)
        {
            this.runeId = string.IsNullOrWhiteSpace(runeId) ? "rune" : runeId;
            this.displayName = string.IsNullOrWhiteSpace(displayName) ? this.runeId : displayName;
            if (tags == null)
            {
                return;
            }

            foreach (RuneTag tag in tags)
            {
                if (tag != null)
                {
                    runtimeTags.Add(tag);
                }
            }
        }

        public string RuneId => TryGetTag(out RuneIdentityTag identity) ? identity.RuneId : (string.IsNullOrWhiteSpace(runeId) ? "rune" : runeId);
        public string DisplayName => TryGetTag(out RuneIdentityTag identity) ? identity.DisplayName : (string.IsNullOrWhiteSpace(displayName) ? RuneId : displayName);
        public IReadOnlyList<RuneTag> Tags => runtimeTags.Count > 0 ? runtimeTags : tags;

        public bool TryGetTag<TTag>(out TTag tag)
            where TTag : RuneTag
        {
            IReadOnlyList<RuneTag> source = Tags;
            for (int i = 0; i < source.Count; i++)
            {
                if (source[i] is TTag typed)
                {
                    tag = typed;
                    return true;
                }
            }

            tag = null;
            return false;
        }

        public void GetTags<TTag>(List<TTag> results)
            where TTag : RuneTag
        {
            if (results == null)
            {
                return;
            }

            IReadOnlyList<RuneTag> source = Tags;
            for (int i = 0; i < source.Count; i++)
            {
                if (source[i] is TTag typed)
                {
                    results.Add(typed);
                }
            }
        }
    }
}
