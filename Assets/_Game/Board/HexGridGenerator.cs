using System.Collections.Generic;
using UnityEngine;

public class HexGridGenerator : MonoBehaviour
{
    public enum BoardShape
    {
        Square,
        Hexagon,
        Custom
    }

    public enum HexOrientation
    {
        FlatTop,
        PointyTop
    }

    [SerializeField] private int radius = 2;
    [SerializeField] private float cellSize = 1.05f;
    [SerializeField] private BoardShape boardShape = BoardShape.Square;
    [SerializeField] private BoardShape customBaseShape = BoardShape.Square;
    [SerializeField] private HexOrientation orientation = HexOrientation.FlatTop;
    [SerializeField] private List<Vector2Int> customCoordinates = new List<Vector2Int>();

    public int Radius { get => radius; set => radius = Mathf.Max(0, value); }
    public float CellSize { get => cellSize; set => cellSize = Mathf.Max(0.1f, value); }
    public BoardShape Shape { get => boardShape; set => boardShape = value; }
    public BoardShape CustomBaseShape { get => customBaseShape; set => customBaseShape = value == BoardShape.Hexagon ? BoardShape.Hexagon : BoardShape.Square; }
    public HexOrientation Orientation { get => orientation; set => orientation = value; }
    public IReadOnlyList<Vector2Int> CustomCoordinates => customCoordinates;

    private void OnValidate()
    {
        CustomBaseShape = customBaseShape;
    }

    public List<Vector2Int> GenerateCoordinates()
    {
        if (boardShape == BoardShape.Hexagon)
        {
            return GenerateHexagonCoordinates();
        }

        if (boardShape == BoardShape.Custom)
        {
            return GenerateCustomCoordinates();
        }

        return GenerateSquareCoordinates();
    }

    public Vector3 CoordinateToWorld(Vector2Int coordinate)
    {
        BoardShape layoutShape = GetLayoutShape();
        if (layoutShape == BoardShape.Square)
        {
            return orientation == HexOrientation.FlatTop
                ? FlatTopOffsetToWorld(coordinate)
                : PointyTopOffsetToWorld(coordinate);
        }

        return orientation == HexOrientation.FlatTop
            ? FlatTopAxialToWorld(coordinate)
            : PointyTopAxialToWorld(coordinate);
    }

    public IEnumerable<Vector2Int> GetNeighbourCoordinates(Vector2Int coordinate)
    {
        BoardShape layoutShape = GetLayoutShape();
        if (layoutShape == BoardShape.Square)
        {
            return orientation == HexOrientation.FlatTop
                ? GetFlatTopOffsetNeighbours(coordinate)
                : GetPointyTopOffsetNeighbours(coordinate);
        }

        return GetAxialNeighbours(coordinate);
    }

    public bool ContainsCustomCoordinate(Vector2Int coordinate)
    {
        return customCoordinates.Contains(coordinate);
    }

    public void SetCustomCoordinates(IEnumerable<Vector2Int> coordinates)
    {
        customCoordinates.Clear();
        HashSet<Vector2Int> unique = new HashSet<Vector2Int>();
        foreach (Vector2Int coordinate in coordinates)
        {
            if (unique.Add(coordinate))
            {
                customCoordinates.Add(coordinate);
            }
        }
        customCoordinates.Sort(CompareCoordinates);
    }

    public void AddCustomCoordinate(Vector2Int coordinate)
    {
        if (!customCoordinates.Contains(coordinate))
        {
            customCoordinates.Add(coordinate);
            customCoordinates.Sort(CompareCoordinates);
        }
    }

    public void RemoveCustomCoordinate(Vector2Int coordinate)
    {
        customCoordinates.Remove(coordinate);
    }

    private BoardShape GetLayoutShape()
    {
        if (boardShape == BoardShape.Custom)
        {
            return customBaseShape == BoardShape.Hexagon ? BoardShape.Hexagon : BoardShape.Square;
        }

        return boardShape == BoardShape.Hexagon ? BoardShape.Hexagon : BoardShape.Square;
    }

    private List<Vector2Int> GenerateSquareCoordinates()
    {
        List<Vector2Int> coordinates = new List<Vector2Int>();
        for (int x = -radius; x <= radius; x++)
        {
            for (int y = -radius; y <= radius; y++)
            {
                coordinates.Add(new Vector2Int(x, y));
            }
        }
        return coordinates;
    }

    private List<Vector2Int> GenerateHexagonCoordinates()
    {
        List<Vector2Int> coordinates = new List<Vector2Int>();
        for (int q = -radius; q <= radius; q++)
        {
            int r1 = Mathf.Max(-radius, -q - radius);
            int r2 = Mathf.Min(radius, -q + radius);
            for (int r = r1; r <= r2; r++)
            {
                coordinates.Add(new Vector2Int(q, r));
            }
        }
        return coordinates;
    }

    private List<Vector2Int> GenerateCustomCoordinates()
    {
        List<Vector2Int> coordinates = new List<Vector2Int>();
        HashSet<Vector2Int> unique = new HashSet<Vector2Int>();
        for (int i = 0; i < customCoordinates.Count; i++)
        {
            if (unique.Add(customCoordinates[i]))
            {
                coordinates.Add(customCoordinates[i]);
            }
        }
        coordinates.Sort(CompareCoordinates);
        return coordinates;
    }

    private Vector3 FlatTopOffsetToWorld(Vector2Int coordinate)
    {
        int parity = PositiveModulo(coordinate.x, 2);
        float x = cellSize * 1.5f * coordinate.x;
        float z = cellSize * Mathf.Sqrt(3f) * (coordinate.y + parity * 0.5f);
        return new Vector3(x, 0f, z);
    }

    private Vector3 PointyTopOffsetToWorld(Vector2Int coordinate)
    {
        int parity = PositiveModulo(coordinate.y, 2);
        float x = cellSize * Mathf.Sqrt(3f) * (coordinate.x + parity * 0.5f);
        float z = cellSize * 1.5f * coordinate.y;
        return new Vector3(x, 0f, z);
    }

    private Vector3 FlatTopAxialToWorld(Vector2Int coordinate)
    {
        float x = cellSize * 1.5f * coordinate.x;
        float z = cellSize * Mathf.Sqrt(3f) * (coordinate.y + coordinate.x * 0.5f);
        return new Vector3(x, 0f, z);
    }

    private Vector3 PointyTopAxialToWorld(Vector2Int coordinate)
    {
        float x = cellSize * Mathf.Sqrt(3f) * (coordinate.x + coordinate.y * 0.5f);
        float z = cellSize * 1.5f * coordinate.y;
        return new Vector3(x, 0f, z);
    }

    private static IEnumerable<Vector2Int> GetFlatTopOffsetNeighbours(Vector2Int coordinate)
    {
        Vector2Int[] evenColumn =
        {
            new Vector2Int(1, 0),
            new Vector2Int(1, -1),
            new Vector2Int(0, -1),
            new Vector2Int(-1, -1),
            new Vector2Int(-1, 0),
            new Vector2Int(0, 1)
        };
        Vector2Int[] oddColumn =
        {
            new Vector2Int(1, 1),
            new Vector2Int(1, 0),
            new Vector2Int(0, -1),
            new Vector2Int(-1, 0),
            new Vector2Int(-1, 1),
            new Vector2Int(0, 1)
        };

        return OffsetNeighbours(coordinate, PositiveModulo(coordinate.x, 2) == 0 ? evenColumn : oddColumn);
    }

    private static IEnumerable<Vector2Int> GetPointyTopOffsetNeighbours(Vector2Int coordinate)
    {
        Vector2Int[] evenRow =
        {
            new Vector2Int(1, 0),
            new Vector2Int(0, -1),
            new Vector2Int(-1, -1),
            new Vector2Int(-1, 0),
            new Vector2Int(-1, 1),
            new Vector2Int(0, 1)
        };
        Vector2Int[] oddRow =
        {
            new Vector2Int(1, 0),
            new Vector2Int(1, -1),
            new Vector2Int(0, -1),
            new Vector2Int(-1, 0),
            new Vector2Int(0, 1),
            new Vector2Int(1, 1)
        };

        return OffsetNeighbours(coordinate, PositiveModulo(coordinate.y, 2) == 0 ? evenRow : oddRow);
    }

    private static IEnumerable<Vector2Int> GetAxialNeighbours(Vector2Int coordinate)
    {
        Vector2Int[] directions =
        {
            new Vector2Int(1, 0),
            new Vector2Int(1, -1),
            new Vector2Int(0, -1),
            new Vector2Int(-1, 0),
            new Vector2Int(-1, 1),
            new Vector2Int(0, 1)
        };
        return OffsetNeighbours(coordinate, directions);
    }

    private static IEnumerable<Vector2Int> OffsetNeighbours(Vector2Int coordinate, Vector2Int[] offsets)
    {
        for (int i = 0; i < offsets.Length; i++)
        {
            yield return coordinate + offsets[i];
        }
    }

    private static int PositiveModulo(int value, int modulo)
    {
        return (value % modulo + modulo) % modulo;
    }

    private static int CompareCoordinates(Vector2Int a, Vector2Int b)
    {
        int yCompare = b.y.CompareTo(a.y);
        return yCompare != 0 ? yCompare : a.x.CompareTo(b.x);
    }
}
