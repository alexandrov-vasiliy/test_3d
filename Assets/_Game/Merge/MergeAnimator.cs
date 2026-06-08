using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class MergeAnimator : MonoBehaviour
{
    [SerializeField] private float baseMoveDuration = 0.35f;
    [SerializeField] private float baseDisappearDuration = 0.28f;
    [SerializeField] private float speedIncreasePerStep = 0.3f;
    [SerializeField] private float maxSpeedMultiplier = 3f;
    [SerializeField] private float jumpPower = 0.8f;
    [SerializeField] private float pieceStagger = 0.035f;
    [SerializeField] private float flipDegrees = 360f;
    [SerializeField] private float landingTiltDegrees = 18f;
    [SerializeField] private float disappearStepDelay = 0.035f;
    [SerializeField] private GameObject disappearEffectPrefab;
    [SerializeField] private HexColorConfig colorConfig;
    [SerializeField] private SoundPlayer soundPlayer;
    [SerializeField] private Transform effectParent;
    [SerializeField] private float disappearEffectLifetime = 2f;

    private int animationStep;

    public float BaseMoveDuration { get => baseMoveDuration; set => baseMoveDuration = Mathf.Max(0.01f, value); }
    public float BaseDisappearDuration { get => baseDisappearDuration; set => baseDisappearDuration = Mathf.Max(0.01f, value); }
    public float SpeedIncreasePerStep { get => speedIncreasePerStep; set => speedIncreasePerStep = Mathf.Max(0f, value); }
    public float MaxSpeedMultiplier { get => maxSpeedMultiplier; set => maxSpeedMultiplier = Mathf.Max(1f, value); }

    public void ResetSpeed()
    {
        animationStep = 0;
    }

    public void Initialize(HexColorConfig colorConfig, SoundPlayer soundPlayer = null)
    {
        this.colorConfig = colorConfig;
        if (soundPlayer != null)
        {
            this.soundPlayer = soundPlayer;
        }
    }

    public IEnumerator AnimateMove(HexStackView from, HexStackView to, int count)
    {
        if (from == null || to == null || count <= 0)
        {
            yield break;
        }

        float duration = GetDuration(baseMoveDuration);
        List<HexPieceView> movingPieces = from.DetachTopVisualHexes(count);
        Sequence sequence = DOTween.Sequence();

        for (int i = 0; i < movingPieces.Count; i++)
        {
            HexPieceView piece = movingPieces[i];
            if (piece == null)
            {
                continue;
            }

            Vector3 target = to.transform.TransformPoint(new Vector3(0f, (to.VisualCount + i) * to.HeightOffset, 0f));
            float startTime = i * pieceStagger / CurrentSpeedMultiplier();
            Sequence pieceSequence = DOTween.Sequence();
            pieceSequence.Join(piece.transform.DOJump(target, jumpPower, 1, duration).SetEase(Ease.InOutQuad));
            pieceSequence.Join(CreateSmartFlipTween(piece.transform, target, duration));
            pieceSequence.OnComplete(() =>
            {
                to.AttachVisualHexOnTop(piece);
                piece.transform.localRotation = Quaternion.identity;
            });
            sequence.InsertCallback(startTime, PlayElementFlyToStackSound);
            sequence.Insert(startTime, pieceSequence);
        }

        from.SnapVisualsToStack();
        AdvanceSpeed();
        yield return sequence.WaitForCompletion(true);
    }

    public IEnumerator AnimateDisappear(HexStackView stackView, int count)
    {
        yield return AnimateDisappear(stackView, count, default(HexColor));
    }

    public IEnumerator AnimateDisappear(HexStackView stackView, int count, HexColor color)
    {
        if (stackView == null || count <= 0)
        {
            yield break;
        }

        float duration = GetDuration(baseDisappearDuration);
        float stepDelay = disappearStepDelay / CurrentSpeedMultiplier();
        Vector3 effectPosition = stackView.transform.position;
        List<HexPieceView> pieces = stackView.DetachTopVisualHexes(count);
        Sequence sequence = DOTween.Sequence();

        foreach (HexPieceView piece in pieces)
        {
            if (piece == null)
            {
                continue;
            }

            Sequence pieceSequence = DOTween.Sequence();
            pieceSequence.AppendCallback(PlayElementDisappearSound);
            pieceSequence.Append(piece.transform.DOScale(Vector3.zero, duration).SetEase(Ease.InQuad));
            sequence.Append(pieceSequence);
            sequence.AppendInterval(stepDelay);
        }

        sequence.AppendCallback(() =>
        {
            foreach (HexPieceView piece in pieces)
            {
                if (piece != null)
                {
                    Destroy(piece.gameObject);
                }
            }
            stackView.SnapVisualsToStack();
            SpawnDisappearEffect(effectPosition, color);
            PlayAllElementsDisappearCompleteSound();
        });

        AdvanceSpeed();
        yield return sequence.WaitForCompletion(true);
    }

    private void SpawnDisappearEffect(Vector3 position, HexColor color)
    {
        if (disappearEffectPrefab == null)
        {
            return;
        }

        Transform parent = effectParent != null ? effectParent : transform;
        Transform prefabTransform = disappearEffectPrefab.transform;
        GameObject effect = Instantiate(disappearEffectPrefab, position + prefabTransform.localPosition, prefabTransform.localRotation, parent);
        ApplyEffectColor(effect, colorConfig != null ? colorConfig.GetColor(color) : HexColorConfig.GetFallbackColor(color));
        ParticleSystem[] particleSystems = effect.GetComponentsInChildren<ParticleSystem>(true);
        foreach (ParticleSystem particleSystem in particleSystems)
        {
            if (particleSystem != null)
            {
                particleSystem.Play(true);
            }
        }

        Destroy(effect, Mathf.Max(0.1f, disappearEffectLifetime));
    }

    private void PlayElementFlyToStackSound()
    {
        if (soundPlayer != null)
        {
            soundPlayer.PlayElementFlyToStack();
        }
    }

    private void PlayElementDisappearSound()
    {
        if (soundPlayer != null)
        {
            soundPlayer.PlayElementDisappear();
        }
    }

    private void PlayAllElementsDisappearCompleteSound()
    {
        if (soundPlayer != null)
        {
            soundPlayer.PlayAllElementsDisappearComplete();
        }
    }

    private static void ApplyEffectColor(GameObject effect, Color color)
    {
        ParticleSystem[] particleSystems = effect.GetComponentsInChildren<ParticleSystem>(true);
        foreach (ParticleSystem particleSystem in particleSystems)
        {
            if (particleSystem == null)
            {
                continue;
            }

            ParticleSystem.MainModule main = particleSystem.main;
            main.startColor = new ParticleSystem.MinMaxGradient(color);
        }

        ParticleSystemRenderer[] renderers = effect.GetComponentsInChildren<ParticleSystemRenderer>(true);
        foreach (ParticleSystemRenderer renderer in renderers)
        {
            if (renderer == null || renderer.material == null)
            {
                continue;
            }

            Material material = renderer.material;
            if (material.HasProperty("_BaseColor"))
            {
                material.SetColor("_BaseColor", color);
            }
            if (material.HasProperty("_Color"))
            {
                material.SetColor("_Color", color);
            }
            if (material.HasProperty("_EmissionColor"))
            {
                material.SetColor("_EmissionColor", color * 2f);
            }
        }
    }

    private float GetDuration(float baseDuration)
    {
        return baseDuration / CurrentSpeedMultiplier();
    }

    private float CurrentSpeedMultiplier()
    {
        return Mathf.Min(maxSpeedMultiplier, 1f + animationStep * speedIncreasePerStep);
    }

    private void AdvanceSpeed()
    {
        animationStep++;
    }

    private Tween CreateSmartFlipTween(Transform piece, Vector3 target, float duration)
    {
        Vector3 start = piece.position;
        Vector3 moveDirection = Vector3.ProjectOnPlane(target - start, Vector3.up);
        if (moveDirection.sqrMagnitude < 0.0001f)
        {
            moveDirection = Vector3.forward;
        }
        moveDirection.Normalize();

        // Flip around the edge perpendicular to movement, so the piece rolls toward the target stack.
        Vector3 flipAxis = Vector3.Cross(Vector3.up, moveDirection).normalized;
        Quaternion startRotation = piece.rotation;
        Quaternion landingTilt = Quaternion.AngleAxis(landingTiltDegrees, flipAxis);

        return DOVirtual.Float(0f, 1f, duration, t =>
        {
            float eased = DOVirtual.EasedValue(0f, 1f, t, Ease.InOutSine);
            float tiltWeight = Mathf.Sin(eased * Mathf.PI);
            Quaternion flip = Quaternion.AngleAxis(flipDegrees * eased, flipAxis);
            Quaternion tilt = Quaternion.Slerp(Quaternion.identity, landingTilt, tiltWeight);
            piece.rotation = flip * tilt * startRotation;
        });
    }

}
