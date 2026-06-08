using UnityEngine;

public class HexCellView : MonoBehaviour
{
    [SerializeField] private MeshRenderer[] meshRenderers;
    [SerializeField] private Color validColor = new Color(0.28f, 0.9f, 0.48f, 1f);
    [SerializeField] private Color invalidColor = new Color(1f, 0.25f, 0.25f, 1f);
    [SerializeField] private float cornerRadius = 1.05f;
    [SerializeField] private HexGridGenerator.HexOrientation orientation = HexGridGenerator.HexOrientation.FlatTop;

    private Color[] defaultColors;

    public HexCell Cell { get; private set; }
    public HexStackView StackView { get; private set; }

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
    }

    public Vector3 GetCornerWorld(int index)
    {
        int wrappedIndex = ((index % 6) + 6) % 6;
        float angleOffset = orientation == HexGridGenerator.HexOrientation.FlatTop ? 0f : 30f;
        float angleRad = Mathf.Deg2Rad * (60f * wrappedIndex + angleOffset);
        Vector3 localCorner = new Vector3(Mathf.Cos(angleRad) * cornerRadius, 0f, Mathf.Sin(angleRad) * cornerRadius);
        return transform.TransformPoint(localCorner);
    }

    public void SetStackView(HexStackView stackView)
    {
        StackView = stackView;
        if (StackView != null)
        {
            StackView.transform.SetParent(transform, true);
            StackView.transform.position = transform.position + Vector3.up * 0.08f;
        }
    }

    public void ClearStackView()
    {
        StackView = null;
    }

    public void SetHighlight(bool active, bool valid)
    {
        if (meshRenderers == null || meshRenderers.Length == 0)
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

            renderer.material.color = active ? (valid ? validColor : invalidColor) : defaultColors[i];
        }
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
}
