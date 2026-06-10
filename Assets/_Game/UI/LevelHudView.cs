using UnityEngine;
using UnityEngine.UI;

namespace _Game.UI
{
    /// <summary>
    /// Presents level identity on an injected HUD object; it owns view updates only, not gameplay state.
    /// </summary>
    public class LevelHudView : MonoBehaviour
    {
        [SerializeField] private GameObject root;
        [SerializeField] private Text levelText;

        public void SetVisible(bool visible)
        {
            ResolveRoot().SetActive(visible);
        }

        public void SetLevel(int levelNumber, string displayName)
        {
            if (levelText != null)
            {
                string label = string.IsNullOrEmpty(displayName) ? "Level " + levelNumber : displayName;
                levelText.text = label;
            }
        }

        private GameObject ResolveRoot()
        {
            return root != null ? root : gameObject;
        }
    }
}
