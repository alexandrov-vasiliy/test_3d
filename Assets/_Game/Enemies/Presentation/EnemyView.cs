using DG.Tweening;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

namespace _Game.Enemies
{
    /// <summary>
    /// Presents one spawned enemy on an existing prefab UI hierarchy; it owns HP UI and DOTween damage feedback only, while combat state stays in EnemyController.
    /// </summary>
    public sealed class EnemyView : MonoBehaviour
    {
        private static readonly int BaseColorId = Shader.PropertyToID("_BaseColor");
        private static readonly int ColorId = Shader.PropertyToID("_Color");

        [SerializeField] private GameObject root;
        [SerializeField] private TMP_Text healthText;
        [SerializeField] private Slider healthSlider;
        [SerializeField] private Transform shakeTarget;
        [SerializeField] private Renderer[] flashRenderers;
        [SerializeField] private Color damageFlashColor = Color.white;
        [SerializeField] private float damageShakeDuration = 0.12f;
        [SerializeField] private float damageShakeStrength = 0.12f;
        [SerializeField] private int damageShakeVibrato = 12;
        [SerializeField] private float damageFlashDuration = 0.12f;
        [SerializeField] private Animator animator;
        [SerializeField] private string deathBoolParameter = "Death_b";
        [SerializeField] private string deathTypeIntParameter = "DeathType_int";
        [SerializeField] private int deathType = 1;

        private MaterialPropertyBlock propertyBlock;
        private EnemyController enemy;
        private bool subscribed;
        private Tween shakeTween;
        private Tween flashTween;
        private Vector3 shakeStartPosition;

        private void OnEnable()
        {
            Subscribe();
            Refresh();
        }

        private void OnDisable()
        {
            KillDamageTweens();
            Unsubscribe();
        }

        public void Initialize(EnemyController controller)
        {
            if (enemy == controller)
            {
                Refresh();
                return;
            }

            Unsubscribe();
            enemy = controller;
            ResolveFeedbackTargets();
            Subscribe();
            Refresh();
        }

        public void SetVisible(bool visible)
        {
            ResolveRoot().SetActive(visible);
        }

        public void Refresh()
        {
            int current = enemy != null && enemy.Runtime != null ? enemy.Runtime.CurrentHealth : 0;
            int max = enemy != null && enemy.Runtime != null ? enemy.Runtime.MaxHealth : 0;
            SetHealth(current, max);
        }

        private void SetHealth(int current, int max)
        {
            int safeMax = Mathf.Max(0, max);
            int safeCurrent = Mathf.Clamp(current, 0, safeMax);
            float normalized = safeMax > 0 ? (float)safeCurrent / safeMax : 0f;

            if (healthText != null)
            {
                healthText.text = safeCurrent + "/" + safeMax;
            }

            if (healthSlider != null)
            {
                healthSlider.SetValueWithoutNotify(normalized);
            }
        }

        private void OnHealthChanged(int current, int max)
        {
            SetHealth(current, max);
        }

        private void OnDamaged(EnemyController controller, int healthDamage)
        {
            if (healthDamage <= 0 || controller == null || !controller.IsAlive)
            {
                return;
            }

            PlayDamageFeedback();
        }

        private void OnDefeated(EnemyController controller)
        {
            KillDamageTweens();
            PlayDeathFeedback();
            SetHealth(0, controller != null && controller.Runtime != null ? controller.Runtime.MaxHealth : 0);
        }

        private void PlayDamageFeedback()
        {
            PlayShake();
            PlayMaterialFlash();
        }

        private void PlayShake()
        {
            Transform target = ResolveShakeTarget();
            if (target == null)
            {
                return;
            }

            shakeTween?.Kill(false);
            shakeStartPosition = target.position;
            target.position = shakeStartPosition;
            shakeTween = DOTween.Shake(
                    () => target.position,
                    value => target.position = value,
                    damageShakeDuration,
                    damageShakeStrength,
                    damageShakeVibrato,
                    90f,
                    false,
                    true,
                    ShakeRandomnessMode.Full)
                .SetTarget(target)
                .OnKill(() =>
                {
                    if (target != null)
                    {
                        target.position = shakeStartPosition;
                    }
                });
        }

        private void PlayMaterialFlash()
        {
            Renderer[] renderers = ResolveFlashRenderers();
            if (renderers.Length == 0)
            {
                return;
            }

            flashTween?.Kill(false);
            SetFlashColor(renderers, damageFlashColor);
            flashTween = DOTween.Sequence()
                .AppendInterval(Mathf.Max(0.01f, damageFlashDuration))
                .OnKill(ClearFlashColor)
                .OnComplete(ClearFlashColor)
                .SetTarget(this);
        }

        private void PlayDeathFeedback()
        {
            Animator resolvedAnimator = ResolveAnimator();
            if (resolvedAnimator == null)
            {
                return;
            }

            if (!string.IsNullOrWhiteSpace(deathTypeIntParameter) && HasAnimatorParameter(resolvedAnimator, deathTypeIntParameter, AnimatorControllerParameterType.Int))
            {
                resolvedAnimator.SetInteger(deathTypeIntParameter, deathType);
            }

            if (!string.IsNullOrWhiteSpace(deathBoolParameter) && HasAnimatorParameter(resolvedAnimator, deathBoolParameter, AnimatorControllerParameterType.Bool))
            {
                resolvedAnimator.SetBool(deathBoolParameter, true);
            }
        }

        private void Subscribe()
        {
            if (enemy == null || subscribed)
            {
                return;
            }

            enemy.HealthChanged += OnHealthChanged;
            enemy.Damaged += OnDamaged;
            enemy.Defeated += OnDefeated;
            subscribed = true;
        }

        private void Unsubscribe()
        {
            if (enemy == null || !subscribed)
            {
                return;
            }

            enemy.HealthChanged -= OnHealthChanged;
            enemy.Damaged -= OnDamaged;
            enemy.Defeated -= OnDefeated;
            subscribed = false;
        }

        private void KillDamageTweens()
        {
            shakeTween?.Kill(false);
            shakeTween = null;
            flashTween?.Kill(false);
            flashTween = null;
            ClearFlashColor();
        }

        private void ResolveFeedbackTargets()
        {
            ResolveShakeTarget();
            ResolveFlashRenderers();
            ResolveAnimator();
        }

        private Transform ResolveShakeTarget()
        {
            if (shakeTarget == null && enemy != null)
            {
                shakeTarget = enemy.transform;
            }

            return shakeTarget;
        }

        private Renderer[] ResolveFlashRenderers()
        {
            if (flashRenderers == null || flashRenderers.Length == 0)
            {
                Transform rootTransform = enemy != null ? enemy.transform : transform.root;
                flashRenderers = rootTransform != null ? rootTransform.GetComponentsInChildren<Renderer>(true) : new Renderer[0];
            }

            return flashRenderers;
        }

        private Animator ResolveAnimator()
        {
            if (animator == null)
            {
                animator = GetComponentInParent<Animator>();
            }

            return animator;
        }

        private GameObject ResolveRoot()
        {
            return root != null ? root : gameObject;
        }

        private void SetFlashColor(Renderer[] renderers, Color color)
        {
            for (int i = 0; i < renderers.Length; i++)
            {
                Renderer targetRenderer = renderers[i];
                if (targetRenderer == null)
                {
                    continue;
                }

                MaterialPropertyBlock block = GetPropertyBlock();
                targetRenderer.GetPropertyBlock(block);
                block.SetColor(GetColorProperty(targetRenderer), color);
                targetRenderer.SetPropertyBlock(block);
            }
        }

        private void ClearFlashColor()
        {
            Renderer[] renderers = ResolveFlashRenderers();
            for (int i = 0; i < renderers.Length; i++)
            {
                Renderer targetRenderer = renderers[i];
                if (targetRenderer == null)
                {
                    continue;
                }

                MaterialPropertyBlock block = GetPropertyBlock();
                targetRenderer.GetPropertyBlock(block);
                block.Clear();
                targetRenderer.SetPropertyBlock(block);
            }
        }

        private MaterialPropertyBlock GetPropertyBlock()
        {
            if (propertyBlock == null)
            {
                propertyBlock = new MaterialPropertyBlock();
            }

            return propertyBlock;
        }

        private static int GetColorProperty(Renderer targetRenderer)
        {
            Material material = targetRenderer.sharedMaterial;
            return material != null && material.HasProperty(BaseColorId) ? BaseColorId : ColorId;
        }

        private static bool HasAnimatorParameter(Animator targetAnimator, string parameterName, AnimatorControllerParameterType parameterType)
        {
            if (targetAnimator == null || string.IsNullOrWhiteSpace(parameterName))
            {
                return false;
            }

            AnimatorControllerParameter[] parameters = targetAnimator.parameters;
            for (int i = 0; i < parameters.Length; i++)
            {
                AnimatorControllerParameter parameter = parameters[i];
                if (parameter != null && parameter.type == parameterType && parameter.name == parameterName)
                {
                    return true;
                }
            }

            return false;
        }
    }
}
