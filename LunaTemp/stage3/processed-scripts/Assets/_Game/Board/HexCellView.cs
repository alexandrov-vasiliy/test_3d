using _Game.Audio;
using _Game.Stacks;
using UnityEngine;

namespace _Game.Board
{
    [System.Serializable]
    public class HexCellHighlightSettings
    {
        public bool useMaterialTint = true;
        public bool useOutline = true;
        public Color validColor = new Color(0.28f, 0.9f, 0.48f, 1f);
        public Material outlineMaterial;
        public float outlineLineWidth = 0.08f;
        public float outlineVerticalOffset = 0.06f;
        public float outlineRadiusMultiplier = 1.02f;
    }

    public class HexCellView : MonoBehaviour
    {
        [SerializeField] private MeshRenderer[] meshRenderers;
        [SerializeField] private Color validColor = new Color(0.28f, 0.9f, 0.48f, 1f);
        [SerializeField] private Material highlightMaterial;
        [SerializeField] private float highlightLineWidth = 0.08f;
        [SerializeField] private float highlightVerticalOffset = 0.06f;
        [SerializeField] private float highlightRadiusMultiplier = 1.02f;
        [SerializeField] private float cornerRadius = 1.05f;
        [SerializeField] private HexGridGenerator.HexOrientation orientation = HexGridGenerator.HexOrientation.FlatTop;

        private const string HighlightOutlineName = "HighlightOutline";

        private LineRenderer highlightOutline;
        private Material runtimeHighlightMaterial;
        private Color[] defaultColors;
        private bool useMaterialTint = true;
        private bool useOutline = true;
        private SoundPlayer soundPlayer;

        public HexCell Cell { get; private set; }
        public HexStackView StackView { get; private set; }

        public void SetSoundPlayer(SoundPlayer soundPlayer)
        {
            this.soundPlayer = soundPlayer;
        }

        public void Initialize(HexCell cell)
        {
            Cell = cell;
            CacheRenderers();
            SetHighlight(false, false);
        }

        public void ConfigureGeometry(float radius, HexGridGenerator.HexOrientation hexOrientation)
        {
            cornerRadius = Mathf.Max(0.01f, radius);
            orientation = hexOrientation;
            if (highlightOutline != null)
            {
                UpdateHighlightGeometry();
            }
        }

        public void ConfigureHighlight(HexCellHighlightSettings settings)
        {
            if (settings == null)
            {
                return;
            }

            useMaterialTint = settings.useMaterialTint;
            useOutline = settings.useOutline;
            validColor = settings.validColor;
            highlightMaterial = settings.outlineMaterial;
            highlightLineWidth = settings.outlineLineWidth;
            highlightVerticalOffset = settings.outlineVerticalOffset;
            highlightRadiusMultiplier = settings.outlineRadiusMultiplier;

            if (runtimeHighlightMaterial != null)
            {
                if (Application.isPlaying)
                {
                    Destroy(runtimeHighlightMaterial);
                }
                else
                {
                    DestroyImmediate(runtimeHighlightMaterial);
                }
                runtimeHighlightMaterial = null;
            }

            if (highlightOutline != null)
            {
                EnsureHighlightMaterial();
                UpdateHighlightGeometry();
            }
        }

        public Vector3 GetCornerWorld(int index)
        {
            int wrappedIndex = ((index % 6) + 6) % 6;
            float angleOffset = orientation == HexGridGenerator.HexOrientation.FlatTop ? 0f : 30f;
            float angleRad = Mathf.Deg2Rad * (60f * wrappedIndex + angleOffset);
            Vector3 localCorner = new Vector3(Mathf.Cos(angleRad) * cornerRadius, 0f, Mathf.Sin(angleRad) * cornerRadius);
            return transform.TransformPoint(localCorner);
        }

        public void SetStackView(HexStackView stackView, bool playDropSound = false)
        {
            StackView = stackView;
            if (StackView != null)
            {
                StackView.transform.SetParent(transform, true);
                StackView.transform.position = transform.position + Vector3.up * 0.08f;
                if (playDropSound && soundPlayer != null)
                {
                    soundPlayer.PlayStackDrop();
                }
            }
        }

        public void ClearStackView()
        {
            StackView = null;
        }

        public void SetHighlight(bool active, bool valid)
        {
            if (!active || !valid)
            {
                RestoreMaterialColors();
                if (highlightOutline != null)
                {
                    highlightOutline.enabled = false;
                }

                return;
            }

            Color color = validColor;
            ApplyMaterialTint(color);

            if (!useOutline)
            {
                if (highlightOutline != null)
                {
                    highlightOutline.enabled = false;
                }

                return;
            }

            EnsureHighlightOutline();
            if (highlightOutline == null)
            {
                return;
            }
            // Luna Playworks JS bridge can throw on LineRenderer.startColor/endColor.
            // The outline material carries the visible tint, so avoid those setters.
            ApplyMaterialColor(runtimeHighlightMaterial, color);
            highlightOutline.enabled = true;
            UpdateHighlightGeometry();
        }

        private void CacheRenderers()
        {
            if (meshRenderers == null || meshRenderers.Length == 0)
            {
                meshRenderers = GetComponentsInChildren<MeshRenderer>(true);
            }

            defaultColors = new Color[meshRenderers.Length];
            for (int i = 0; i < meshRenderers.Length; i++)
            {
                MeshRenderer renderer = meshRenderers[i];
                defaultColors[i] = renderer != null ? renderer.material.color : Color.white;
            }

            if (meshRenderers.Length == 0)
            {
                Debug.LogWarning("HexCellView has no MeshRenderer. Assign a cell prefab with a mesh/material.", this);
            }
        }

        private void ApplyMaterialTint([Bridge.Ref] Color color)
        {
            if (!useMaterialTint || meshRenderers == null)
            {
                return;
            }

            for (int i = 0; i < meshRenderers.Length; i++)
            {
                MeshRenderer renderer = meshRenderers[i];
                if (renderer == null)
                {
                    continue;
                }

                renderer.material.color = color;
            }
        }

        private void RestoreMaterialColors()
        {
            if (meshRenderers == null || defaultColors == null)
            {
                return;
            }

            int count = Mathf.Min(meshRenderers.Length, defaultColors.Length);
            for (int i = 0; i < count; i++)
            {
                MeshRenderer renderer = meshRenderers[i];
                if (renderer == null)
                {
                    continue;
                }

                renderer.material.color = defaultColors[i];
            }
        }

        private void EnsureHighlightOutline()
        {
            if (highlightOutline != null)
            {
                return;
            }

            Transform existingOutline = transform.Find(HighlightOutlineName);
            if (existingOutline != null)
            {
                highlightOutline = existingOutline.GetComponent<LineRenderer>();
            }

            if (highlightOutline == null)
            {
                GameObject outlineObject = existingOutline != null ? existingOutline.gameObject : new GameObject(HighlightOutlineName);
                outlineObject.transform.SetParent(transform, false);
                outlineObject.transform.localPosition = Vector3.zero;
                outlineObject.transform.localRotation = Quaternion.identity;
                outlineObject.transform.localScale = Vector3.one;
                highlightOutline = outlineObject.AddComponent<LineRenderer>();
            }

            highlightOutline.useWorldSpace = false;
            highlightOutline.loop = true;
            highlightOutline.positionCount = 6;
            highlightOutline.startWidth = Mathf.Max(0.001f, highlightLineWidth);
            highlightOutline.endWidth = Mathf.Max(0.001f, highlightLineWidth);
            highlightOutline.numCapVertices = Mathf.Max(highlightOutline.numCapVertices, 6);
            highlightOutline.numCornerVertices = Mathf.Max(highlightOutline.numCornerVertices, 2);
            highlightOutline.shadowCastingMode = UnityEngine.Rendering.ShadowCastingMode.Off;
            highlightOutline.receiveShadows = false;
            highlightOutline.enabled = false;

            EnsureHighlightMaterial();
            UpdateHighlightGeometry();
        }

        private void EnsureHighlightMaterial()
        {
            if (runtimeHighlightMaterial != null)
            {
                highlightOutline.material = runtimeHighlightMaterial;
                return;
            }

            if (highlightMaterial != null)
            {
                runtimeHighlightMaterial = new Material(highlightMaterial);
            }
            else
            {
                Shader shader = FindLineShader();
                if (shader == null)
                {
                    return;
                }

                runtimeHighlightMaterial = new Material(shader);
            }

            highlightOutline.material = runtimeHighlightMaterial;
        }

        private void UpdateHighlightGeometry()
        {
            if (highlightOutline == null)
            {
                return;
            }

            float radius = cornerRadius * Mathf.Max(1f, highlightRadiusMultiplier);
            float angleOffset = orientation == HexGridGenerator.HexOrientation.FlatTop ? 0f : 30f;
            float y = highlightVerticalOffset;

            highlightOutline.positionCount = 6;
            highlightOutline.startWidth = Mathf.Max(0.001f, highlightLineWidth);
            highlightOutline.endWidth = Mathf.Max(0.001f, highlightLineWidth);
            for (int i = 0; i < 6; i++)
            {
                float angleRad = Mathf.Deg2Rad * (60f * i + angleOffset);
                Vector3 localCorner = new Vector3(Mathf.Cos(angleRad) * radius, y, Mathf.Sin(angleRad) * radius);
                highlightOutline.SetPosition(i, localCorner);
            }
        }

        private void ApplyMaterialColor(Material material, [Bridge.Ref] Color color)
        {
            if (material == null)
            {
                return;
            }

            Color emissionColor = color * 3f;
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
                material.EnableKeyword("_EMISSION");
                material.SetColor("_EmissionColor", emissionColor);
            }
        }

        private Shader FindLineShader()
        {
            Shader shader = Shader.Find("Universal Render Pipeline/Particles/Unlit");
            if (shader == null)
            {
                shader = Shader.Find("Sprites/Default");
            }
            if (shader == null)
            {
                shader = Shader.Find("Unlit/Color");
            }

            return shader;
        }

        private void OnDestroy()
        {
            if (runtimeHighlightMaterial == null)
            {
                return;
            }

            if (Application.isPlaying)
            {
                Destroy(runtimeHighlightMaterial);
            }
            else
            {
                DestroyImmediate(runtimeHighlightMaterial);
            }
        }
    }
}