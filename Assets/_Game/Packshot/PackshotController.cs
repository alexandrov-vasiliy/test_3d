using DG.Tweening;
using UnityEngine;
using UnityEngine.UI;

public class PackshotController : MonoBehaviour
{
    [SerializeField] private CanvasGroup canvasGroup;
    [SerializeField] private Text titleText;
    [SerializeField] private Button ctaButton;
    [SerializeField] private string title = "Level Complete!";
    [SerializeField] private string cta = "Play Now";
    [SerializeField] private float fadeDuration = 0.35f;

    public void Initialize()
    {
        if (canvasGroup == null)
        {
            BuildDefaultUi();
        }

        Hide();
    }

    public void Show()
    {
        if (canvasGroup == null)
        {
            BuildDefaultUi();
        }

        gameObject.SetActive(true);
        if (titleText != null)
        {
            titleText.text = title;
        }
        if (ctaButton != null)
        {
            Text buttonText = ctaButton.GetComponentInChildren<Text>();
            if (buttonText != null)
            {
                buttonText.text = cta;
            }
        }

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

    private void BuildDefaultUi()
    {
        Canvas canvas = gameObject.GetComponent<Canvas>();
        if (canvas == null)
        {
            canvas = gameObject.AddComponent<Canvas>();
        }
        canvas.renderMode = RenderMode.ScreenSpaceOverlay;
        gameObject.AddComponent<CanvasScaler>().uiScaleMode = CanvasScaler.ScaleMode.ScaleWithScreenSize;
        gameObject.AddComponent<GraphicRaycaster>();

        canvasGroup = gameObject.GetComponent<CanvasGroup>();
        if (canvasGroup == null)
        {
            canvasGroup = gameObject.AddComponent<CanvasGroup>();
        }

        GameObject panel = new GameObject("DimPanel");
        panel.transform.SetParent(transform, false);
        Image image = panel.AddComponent<Image>();
        image.color = new Color(0f, 0f, 0f, 0.72f);
        RectTransform panelRect = panel.GetComponent<RectTransform>();
        panelRect.anchorMin = Vector2.zero;
        panelRect.anchorMax = Vector2.one;
        panelRect.offsetMin = Vector2.zero;
        panelRect.offsetMax = Vector2.zero;

        titleText = CreateText("Title", title, 42, new Vector2(0f, 80f));
        ctaButton = CreateButton("CTAButton", cta, new Vector2(0f, -55f));
    }

    private Text CreateText(string name, string value, int fontSize, Vector2 anchoredPosition)
    {
        GameObject textObject = new GameObject(name);
        textObject.transform.SetParent(transform, false);
        Text text = textObject.AddComponent<Text>();
        text.text = value;
        text.font = Resources.GetBuiltinResource<Font>("LegacyRuntime.ttf");
        if (text.font == null)
        {
            text.font = Resources.GetBuiltinResource<Font>("Arial.ttf");
        }
        text.fontSize = fontSize;
        text.alignment = TextAnchor.MiddleCenter;
        text.color = Color.white;
        RectTransform rect = textObject.GetComponent<RectTransform>();
        rect.sizeDelta = new Vector2(700f, 90f);
        rect.anchorMin = rect.anchorMax = new Vector2(0.5f, 0.5f);
        rect.anchoredPosition = anchoredPosition;
        return text;
    }

    private Button CreateButton(string name, string label, Vector2 anchoredPosition)
    {
        GameObject buttonObject = new GameObject(name);
        buttonObject.transform.SetParent(transform, false);
        Image image = buttonObject.AddComponent<Image>();
        image.color = new Color(1f, 0.76f, 0.18f, 1f);
        Button button = buttonObject.AddComponent<Button>();
        RectTransform rect = buttonObject.GetComponent<RectTransform>();
        rect.sizeDelta = new Vector2(260f, 76f);
        rect.anchorMin = rect.anchorMax = new Vector2(0.5f, 0.5f);
        rect.anchoredPosition = anchoredPosition;

        Text text = CreateText("Label", label, 30, Vector2.zero);
        text.transform.SetParent(buttonObject.transform, false);
        text.color = new Color(0.08f, 0.08f, 0.08f);
        RectTransform textRect = text.GetComponent<RectTransform>();
        textRect.anchorMin = Vector2.zero;
        textRect.anchorMax = Vector2.one;
        textRect.offsetMin = Vector2.zero;
        textRect.offsetMax = Vector2.zero;
        return button;
    }
}
