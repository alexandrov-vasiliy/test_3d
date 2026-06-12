using _Game.Board;
using _Game.Configs;
using _Game.Enemies;
using _Game.Goals;
using _Game.Runes;
using _Game.Stacks;
using _Game.Tutorial;
using _Game.UI;
using UnityEngine;

namespace _Game.Levels
{
    /// <summary>
    /// Applies a LevelConfig to board, enemies, runes, hand, goals, tutorial target, and HUD views; it does not own progression decisions.
    /// </summary>
    public sealed class LevelLoader
    {
        private readonly BoardController board;
        private readonly HandController hand;
        private readonly HandGenerator handGenerator;
        private readonly EnemySpawner enemySpawner;
        private readonly RuneCombatController runeCombat;
        private readonly GoalTracker goalTracker;
        private readonly TutorialHandController tutorial;
        private readonly LevelHudView hudView;
        private readonly GoalsPanelView goalsView;

        public LevelLoader(BoardController board, HandController hand, HandGenerator handGenerator, EnemySpawner enemySpawner, RuneCombatController runeCombat, GoalTracker goalTracker, TutorialHandController tutorial, LevelHudView hudView, GoalsPanelView goalsView)
        {
            this.board = board;
            this.hand = hand;
            this.handGenerator = handGenerator;
            this.enemySpawner = enemySpawner;
            this.runeCombat = runeCombat;
            this.goalTracker = goalTracker;
            this.tutorial = tutorial;
            this.hudView = hudView;
            this.goalsView = goalsView;
        }

        public bool LoadLevel(LevelConfig levelConfig)
        {
            if (levelConfig == null || board == null || hand == null || handGenerator == null || goalTracker == null)
            {
                Debug.LogWarning("LevelLoader cannot load because one or more dependencies are missing.");
                return false;
            }

            board.Initialize(levelConfig);
            runeCombat?.ClearLevelCasts();
            PlaceStartingBoardStacks(levelConfig);
            enemySpawner?.Spawn(levelConfig, board);

            handGenerator.Begin(levelConfig.GetInitialHandDefinitions(), levelConfig.handGeneration, levelConfig.HandSize);
            hand.InitializeHand();

            goalTracker.Initialize(levelConfig, enemySpawner != null ? enemySpawner.TotalSpawnedEnemies : 0);
            hudView?.SetLevel(levelConfig.levelNumber, string.IsNullOrEmpty(levelConfig.displayName) ? levelConfig.levelId : levelConfig.displayName);
            goalsView?.Bind(goalTracker);

            SetTutorialTargets(levelConfig);
            return true;
        }

        private void PlaceStartingBoardStacks(LevelConfig levelConfig)
        {
            if (levelConfig.startingBoardStacks == null)
            {
                return;
            }

            for (int i = 0; i < levelConfig.startingBoardStacks.Count; i++)
            {
                LevelConfig.BoardStackDefinition definition = levelConfig.startingBoardStacks[i];
                if (definition == null || definition.stack == null)
                {
                    continue;
                }

                HexCell cell = board.GetCell(definition.coordinate);
                if (cell == null)
                {
                    Debug.LogWarning("Starting stack is outside board shape: " + definition.coordinate);
                    continue;
                }

                HexStack stack = definition.stack.CreateStack();
                board.PlaceStack(cell, stack);
                HexCellView cellView = board.GetCellView(cell);
                if (cellView == null)
                {
                    continue;
                }

                HexStackView stackView = board.CreateStackView(stack, cellView.transform, cellView.transform.position);
                stackView.name = "BoardStack_" + definition.coordinate.x + "_" + definition.coordinate.y;
                board.PlaceStackView(cell, stackView);
            }
        }

        private void SetTutorialTargets(LevelConfig levelConfig)
        {
            if (tutorial == null)
            {
                return;
            }

            HexStackView firstHandStack = hand.StackViews != null && hand.StackViews.Count > 0 ? hand.StackViews[0] : null;
            HexCell targetHexCell = board.GetCell(levelConfig.tutorialTargetCell);
            HexCellView targetCell = board.GetCellView(targetHexCell);
            tutorial.SetTargets(firstHandStack, targetCell);
        }
    }
}
