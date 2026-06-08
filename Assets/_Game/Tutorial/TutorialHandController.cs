using DG.Tweening;
using UnityEngine;
using UnityEngine.UI;

public class TutorialHandController : MonoBehaviour
{
    [SerializeField] private float inactivityDelayBeforeTutorialRestart = 2.5f;
    [SerializeField] private float handMoveDuration = 1.1f;
    [SerializeField] private Vector2 handSize = new Vector2(95f, 112f);
    [SerializeField] private Vector2 screenOffset = new Vector2(36f, -34f);
    [SerializeField] private HexStackView tutorialTargetStack;
    [SerializeField] private HexCellView tutorialTargetCell;
    [SerializeField] private Camera worldCamera;
    [SerializeField] private Canvas canvas;
    [SerializeField] private Image handImage;

    private RectTransform handRect;
    private Sequence sequence;
    private bool completed;
    private bool waitingForRestart;
    private float restartAt;

    public float InactivityDelayBeforeTutorialRestart { get => inactivityDelayBeforeTutorialRestart; set => inactivityDelayBeforeTutorialRestart = Mathf.Max(0f, value); }
    public float HandMoveDuration { get => handMoveDuration; set => handMoveDuration = Mathf.Max(0.05f, value); }

    public void Initialize(Sprite handSprite, Camera camera)
    {
        worldCamera = camera != null ? camera : Camera.main;
        EnsureOverlayCanvas();
        EnsureHandImage(handSprite);
        Hide();
    }

    public void SetTargets(HexStackView stack, HexCellView cell)
    {
        tutorialTargetStack = stack;
        tutorialTargetCell = cell;
    }

    public void Show()
    {
        if (completed || tutorialTargetStack == null || tutorialTargetCell == null || handRect == null)
        {
            return;
        }

        waitingForRestart = false;
        SetVisualVisible(true);
        PlayLoop();
    }

    public void Hide()
    {
        waitingForRestart = false;
        sequence?.Kill();
        sequence = null;
        SetVisualVisible(false);
    }

    public void Complete()
    {
        completed = true;
        Hide();
    }

    public void RestartAfterInactivity()
    {
        if (completed)
        {
            return;
        }

        Hide();
        waitingForRestart = true;
        restartAt = Time.unscaledTime + inactivityDelayBeforeTutorialRestart;
    }

    private void Update()
    {
        if (!waitingForRestart || completed)
        {
            return;
        }

        if (Time.unscaledTime >= restartAt)
        {
            Show();
        }
    }

    private void PlayLoop()
    {
        sequence?.Kill();
        Vector2 from = WorldToScreenPosition(tutorialTargetStack.transform.position) + screenOffset;
        Vector2 to = WorldToScreenPosition(tutorialTargetCell.transform.position) + screenOffset;
        handRect.position = from;

        sequence = DOTween.Sequence();
        sequence.Append(handRect.DOMove(to, handMoveDuration).SetEase(Ease.InOutSine));
        sequence.AppendInterval(0.35f);
        sequence.Append(handRect.DOMove(from, 0.25f).SetEase(Ease.OutSine));
        sequence.AppendInterval(0.25f);
        sequence.SetLoops(-1, LoopType.Restart);
    }

    private Vector2 WorldToScreenPosition(Vector3 worldPosition)
    {
        Camera camera = worldCamera != null ? worldCamera : Camera.main;
        return camera != null ? camera.WorldToScreenPoint(worldPosition) : Vector2.zero;
    }

    private void EnsureOverlayCanvas()
    {
        canvas = GetComponent<Canvas>();
        if (canvas == null)
        {
            canvas = gameObject.AddComponent<Canvas>();
        }

        canvas.renderMode = RenderMode.ScreenSpaceOverlay;
        canvas.sortingOrder = 5000;
        canvas.overrideSorting = true;

        CanvasScaler scaler = GetComponent<CanvasScaler>();
        if (scaler == null)
        {
            scaler = gameObject.AddComponent<CanvasScaler>();
        }
        scaler.uiScaleMode = CanvasScaler.ScaleMode.ScaleWithScreenSize;
        scaler.referenceResolution = new Vector2(1080f, 1920f);
        scaler.matchWidthOrHeight = 0.5f;
    }

    private void EnsureHandImage(Sprite handSprite)
    {
        if (handImage == null)
        {
            GameObject handObject = new GameObject("TutorialHandImage");
            handObject.transform.SetParent(transform, false);
            handImage = handObject.AddComponent<Image>();
        }

        handImage.sprite = handSprite;
        handImage.raycastTarget = false;
        handImage.preserveAspect = true;
        handRect = handImage.GetComponent<RectTransform>();
        handRect.sizeDelta = handSize;
        handRect.anchorMin = handRect.anchorMax = Vector2.zero;
        handRect.pivot = new Vector2(0.5f, 0.08f);
    }

    private void SetVisualVisible(bool visible)
    {
        if (canvas != null)
        {
            canvas.enabled = visible;
        }

        if (handImage != null)
        {
            handImage.enabled = visible;
        }
    }
}
