using System;
using UnityEngine;
using UnityEngine.UI;

namespace _Game.UI
{
    /// <summary>
    /// Controls an injected win screen and exposes the next-level button event to flow logic.
    /// </summary>
    public class WinScreenView : MonoBehaviour
    {
        [SerializeField] private GameObject root;
        [SerializeField] private Button nextLevelButton;

        public event Action NextLevelRequested;

        private void Awake()
        {
            if (nextLevelButton != null)
            {
                nextLevelButton.onClick.AddListener(HandleNextLevelClicked);
            }
        }

        private void OnDestroy()
        {
            if (nextLevelButton != null)
            {
                nextLevelButton.onClick.RemoveListener(HandleNextLevelClicked);
            }
        }

        public void Show()
        {
            ResolveRoot().SetActive(true);
        }

        public void Hide()
        {
            ResolveRoot().SetActive(false);
        }

        private void HandleNextLevelClicked()
        {
            Debug.Log("NextLevelClicked");
            NextLevelRequested?.Invoke();
        }

        private GameObject ResolveRoot()
        {
            return root != null ? root : gameObject;
        }
    }
}
