using System.Collections.Generic;
using _Game.Stacks;
using UnityEngine;

namespace _Game.Configs
{
    [CreateAssetMenu(menuName = "Hex Merge/Hex Color Config")]
    public class HexColorConfig : ScriptableObject
    {
        [System.Serializable]
        public class Entry
        {
            public HexColor hexColor;
            public Color color = Color.white;
            public Material material;
        }

        [SerializeField] private List<Entry> entries = new List<Entry>();

        public Color GetColor(HexColor hexColor)
        {
            Entry entry = entries.Find(x => x.hexColor == hexColor);
            return entry != null ? entry.color : GetFallbackColor(hexColor);
        }

        public Material GetMaterial(HexColor hexColor)
        {
            Entry entry = entries.Find(x => x.hexColor == hexColor);
            return entry != null ? entry.material : null;
        }

        public static Color GetFallbackColor(HexColor hexColor)
        {
            Debug.Log("Getting fallback color : " + hexColor.ToString());
            switch (hexColor)
            {
                case HexColor.Red: return new Color(0.95f, 0.18f, 0.18f);
                case HexColor.Blue: return new Color(0.18f, 0.42f, 0.95f);
                case HexColor.Green: return new Color(0.18f, 0.75f, 0.32f);
                case HexColor.Yellow: return new Color(1f, 0.83f, 0.18f);
                case HexColor.Purple: return new Color(0.58f, 0.25f, 0.9f);
                case HexColor.Orange: return new Color(1f, 0.48f, 0.12f);
                default: return Color.magenta;
            }
        }
    }
}
