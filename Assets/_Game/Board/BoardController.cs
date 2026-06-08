using System.Collections.Generic;
using UnityEngine;

public class BoardController : MonoBehaviour
{
    [SerializeField] private float pointerCellRadius = 0.85f;

    private readonly Dictionary<Vector2Int, HexCell> cells = new Dictionary<Vector2Int, HexCell>();
    private readonly Dictionary<HexCell, HexCellView> views = new Dictionary<HexCell, HexCellView>();
    private readonly Dictionary<Vector2Int, HexCellView> viewsByCoordinate = new Dictionary<Vector2Int, HexCellView>();
    private HexGridGenerator gridGenerator;
    private BoardOutline boardOutline;
    private GameAssets assets;
    private Camera inputCamera;

    public IEnumerable<HexCell> Cells => cells.Values;

    [Inject]
    private void Construct(GameAssets assets, Camera inputCamera)
    {
        this.assets = assets;
        this.inputCamera = inputCamera;
    }

    public void Initialize(int radius)
    {
        if (gridGenerator == null)
        {
            gridGenerator = GetComponent<HexGridGenerator>();
        }
        if (gridGenerator == null)
        {
            gridGenerator = gameObject.AddComponent<HexGridGenerator>();
        }
        EnsureBoardOutline();
        gridGenerator.Radius = radius;

        BuildGrid();
    }

    public void BuildGrid()
    {
        ClearChildren();
        cells.Clear();
        views.Clear();
        viewsByCoordinate.Clear();
        EnsureBoardOutline();

        foreach (Vector2Int coordinate in gridGenerator.GenerateCoordinates())
        {
            HexCell cell = new HexCell(coordinate);
            cells.Add(coordinate, cell);

            GameObject cellObject = assets != null && assets.HexCellPrefab != null ? Instantiate(assets.HexCellPrefab) : new GameObject("MissingCellPrefab");
            cellObject.name = "Cell_" + coordinate.x + "_" + coordinate.y;
            cellObject.transform.SetParent(transform, false);
            cellObject.transform.localPosition = gridGenerator.CoordinateToWorld(coordinate);
            HexCellView view = cellObject.GetComponent<HexCellView>();
            if (view == null)
            {
                view = cellObject.AddComponent<HexCellView>();
            }
            view.ConfigureGeometry(gridGenerator.CellSize, gridGenerator.Orientation);
            view.Initialize(cell);
            views.Add(cell, view);
            viewsByCoordinate.Add(coordinate, view);
        }

        boardOutline.Rebuild(viewsByCoordinate);
    }

    public HexCell GetCell(Vector2Int coordinate)
    {
        cells.TryGetValue(coordinate, out HexCell cell);
        return cell;
    }

    public List<HexCell> GetNeighbours(HexCell cell)
    {
        List<HexCell> neighbours = new List<HexCell>();
        if (cell == null)
        {
            return neighbours;
        }

        foreach (Vector2Int coordinate in gridGenerator.GetNeighbourCoordinates(cell.coordinate))
        {
            HexCell neighbour = GetCell(coordinate);
            if (neighbour != null)
            {
                neighbours.Add(neighbour);
            }
        }

        return neighbours;
    }

    public bool IsCellEmpty(HexCell cell)
    {
        return cell != null && cell.IsEmpty;
    }

    public void PlaceStack(HexCell cell, HexStack stack)
    {
        if (cell == null)
        {
            return;
        }

        cell.stack = stack;
    }

    public void PlaceStackView(HexCell cell, HexStackView stackView)
    {
        if (cell == null || stackView == null || !views.TryGetValue(cell, out HexCellView view))
        {
            return;
        }

        view.SetStackView(stackView);
        stackView.transform.position = view.transform.position + Vector3.up * 0.08f;
    }

    public void ClearCell(HexCell cell)
    {
        if (cell == null)
        {
            return;
        }

        cell.stack = null;
        if (views.TryGetValue(cell, out HexCellView view))
        {
            view.ClearStackView();
        }
    }

    public HexCellView GetCellView(HexCell cell)
    {
        if (cell == null)
        {
            return null;
        }

        views.TryGetValue(cell, out HexCellView view);
        return view;
    }

    public HexStackView GetStackView(HexCell cell)
    {
        HexCellView view = GetCellView(cell);
        return view != null ? view.StackView : null;
    }

    public HexCell GetCellUnderPointer(Vector2 screenPosition)
    {
        Camera cam = inputCamera != null ? inputCamera : Camera.main;
        if (cam == null)
        {
            return null;
        }

        if (!TryGetWorldPointOnBoardPlane(cam, screenPosition, out Vector3 world))
        {
            return null;
        }

        HexCell bestCell = null;
        float bestDistance = float.MaxValue;
        foreach (KeyValuePair<HexCell, HexCellView> pair in views)
        {
            float distance = DistanceXZ(world, pair.Value.transform.position);
            if (distance < bestDistance)
            {
                bestDistance = distance;
                bestCell = pair.Key;
            }
        }

        return bestDistance <= pointerCellRadius ? bestCell : null;
    }

    public void HighlightCell(HexCell cell, bool active, bool valid)
    {
        foreach (HexCellView view in views.Values)
        {
            view.SetHighlight(false, false);
        }

        if (cell != null && views.TryGetValue(cell, out HexCellView cellView))
        {
            cellView.SetHighlight(active, valid);
        }
    }

    public void ClearHighlights()
    {
        foreach (HexCellView view in views.Values)
        {
            view.SetHighlight(false, false);
        }
    }

    public HexStackView CreateStackView(HexStack stack, Transform parent, Vector3 position)
    {
        GameObject stackObject = new GameObject("HexStackView");
        stackObject.transform.SetParent(parent, true);
        stackObject.transform.position = position;
        HexStackView view = stackObject.AddComponent<HexStackView>();
        view.Initialize(stack, assets);
        return view;
    }

    private void ClearChildren()
    {
        for (int i = transform.childCount - 1; i >= 0; i--)
        {
            GameObject child = transform.GetChild(i).gameObject;
            if (Application.isPlaying)
            {
                Destroy(child);
            }
            else
            {
                DestroyImmediate(child);
            }
        }
    }

    private void EnsureBoardOutline()
    {
        if (boardOutline == null)
        {
            boardOutline = GetComponent<BoardOutline>();
        }
        if (boardOutline == null)
        {
            boardOutline = gameObject.AddComponent<BoardOutline>();
        }
    }

    private bool TryGetWorldPointOnBoardPlane(Camera cam, Vector2 screenPosition, out Vector3 world)
    {
        world = default;
        Ray ray = cam.ScreenPointToRay(screenPosition);
        Plane plane = new Plane(Vector3.up, transform.position);
        if (!plane.Raycast(ray, out float distance))
        {
            return false;
        }

        world = ray.GetPoint(distance);
        return true;
    }

    private static float DistanceXZ(Vector3 a, Vector3 b)
    {
        return Vector2.Distance(new Vector2(a.x, a.z), new Vector2(b.x, b.z));
    }
}
