using System;
using UnityEngine;
using UnityEngine.UI;

namespace _Game.UI
{
    /// <summary>
    /// Controls an injected lose screen and exposes retry requests to the flow controller.
    /// </summary>
    public class LoseScreenView : MonoBehaviour
    {
        [SerializeField] private GameObject root;
        [SerializeField] private Button retryButton;

        public event Action RetryRequested;

        private void Awake()
        {
            if (retryButton != null)
            {
                retryButton.onClick.AddListener(HandleRetryClicked);
            }
        }

        private void OnDestroy()
        {
            if (retryButton != null)
            {
                retryButton.onClick.RemoveListener(HandleRetryClicked);
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

        private void HandleRetryClicked()
        {
            RetryRequested?.Invoke();
        }

        private GameObject ResolveRoot()
        {
            return root != null ? root : gameObject;
        }
    }
}
