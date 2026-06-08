using UnityEngine;

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

            renderer.material = configuredMaterial != null ? new Material(configuredMaterial) : CreateRuntimeMaterial(unityColor);
        }
    }

    private static Material CreateRuntimeMaterial(Color color)
    {
        Shader shader = Shader.Find("Universal Render Pipeline/Lit");
        if (shader == null)
        {
            shader = Shader.Find("Standard");
        }

        Material material = new Material(shader);
        material.color = color;
        return material;
    }
}
