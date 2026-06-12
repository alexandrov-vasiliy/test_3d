using System;
using System.Collections.Generic;

namespace _Game.Runes
{
    /// <summary>
    /// Resolves rune ids against the project-wide authored rune catalog; it is shared by combat and presentation systems and does not contain level-specific overrides.
    /// </summary>
    public sealed class RuneLibrary : IRuneResolver
    {
        private readonly Dictionary<string, RuneDefinition> runesById = new Dictionary<string, RuneDefinition>(StringComparer.Ordinal);
        private readonly RuneCatalog catalog;

        public RuneLibrary(RuneCatalog catalog)
        {
            this.catalog = catalog;
            Refresh();
        }

        public void Refresh()
        {
            runesById.Clear();
            if (catalog == null || catalog.Runes == null)
            {
                return;
            }

            foreach (RuneDefinition rune in catalog.Runes)
            {
                AddRune(rune);
            }
        }

        public bool TryResolveRuneId(string runeId, out RuneDefinition rune)
        {
            if (string.IsNullOrWhiteSpace(runeId))
            {
                rune = null;
                return false;
            }

            return runesById.TryGetValue(runeId, out rune);
        }

        public IReadOnlyCollection<RuneDefinition> Runes => runesById.Values;

        private void AddRune(RuneDefinition rune)
        {
            if (rune == null || string.IsNullOrWhiteSpace(rune.RuneId))
            {
                return;
            }

            runesById[rune.RuneId] = rune;
        }
    }
}
