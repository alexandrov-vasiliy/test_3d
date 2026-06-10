# Combat Goals Integration Plan

## Цель обновления

Расширить существующую систему целей уровня так, чтобы dungeon/combat-режим завершался через `GoalTracker`, а не через отдельную параллельную систему победы в combat-классах.

Ключевое правило: `GoalTracker` остается единственным источником truth для прогресса целей и завершения уровня. Combat-слой только сообщает игровые события, например смерть врага.

## Текущее состояние проекта

- `GoalTracker` уже отслеживает список активных целей, публикует `GoalsChanged` и `Completed`, а `LevelFlowController` использует `goalTracker.IsComplete` и событие `Completed` для победы.
- `MergeSystem` публикует `PiecesCleared(HexColor color, int count)`, а `LevelFlowController` подписывает это событие на `GoalTracker.OnPiecesCleared`.
- `GoalTracker.Initialize(LevelConfig)` сейчас добавляет только цели с `requiredCount > 0`. Это несовместимо с `DefeatAllEnemies`, где `requiredCount` должен вычисляться после спавна врагов.
- `GoalProgress.RequiredCount` сейчас напрямую читает `GoalDefinition.requiredCount`, поэтому runtime-required-count пока хранить негде.
- `LevelConfig.GoalDefinition` уже содержит `type`, `color`, `requiredCount`.
- `LevelGoalType` сейчас содержит `ClearPieces`, `ClearBoard`, `ClearStacks`.
- `LevelLoader` строит board, ставит стартовые stack-и, инициализирует hand, затем вызывает `goalTracker.Initialize(levelConfig)` и биндинг HUD.
- `GoalsPanelView` уже умеет текстово показывать цели, но знает только текущие типы.
- Editor validation сейчас считает любой `requiredCount <= 0` ошибкой для любой цели.
- В `Assets/_Game` сейчас не найдено существующих `EnemyController`, `EnemySpawner`, `EnemyRegistry`, `RuneCombatController` или `CombatPhaseController`.

## Целевая ответственность модулей

- `GoalTracker`: хранит прогресс всех целей уровня, принимает `OnPiecesCleared` и `OnEnemyDefeated`, решает `IsComplete`.
- `RuneCombatController`: реагирует на активацию рун и наносит урон, но не проверяет победу.
- `EnemyController`: хранит runtime-состояние конкретного врага, проигрывает смерть/визуал через свои зависимости, но не знает про `GoalTracker`.
- `EnemySpawner` или `EnemyRegistry`: создает/регистрирует врагов, считает фактически заспавненных врагов, публикует `EnemyDefeated`.
- `EnemyCatalog`: хранит доступные типы врагов как serializable data в сценовом компоненте или prefab-компоненте, без отдельных ScriptableObject assets.
- `EnemyRegistry`: хранит занятость board-клеток врагами; если клетка занята врагом, на нее нельзя поставить stack.
- `LevelLoader`: загружает уровень, спавнит врагов до инициализации целей, передает `totalEnemyCount` в `GoalTracker`.
- `LevelFlowController`: слушает `GoalTracker.Completed` и показывает win screen; не делает `if enemies.Count == 0`.
- `GoalsPanelView`: отображает прогресс целей, но не считает их выполнение.

## Этап 1. Расширить модель целей

Изменить `Assets/_Game/Configs/LevelConfig.cs`.

1. Добавить новые значения в конец `LevelGoalType`, не меняя порядок существующих значений:

```csharp
public enum LevelGoalType
{
    ClearPieces,
    ClearBoard,
    ClearStacks,
    DefeatAllEnemies,
    DefeatEnemies
}
```

2. Не вставлять новые значения между существующими. Unity сериализует enum как индекс, поэтому перестановка может сломать уже созданные `LevelConfig`.

3. Обновить summary у `LevelGoalType`, потому что он перестанет быть только про board/clear goals.

4. Оставить поля `GoalDefinition` универсальными:

- `ClearPieces`: использует `type`, `color`, `requiredCount`.
- `DefeatAllEnemies`: использует `type`; `requiredCount` в asset может быть `0`.
- `DefeatEnemies`: использует `type`, `requiredCount`.

## Этап 2. Изменить `GoalTracker` без создания нового tracker

Изменить `Assets/_Game/Goals/GoalTracker.cs`.

1. Переделать `GoalProgress`, чтобы `RequiredCount` был сохраненным runtime-значением, а не вычислялся напрямую из `definition.requiredCount`.

Ожидаемая форма:

```csharp
public GoalProgress(LevelConfig.GoalDefinition definition, int runtimeRequiredCount = -1)
{
    Definition = definition;
    RequiredCount = runtimeRequiredCount >= 0
        ? runtimeRequiredCount
        : Math.Max(0, definition != null ? definition.requiredCount : 0);
}
```

2. Добавить `public int RequiredCount { get; }`.

3. Расширить инициализацию:

```csharp
public void Initialize(LevelConfig levelConfig, int totalEnemyCount = 0)
```

4. При создании goals использовать правила:

- `ClearPieces`: добавлять только если `requiredCount > 0`.
- `DefeatAllEnemies`: добавлять даже если `requiredCount == 0`, а `RequiredCount` брать из `totalEnemyCount`.
- `DefeatEnemies`: добавлять если `requiredCount > 0`.
- Неиспользуемые `ClearBoard`/`ClearStacks`: либо оставить текущую совместимость, либо явно не активировать до реализации их прогресса.

5. Добавить метод:

```csharp
public void OnEnemyDefeated()
```

Он должен увеличивать прогресс только для `DefeatAllEnemies` и `DefeatEnemies`, вызывать `GoalsChanged`, а затем `Completed`, если все активные цели завершены.

6. Сохранить поведение `OnPiecesCleared` для `ClearPieces`, чтобы существующие уровни не сломались.

7. Защититься от двойного учета смерти врага на уровне источника события: `GoalTracker` считает вызовы, но `EnemyController`/`EnemySpawner` не должен публиковать смерть дважды.

## Этап 3. Добавить минимальную enemy-инфраструктуру

Так как combat/enemy-скриптов сейчас нет в проекте, для MVP нужно добавить новый слой, например `Assets/_Game/Combat` или `Assets/_Game/Enemies`.

Минимальные классы:

- `EnemyRuntime`: чистое runtime-состояние врага, HP, alive/dead.
- `EnemyController`: MonoBehaviour для конкретного врага, принимает урон, запускает death flow, освобождает клетку через board/registry, публикует локальное событие смерти.
- `EnemySpawner`: создает врагов из `LevelConfig`, хранит `TotalSpawnedEnemies`, подписывается на смерть каждого врага и публикует `event Action<EnemyController> EnemyDefeated`.
- `EnemyRegistry`: хранит активных врагов по координатам, отвечает на запросы занятости клетки и освобождает клетку после смерти врага.

Правильная связь:

```csharp
enemySpawner.EnemyDefeated += enemy => goalTracker.OnEnemyDefeated();
```

Неправильная связь:

```csharp
enemyController.SetGoalTracker(goalTracker);
```

## Этап 3A. Создание конкретных врагов через композицию

Новые типы врагов должны создаваться композицией данных, prefab-ов и небольших компонентов, а не наследованием большого `EnemyController`.

Не использовать отдельные ScriptableObject assets для врагов, enemy archetype-ов или enemy catalog. Для enemy-конфигурации использовать serializable-классы внутри существующих level/editor данных и serialized fields на MonoBehaviour/prefab-компонентах.

Рекомендуемая схема:

- `EnemyCatalog` как MonoBehaviour или serializable-поле в `EnemySpawner`, назначенное через composition root.
- `EnemyArchetypeDefinition` как `[System.Serializable]` class: `enemyId`, `displayName`, `prefab`, `baseHealth`, `size`, `defaultDeathVfx`, `defaultHitVfx`.
- `EnemyDefinition` в уровне хранит placement: `enemyId`, `coordinate`, `healthOverride`, optional visual/behavior overrides.
- Prefab врага состоит из небольших компонентов: `EnemyController`, `EnemyView`, `EnemyHealthView`, `EnemyDeathPresenter`, optional `EnemyAttackPattern`.
- `EnemyController` координирует состояние конкретного врага, но не содержит таблицу типов врагов и не решает победу.
- `EnemySpawner` берет `enemyId` из `LevelConfig`, находит archetype в `EnemyCatalog`, инстанцирует prefab и передает runtime параметры.
- Новый враг добавляется через запись в catalog и prefab-композицию, без добавления нового наследника `EnemyController`, если не требуется действительно новое поведение.

Граница ответственности:

- Archetype отвечает за базовые параметры и prefab.
- Level enemy definition отвечает за координату и level-specific overrides.
- Runtime enemy отвечает за HP/death/alive state.
- Registry отвечает за занятость клетки.
- GoalTracker отвечает только за прогресс `DefeatAllEnemies`/`DefeatEnemies`.

## Этап 4. Расширить `LevelConfig` данными врагов

Без enemy-данных `DefeatAllEnemies` не сможет вычислить runtime-required-count.

Добавить в `LevelConfig` минимальную serializable-модель placement-а врагов, например:

```csharp
[System.Serializable]
public class EnemyDefinition
{
    public string enemyId;
    public Vector2Int coordinate;
    public int healthOverride;
}

public List<EnemyDefinition> enemies = new List<EnemyDefinition>();
```

Для MVP достаточно статического списка врагов на старте уровня.

Принятое правило placement-а: враг располагается на конкретной board-клетке и блокирует постановку stack-а на эту клетку до смерти врага.

Реализация занятости:

- Не смешивать stack-модель и enemy-модель внутри `HexCell` на MVP.
- Хранить enemy occupancy в `EnemyRegistry` по `Vector2Int` или `HexCell`.
- `BoardController.HasLegalPlacement` и drag validation должны учитывать `EnemyRegistry.IsOccupied(cell)`.
- После смерти врага `EnemyRegistry` освобождает клетку, и placement stack-а на нее снова становится разрешенным, если сама клетка пустая по stack-модели.
- Если level config пытается поставить enemy на клетку со стартовым stack-ом, validation должна считать это ошибкой.

Важно: не создавать отдельные ScriptableObject assets для enemy config. Враги уровня хранятся как serializable data внутри существующего `LevelConfig`, а каталог типов врагов хранится как serialized data/component reference в сценовой композиции или prefab-е.

## Этап 5. Порядок загрузки уровня

Изменить `Assets/_Game/Levels/LevelLoader.cs`.

Текущий порядок:

1. `board.Initialize(levelConfig)`
2. `PlaceStartingBoardStacks(levelConfig)`
3. `handGenerator.Begin(levelConfig)`
4. `hand.InitializeHand()`
5. `goalTracker.Initialize(levelConfig)`
6. `goalsView.Bind(goalTracker)`

Целевой порядок:

1. `board.Initialize(levelConfig)`
2. `PlaceStartingBoardStacks(levelConfig)`
3. `enemySpawner.ClearLevel()`
4. `enemySpawner.Spawn(levelConfig, board)`
5. `handGenerator.Begin(levelConfig)`
6. `hand.InitializeHand()`
7. `goalTracker.Initialize(levelConfig, enemySpawner.TotalSpawnedEnemies)`
8. `goalsView.Bind(goalTracker)`

Важно: `DefeatAllEnemies.RequiredCount` должен основываться на фактически заспавненных врагах, а не просто на размере списка в конфиге. Если spawn definition невалиден, лучше не учитывать такого врага и вывести warning.

## Этап 6. Подключить события смерти врагов

Изменить `Assets/_Game/Flow/LevelFlowController.cs` и composition root `Assets/Main.cs`.

1. `Main` должен создать или найти `EnemySpawner` как scene component, аналогично `MergeSystem`, `PackshotController`, `LevelFlowController`.

2. `Main.InitializeRuntimeDependencies` должен передать `EnemySpawner`:

- в `LevelLoader`, чтобы тот мог спавнить врагов и передавать count в `GoalTracker`;
- в `LevelFlowController`, чтобы тот подписал событие смерти на `GoalTracker`.

3. `LevelFlowController.Subscribe`:

```csharp
enemySpawner.EnemyDefeated += OnEnemyDefeated;
```

4. `LevelFlowController.Unsubscribe`:

```csharp
enemySpawner.EnemyDefeated -= OnEnemyDefeated;
```

5. Handler:

```csharp
private void OnEnemyDefeated(EnemyController enemy)
{
    goalTracker?.OnEnemyDefeated();
}
```

6. Не добавлять в `LevelFlowController` прямую проверку `enemySpawner.AliveCount == 0` для победы.

## Этап 7. Уточнить flow после загрузки

В текущем `LoadCurrentLevel` после `LoadLevel` сразу показывает tutorial, ставит `Playing`, включает input и только потом проверяет lose.

Для `DefeatAllEnemies` с `0` врагов возможен edge-case: цель будет complete сразу после `Initialize`, но win screen не появится автоматически, если `Completed` не вызывается при initialize.

Решение для MVP:

```csharp
if (goalTracker != null && goalTracker.IsComplete)
{
    ShowWin();
    return;
}
```

Добавить эту проверку после успешного `levelLoader.LoadLevel(currentLevel)` и до включения input. Даже если уровни с нулем врагов будут запрещены validation-ом, этот guard делает flow устойчивым.

## Этап 8. Подключить `RuneCombatController`

Когда появится combat-логика рун:

- `RuneCombatController` может слушать `MergeSystem.PiecesCleared` или отдельное событие активации руны.
- Он выбирает цель и наносит урон врагу.
- Враг при смерти сообщает в `EnemySpawner`/`EnemyRegistry`.
- `GoalTracker` получает только `OnEnemyDefeated`.

Запрещено:

- вызывать `ShowWin` из `RuneCombatController`;
- проверять победу по списку врагов в `RuneCombatController`;
- передавать `GoalTracker` внутрь `EnemyController`.

## Этап 9. Обновить HUD целей

Изменить `Assets/_Game/UI/GoalsPanelView.cs`.

Для MVP достаточно текста:

- `Clear Red: 6/10`
- `Enemies: 1/3`
- `Defeat enemies: 2/3`

Правило UI-текста: все текстовые поля в UI должны использовать TextMeshPro `TMP_Text`. Не добавлять и не возвращать legacy `UnityEngine.UI.Text`.

Логика `DescribeGoal` должна явно обрабатывать:

```csharp
LevelGoalType.DefeatAllEnemies
LevelGoalType.DefeatEnemies
```

Иконки черепа/меча/монстра можно добавить позже через prefab/scene UI. Не создавать goal widgets runtime-кодом, если правило UI не будет изменено.

## Этап 10. Обновить editor tooling и validation

Изменить editor scripts:

- `Assets/_Game/Editor/LevelConfigEditor.cs`
- `Assets/_Game/Editor/LevelConfigHexGridEditorWindow.cs`
- при необходимости `Assets/_Game/Editor/LevelDatabaseEditor.cs`

Нужно:

1. Для `DefeatAllEnemies` скрывать или дизейблить `color`.
2. Для `DefeatAllEnemies` разрешить `requiredCount == 0`.
3. Для `DefeatEnemies` требовать `requiredCount > 0`.
4. Для `ClearPieces` оставить текущую проверку `requiredCount > 0` и проверку доступности цвета.
5. Добавить удобный редактор врагов прямо в level editor, без отдельных ScriptableObject assets для enemy definitions или enemy catalog.
6. Редактор должен позволять выбрать enemy archetype из catalog, указать coordinate, увидеть занятые врагами клетки на grid preview и быстро удалить/переместить врага.
7. Редактор должен запрещать или явно подсвечивать placement врага вне board shape, на клетке со стартовым stack-ом и на клетке, где уже есть другой враг.
8. Добавить validation:

- `DefeatAllEnemies` есть, но enemy list пустой: warning или error в зависимости от дизайна.
- Enemy coordinate вне board shape: error.
- Enemy coordinate конфликтует со стартовым stack: error.
- Несколько врагов на одной клетке: error.
- `enemyId` не найден в `EnemyCatalog`: error.
- Enemy archetype не имеет prefab или prefab не содержит `EnemyController`: error.

UX редактора врагов:

- В grid editor добавить режим `Enemies`.
- Клик по пустой доступной клетке ставит выбранного врага.
- Клик по врагу выбирает его definition и показывает параметры справа.
- Drag или кнопки координат позволяют перенести врага на другую валидную клетку.
- Кнопка `Delete` удаляет выбранного врага.
- Визуально отличать клетки со stack-ами, врагами и конфликтами.
- Для текста в editor/runtime UI использовать `TMP_Text` только в runtime/prefab UI; editor UI может использовать стандартный `EditorGUILayout`, потому что это не gameplay UI.

## Этап 11. Поддержать комбинированные цели

Существующая модель `GoalTracker.IsComplete` уже требует завершения всех активных goals. После расширения нужно сохранить это поведение.

Обязательные сценарии:

- Обычный уровень: `ClearPieces Red 10`, `ClearPieces Blue 10`.
- Dungeon MVP: `DefeatAllEnemies`.
- Смешанный уровень: `ClearPieces Red 10`, `DefeatAllEnemies`.

Смешанный уровень должен завершаться только когда оба условия выполнены.

## Этап 12. Проверка и тесты

Минимальная проверка после реализации:

- Существующий `ClearPieces` уровень завершается как раньше.
- `DefeatAllEnemies` уровень с одним врагом завершается после смерти врага.
- `DefeatAllEnemies` уровень с несколькими врагами обновляет HUD `0/N`, `1/N`, `N/N`.
- Враг, размещенный на конкретной board-клетке, блокирует placement stack-а на эту клетку.
- После смерти врага его клетка освобождается и становится доступной для placement, если на ней нет stack-а.
- Editor не дает сохранить валидным уровень с врагом вне board shape.
- Editor не дает сохранить валидным уровень с врагом на клетке стартового stack-а.
- Editor не дает сохранить валидным уровень с двумя врагами на одной клетке.
- Смешанный уровень не завершается после выполнения только `ClearPieces`.
- Смешанный уровень не завершается после выполнения только `DefeatAllEnemies`.
- Смешанный уровень завершается после выполнения обеих целей.
- `EnemyDefeated` не засчитывается дважды при повторном death event.
- `LevelFlowController` нигде не проверяет победу через `AliveCount == 0`.
- `RuneCombatController`, если добавлен, не содержит win/loss logic.
- Unity compile проходит без ошибок.
- Console не содержит warnings от невалидных enemy definitions на валидном тестовом уровне.

## Риски

- Enum order: новые значения нельзя вставлять перед `ClearBoard`/`ClearStacks`, иначе старые assets могут сменить тип цели.
- Zero-count goals: `DefeatAllEnemies` с нулем врагов требует явного решения. Лучше validation warning/error плюс guard в `LevelFlowController`.
- Board occupancy: текущий `HexCell` хранит только stack. Для врагов использовать `EnemyRegistry`, а placement checks должны учитывать both stack emptiness and enemy occupancy.
- Enemy config storage: не вводить отдельные ScriptableObject assets для врагов. Catalog и archetype data должны быть serializable data на scene/prefab component или внутри существующего level/editor data.
- События смерти: нужно гарантировать exactly-once публикацию `EnemyDefeated` на одного врага.
- Runtime UI: нельзя создавать gameplay UI hierarchy из runtime-кода; только обновлять уже назначенный `GoalsPanelView`.
- UI text: использовать только TextMeshPro `TMP_Text`, не `UnityEngine.UI.Text`.

## Вопросы перед реализацией

1. Для MVP враги все статически заданы в `LevelConfig`, или уже нужны runtime-волны/spawners?
2. Что должно происходить на уровне `DefeatAllEnemies`, если фактически заспавнено `0` врагов: instant win или validation error?
3. Какая минимальная схема урона от рун нужна для MVP: один урон за очищенный цвет, урон по выбранной цели, урон всем врагам или отдельные rune definitions?
4. Где удобнее хранить `EnemyCatalog` без ScriptableObject: serialized field на `EnemySpawner`, отдельный scene component, prefab component или data внутри `Main`?

## Рекомендуемый порядок реализации

1. Расширить `LevelGoalType` и `GoalTracker`.
2. Обновить `GoalsPanelView` и editor validation под новые goal-типы.
3. Добавить enemy definitions в `LevelConfig`.
4. Добавить `EnemyCatalog` без ScriptableObject, через serializable data/component composition.
5. Добавить `EnemyRuntime`, `EnemyController`, `EnemySpawner` и `EnemyRegistry`.
6. Обновить placement checks, чтобы enemy-occupied cell запрещала постановку stack-а.
7. Добавить editor mode для размещения врагов на конкретных клетках.
8. Подключить `EnemySpawner.TotalSpawnedEnemies` в `LevelLoader`.
9. Подключить `EnemySpawner.EnemyDefeated` к `GoalTracker.OnEnemyDefeated` через `LevelFlowController`.
10. Добавить минимальный `RuneCombatController`, который наносит урон, но не решает победу.
11. Собрать тестовые уровни: pure clear, pure defeat, mixed.
12. Проверить compile, HUD, win flow, blocking occupied cells, отсутствие параллельной victory logic.
