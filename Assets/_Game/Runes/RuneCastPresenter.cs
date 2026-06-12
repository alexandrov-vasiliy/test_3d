using _Game.Runes.Tags;
using UnityEngine;

namespace _Game.Runes
{
    /// <summary>
    /// Owns visual-only rune charge, projectile, and impact objects for a battle; gameplay effects are triggered by RuneCombatController after visual hit callbacks.
    /// </summary>
    public sealed class RuneCastPresenter : MonoBehaviour
    {
        [SerializeField] private Transform castRoot;

        public ActiveRuneCast BeginCast(RuneClearContext context)
        {
            Transform root = ResolveCastRoot();
            RuneDefinition rune = context.Rune;
            RuneChargeVisualTag chargeTag = rune != null && rune.TryGetTag(out RuneChargeVisualTag resolvedCharge) ? resolvedCharge : null;
            RuneProjectileVisualTag projectileTag = rune != null && rune.TryGetTag(out RuneProjectileVisualTag resolvedProjectile) ? resolvedProjectile : null;
            ProjectileImpactTag impactTag = rune != null && rune.TryGetTag(out ProjectileImpactTag resolvedImpact) ? resolvedImpact : null;
            Color color = rune != null && rune.TryGetTag(out RuneColorTag colorTag) ? colorTag.Color : Color.white;
            Vector3 offset = chargeTag != null ? chargeTag.Offset : new Vector3(0f, 0.85f, 0f);
            GameObject visual = CreateVisual(chargeTag != null ? chargeTag.Prefab : null, context.WorldPosition + offset, root, color);
            return new ActiveRuneCast(this, visual, chargeTag, projectileTag, impactTag);
        }

        internal void Release(ActiveRuneCast cast)
        {
            if (cast == null || cast.Visual == null)
            {
                return;
            }

            Destroy(cast.Visual);
        }

        internal void SpawnImpact(ProjectileImpactTag impactTag, Vector3 position)
        {
            if (impactTag == null || impactTag.Prefab == null)
            {
                return;
            }

            Instantiate(impactTag.Prefab, position, Quaternion.identity, ResolveCastRoot());
        }

        private Transform ResolveCastRoot()
        {
            if (castRoot != null)
            {
                return castRoot;
            }

            GameObject root = new GameObject("RuneCasts");
            root.transform.SetParent(transform, false);
            castRoot = root.transform;
            return castRoot;
        }

        private static GameObject CreateVisual(GameObject prefab, Vector3 position, Transform parent, Color color)
        {
            GameObject visual;
            if (prefab != null)
            {
                visual = Instantiate(prefab, position, Quaternion.identity, parent);
            }
            else
            {
                visual = GameObject.CreatePrimitive(PrimitiveType.Sphere);
                visual.name = "RuneCastView";
                visual.transform.SetParent(parent, true);
                visual.transform.position = position;
                Collider collider = visual.GetComponent<Collider>();
                if (collider != null)
                {
                    Destroy(collider);
                }
            }

            ApplyColor(visual, color);
            return visual;
        }

        private static void ApplyColor(GameObject visual, Color color)
        {
            Renderer[] renderers = visual.GetComponentsInChildren<Renderer>(true);
            for (int i = 0; i < renderers.Length; i++)
            {
                Renderer renderer = renderers[i];
                if (renderer == null)
                {
                    continue;
                }

                Material material = renderer.material;
                if (material == null)
                {
                    continue;
                }

                material.color = color;
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
    }

    /// <summary>
    /// Tracks one active rune projectile visual so multiple simultaneous casts can grow, retarget, hit, or dissipate independently.
    /// </summary>
    public sealed class ActiveRuneCast
    {
        private readonly RuneCastPresenter owner;
        private readonly RuneChargeVisualTag chargeTag;
        private readonly RuneProjectileVisualTag projectileTag;
        private readonly ProjectileImpactTag impactTag;
        private int consumedPieces;
        private bool released;

        public ActiveRuneCast(RuneCastPresenter owner, GameObject visual, RuneChargeVisualTag chargeTag, RuneProjectileVisualTag projectileTag, ProjectileImpactTag impactTag)
        {
            this.owner = owner;
            Visual = visual;
            this.chargeTag = chargeTag;
            this.projectileTag = projectileTag;
            this.impactTag = impactTag;
            ApplyScale();
        }

        public GameObject Visual { get; }
        public Vector3 CurrentPosition => Visual != null ? Visual.transform.position : Vector3.zero;
        public bool IsReleased => released || Visual == null;
        public float HitDistance => projectileTag != null ? projectileTag.HitDistance : 0.18f;

        public void ConsumePiece(Vector3 pieceWorldPosition)
        {
            if (IsReleased)
            {
                return;
            }

            consumedPieces++;
            ApplyScale();
        }

        public bool MoveTowards(Transform target, float deltaTime)
        {
            if (IsReleased || target == null)
            {
                return false;
            }

            float speed = projectileTag != null ? projectileTag.Speed : 7f;
            Vector3 current = Visual.transform.position;
            Vector3 targetPosition = new Vector3(target.position.x, current.y, target.position.z);
            Visual.transform.position = Vector3.MoveTowards(current, targetPosition, speed * Mathf.Max(0f, deltaTime));
            return Vector3.Distance(Visual.transform.position, targetPosition) <= HitDistance;
        }

        public void SpawnImpact()
        {
            if (!IsReleased)
            {
                owner?.SpawnImpact(impactTag, CurrentPosition);
            }
        }

        public void Dissipate()
        {
            Release();
        }

        public void Complete()
        {
            Release();
        }

        private void ApplyScale()
        {
            if (Visual == null)
            {
                return;
            }

            float baseScale = chargeTag != null ? chargeTag.BaseScale : 0.25f;
            float scalePerPiece = chargeTag != null ? chargeTag.ScalePerPiece : 0.04f;
            float maxScale = chargeTag != null ? chargeTag.MaxScale : 1.5f;
            float scale = Mathf.Min(maxScale, baseScale + consumedPieces * scalePerPiece);
            Visual.transform.localScale = Vector3.one * scale;
        }

        private void Release()
        {
            if (released)
            {
                return;
            }

            released = true;
            owner?.Release(this);
        }
    }
}
