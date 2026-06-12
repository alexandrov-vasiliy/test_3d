using UnityEngine;

namespace _Game.UI
{
    /// <summary>
    /// Keeps a world-space UI transform facing the main gameplay camera; it owns view orientation only and does not create or update UI content.
    /// </summary>
    [DisallowMultipleComponent]
    public sealed class WorldSpaceUiBillboard : MonoBehaviour
    {
        [SerializeField] private Camera targetCamera;

        private Transform cachedTransform;

        private void Awake()
        {
            cachedTransform = transform;
        }

        private void LateUpdate()
        {
            Camera camera = ResolveCamera();
            if (camera == null)
            {
                return;
            }

            Vector3 toCamera = camera.transform.position - cachedTransform.position;
            if (toCamera.sqrMagnitude <= Mathf.Epsilon)
            {
                return;
            }

            cachedTransform.rotation = Quaternion.LookRotation(toCamera, camera.transform.up);
        }

        private Camera ResolveCamera()
        {
            if (targetCamera != null)
            {
                return targetCamera;
            }

            targetCamera = Camera.main;
            return targetCamera;
        }
    }
}
