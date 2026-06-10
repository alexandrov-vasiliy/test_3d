using UnityEngine;

namespace _Game.UI
{
    /// <summary>
    /// Shows or hides an injected level-transition object; transition timing remains owned by flow logic.
    /// </summary>
    public class LevelTransitionView : MonoBehaviour
    {
        [SerializeField] private GameObject root;

        public void Show()
        {
            ResolveRoot().SetActive(true);
        }

        public void Hide()
        {
            ResolveRoot().SetActive(false);
        }

        private GameObject ResolveRoot()
        {
            return root != null ? root : gameObject;
        }
    }
}
