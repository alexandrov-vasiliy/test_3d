using System;
using System.Collections.Generic;
using _Game.Configs;
using _Game.Stacks;

namespace _Game.Goals
{
    /// <summary>
    /// Tracks runtime progress for active level goals; merge systems report clears while UI and flow read completion state from here.
    /// </summary>
    public sealed class GoalTracker
    {
        /// <summary>
        /// Stores mutable progress for one active goal instance; it is owned by GoalTracker and shown by HUD views.
        /// </summary>
        public sealed class GoalProgress
        {
            public GoalProgress(LevelConfig.GoalDefinition definition)
            {
                Definition = definition;
            }

            public LevelConfig.GoalDefinition Definition { get; }
            public int CurrentCount { get; private set; }
            public int RequiredCount => Definition != null ? Math.Max(0, Definition.requiredCount) : 0;
            public bool IsComplete => CurrentCount >= RequiredCount;

            public void AddProgress(int count)
            {
                CurrentCount = Math.Min(RequiredCount, CurrentCount + Math.Max(0, count));
            }
        }

        private readonly List<GoalProgress> goals = new List<GoalProgress>();

        public event Action GoalsChanged;
        public event Action Completed;

        public IReadOnlyList<GoalProgress> Goals => goals;
        public bool HasGoals => goals.Count > 0;
        public bool IsComplete
        {
            get
            {
                if (goals.Count == 0)
                {
                    return false;
                }

                for (int i = 0; i < goals.Count; i++)
                {
                    if (!goals[i].IsComplete)
                    {
                        return false;
                    }
                }

                return true;
            }
        }

        public void Initialize(LevelConfig levelConfig)
        {
            goals.Clear();
            if (levelConfig != null && levelConfig.goals != null)
            {
                for (int i = 0; i < levelConfig.goals.Count; i++)
                {
                    LevelConfig.GoalDefinition goal = levelConfig.goals[i];
                    if (goal != null && goal.requiredCount > 0)
                    {
                        goals.Add(new GoalProgress(goal));
                    }
                }
            }

            GoalsChanged?.Invoke();
        }

        public void OnPiecesCleared(HexColor color, int count)
        {
            bool changed = false;
            for (int i = 0; i < goals.Count; i++)
            {
                GoalProgress goal = goals[i];
                if (goal.Definition == null || goal.Definition.type != LevelGoalType.ClearPieces || goal.Definition.color != color || goal.IsComplete)
                {
                    continue;
                }

                goal.AddProgress(count);
                changed = true;
            }

            if (!changed)
            {
                return;
            }

            GoalsChanged?.Invoke();
            if (IsComplete)
            {
                Completed?.Invoke();
            }
        }
    }
}
