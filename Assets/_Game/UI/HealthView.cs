using _Game.Player;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

namespace _Game.UI
{
    /// <summary>
    /// Presents injected player health on an existing UI hierarchy; it owns Slider/TMP_Text updates only, not health gameplay logic.
    /// </summary>
    public class HealthView : MonoBehaviour
    {
        [SerializeField] private GameObject root;
        [SerializeField] private Slider healthSlider;
        [SerializeField] private TMP_Text healthText;
        [SerializeField] private PlayerHealth playerHealth;

        private void OnEnable()
        {
            Subscribe();
            Refresh();
        }

        private void OnDisable()
        {
            Unsubscribe();
        }

        public void Bind(PlayerHealth health)
        {
            if (playerHealth == health)
            {
                Refresh();
                return;
            }

            Unsubscribe();
            playerHealth = health;
            Subscribe();
            Refresh();
        }

        public void SetVisible(bool visible)
        {
            ResolveRoot().SetActive(visible);
        }

        public void Refresh()
        {
            int current = playerHealth != null ? playerHealth.CurrentHealth : 0;
            int max = playerHealth != null ? playerHealth.MaxHealth : 0;
            SetHealth(current, max);
        }

        private void SetHealth(int current, int max)
        {
            int safeMax = Mathf.Max(0, max);
            int safeCurrent = Mathf.Clamp(current, 0, safeMax);
            float normalized = safeMax > 0 ? (float)safeCurrent / safeMax : 0f;

            if (healthSlider != null)
            {
                healthSlider.SetValueWithoutNotify(normalized);
            }

            if (healthText != null)
            {
                healthText.text = safeCurrent + "/" + safeMax;
            }
        }

        private void Subscribe()
        {
            if (playerHealth != null)
            {
                playerHealth.HealthChanged += SetHealth;
            }
        }

        private void Unsubscribe()
        {
            if (playerHealth != null)
            {
                playerHealth.HealthChanged -= SetHealth;
            }
        }

        private GameObject ResolveRoot()
        {
            return root != null ? root : gameObject;
        }
    }
}
