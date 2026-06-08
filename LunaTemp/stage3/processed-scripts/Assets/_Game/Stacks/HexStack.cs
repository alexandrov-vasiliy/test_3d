using System.Collections.Generic;
using UnityEngine;

namespace _Game.Stacks
{
    [System.Serializable]
    public class HexStack
    {
        [SerializeField] private List<HexPiece> pieces = new List<HexPiece>();

        public IReadOnlyList<HexPiece> Pieces => pieces;
        public int Count => pieces.Count;
        public bool IsEmpty => pieces.Count == 0;
        public HexColor TopColor => IsEmpty ? default(_Game.Stacks.HexColor) : pieces[pieces.Count - 1].color;

        public HexStack()
        {
        }

        public HexStack(IEnumerable<HexColor> colorsBottomToTop)
        {
            foreach (HexColor color in colorsBottomToTop)
            {
                pieces.Add(new HexPiece(color));
            }
        }

        public int CountTopSameColor()
        {
            if (IsEmpty)
            {
                return 0;
            }

            HexColor color = TopColor;
            int count = 0;
            for (int i = pieces.Count - 1; i >= 0; i--)
            {
                if (pieces[i].color != color)
                {
                    break;
                }

                count++;
            }

            return count;
        }

        public HexPiece PopTop()
        {
            if (IsEmpty)
            {
                return null;
            }

            int index = pieces.Count - 1;
            HexPiece piece = pieces[index];
            pieces.RemoveAt(index);
            return piece;
        }

        public void Push(HexPiece piece)
        {
            if (piece != null)
            {
                pieces.Add(piece);
            }
        }

        public List<HexPiece> PopTopSameColor()
        {
            List<HexPiece> result = new List<HexPiece>();
            int count = CountTopSameColor();
            for (int i = 0; i < count; i++)
            {
                result.Add(PopTop());
            }

            return result;
        }

        public void RemoveTopPieces(int count)
        {
            count = Mathf.Clamp(count, 0, pieces.Count);
            pieces.RemoveRange(pieces.Count - count, count);
        }
    }
}
