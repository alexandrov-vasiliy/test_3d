using System.Collections.Generic;
using _Game.Stacks;

namespace _Game.Levels
{
    /// <summary>
    /// Coordinates the three-stack player hand by filling the scene tray only when the current hand is exhausted.
    /// </summary>
    public sealed class HandController
    {
        private readonly StackTrayController tray;
        private readonly HandGenerator generator;

        public HandController(StackTrayController tray, HandGenerator generator)
        {
            this.tray = tray;
            this.generator = generator;
        }

        public bool HasStacks => tray != null && tray.RemainingStacks > 0;
        public bool IsHandEmpty => tray == null || tray.RemainingStacks == 0;
        public IReadOnlyList<HexStackView> StackViews => tray != null ? tray.StackViews : null;

        public bool InitializeHand()
        {
            if (tray == null || generator == null || !generator.TryGenerateInitialHand(out List<HexStack> stacks))
            {
                tray?.Clear();
                return false;
            }

            tray.Initialize(stacks);
            return true;
        }

        public bool RefillHandIfEmpty()
        {
            if (!IsHandEmpty)
            {
                return true;
            }

            return RefillHand();
        }

        public bool RefillHand()
        {
            if (tray == null || generator == null || !generator.TryGenerateNextHand(out List<HexStack> stacks))
            {
                tray?.Clear();
                return false;
            }

            tray.Initialize(stacks);
            return true;
        }

        public void Clear()
        {
            tray?.Clear();
        }
    }
}
