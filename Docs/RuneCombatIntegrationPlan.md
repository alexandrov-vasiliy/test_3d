# Rune Combat Integration Plan

## Цель

Добавить `RuneCombat`, чтобы очищение 10+ одинаковых рун-гексов собирало над стопкой боевой эффект, например огненный шар, а после полного исчезновения очищаемой группы этот эффект летел в выбранную цель и применял gameplay effects.

Система рун должна быть non-enum: руна задается композицией serializable классов/тегов, а не `HexColor`. Пример: `FireRune = RuneIdentityTag + RuneColorTag + RuneMaterialTag + RuneAttackDamageTag + RuneFireEffectTag + TargetNearestEnemyTag`.

Главная граница: `RuneCombat` и rune effects наносят боевые эффекты, но не решают победу/поражение. Победа по врагам остается через `EnemySpawner.EnemyDefeated -> GoalTracker.OnEnemyDefeated -> GoalTracker.Completed`.

## Принятые решения

- `HexColor`/enum не должен быть основой rune-модели.
- `HexPiece` в целевой модели хранит `runeId` или lightweight `RuneInstance`, а визуальный цвет/material/VFX берутся из тегов руны.
- Доступные руны уровня должны добавляться через reflection/editor discovery в `LevelConfig`, не через enum dropdown.
- Активация руны происходит при очищении группы 10+ гексов в стопке.
- Пока гексы последовательно уничтожаются, над стопкой собирается rune charge visual, например огненный шар.
- Размер/интенсивность шара растет с каждым уничтоженным гексом и зависит от количества очищенных гексов.
- Когда очищаемая группа полностью исчезла, шар летит в цель.
- MVP target rule: `TargetNearestEnemyTag`, ближайший живой враг к позиции/координате очищенной стопки.
- Если несколько шаров летят в одного врага и враг умирает до попадания конкретного шара, этот шар ретаргетится на ближайшего живого врага к текущей позиции шара через тот же target tag.
- Если во время полета цель умерла и другой цели нет, шар уничтожается/dissipate без damage.
- Projectile применяет gameplay effects в момент попадания visual projectile.
- Если у руны несколько target-dependent gameplay effects и цель умерла после одного из эффектов, оставшиеся target-dependent effects отменяются.
- Non-target effects поддерживаются композицией; например `HealRune` не наносит урон врагу, запускает projectile к Player/player anchor и лечит `PlayerHealth` в момент попадания.
- Damage formula: `DamageTag.Value + max(0, clearedCount - 10) * AdditionalDamageTag.Value`.
- True damage должен быть отдельным тегом, например `RuneTrueDamageTag`, а не отдельной веткой в `RuneCombatController`.
- Визуальное накопление и полет шара нужно вынести в отдельную presentation-систему, а не смешивать с damage/effect resolution.

## Текущее состояние

- `GoalTracker` уже поддерживает `DefeatAllEnemies` и `DefeatEnemies`.
- `LevelLoader` уже спавнит врагов до `goalTracker.Initialize(levelConfig, enemySpawner.TotalSpawnedEnemies)`.
- `LevelFlowController` уже подписывает `EnemySpawner.EnemyDefeated` на `GoalTracker.OnEnemyDefeated`.
- `LevelFlowController` после merge проверяет цели, а когда рука пустая, запускает `enemySpawner.ExecuteActiveIntents(playerHealth)`.
- `EnemySpawner`, `EnemyRegistry`, `EnemyController`, `EnemyRuntime` и enemy tags уже существуют.
- Enemy composition уже реализована через `[SerializeReference]`-теги: `EnemyIdentity`, `EnemyHealth`, `EnemyDefence`, `EnemyIntentLoop`, `EnemyVisualReference`.
- `BoardController.IsCellAvailableForPlacement` уже учитывает `EnemyRegistry`.
- `GoalsPanelView` уже отображает enemy-goals через `TMP_Text`.
- `MergeSystem` сейчас публикует `PiecesCleared(HexColor color, int count)`.
- `MergeSystem` удаляет cleared pieces из модели сразу, до visual disappear animation.
- `MergeAnimator.AnimateDisappear` уже уничтожает visual hexes последовательно, но внешний код пока не получает событие на каждый уничтожаемый visual hex.
- `MergeAnimator` сейчас спавнит один disappear VFX в конце, а не incremental rune charge.
- `HexPiece`, `HexStack`, `HandGenerator`, `MergeSystem`, `GoalTracker` и часть editor tooling сейчас завязаны на `HexColor`; для rune-first модели это legacy-связь, которую нужно заменить через migration layer.
- `RuneCombatController`/`RuneDefinition`/`RuneTag`/`RuneEffect`/`RuneCastPresenter` пока отсутствуют.
- `Assets/SimpleFantasy/ReadMe.txt` описывает animator parameters для future combat presentation: `Shoot_b`, `Death_b`, `DeathType_int`, `WeaponType_int`, `MeleeType`.

## Обнаруженные проблемы данных

- `Assets/_Game/Levels/Data/1.asset` содержит enemy на координате `(-1, 2)`, но этой координаты нет в `customCoordinates`; такой enemy не заспавнится.
- `Assets/_Game/Levels/Data/2.asset` содержит enemy, но `goals: []`; уровень не сможет завершиться через `GoalTracker`.
- В обоих уровнях используется `enemyId: basic`; текущий `EnemyCatalog` fallback-ом мапит `basic` на первый archetype, сейчас это `SkeletonEnemy`, но лучше явно выбрать единое id-правило.

## Границы ответственности

- `MergeSystem`: находит merge/clear, меняет board/stack gameplay model, публикует clear lifecycle events.
- `MergeAnimator`: остается animation-only для движения и исчезновения визуальных гексов; он может уведомлять о visual consume step, но не выбирает цель и не наносит урон.
- `RuneCombatController`: связывает clear lifecycle с rune cast, запускает presentation, выбирает цель через target tags, применяет gameplay effects после попадания.
- `RuneCastPresenter`: только визуал накопления шара, рост, полет к цели, hit VFX, timing hooks; не наносит урон и не решает победу.
- `RuneEffect`: один gameplay effect руны, например damage, heal, defence, status; не знает про win/loss flow.
- `RuneTargetTag`: выбирает цель, но не применяет effects.
- `EnemyController`/`EnemyRuntime`: принимает damage request, обновляет HP/defence, публикует defeat exactly once.
- `GoalTracker`: получает только факт смерти врага через flow/spawner, не знает про руны.

## Целевая архитектура

### Rune-first stack model

Текущие `HexPiece.color` и `LevelConfig.StackDefinition.colorsBottomToTop` нужно заменить или обернуть переходной моделью:

```csharp
[Serializable]
public sealed class RunePiece
{
    public string runeId;
}
```

Целевая модель:

- `HexPiece` хранит `runeId` или lightweight `RuneInstance`, а не `HexColor`.
- `HexStack` сравнивает верхние элементы через rune match rule, например одинаковый `runeId` или общий `RuneMatchGroupTag`.
- `HexPieceView` берет цвет/material/VFX из rune presentation tags.
- `HandGenerator` выбирает руны из списка доступных рун уровня, а не из `allowedColors`.
- `LevelConfig` хранит `availableRunes` и stack definitions через rune ids.
- Старые `HexColor`-поля можно временно оставить для migration/editor compatibility, но новый `RuneCombat` не должен от них зависеть.

### Rune composition

Новый namespace/module: `Assets/_Game/Runes` или `Assets/_Game/Combat/Runes`.

Минимальные классы:

- `RuneDefinition` - serializable data: `runeId`, `displayName`, `[SerializeReference] List<RuneTag> tags`.
- `RuneTag` - abstract serializable base for data/behavior fragments.
- `RuneIdentityTag` - stable id/display name, если identity не хранится прямо на `RuneDefinition`.
- `RuneColorTag` - presentation color only, not gameplay identity.
- `RuneMaterialTag` - material/prefab presentation reference.
- `RuneMatchGroupTag` - optional matching group for merge rules.
- `RuneDamageTag` - base damage value applied when 10+ runes are cleared.
- `RuneAdditionalDamageTag` - extra damage value for each cleared rune after the first 10.
- `RuneTrueDamageTag` - marks damage as ignoring defence.
- `RuneHealPlayerTag` - heal amount data for player healing effects.
- `RuneFireEffectTag` - fire-specific VFX/status marker.
- `RuneChargeVisualTag` - charge prefab, particle prefab, growth curve, offset over stack.
- `RuneProjectileVisualTag` - projectile prefab, speed, arc, hit VFX, lifetime.
- `RuneTargetTag` - abstract target selection tag.
- `TargetNearestEnemyTag` - MVP target selection: nearest alive enemy to stack coordinate/world position.
- `RuneEffect` - abstract serializable effect tag with `Apply(RuneActivationContext context)` or a dedicated effect interface.
- `DamageEnemyRuneEffect` - target-dependent effect: creates damage request and calls enemy damage API.
- `HealPlayerRuneEffect` - non-target effect: heals injected `PlayerHealth` and can run without an enemy target.
- `RuneCombatController : MonoBehaviour` - subscribes to rune clear lifecycle events, builds activation context, coordinates presenter, target selection, and effect execution.
- `RuneCastPresenter : MonoBehaviour` - visual-only presenter for charge growth and projectile flight.

Пример целевой композиции:

```csharp
FireRune =
    RuneIdentityTag("fire", "Fire Rune")
    + RuneColorTag(red/orange)
    + RuneMaterialTag(fireMaterial)
    + RuneMatchGroupTag("fire")
    + RuneDamageTag(value: 3)
    + RuneAdditionalDamageTag(value: 1)
    + RuneFireEffectTag(fireChargeVfx)
    + RuneChargeVisualTag(fireOrbPrefab)
    + RuneProjectileVisualTag(fireProjectilePrefab)
    + TargetNearestEnemyTag

HealRune =
    RuneIdentityTag("heal", "Heal Rune")
    + RuneColorTag(green/white)
    + RuneMaterialTag(healMaterial)
    + RuneMatchGroupTag("heal")
    + RuneHealPlayerTag(value: 1)
    + RuneChargeVisualTag(healOrbPrefab)
    + RuneProjectileVisualTag(healProjectilePrefab)
```

Граница: `RuneDefinition` не должна становиться большим наследником вроде `FireRune : RuneDefinition` с hardcoded gameplay logic. Допустимы optional editor/runtime presets, но итоговая runtime-руна должна быть собрана из тегов.

### Reflection and level authoring

Доступные руны должны добавляться на уровень через reflection/editor discovery:

- Editor использует `TypeCache.GetTypesDerivedFrom<RuneTag>()`, `TypeCache.GetTypesDerivedFrom<RuneEffect>()`, `TypeCache.GetTypesDerivedFrom<RuneTargetTag>()`.
- Если нужны готовые пресеты, ввести `IRunePreset` или `RunePresetDefinition`, которые editor тоже находит reflection-ом и разворачивает в tag composition.
- `LevelConfig` получает список доступных рун уровня, например `availableRunes`.
- `HandGenerationSettings` вместо `allowedColors` должен получить `allowedRuneIds` или ссылаться на `availableRunes`.
- Level editor показывает кнопку `Add Rune`, где типы/пресеты берутся reflection-ом, а не enum dropdown.
- Runtime не должен сканировать reflection каждый ход; reflection нужен для editor tooling/build-time authoring, а runtime читает уже serialized level data.

### Merge clear lifecycle

На переходном этапе можно оставить существующее событие для старых clear-goals:

```csharp
public event Action<HexColor, int> PiecesCleared;
```

Для rune combat нужен отдельный lifecycle contract без зависимости от enum:

```csharp
public readonly struct RuneClearContext
{
    public readonly RuneDefinition Rune;
    public readonly int Count;
    public readonly HexCell Cell;
    public readonly Vector2Int Coordinate;
    public readonly Vector3 WorldPosition;
    public readonly int ChainIndex;
}
```

Рекомендуемый lifecycle:

- `RuneClearStarted(RuneClearContext context)` - модель уже решила, что очищается 10+ рун, presenter может создать charge orb над стопкой.
- `RunePieceConsumed(RuneClearContext context, int consumedIndex, Vector3 pieceWorldPosition)` - вызывается на каждый visual hex disappear step; presenter притягивает particles к шару и увеличивает размер.
- `RuneClearCompleted(RuneClearContext context)` - все visual hexes исчезли; `RuneCombatController` выбирает цель и запускает projectile flight.

Важно: старый `PiecesCleared` может остаться только как compatibility layer для существующих color-goals. Финальная цель - заменить color-goals на rune-goals или другой non-enum идентификатор.

### Rune cast presentation system

Нужна отдельная система для эффекта накопления и полета:

- `RuneCastPresenter` принимает `RuneClearStarted`, создает charge visual над `stackView.GetTopPosition()` или `cellView.transform.position + offset`.
- На каждый `RunePieceConsumed` presenter спавнит/двигает particle trail от уничтожаемого гекса к charge visual.
- Charge visual растет через `RuneChargeVisualTag`: `baseScale`, `scalePerPiece`, `maxScale`, `growthCurve`, color/material override.
- После `RuneClearCompleted` presenter получает target transform/world position и запускает projectile visual.
- Projectile visual летит к ближайшему врагу по настройкам `RuneProjectileVisualTag`.
- Во время полета presenter или controller должен проверять, жива ли текущая цель.
- Если цель умерла до попадания, `RuneCombatController` повторно вызывает target tag от текущей world position шара и передает presenter новую цель.
- Если новая цель найдена, projectile меняет траекторию/target и продолжает полет.
- Если новой цели нет, presenter проигрывает dissipate animation, уничтожает шар и не применяет effects.
- На попадании presenter сообщает `RuneCombatController`, что можно применить gameplay effects; damage/heal/status effects применяются именно в этот момент.
- Если цели нет на старте полета, presenter может проиграть dissipate animation и не применять effects.
- Presenter не должен вызывать `EnemyController.ApplyDamage`, `GoalTracker`, `ShowWin`, `ShowLose`.

### Rune cast presenter lifetime

Рекомендуемая схема: `RuneCastPresenter` живет одним scene-level component на весь бой, но каждый cast получает отдельный runtime `RuneCastView`/handle из pool.

Почему не только один scene component без per-cast object:

- Плюс: проще wiring через `Main`, проще назначить общие prefabs/materials/pools.
- Плюс: удобно централизованно чистить все active casts при reload/lose/win.
- Минус: если весь state cast-а хранить внутри одного component, параллельные шары быстро превратятся в сложные списки, индексы и edge-case ошибки.
- Минус: ретаргет, hit callback, dissipate и cancellation для нескольких шаров в один момент будут сложнее отлаживать.

Почему не создавать полностью отдельный `RuneCastPresenter` на каждый cast:

- Плюс: state одного шара изолирован и проще локально читать.
- Плюс: параллельные casts естественно существуют как разные objects.
- Минус: дороже по allocation/Instantiate/Destroy, особенно при длинных merge chains.
- Минус: сложнее централизованно управлять pooling, shared VFX settings, cleanup and debug.
- Минус: больше scene/runtime мусора и выше риск забыть отписки/callbacks.

Итоговая модель:

- `RuneCastPresenter` - scene-level orchestration/pool component.
- `RuneCastView` или `ActiveRuneCast` - per-cast runtime object/handle, владеет charge visual, projectile visual, текущей целью, текущей позицией шара и callbacks.
- `RuneCombatController` создает cast через `RuneCastPresenter.BeginCast(context)`, получает handle и подписывается/await-ит hit, retarget request, dissipate.
- При завершении cast handle возвращает визуалы в pool или уничтожает их через presenter.
- Для MVP можно начать без сложного object pool, но публичный API должен выглядеть как pool-friendly `BeginCast/EndCast`, чтобы не переписывать архитектуру позже.

Практический контракт с текущим `MergeAnimator`:

- `MergeAnimator.AnimateDisappear` нужно расширить callback/event-ом на каждый исчезающий `HexPieceView`.
- Callback должен передавать world position уничтожаемого visual hex перед scale-to-zero/destroy.
- `MergeAnimator` не должен знать про rune target/effects; он только сообщает visual consume steps.
- `RuneCastPresenter` может подписываться через `RuneCombatController` или получать callbacks из `MergeSystem`/`MergeAnimator` orchestration.

### Targeting

MVP targeting через tag:

```csharp
[Serializable]
public sealed class TargetNearestEnemyTag : RuneTargetTag
{
}
```

Поведение:

- Ищет живого врага ближайшего к `RuneClearContext.Coordinate` или `WorldPosition` очищенной стопки.
- Использует read-only API `EnemyRegistry`/`EnemySpawner`.
- Если врагов нет, rune cast завершается без damage и без enemy-goal progress.
- Target selection выполняется после `RuneClearCompleted`, чтобы выбрать актуального живого врага.
- Target selection также повторяется во время полета, если текущая цель умерла до попадания projectile.
- Retarget использует тот же `RuneTargetTag`, исключает умершую/невалидную цель и выбирает ближайшего живого врага к текущей world position шара.

Для target selectors нужен безопасный read API:

- `void GetAliveEnemies(List<EnemyController> results)`
- `bool TryGetNearestAliveEnemy(Vector2Int coordinate, out EnemyController enemy)`
- `bool TryGetNearestAliveEnemy(Vector3 worldPosition, out EnemyController enemy)`

Этот API должен оставаться read-only и не решать победу.

### Damage formula and true damage

Damage считается композиционно из двух тегов:

```csharp
int damage = damageTag.Value + Math.Max(0, context.Count - 10) * additionalDamageTag.Value;
```

Правила формулы:

- `RuneDamageTag.Value` - базовый урон за факт очистки группы 10+ рун.
- `RuneAdditionalDamageTag.Value` - дополнительный урон за каждый гекс сверх 10.
- Если `RuneAdditionalDamageTag` отсутствует, дополнительный урон равен 0.
- Если `RuneDamageTag` отсутствует, damage effect не должен наносить урон и должен залогировать warning в editor/runtime validation.

Текущий `EnemyRuntime.ApplyDamage(int amount)` всегда учитывает defence. Для true damage лучше перейти к damage request:

```csharp
public readonly struct RuneDamageRequest
{
    public readonly int Amount;
    public readonly bool IgnoreDefence;
}
```

Правила:

- `RuneDamageTag` и `RuneAdditionalDamageTag` задают amount по формуле выше.
- `RuneTrueDamageTag` выставляет `IgnoreDefence = true`.
- `DamageEnemyRuneEffect` собирает request из tags и применяет его к target enemy.
- `EnemyRuntime` или `EnemyController` должен получить overload, который умеет применить damage с учетом `IgnoreDefence`.
- Обычный damage продолжает использовать `EnemyDefence.AbsorbDamage`.
- True damage не должен удалять defence, если только отдельный tag/effect явно этого не делает.

### Effect execution and cancellation

`RuneCombatController` применяет effects в момент попадания visual projectile.

Правила выполнения:

- Effects выполняются в порядке tags/list order.
- Effects должны явно объявлять, нужен ли им enemy target, например через `RequiresEnemyTarget`.
- Target-dependent effects перед выполнением проверяют, что target существует и жив.
- Если target умер до попадания projectile, cast сначала пытается ретаргетиться; effects еще не выполняются.
- Если target умер после target-dependent effect, оставшиеся target-dependent effects отменяются.
- Non-target effects могут выполняться без enemy target, если их собственные зависимости доступны. Например `HealPlayerRuneEffect` лечит `PlayerHealth` и не требует target enemy.
- Если у руны только non-target effects вроде `HealRune`, projectile летит к Player/player anchor, а effect применяется в момент visual hit.
- `EnemyDefeated` публикуется только enemy/spawner layer, не rune layer.

### Runtime wiring

`Main` должен создать/найти:

- `RuneCombatController`
- `RuneCastPresenter`

`InitializeRuntimeDependencies` должен передать:

- `MergeSystem`
- `MergeAnimator` callbacks or lifecycle source
- `EnemySpawner` или `EnemyRegistry`
- `PlayerHealth` и player/self anchor для heal/self effects
- текущий `LevelConfig.availableRunes` или resolved runtime `RuneLibrary`
- `RuneCastPresenter`

`LevelLoader` должен передавать/обновлять runtime rune library при загрузке нового уровня, потому что доступные руны level-specific.

## Этапы реализации

1. Зафиксировать non-enum rune model: `RuneDefinition` + `RuneTag` composition.
2. Добавить модуль рун: `RuneDefinition`, `RuneTag`, `RuneActivationContext`, `RuneEffect`, `RuneTargetTag`, `RuneDamageRequest`.
3. Добавить базовые tags: identity, color presentation, material presentation, match group, base damage, additional damage, true damage, player heal, fire effect marker/VFX, charge visual, projectile visual, `TargetNearestEnemyTag`.
4. Расширить `LevelConfig` списком доступных рун уровня.
5. Перевести `HandGenerationSettings` на allowed rune ids или available rune list.
6. Перевести `HexPiece`/`HexStack`/`StackDefinition` на rune id или rune instance; `HexColor` оставить только как временный migration adapter.
7. Добавить reflection-based editor tooling для добавления rune tags/effects/presets на уровень.
8. Добавить rune clear lifecycle events в `MergeSystem`, передающие rune data, count, cell, coordinate, world position, chain index.
9. Расширить `MergeAnimator.AnimateDisappear` callback-ом на каждый уничтожаемый visual hex.
10. Реализовать scene-level `RuneCastPresenter`, который создает per-cast `RuneCastView`/handle для charge creation, per-piece growth, projectile flight, hit/dissipate callbacks.
11. Добавить read-only target query API в `EnemyRegistry` или `EnemySpawner`.
12. Реализовать `TargetNearestEnemyTag`.
13. Реализовать `DamageEnemyRuneEffect`, формулу `DamageTag.Value + max(0, count - 10) * AdditionalDamageTag.Value` и damage request с `IgnoreDefence`.
14. Реализовать `HealPlayerRuneEffect` как non-target effect, который лечит `PlayerHealth`.
15. Реализовать применение effects в момент попадания visual projectile.
16. Реализовать projectile retarget rule, если цель умерла во время полета.
17. Реализовать effect cancellation rule после смерти цели.
18. Реализовать `RuneCombatController` как orchestration layer между merge lifecycle, presenter, target tags, effects.
19. Подключить `RuneCombatController` и `RuneCastPresenter` в `Main` и editor scene setup.
20. Создать default level rune set, например Fire Rune и Heal Rune через tags.
21. Исправить тестовые level data: валидный enemy coordinate и goal `DefeatAllEnemies` или `DefeatEnemies`.
22. Добавить presentation hooks позже: hit VFX, death VFX, Synty animator params.

## Проверка

- Existing `ClearPieces` goal продолжает обновляться через compatibility `MergeSystem.PiecesCleared` до migration.
- Runtime rune activation использует `RuneDefinition`/`RuneTag`, а не `HexColor`.
- Level editor может добавить доступную руну через reflection-discovered tags/presets.
- Hand generation берет руны из level available runes, а не из enum palette.
- При очищении 10+ одинаковых рун создается charge visual над очищаемой стопкой.
- На каждый уничтоженный visual hex charge visual получает particle contribution и увеличивается.
- После исчезновения всей cleared group projectile летит к ближайшему живому врагу.
- `TargetNearestEnemyTag` выбирает ближайшего врага относительно очищенной стопки.
- Если несколько projectiles летят в одного врага и он умер до попадания одного из них, оставшийся projectile ретаргетится на ближайшего живого врага от текущей позиции шара.
- Если цель умерла во время полета и другой цели нет, projectile уничтожается/dissipate без damage.
- Если цели нет на старте, projectile/effect корректно отменяется без damage.
- Rune damage считается как `DamageTag.Value + max(0, clearedCount - 10) * AdditionalDamageTag.Value`.
- Projectile применяет effects в момент visual hit, не при старте полета.
- Rune damage уменьшает HP врага через `EnemyController`/`EnemyRuntime`.
- Heal Rune projectile летит к Player/player anchor и лечит `PlayerHealth` в момент visual hit, без enemy target и без damage.
- Обычный damage поглощается defence.
- Damage с `RuneTrueDamageTag` игнорирует defence и не удаляет defence сам по себе.
- Если первый effect убивает цель, последующие target-dependent effects не выполняются.
- Смерть врага публикуется один раз через `EnemySpawner.EnemyDefeated`.
- `GoalTracker` обновляет enemy-goal только через `OnEnemyDefeated`.
- `RuneCombatController` не вызывает `ShowWin`, `ShowLose`, `GoalTracker.OnEnemyDefeated` и не проверяет `AliveCount == 0`.
- `RuneCastPresenter` не наносит damage и не решает victory/loss.
- Несколько одновременных casts имеют отдельные `RuneCastView`/handles и не перетирают state друг друга.
- Клетка умершего врага освобождается через `EnemyRegistry.Unregister`.
- `DefeatAllEnemies` уровень завершается только через `GoalTracker.Completed`.
- Combat test level не содержит warnings о враге вне board shape.
- Unity compile проходит без ошибок.

## Оставшиеся вопросы

Нет открытых вопросов по текущим принятым RuneCombat правилам.

## Риски

- Полный отказ от `HexColor` затрагивает stack generation, merge matching, goals, editor previews, materials and serialized level assets. Это больше, чем один `RuneCombatController`, поэтому нужен migration layer.
- Если оставить `HexColor` в combat path, система снова станет enum-driven и будет плохо расширяться. `HexColor` допустим только как временный legacy adapter.
- Текущий `MergeSystem` удаляет model pieces до анимации; для корректного шар-сбора нужно аккуратно синхронизировать model clear, visual consume callbacks и combat resolution.
- Если атаковать до завершения disappear animation, визуально враг может умереть раньше, чем шар собрался.
- Если `RuneCastPresenter` начнет применять damage, presentation layer станет gameplay layer. Это запрещено.
- Если target selectors читают private state `EnemySpawner`, появится хрупкая связность; лучше дать явный read-only API.
- Если effects начнут менять цели или flow напрямую, появится параллельная combat victory logic. Это запрещено.
- Если reflection использовать в runtime на каждом ходе, появятся лишние расходы и нестабильность в build. Reflection должен быть editor-authoring механизмом, runtime должен читать serialized composition.
- Particle-heavy charge visuals могут стать дорогими при длинных merge chains; нужны pooling или лимиты VFX позже.
