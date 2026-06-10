using UnityEngine;

namespace _Game.Levels
{
    /// <summary>
    /// Persists and advances the current level index; it deliberately does not load scenes or own level content.
    /// </summary>
    public sealed class LevelProgressService
    {
        private const string CurrentLevelKey = "HexMerge.CurrentLevelIndex";

        public int CurrentLevelIndex { get; private set; }

        public LevelProgressService()
        {
            CurrentLevelIndex = Mathf.Max(0, PlayerPrefs.GetInt(CurrentLevelKey, 0));
        }

        public void SetCurrentLevelIndex(int index)
        {
            CurrentLevelIndex = Mathf.Max(0, index);
            PlayerPrefs.SetInt(CurrentLevelKey, CurrentLevelIndex);
            PlayerPrefs.Save();
        }

        public int AdvanceToNextLevel(LevelDatabase database)
        {
            int nextIndex = database != null ? database.GetNextIndex(CurrentLevelIndex) : CurrentLevelIndex;
            SetCurrentLevelIndex(nextIndex);
            return CurrentLevelIndex;
        }
    }
}
