using System;
using System.Collections;
using System.Collections.Generic;
using _Game.Board;
using _Game.Configs;
using _Game.Player;
using UnityEngine;

namespace _Game.Enemies
{
    /// <summary>
    /// Spawns level-authored enemies from catalog composition data, runs their intent phase, and reports defeat events without owning victory logic.
    /// </summary>
    public sealed class EnemySpawner : MonoBehaviour
    {
        [SerializeField] private EnemyCatalog catalog;
        [SerializeField] private Transform enemiesRoot;
        [SerializeField] private string defaultEnemyId = "basic";
        [SerializeField] private Vector3 placeholderScale = new Vector3(0.72f, 0.72f, 0.72f);
        [SerializeField] private float intentExecutionDelay = 0.35f;

        private readonly List<EnemyController> spawnedEnemies = new List<EnemyController>();
        private readonly EnemyRegistry registry = new EnemyRegistry();

        public event Action<EnemyController> EnemyDefeated;

        public EnemyRegistry Registry => registry;
        public int TotalSpawnedEnemies { get; private set; }
        public int AliveCount => registry.ActiveCount;

        public void Initialize(EnemyCatalog catalog)
        {
            if (catalog != null)
            {
                this.catalog = catalog;
            }

            EnsureEnemiesRoot();
        }

        public void Spawn(LevelConfig levelConfig, BoardController board)
        {
            ClearLevel();
            if (levelConfig == null || levelConfig.enemies == null || board == null)
            {
                return;
            }

            EnsureEnemiesRoot();
            for (int i = 0; i < levelConfig.enemies.Count; i++)
            {
                SpawnEnemy(levelConfig.enemies[i], board);
            }
        }

        public void ClearLevel()
        {
            for (int i = spawnedEnemies.Count - 1; i >= 0; i--)
            {
                EnemyController enemy = spawnedEnemies[i];
                if (enemy == null)
                {
                    continue;
                }

                enemy.Defeated -= OnEnemyDefeated;
                DestroyEnemyObject(enemy.gameObject);
            }

            spawnedEnemies.Clear();
            registry.Clear();
            TotalSpawnedEnemies = 0;
        }

        public IEnumerator ExecuteActiveIntents(PlayerHealth playerHealth)
        {
            if (playerHealth == null)
            {
                yield break;
            }

            for (int i = 0; i < spawnedEnemies.Count; i++)
            {
                EnemyController enemy = spawnedEnemies[i];
                if (enemy == null || !enemy.IsAlive)
                {
                    continue;
                }

                if (enemy.ExecuteActiveIntent(playerHealth))
                {
                    yield return new WaitForSeconds(Mathf.Max(0f, intentExecutionDelay));
                }

                if (!playerHealth.IsAlive)
                {
                    yield break;
                }
            }
        }

        private void OnDestroy()
        {
            ClearLevel();
        }

        private void SpawnEnemy(LevelConfig.EnemyDefinition definition, BoardController board)
        {
            if (definition == null)
            {
                return;
            }

            HexCell cell = board.GetCell(definition.coordinate);
            if (cell == null)
            {
                Debug.LogWarning("Enemy is outside board shape: " + definition.coordinate, this);
                return;
            }

            if (!cell.IsEmpty)
            {
                Debug.LogWarning("Enemy cannot spawn on a cell with a starting stack: " + definition.coordinate, this);
                return;
            }

            if (registry.IsOccupied(definition.coordinate))
            {
                Debug.LogWarning("Enemy cannot spawn because the cell is already occupied: " + definition.coordinate, this);
                return;
            }

            string enemyId = string.IsNullOrWhiteSpace(definition.enemyId) ? defaultEnemyId : definition.enemyId;
            if (catalog == null || !catalog.TryGetArchetype(enemyId, out EnemyArchetypeDefinition archetype))
            {
                Debug.LogWarning("Enemy archetype was not found: " + enemyId, this);
                return;
            }

            HexCellView cellView = board.GetCellView(cell);
            if (cellView == null)
            {
                Debug.LogWarning("Enemy cannot spawn because the board cell has no view: " + definition.coordinate, this);
                return;
            }

            GameObject enemyObject = CreateEnemyObject(archetype, enemyId);
            enemyObject.transform.SetParent(EnsureEnemiesRoot(), true);
            enemyObject.transform.position = cellView.transform.position + archetype.PositionOffset;

            EnemyController controller = enemyObject.GetComponent<EnemyController>();
            if (controller == null)
            {
                controller = enemyObject.AddComponent<EnemyController>();
            }

            int health = definition.healthOverride > 0 ? definition.healthOverride : archetype.BaseHealth;
            controller.Initialize(new EnemyRuntime(BuildRuntimeTags(archetype, enemyId, definition.coordinate, health)));
            if (!registry.TryRegister(controller))
            {
                DestroyEnemyObject(enemyObject);
                return;
            }

            controller.Defeated += OnEnemyDefeated;
            spawnedEnemies.Add(controller);
            TotalSpawnedEnemies++;
        }

        private static List<EnemyTag> BuildRuntimeTags(EnemyArchetypeDefinition archetype, string enemyId, Vector2Int coordinate, int health)
        {
            List<EnemyTag> tags = new List<EnemyTag>
            {
                new EnemyIdentity(enemyId, archetype != null ? archetype.DisplayName : enemyId),
                new EnemyBoardPosition(coordinate),
                new EnemyHealth(health),
                new EnemyDefence(archetype != null ? archetype.StartingDefence : 0),
                new EnemyActiveIntent()
            };

            if (archetype != null && archetype.TryGetTag(out EnemyIntentLoop intentLoop))
            {
                tags.Add(intentLoop);
            }

            return tags;
        }

        private Transform EnsureEnemiesRoot()
        {
            if (enemiesRoot != null)
            {
                return enemiesRoot;
            }

            GameObject root = new GameObject("Enemies");
            root.transform.SetParent(transform, false);
            enemiesRoot = root.transform;
            return enemiesRoot;
        }

        private GameObject CreateEnemyObject(EnemyArchetypeDefinition archetype, string enemyId)
        {
            if (archetype != null && archetype.Prefab != null)
            {
                GameObject instance = Instantiate(archetype.Prefab);
                instance.name = "Enemy_" + enemyId;
                return instance;
            }

            GameObject enemyObject = GameObject.CreatePrimitive(PrimitiveType.Capsule);
            enemyObject.name = "Enemy_" + enemyId;
            enemyObject.transform.localScale = placeholderScale;
            return enemyObject;
        }

        private void OnEnemyDefeated(EnemyController enemy)
        {
            if (!registry.Unregister(enemy))
            {
                return;
            }

            EnemyDefeated?.Invoke(enemy);
        }

        private static void DestroyEnemyObject(GameObject enemyObject)
        {
            if (enemyObject == null)
            {
                return;
            }

            if (Application.isPlaying)
            {
                UnityEngine.Object.Destroy(enemyObject);
            }
            else
            {
                UnityEngine.Object.DestroyImmediate(enemyObject);
            }
        }
    }
}
