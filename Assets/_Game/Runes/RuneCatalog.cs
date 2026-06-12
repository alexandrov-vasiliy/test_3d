using System.Collections.Generic;
using UnityEngine;

namespace _Game.Runes
{
    /// <summary>
    /// Stores the project-wide authored rune definitions used by gameplay and editor tools; levels select rune ids from this catalog but do not own rune composition.
    /// </summary>
    [CreateAssetMenu(menuName = "Hex Merge/Rune Catalog")]
    public sealed class RuneCatalog : ScriptableObject
    {
        [SerializeField] private List<RuneDefinition> runes = new List<RuneDefinition>();

        public IReadOnlyList<RuneDefinition> Runes => runes;
    }
}
