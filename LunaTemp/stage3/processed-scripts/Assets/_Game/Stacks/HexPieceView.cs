using _Game.Configs;
using UnityEngine;

namespace _Game.Stacks
{
    public class HexPieceView : MonoBehaviour
    {
        public HexColor Color { get; private set; }

        public void Initialize(HexColor color, HexColorConfig colorConfig)
        {
            Color = color;
            Color unityColor = colorConfig != null ? colorConfig.GetColor(color) : HexColorConfig.GetFallbackColor(color);
            Material configuredMaterial = colorConfig != null ? colorConfig.GetMaterial(color) : null;

            MeshRenderer[] renderers = GetComponentsInChildren<MeshRenderer>(true);
            foreach (MeshRenderer renderer in renderers)
            {
                if (renderer == null)
                {
                    continue;
                }

                Material material = configuredMaterial != null ? new Material(configuredMaterial) : CreateRuntimeMaterial();
                ApplyMaterialColor(material, unityColor);
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

        private static void ApplyMaterialColor(Material material, [Bridge.Ref] Color color)
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
