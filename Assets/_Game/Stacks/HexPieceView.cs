using _Game.Runes;
using UnityEngine;

namespace _Game.Stacks
{
    /// <summary>
    /// Applies rune presentation data to one stack piece view; it owns renderer material setup but no gameplay logic.
    /// </summary>
    public class HexPieceView : MonoBehaviour
    {
        public string RuneId { get; private set; }

        public void Initialize(string runeId, IRuneResolver runeResolver)
        {
            RuneId = string.IsNullOrWhiteSpace(runeId) ? "fire" : runeId;
            Color? unityColor = null;
            Material configuredMaterial = null;

            if (runeResolver != null && runeResolver.TryResolveRuneId(RuneId, out RuneDefinition rune) && rune != null)
            {
                if (rune.TryGetTag(out RuneColorTag colorTag))
                {
                    unityColor = colorTag.Color;
                }

                if (rune.TryGetTag(out RuneMaterialTag materialTag))
                {
                    configuredMaterial = materialTag.Material;
                }
            }

            MeshRenderer[] renderers = GetComponentsInChildren<MeshRenderer>(true);
            foreach (MeshRenderer renderer in renderers)
            {
                if (renderer == null)
                {
                    continue;
                }

                Material material = configuredMaterial != null ? new Material(configuredMaterial) : (unityColor.HasValue ? CreateRuntimeMaterial() : null);
                if (material != null && unityColor.HasValue)
                {
                    ApplyMaterialColor(material, unityColor.Value);
                }

                if (material != null)
                {
                    renderer.material = material;
                }
            }
        }

        private static Material CreateRuntimeMaterial()
        {
            Shader shader = Shader.Find("Universal Render Pipeline/Lit");
            if (shader == null)
            {
                shader = Shader.Find("Standard");
            }

            return shader != null ? new Material(shader) : null;
        }

        private static void ApplyMaterialColor(Material material, Color color)
        {
            if (material == null)
            {
                return;
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
        }
    }
}
