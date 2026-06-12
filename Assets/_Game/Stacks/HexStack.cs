using System.Collections.Generic;
using UnityEngine;

namespace _Game.Stacks
{
    /// <summary>
    /// Owns the mutable runtime piece order for one board or hand stack; merge rules inspect rune ids while visuals stay in HexStackView.
    /// </summary>
    [System.Serializable]
    public class HexStack
    {
        [SerializeField] private List<HexPiece> pieces = new List<HexPiece>();

        public IReadOnlyList<HexPiece> Pieces => pieces;
        public int Count => pieces.Count;
        public bool IsEmpty => pieces.Count == 0;
        public string TopRuneId => IsEmpty ? string.Empty : pieces[pieces.Count - 1].runeId;

        public HexStack()
        {
        }

        public HexStack(IEnumerable<string> runeIdsBottomToTop)
        {
            foreach (string runeId in runeIdsBottomToTop)
            {
                pieces.Add(new HexPiece(runeId));
            }
        }

        public int CountTopSameRune()
        {
            if (IsEmpty)
            {
                return 0;
            }

            string runeId = TopRuneId;
            int count = 0;
            for (int i = pieces.Count - 1; i >= 0; i--)
            {
                if (!string.Equals(pieces[i].runeId, runeId, System.StringComparison.Ordinal))
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

        public List<HexPiece> PopTopSameRune()
        {
            List<HexPiece> result = new List<HexPiece>();
            int count = CountTopSameRune();
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
