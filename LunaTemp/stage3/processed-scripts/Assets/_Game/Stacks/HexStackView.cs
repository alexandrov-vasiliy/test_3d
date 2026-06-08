using System.Collections.Generic;
using _Game.DI;
using UnityEngine;

namespace _Game.Stacks
{
    public class HexStackView : MonoBehaviour
    {
        [SerializeField] private float heightOffset = 0.16f;

        private readonly List<HexPieceView> pieceViews = new List<HexPieceView>();
        private GameAssets assets;

        public HexStack Stack { get; private set; }
        public float HeightOffset => heightOffset;
        public int VisualCount => pieceViews.Count;

        public void Initialize(HexStack stack, GameAssets assets)
        {
            Stack = stack;
            this.assets = assets;
            Rebuild();
        }

        public Vector3 GetTopPosition()
        {
            return transform.position + new Vector3(0f, Mathf.Max(0, pieceViews.Count) * heightOffset, 0f);
        }

        public HexPieceView AddVisualHexOnTop(HexColor color)
        {
            HexPieceView view = CreatePieceView(color);
            AttachVisualHexOnTop(view);
            return view;
        }

        public void AttachVisualHexOnTop(HexPieceView view)
        {
            if (view == null)
            {
                return;
            }

            view.transform.SetParent(transform, true);
            view.transform.localPosition = new Vector3(0f, pieceViews.Count * heightOffset, 0f);
            view.transform.localScale = Vector3.one;
            pieceViews.Add(view);
        }

        public HexPieceView DetachTopVisualHex()
        {
            if (pieceViews.Count == 0)
            {
                return null;
            }

            int index = pieceViews.Count - 1;
            HexPieceView view = pieceViews[index];
            pieceViews.RemoveAt(index);
            view.transform.SetParent(null, true);
            return view;
        }

        public List<HexPieceView> DetachTopVisualHexes(int count)
        {
            List<HexPieceView> result = new List<HexPieceView>();
            for (int i = 0; i < count; i++)
            {
                HexPieceView view = DetachTopVisualHex();
                if (view == null)
                {
                    break;
                }
                result.Add(view);
            }
            return result;
        }

        public void RemoveTopVisualHexes(int count)
        {
            for (int i = 0; i < count; i++)
            {
                HexPieceView view = DetachTopVisualHex();
                if (view != null)
                {
                    Destroy(view.gameObject);
                }
            }
        }

        public void Rebuild()
        {
            for (int i = pieceViews.Count - 1; i >= 0; i--)
            {
                if (pieceViews[i] != null)
                {
                    Destroy(pieceViews[i].gameObject);
                }
            }
            pieceViews.Clear();

            if (Stack == null)
            {
                return;
            }

            for (int i = 0; i < Stack.Pieces.Count; i++)
            {
                AddVisualHexOnTop(Stack.Pieces[i].color);
            }
        }

        public void SnapVisualsToStack()
        {
            for (int i = 0; i < pieceViews.Count; i++)
            {
                pieceViews[i].transform.SetParent(transform, false);
                pieceViews[i].transform.localPosition = new Vector3(0f, i * heightOffset, 0f);
                pieceViews[i].transform.localScale = Vector3.one;
            }
        }

        private HexPieceView CreatePieceView(HexColor color)
        {
            Debug.Log("Creating piece view " + color.ToString());
            GameObject instance;
            if (assets != null && assets.HexPiecePrefab != null)
            {
                instance = Instantiate(assets.HexPiecePrefab);
            }
            else
            {
                instance = new GameObject("HexPiece_" + color);
                GameObject mesh = GameObject.CreatePrimitive(PrimitiveType.Cylinder);
                mesh.name = "RuntimeHexMesh";
                mesh.transform.SetParent(instance.transform, false);
                mesh.transform.localScale = new Vector3(0.55f, 0.08f, 0.55f);
                Destroy(mesh.GetComponent<Collider>());
            }

            HexPieceView view = instance.GetComponent<HexPieceView>();
            if (view == null)
            {
                view = instance.AddComponent<HexPieceView>();
            }
            view.Initialize(color, assets != null ? assets.HexColorConfig : null);
            return view;
        }
    }
}
