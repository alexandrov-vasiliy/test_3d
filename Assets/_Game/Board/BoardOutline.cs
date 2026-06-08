using System.Collections.Generic;
using UnityEngine;

public class BoardOutline : MonoBehaviour
{
    public enum OutlineRenderMode
    {
        LineRenderer,
        MeshUnderlay
    }

    [SerializeField] private HexGridGenerator gridGenerator;
    [SerializeField] private OutlineRenderMode renderMode = OutlineRenderMode.LineRenderer;
    [SerializeField] private LineRenderer linePrefab;
    [SerializeField] private Transform lineParent;
    [SerializeField] private float lineWidth = 0.08f;
    [SerializeField] private float verticalOffset = 0.04f;
    [SerializeField] private Color borderColor = new Color(0f, 1f, 0.95f, 1f);
    [SerializeField] private bool useGlow = true;
    [SerializeField] private float glowWidthMultiplier = 3f;
    [SerializeField] private Material meshMaterial;
    [SerializeField] private float meshScaleMultiplier = 1.08f;
    [SerializeField] private float meshVerticalOffset = -0.015f;
    [SerializeField] private float meshHeight = 0.12f;
    [SerializeField] private float meshBevelSize = 0.04f;
    [SerializeField] private bool meshSmoothNormals = true;

    private readonly List<LineRenderer> segments = new List<LineRenderer>();
    private readonly List<Material> ownedMaterials = new List<Material>();
    private GameObject meshObject;
    private Mesh generatedMesh;

    public void Rebuild(Dictionary<Vector2Int, HexCellView> cells)
    {
        Clear();

        if (cells == null || cells.Count == 0)
        {
            return;
        }

        if (gridGenerator == null)
        {
            gridGenerator = GetComponent<HexGridGenerator>();
        }

        if (gridGenerator == null)
        {
            Debug.LogWarning("BoardOutline requires HexGridGenerator to find outer board edges.", this);
            return;
        }

        EnsureLineParent();

        if (renderMode == OutlineRenderMode.MeshUnderlay)
        {
            CreateMeshUnderlay(cells);
            return;
        }

        foreach (KeyValuePair<Vector2Int, HexCellView> pair in cells)
        {
            HexCellView cellView = pair.Value;
            if (cellView == null)
            {
                continue;
            }

            foreach (Vector2Int neighbourCoordinate in gridGenerator.GetNeighbourCoordinates(pair.Key))
            {
                if (cells.ContainsKey(neighbourCoordinate))
                {
                    continue;
                }

                int sideIndex = FindSideIndex(cellView, neighbourCoordinate);
                Vector3 start = cellView.GetCornerWorld(sideIndex) + Vector3.up * verticalOffset;
                Vector3 end = cellView.GetCornerWorld(sideIndex + 1) + Vector3.up * verticalOffset;
                CreateBorderSide(start, end);
            }
        }
    }

    public void Clear()
    {
        for (int i = segments.Count - 1; i >= 0; i--)
        {
            LineRenderer segment = segments[i];
            if (segment == null)
            {
                continue;
            }

            if (Application.isPlaying)
            {
                Destroy(segment.gameObject);
            }
            else
            {
                DestroyImmediate(segment.gameObject);
            }
        }

        segments.Clear();

        for (int i = ownedMaterials.Count - 1; i >= 0; i--)
        {
            Material material = ownedMaterials[i];
            if (material == null)
            {
                continue;
            }

            if (Application.isPlaying)
            {
                Destroy(material);
            }
            else
            {
                DestroyImmediate(material);
            }
        }

        ownedMaterials.Clear();

        if (meshObject != null)
        {
            if (Application.isPlaying)
            {
                Destroy(meshObject);
            }
            else
            {
                DestroyImmediate(meshObject);
            }

            meshObject = null;
        }

        if (generatedMesh != null)
        {
            if (Application.isPlaying)
            {
                Destroy(generatedMesh);
            }
            else
            {
                DestroyImmediate(generatedMesh);
            }

            generatedMesh = null;
        }
    }

    private void CreateMeshUnderlay(Dictionary<Vector2Int, HexCellView> cells)
    {
        List<Vector3> vertices = new List<Vector3>(cells.Count * 44);
        List<int> triangles = new List<int>(cells.Count * 72);

        foreach (KeyValuePair<Vector2Int, HexCellView> pair in cells)
        {
            HexCellView cellView = pair.Value;
            if (cellView == null)
            {
                continue;
            }

            AddHexPrism(pair.Key, cellView, cells, vertices, triangles);
        }

        Mesh mesh = new Mesh
        {
            name = "BoardOutlineMesh"
        };
        if (vertices.Count > 65000)
        {
            mesh.indexFormat = UnityEngine.Rendering.IndexFormat.UInt32;
        }
        mesh.SetVertices(vertices);
        mesh.SetTriangles(triangles, 0);
        mesh.RecalculateNormals();
        if (meshSmoothNormals)
        {
            SmoothNormalsByPosition(mesh);
        }
        mesh.RecalculateBounds();
        generatedMesh = mesh;

        meshObject = new GameObject("BoardOutlineMesh");
        meshObject.transform.SetParent(lineParent, false);

        MeshFilter meshFilter = meshObject.AddComponent<MeshFilter>();
        meshFilter.sharedMesh = mesh;

        MeshRenderer meshRenderer = meshObject.AddComponent<MeshRenderer>();
        meshRenderer.sharedMaterial = meshMaterial != null ? meshMaterial : CreateLineMaterial(borderColor);
        meshRenderer.shadowCastingMode = UnityEngine.Rendering.ShadowCastingMode.Off;
        meshRenderer.receiveShadows = false;

        if (meshMaterial == null && meshRenderer.sharedMaterial != null)
        {
            ownedMaterials.Add(meshRenderer.sharedMaterial);
        }
    }

    private void AddHexPrism(Vector2Int coordinate, HexCellView cellView, Dictionary<Vector2Int, HexCellView> cells, List<Vector3> vertices, List<int> triangles)
    {
        float scale = Mathf.Max(1f, meshScaleMultiplier);
        float height = Mathf.Max(0.001f, meshHeight);
        float bevelSize = Mathf.Max(0f, meshBevelSize);
        float bevelDepth = Mathf.Min(bevelSize, height * 0.5f);
        Vector3 cellCentre = cellView.transform.position;
        Vector3 topCentre = cellCentre + Vector3.up * meshVerticalOffset;
        Vector3 bottomCentre = topCentre - Vector3.up * height;
        Vector3[] topInnerCorners = new Vector3[6];
        Vector3[] sideTopCorners = new Vector3[6];
        Vector3[] bottomCorners = new Vector3[6];
        bool[] outerSides = new bool[6];

        for (int i = 0; i < 6; i++)
        {
            Vector3 horizontalOffset = cellView.GetCornerWorld(i) - cellCentre;
            Vector3 outward = FlattenXZ(horizontalOffset).normalized;
            Vector3 outerOffset = horizontalOffset * scale;
            Vector3 bevelInset = outward * Mathf.Min(bevelSize, outerOffset.magnitude * 0.25f);
            topInnerCorners[i] = topCentre + outerOffset - bevelInset;
            sideTopCorners[i] = topCentre - Vector3.up * bevelDepth + outerOffset;
            bottomCorners[i] = bottomCentre + outerOffset;
        }

        foreach (Vector2Int neighbourCoordinate in gridGenerator.GetNeighbourCoordinates(coordinate))
        {
            if (!cells.ContainsKey(neighbourCoordinate))
            {
                outerSides[FindSideIndex(cellView, neighbourCoordinate)] = true;
            }
        }

        AddHexCap(topCentre, topInnerCorners, true, vertices, triangles);
        AddHexCap(bottomCentre, bottomCorners, false, vertices, triangles);

        for (int i = 0; i < 6; i++)
        {
            if (!outerSides[i])
            {
                continue;
            }

            int next = (i + 1) % 6;
            if (bevelSize > 0f)
            {
                AddQuad(topInnerCorners[i], topInnerCorners[next], sideTopCorners[next], sideTopCorners[i], vertices, triangles);
            }
            AddQuad(sideTopCorners[i], sideTopCorners[next], bottomCorners[next], bottomCorners[i], vertices, triangles);
        }
    }

    private void AddHexCap(Vector3 centre, Vector3[] corners, bool topFace, List<Vector3> vertices, List<int> triangles)
    {
        int baseIndex = vertices.Count;
        vertices.Add(lineParent.InverseTransformPoint(centre));

        for (int i = 0; i < 6; i++)
        {
            vertices.Add(lineParent.InverseTransformPoint(corners[i]));
        }

        for (int i = 0; i < 6; i++)
        {
            int current = baseIndex + 1 + i;
            int next = baseIndex + 1 + ((i + 1) % 6);

            triangles.Add(baseIndex);
            triangles.Add(topFace ? next : current);
            triangles.Add(topFace ? current : next);
        }
    }

    private void AddQuad(Vector3 a, Vector3 b, Vector3 c, Vector3 d, List<Vector3> vertices, List<int> triangles)
    {
        int baseIndex = vertices.Count;
        vertices.Add(lineParent.InverseTransformPoint(a));
        vertices.Add(lineParent.InverseTransformPoint(b));
        vertices.Add(lineParent.InverseTransformPoint(c));
        vertices.Add(lineParent.InverseTransformPoint(d));

        triangles.Add(baseIndex);
        triangles.Add(baseIndex + 1);
        triangles.Add(baseIndex + 2);
        triangles.Add(baseIndex);
        triangles.Add(baseIndex + 2);
        triangles.Add(baseIndex + 3);
    }

    private void SmoothNormalsByPosition(Mesh mesh)
    {
        Vector3[] vertices = mesh.vertices;
        Vector3[] normals = mesh.normals;
        Dictionary<Vector3Int, Vector3> normalSums = new Dictionary<Vector3Int, Vector3>();
        Dictionary<Vector3Int, int> normalCounts = new Dictionary<Vector3Int, int>();

        for (int i = 0; i < vertices.Length; i++)
        {
            Vector3Int key = Quantize(vertices[i]);
            if (normalSums.ContainsKey(key))
            {
                normalSums[key] += normals[i];
                normalCounts[key]++;
            }
            else
            {
                normalSums.Add(key, normals[i]);
                normalCounts.Add(key, 1);
            }
        }

        for (int i = 0; i < vertices.Length; i++)
        {
            Vector3Int key = Quantize(vertices[i]);
            normals[i] = (normalSums[key] / normalCounts[key]).normalized;
        }

        mesh.normals = normals;
    }

    private Vector3Int Quantize(Vector3 value)
    {
        const float precision = 10000f;
        return new Vector3Int(
            Mathf.RoundToInt(value.x * precision),
            Mathf.RoundToInt(value.y * precision),
            Mathf.RoundToInt(value.z * precision));
    }

    private int FindSideIndex(HexCellView cellView, Vector2Int neighbourCoordinate)
    {
        Vector3 centre = cellView.transform.position;
        Vector3 neighbourWorld = gridGenerator.transform.TransformPoint(gridGenerator.CoordinateToWorld(neighbourCoordinate));
        Vector3 neighbourDirection = FlattenXZ(neighbourWorld - centre).normalized;

        int bestIndex = 0;
        float bestDot = float.NegativeInfinity;
        for (int i = 0; i < 6; i++)
        {
            Vector3 sideMidpoint = (cellView.GetCornerWorld(i) + cellView.GetCornerWorld(i + 1)) * 0.5f;
            Vector3 sideDirection = FlattenXZ(sideMidpoint - centre).normalized;
            float dot = Vector3.Dot(sideDirection, neighbourDirection);
            if (dot > bestDot)
            {
                bestDot = dot;
                bestIndex = i;
            }
        }

        return bestIndex;
    }

    private void CreateBorderSide(Vector3 start, Vector3 end)
    {
        if (useGlow)
        {
            Color glowColor = borderColor;
            glowColor.a *= 0.25f;
            CreateLine(start, end, Mathf.Max(0.001f, lineWidth * glowWidthMultiplier), glowColor, "OutlineGlow");
        }

        CreateLine(start + Vector3.up * 0.002f, end + Vector3.up * 0.002f, Mathf.Max(0.001f, lineWidth), borderColor, "OutlineCore");
    }

    private void CreateLine(Vector3 start, Vector3 end, float width, Color color, string objectName)
    {
        LineRenderer line = linePrefab != null
            ? Instantiate(linePrefab, lineParent)
            : new GameObject(objectName).AddComponent<LineRenderer>();

        line.name = objectName;
        line.transform.SetParent(lineParent, false);
        line.useWorldSpace = true;
        line.positionCount = 2;
        line.SetPosition(0, start);
        line.SetPosition(1, end);
        line.startWidth = width;
        line.endWidth = width;
        line.startColor = color;
        line.endColor = color;
        line.numCapVertices = Mathf.Max(line.numCapVertices, 6);
        line.numCornerVertices = Mathf.Max(line.numCornerVertices, 2);
        line.shadowCastingMode = UnityEngine.Rendering.ShadowCastingMode.Off;
        line.receiveShadows = false;
        Material material = CreateLineMaterial(color);
        if (material != null)
        {
            line.material = material;
            ownedMaterials.Add(material);
        }

        segments.Add(line);
    }

    private Material CreateLineMaterial(Color color)
    {
        Shader shader = FindLineShader();
        if (shader == null && (linePrefab == null || linePrefab.sharedMaterial == null))
        {
            return null;
        }

        Material material = linePrefab != null && linePrefab.sharedMaterial != null
            ? new Material(linePrefab.sharedMaterial)
            : new Material(shader);

        ApplyMaterialColor(material, color);
        return material;
    }

    private void ApplyMaterialColor(Material material, Color color)
    {
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

    private void EnsureLineParent()
    {
        if (lineParent != null)
        {
            return;
        }

        Transform existing = transform.Find("BoardOutline");
        if (existing != null)
        {
            lineParent = existing;
            return;
        }

        GameObject parentObject = new GameObject("BoardOutline");
        parentObject.transform.SetParent(transform, false);
        lineParent = parentObject.transform;
    }

    private static Vector3 FlattenXZ(Vector3 value)
    {
        value.y = 0f;
        return value;
    }
}
