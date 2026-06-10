using System.Collections.Generic;
using _Game.Configs;
using UnityEngine;

namespace _Game.Levels
{
    /// <summary>
    /// Stores the ordered level list used by progression; it owns references only, not runtime level state.
    /// </summary>
    [CreateAssetMenu(menuName = "Hex Merge/Level Database")]
    public class LevelDatabase : ScriptableObject
    {
        [SerializeField] private List<LevelConfig> levels = new List<LevelConfig>();

        public int Count => levels != null ? levels.Count : 0;

        public LevelConfig GetLevel(int index)
        {
            if (levels == null || levels.Count == 0)
            {
                return null;
            }

            int clampedIndex = Mathf.Clamp(index, 0, levels.Count - 1);
            return levels[clampedIndex];
        }

        public bool HasLevel(int index)
        {
            return levels != null && index >= 0 && index < levels.Count && levels[index] != null;
        }

        public int GetNextIndex(int currentIndex)
        {
            if (levels == null || levels.Count == 0)
            {
                return 0;
            }

            return Mathf.Clamp(currentIndex + 1, 0, levels.Count - 1);
        }
    }
}
