# Agent Rules

These rules apply to the whole Unity project.

## Class Summaries

- Every C# class must have an XML documentation `<summary>` directly above the class declaration.
- If a C# class does not have a `<summary>`, create one before finishing any task that touches or relies on that class.
- The summary must explain the class responsibility for future agents, not repeat the class name.
- The summary should mention important boundaries, such as whether the class owns gameplay logic, view logic, animation, editor tooling, configuration, or dependency wiring.
- If a file is changed, every touched class in that file must have its `<summary>` checked and updated if the class responsibility changed.
- If a class is moved, split, renamed, or receives new responsibilities, its `<summary>` must be updated in the same change.

Example:

```csharp
/// <summary>
/// Resolves merge chains on the board and reports gameplay results; animation is delegated to MergeAnimator.
/// </summary>
public class MergeSystem : MonoBehaviour
{
}
```

## Reading Large Files

- When a C# file is large, read it in parts instead of assuming its full contents from a partial view.
- Start by reading the class `<summary>` and public API to understand intent.
- Then inspect only the methods or regions relevant to the task.
- If the file changes, re-check the class `<summary>` against the final implementation before finishing.

## UI Rule

- Do not create gameplay UI hierarchy in runtime code.
- UI must exist as scene objects or prefab instances and be assigned through the composition root.
- Runtime code may show, hide, bind, or update injected UI views, but must not instantiate canvases, buttons, panels, or goal widgets unless the user explicitly changes this rule.

## Merge Boundary

- `MergeAnimator` is animation-only: movement animation, disappear animation, VFX, timing, and sounds.
- Do not put level goals, win/loss logic, hand refill logic, or level progression into `MergeAnimator`.
- Gameplay results from merge resolution should come from `MergeSystem` or a dedicated gameplay service.
