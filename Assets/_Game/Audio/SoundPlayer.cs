using UnityEngine;

[RequireComponent(typeof(AudioSource))]
public class SoundPlayer : MonoBehaviour
{
    [Header("Sources")]
    [SerializeField] private AudioSource audioSource;

    [Header("Clips")]
    [SerializeField] private AudioClip stackPickupClip;
    [SerializeField] private AudioClip elementFlyToStackClip;
    [SerializeField] private AudioClip elementDisappearClip;
    [SerializeField] private AudioClip allElementsDisappearCompleteClip;

    [Header("Volume")]
    [SerializeField, Range(0f, 1f)] private float masterVolume = 1f;
    [SerializeField, Range(0f, 1f)] private float stackPickupVolume = 1f;
    [SerializeField, Range(0f, 1f)] private float elementFlyToStackVolume = 1f;
    [SerializeField, Range(0f, 1f)] private float elementDisappearVolume = 1f;
    [SerializeField, Range(0f, 1f)] private float allElementsDisappearCompleteVolume = 1f;

    private DragController subscribedDrag;

    private void Awake()
    {
        EnsureAudioSource();
    }

    private void OnDestroy()
    {
        UnsubscribeFromDrag();
    }

    public void Initialize(DragController drag)
    {
        EnsureAudioSource();

        if (subscribedDrag == drag)
        {
            return;
        }

        UnsubscribeFromDrag();
        subscribedDrag = drag;
        if (subscribedDrag != null)
        {
            subscribedDrag.DragStarted += OnDragStarted;
        }
    }

    public void PlayStackPickup()
    {
        Play(stackPickupClip, stackPickupVolume);
    }

    public void PlayElementFlyToStack()
    {
        Play(elementFlyToStackClip, elementFlyToStackVolume);
    }

    public void PlayElementDisappear()
    {
        Play(elementDisappearClip, elementDisappearVolume);
    }

    public void PlayAllElementsDisappearComplete()
    {
        Play(allElementsDisappearCompleteClip, allElementsDisappearCompleteVolume);
    }

    private void OnDragStarted(HexStackView stackView)
    {
        PlayStackPickup();
    }

    private void Play(AudioClip clip, float volume)
    {
        if (clip == null)
        {
            return;
        }

        EnsureAudioSource();
        if (audioSource != null)
        {
            audioSource.PlayOneShot(clip, Mathf.Clamp01(masterVolume * volume));
        }
    }

    private void EnsureAudioSource()
    {
        if (audioSource == null)
        {
            audioSource = GetComponent<AudioSource>();
        }
        if (audioSource == null)
        {
            audioSource = gameObject.AddComponent<AudioSource>();
        }
        if (audioSource != null)
        {
            audioSource.playOnAwake = false;
        }
    }

    private void UnsubscribeFromDrag()
    {
        if (subscribedDrag != null)
        {
            subscribedDrag.DragStarted -= OnDragStarted;
            subscribedDrag = null;
        }
    }
}
