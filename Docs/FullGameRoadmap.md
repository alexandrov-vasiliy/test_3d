# HexaSort Full Game Roadmap

This document captures the implementation plan for turning the current short playable ads prototype into a full level-based game.

## Core Constraints

- Follow the project-wide agent rules in `AGENTS.md`.
- Preserve the existing modular architecture: `Board`, `Stacks`, `Drag`, `Merge`, `Flow`, `Configs`, `Editor`, `DI`.
- Do not create UI hierarchy in runtime code. UI must exist as scene objects or prefab instances and be injected through the composition root.
- Keep `MergeAnimator` focused on visuals, timing, VFX, and sounds. Do not move gameplay rules, goals, or level flow logic into `MergeAnimator`.
- Keep `MergeSystem` responsible for merge resolution and expose gameplay events from it where needed.
- Keep the composition root responsible for wiring dependencies, not for owning all level data.
- Every C# class should have an XML `<summary>` that explains its responsibility for future agents. If a touched or relied-on class has no summary, create one. If a file is changed, check that the touched class summaries are still valid.

## Relevant Current Files

- `Assets/Main.cs`: current composition root and temporary level-data holder.
- `Assets/_Game/Configs/LevelConfig.cs`: existing ScriptableObject-style level data model.
- `Assets/_Game/Flow/LevelFlowController.cs`: current playable ads flow.
- `Assets/_Game/Flow/LevelFlowState.cs`: current flow state enum.
- `Assets/_Game/Merge/MergeSystem.cs`: merge resolution logic.
- `Assets/_Game/Merge/MergeAnimator.cs`: merge/disappear animation only.
- `Assets/_Game/Stacks/StackTrayController.cs`: current draggable tray.
- `Assets/_Game/Drag/DragController.cs`: input and stack placement.
- `Assets/_Game/Editor/MainEditor.cs`: current inspector and scene editing tools.
- `Assets/_Game/Editor/HexGridShapeEditorWindow.cs`: current board/tray layout editor.

## Target Architecture

### Runtime Modules

- `LevelDatabase`
  - Stores ordered `LevelConfig` references.
  - Provides current/next level lookup.

- `LevelProgressService`
  - Stores current level index.
  - Persists progress, initially through `PlayerPrefs` unless a stronger save system is added.

- `LevelLoader` or `LevelSession`
  - Applies a `LevelConfig`.
  - Builds board shape.
  - Places starting board stacks.
  - Initializes the current hand.
  - Resets goals and flow state.

- `HandController`
  - Owns the three-stack player hand.
  - Replaces the hand only after all three stacks have been placed.
  - Uses deterministic or random generation settings from the active `LevelConfig`.

- `HandGenerator`
  - Generates stack definitions from level rules.
  - Supports seed, allowed colors, stack height range, and optional first hands.

- `GoalTracker`
  - Tracks active level goals.
  - Listens to merge clear events.
  - Reports progress to HUD.
  - Reports completion to `LevelFlowController`.

- `MoveAvailabilityService`
  - Checks lose condition after merges and hand refills.
  - Initial rule: lose when goals are incomplete and no legal moves remain.

- UI presenters/views
  - `LevelHudView`
  - `GoalsPanelView`
  - `WinScreenView`
  - `LoseScreenView`
  - `LevelTransitionView`

All UI views must be scene objects or prefab instances assigned in the inspector and injected by the composition root.

## Level Config Expansion

Extend `LevelConfig` with:

- Level identity:
  - level number or id;
  - display name if needed.

- Board data:
  - board radius;
  - board shape data;
  - custom coordinates if custom board shape is required;
  - starting board stacks.

- Hand data:
  - initial hand stacks;
  - generated hand settings;
  - hand size, default `3`;
  - random seed;
  - allowed colors;
  - stack height min/max;
  - optional weighted color settings.

- Goal data:
  - list of goals;
  - color collection goals;
  - required cleared count per color;
  - optional future goal types such as clear board or clear N stacks.

- Lose rules:
  - lose when no moves remain;
  - optional move limit;
  - optional finite deck mode.

## Merge Integration

`MergeSystem` should publish events when gameplay-significant results happen:

- `PiecesCleared(HexColor color, int count)`
- `MergeStarted`
- `MergeFinished`

`GoalTracker` subscribes to `PiecesCleared`.

`LevelFlowController` waits for `MergeFinished` or the existing coroutine completion before checking win/loss.

Do not add goal tracking, level transitions, or lose logic to `MergeAnimator`.

## Flow Redesign

Replace the playable ads-focused flow with a full game flow:

- `Initializing`
- `LoadingLevel`
- `Playing`
- `Dragging`
- `ResolvingMerge`
- `RefillingHand`
- `Win`
- `Lose`
- `Transition`

After stack placement:

1. Disable input.
2. Run merge resolution.
3. Update goals through merge events.
4. If goals completed, show win screen.
5. Otherwise, refill hand if all three stacks were used.
6. Check lose condition.
7. Re-enable input if still playing.

## Win Screen

Create a prefab or scene object for the win screen.

Required behavior:

- Show only after goals are completed.
- Disable gameplay input while visible.
- Button: next level.
- Next level button asks `LevelProgressService` for the next level and calls `LevelLoader`.

## Lose Screen

Create a prefab or scene object for the lose screen.

Required behavior:

- Show when goals are incomplete and no moves remain.
- Disable gameplay input while visible.
- Button: retry current level.
- Optional button: skip/next, if design requires it later.

## Hand Refill Rules

Initial target behavior:

- Player always has up to three stacks in hand.
- A stack is removed from hand after successful placement.
- New hand is generated only after all three stacks from the current hand were placed.
- If the level uses finite deck mode, lose can occur when the deck cannot refill and goals are incomplete.
- If the level uses infinite generation mode, lose is based on no legal board placement.

## Editor Roadmap

The current editor already supports:

- board shape editing;
- starting board stacks;
- tray stack editing;
- tutorial target.

Update editor tooling to support full levels:

- Select or create `LevelConfig` assets.
- Edit board shape and save it into the selected `LevelConfig`.
- Edit starting board stacks in the selected `LevelConfig`.
- Edit hand generation settings.
- Edit optional predefined first hands.
- Edit goals.
- Preview the first three generated stacks.
- Validate level data.

Validation should report:

- starting stacks outside board shape;
- empty or missing goals;
- goal colors not present in board/hand generation;
- no empty cells at level start, unless intended;
- invalid hand size;
- invalid stack height ranges;
- missing UI references in the composition root.

## Composition Root Changes

`Main` should become a cleaner composition root:

- scene object references;
- prefab or scene-instance UI references;
- asset references;
- service creation;
- dependency injection.

`Main` should stop being the primary place where level data is stored.

Keep temporary migration fields only while converting existing prototype data into `LevelConfig` assets.

## Implementation Order

1. Expand `LevelConfig` and add `LevelDatabase`.
2. Add `LevelProgressService`.
3. Add `LevelLoader` or `LevelSession`.
4. Move runtime level setup out of `Main` into the loader/session.
5. Add merge events to `MergeSystem`.
6. Add `GoalTracker`.
7. Add `HandController` and `HandGenerator`.
8. Update `StackTrayController` only as needed to support three-stack hand refill.
9. Rewrite `LevelFlowController` around win/loss/refill.
10. Add prefab-based UI views and inject them through `Main`.
11. Extend editor windows for `LevelConfig` editing.
12. Validate in Unity: compile, scene references, win, lose, retry, next level, hand refill.

## Testing Checklist

- Level loads from `LevelConfig`.
- Board shape matches level data.
- Starting board stacks are placed correctly.
- Hand starts with three stacks.
- After placing three stacks, a new hand appears.
- Merge clears publish color/count events.
- Goals update after clears.
- Win screen appears only when goals are complete.
- Lose screen appears when goals are incomplete and no moves remain.
- Retry reloads current level.
- Next level loads the next config.
- No UI hierarchy is created from runtime code.
- `MergeAnimator` remains animation-only.
