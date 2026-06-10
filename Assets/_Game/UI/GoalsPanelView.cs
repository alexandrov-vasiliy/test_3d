using System.Text;
using _Game.Configs;
using _Game.Goals;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

namespace _Game.UI
{
    /// <summary>
    /// Presents active goal progress on an injected panel; it does not create goal widgets or evaluate completion.
    /// </summary>
    public class GoalsPanelView : MonoBehaviour
    {
        [SerializeField] private GameObject root;
        [SerializeField] private TMP_Text goalsText;

        private GoalTracker tracker;

        public void Bind(GoalTracker tracker)
        {
            if (this.tracker != null)
            {
                this.tracker.GoalsChanged -= Refresh;
            }

            this.tracker = tracker;
            if (this.tracker != null)
            {
                this.tracker.GoalsChanged += Refresh;
            }

            Refresh();
        }

        private void OnDestroy()
        {
            if (tracker != null)
            {
                tracker.GoalsChanged -= Refresh;
            }
        }

        public void SetVisible(bool visible)
        {
            ResolveRoot().SetActive(visible);
        }

        public void Refresh()
        {
            if (goalsText == null)
            {
                return;
            }

            if (tracker == null || !tracker.HasGoals)
            {
                goalsText.text = "No goals";
                return;
            }

            StringBuilder builder = new StringBuilder();
            for (int i = 0; i < tracker.Goals.Count; i++)
            {
                GoalTracker.GoalProgress goal = tracker.Goals[i];
                if (goal.Definition == null)
                {
                    continue;
                }

                if (builder.Length > 0)
                {
                    builder.AppendLine();
                }

                builder.Append(DescribeGoal(goal));
                builder.Append(": ");
                builder.Append(goal.CurrentCount);
                builder.Append("/");
                builder.Append(goal.RequiredCount);
            }

            goalsText.text = builder.ToString();
        }

        private static string DescribeGoal(GoalTracker.GoalProgress goal)
        {
            if (goal.Definition.type == LevelGoalType.ClearPieces)
            {
                return "Clear " + goal.Definition.color;
            }

            if (goal.Definition.type == LevelGoalType.ClearBoard)
            {
                return "Clear board";
            }

            return "Clear stacks";
        }

        private GameObject ResolveRoot()
        {
            return root != null ? root : gameObject;
        }
    }
}
