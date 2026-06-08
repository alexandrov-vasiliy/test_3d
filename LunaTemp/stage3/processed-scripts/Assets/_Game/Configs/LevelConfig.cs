using System.Collections.Generic;
using _Game.Stacks;
using UnityEngine;

namespace _Game.Configs
{
    [CreateAssetMenu(menuName = "Hex Merge/Level Config")]
    public class LevelConfig : ScriptableObject
    {
        [System.Serializable]
        public class StackDefinition
        {
            public List<HexColor> colorsBottomToTop = new List<HexColor>();

            public HexStack CreateStack()
            {
                return new HexStack(colorsBottomToTop);
            }
        }

        [System.Serializable]
        public class BoardStackDefinition
        {
            public Vector2Int coordinate;
            public StackDefinition stack = new StackDefinition();
        }

        public int boardRadius = 2;
        public List<BoardStackDefinition> startingBoardStacks = new List<BoardStackDefinition>();
        public List<StackDefinition> trayStacks = new List<StackDefinition>();
        public Vector2Int tutorialTargetCell = new Vector2Int(0, 0);
        public bool completeWhenTrayEmpty = true;
    }
}
