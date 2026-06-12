using System.Collections.Generic;
using _Game.Board;
using _Game.Stacks;
using UnityEngine;

namespace _Game.CameraFraming
{
    /// <summary>
    /// Fits an orthographic gameplay camera to the board and visible tray geometry; it owns view framing only and does not move or rotate the camera.
    /// </summary>
    public sealed class BoardCameraFitter
    {
        private readonly Camera camera;
        private readonly BoardController board;
        private readonly StackTrayController tray;
        private readonly float padding;
        private readonly float minimumSize;
        private readonly List<Vector3> worldCorners = new List<Vector3>();
        private readonly List<Vector3> trayWorldCorners = new List<Vector3>();

        public BoardCameraFitter(Camera camera, BoardController board, StackTrayController tray, float padding, float minimumSize)
        {
            this.camera = camera;
            this.board = board;
            this.tray = tray;
            this.padding = Mathf.Max(0f, padding);
            this.minimumSize = Mathf.Max(0.01f, minimumSize);
        }

        public void Fit()
        {
            if (camera == null || board == null || !camera.orthographic || camera.aspect <= Mathf.Epsilon)
            {
                return;
            }

            if (!board.GetBoardWorldCorners(worldCorners))
            {
                return;
            }

            if (tray != null && tray.GetWorldBoundsCorners(trayWorldCorners))
            {
                worldCorners.AddRange(trayWorldCorners);
            }

            float maximumHorizontalDistance = 0f;
            float maximumVerticalDistance = 0f;
            Transform cameraTransform = camera.transform;

            for (int i = 0; i < worldCorners.Count; i++)
            {
                Vector3 cameraLocalPoint = cameraTransform.InverseTransformPoint(worldCorners[i]);
                maximumHorizontalDistance = Mathf.Max(maximumHorizontalDistance, Mathf.Abs(cameraLocalPoint.x));
                maximumVerticalDistance = Mathf.Max(maximumVerticalDistance, Mathf.Abs(cameraLocalPoint.y));
            }

            float sizeForHeight = maximumVerticalDistance + padding;
            float sizeForWidth = (maximumHorizontalDistance + padding) / camera.aspect;
            camera.orthographicSize = Mathf.Max(minimumSize, sizeForHeight, sizeForWidth);
        }
    }
}
