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
        /// Stores mutable progress for one active goal instance, including runtime-required counts supplied by level services.
        /// </summary>
        public sealed class GoalProgress
        {
            public GoalProgress(LevelConfig.GoalDefinition definition, int runtimeRequiredCount = -1)
            {
                Definition = definition;
                RequiredCount = runtimeRequiredCount >= 0
                    ? runtimeRequiredCount
                    : Math.Max(0, definition != null ? definition.requiredCount : 0);
            }

            public LevelConfig.GoalDefinition Definition { get; }
            public int CurrentCount { get; private set; }
            public int RequiredCount { get; }
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

        public void Initialize(LevelConfig levelConfig, int totalEnemyCount = 0)
        {
            goals.Clear();
            if (levelConfig != null && levelConfig.goals != null)
            {
                for (int i = 0; i < levelConfig.goals.Count; i++)
                {
                    LevelConfig.GoalDefinition goal = levelConfig.goals[i];
                    if (goal == null || !ShouldActivateGoal(goal, totalEnemyCount, out int runtimeRequiredCount))
                    {
                        continue;
                    }

                    goals.Add(new GoalProgress(goal, runtimeRequiredCount));
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

        public void OnEnemyDefeated()
        {
            bool changed = false;
            for (int i = 0; i < goals.Count; i++)
            {
                GoalProgress goal = goals[i];
                if (goal.Definition == null || goal.IsComplete)
                {
                    continue;
                }

                if (goal.Definition.type != LevelGoalType.DefeatAllEnemies &&
                    goal.Definition.type != LevelGoalType.DefeatEnemies)
                {
                    continue;
                }

                goal.AddProgress(1);
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

        private static bool ShouldActivateGoal(LevelConfig.GoalDefinition goal, int totalEnemyCount, out int runtimeRequiredCount)
        {
            runtimeRequiredCount = -1;
            if (goal == null)
            {
                return false;
            }

            if (goal.type == LevelGoalType.DefeatAllEnemies)
            {
                runtimeRequiredCount = Math.Max(0, totalEnemyCount);
                return true;
            }

            return goal.requiredCount > 0;
        }
    }
}
