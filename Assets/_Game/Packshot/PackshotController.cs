using DG.Tweening;
using UnityEngine;
using UnityEngine.UI;

public class PackshotController : MonoBehaviour
{
    [SerializeField] private CanvasGroup canvasGroup;
    [SerializeField] private Text titleText;
    [SerializeField] private Button ctaButton;
    [SerializeField] private float fadeDuration = 0.35f;

    public void Initialize()
    {
        Hide();
    }

    public void Show()
    {
        if (canvasGroup == null)
        {
            Debug.LogWarning("PackshotController requires a scene CanvasGroup reference.");
            return;
        }

        gameObject.SetActive(true);

        canvasGroup.DOKill();
        canvasGroup.alpha = 0f;
        canvasGroup.interactable = true;
        canvasGroup.blocksRaycasts = true;
        canvasGroup.DOFade(1f, fadeDuration);
    }

    public void Hide()
    {
        if (canvasGroup == null)
        {
            return;
        }

        canvasGroup.DOKill();
        canvasGroup.alpha = 0f;
        canvasGroup.interactable = false;
        canvasGroup.blocksRaycasts = false;
        gameObject.SetActive(false);
    }
}
