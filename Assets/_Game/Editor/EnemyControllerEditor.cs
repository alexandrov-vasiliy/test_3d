using System.Collections.Generic;
using _Game.Enemies;
using UnityEditor;
using UnityEngine;

/// <summary>
/// Provides editor-only runtime diagnostics for EnemyController instances; it reads enemy state without owning gameplay logic or mutating runtime tags.
/// </summary>
[CustomEditor(typeof(EnemyController))]
[CanEditMultipleObjects]
public sealed class EnemyControllerEditor : Editor
{
    private const float HealthBarHeight = 18f;
    private const float SectionSpacing = 8f;

    private static readonly Color HeaderColor = new Color(0.16f, 0.22f, 0.28f, 1f);
    private static readonly Color AliveColor = new Color(0.25f, 0.76f, 0.42f, 1f);
    private static readonly Color DefeatedColor = new Color(0.9f, 0.26f, 0.22f, 1f);
    private static readonly Color DefenceColor = new Color(0.28f, 0.55f, 0.95f, 1f);
    private static readonly Color HealthBackColor = new Color(0.18f, 0.18f, 0.18f, 1f);
    private static readonly Color HealthFillColor = new Color(0.84f, 0.2f, 0.18f, 1f);

    private bool showTags = true;

    public override void OnInspectorGUI()
    {
        serializedObject.Update();

        if (targets.Length > 1)
        {
            DrawMultiObjectNotice();
        }
        else
        {
            DrawSingleController((EnemyController)target);
        }

        serializedObject.ApplyModifiedProperties();

        if (Application.isPlaying)
        {
            Repaint();
        }
    }

    private void DrawMultiObjectNotice()
    {
        EditorGUILayout.HelpBox("Enemy runtime preview supports one selected enemy at a time.", MessageType.Info);
        DrawDefaultInspector();
    }

    private void DrawSingleController(EnemyController controller)
    {
        DrawHeader(controller);
        EditorGUILayout.Space(SectionSpacing);

        if (controller.Runtime == null)
        {
            EditorGUILayout.HelpBox("Runtime is not initialized yet. Start the level or select a spawned enemy after EnemySpawner creates it.", MessageType.Info);
            DrawDefaultInspector();
            return;
        }

        DrawVitals(controller.Runtime);
        EditorGUILayout.Space(SectionSpacing);
        DrawIntent(controller);
        EditorGUILayout.Space(SectionSpacing);
        DrawTags(controller.Runtime);
        EditorGUILayout.Space(SectionSpacing);
        DrawDefaultInspector();
    }

    private static void DrawHeader(EnemyController controller)
    {
        EnemyRuntime runtime = controller.Runtime;
        string title = runtime != null ? runtime.DisplayName : controller.name;
        string subtitle = runtime != null ? runtime.EnemyId + "  |  Cell " + runtime.Coordinate : "Waiting for runtime";
        Color stateColor = controller.IsAlive ? AliveColor : DefeatedColor;

        Rect rect = EditorGUILayout.GetControlRect(false, 52f);
        EditorGUI.DrawRect(rect, HeaderColor);

        Rect stripeRect = new Rect(rect.x, rect.y, 5f, rect.height);
        EditorGUI.DrawRect(stripeRect, stateColor);

        Rect titleRect = new Rect(rect.x + 14f, rect.y + 7f, rect.width - 24f, 20f);
        Rect subtitleRect = new Rect(rect.x + 14f, rect.y + 29f, rect.width - 24f, 16f);
        GUI.Label(titleRect, title, HeaderStyle());
        GUI.Label(subtitleRect, subtitle, SubHeaderStyle());
    }

    private static void DrawVitals(EnemyRuntime runtime)
    {
        DrawSectionTitle("Runtime State");
        using (new EditorGUILayout.VerticalScope(EditorStyles.helpBox))
        {
            DrawHealthBar(runtime.CurrentHealth, runtime.MaxHealth);

            using (new EditorGUILayout.HorizontalScope())
            {
                DrawMetric("Health", runtime.CurrentHealth + " / " + runtime.MaxHealth, HealthFillColor);
                DrawMetric("Defence", runtime.Defence.ToString(), DefenceColor);
                DrawMetric("Alive", runtime.IsAlive ? "Yes" : "No", runtime.IsAlive ? AliveColor : DefeatedColor);
            }
        }
    }

    private static void DrawIntent(EnemyController controller)
    {
        DrawSectionTitle("Intent");
        using (new EditorGUILayout.VerticalScope(EditorStyles.helpBox))
        {
            EnemyIntent activeIntent = controller.ActiveIntent;
            if (activeIntent == null)
            {
                EditorGUILayout.LabelField("Active", "None");
            }
            else
            {
                EditorGUILayout.LabelField("Active", DescribeIntent(activeIntent));
            }

            if (controller.Runtime != null && controller.Runtime.TryGetTag(out EnemyIntentLoop loop) && loop.Intents != null)
            {
                int activeIndex = 0;
                if (controller.Runtime.TryGetTag(out EnemyActiveIntent activeIntentTag))
                {
                    activeIndex = activeIntentTag.ActiveIndex;
                }

                for (int i = 0; i < loop.Intents.Count; i++)
                {
                    string marker = i == activeIndex % Mathf.Max(1, loop.Intents.Count) ? "-> " : "   ";
                    EditorGUILayout.LabelField(marker + "Step " + (i + 1), DescribeIntent(loop.Intents[i]));
                }
            }
        }
    }

    private void DrawTags(EnemyRuntime runtime)
    {
        IReadOnlyList<EnemyTag> tags = runtime.Tags;
        int tagCount = tags != null ? tags.Count : 0;
        showTags = EditorGUILayout.Foldout(showTags, "Runtime Tags (" + tagCount + ")", true);
        if (!showTags)
        {
            return;
        }

        using (new EditorGUILayout.VerticalScope(EditorStyles.helpBox))
        {
            if (tags == null || tags.Count == 0)
            {
                EditorGUILayout.LabelField("No tags");
                return;
            }

            for (int i = 0; i < tags.Count; i++)
            {
                DrawTag(tags[i]);
            }
        }
    }

    private static void DrawTag(EnemyTag tag)
    {
        if (tag == null)
        {
            EditorGUILayout.LabelField("Missing tag");
            return;
        }

        using (new EditorGUILayout.VerticalScope(EditorStyles.helpBox))
        {
            EditorGUILayout.LabelField(ObjectNames.NicifyVariableName(tag.GetType().Name), EditorStyles.boldLabel);
            switch (tag)
            {
                case EnemyIdentity identity:
                    EditorGUILayout.LabelField("Id", identity.EnemyId);
                    EditorGUILayout.LabelField("Display Name", identity.DisplayName);
                    break;
                case EnemyHealth health:
                    EditorGUILayout.LabelField("Health", health.CurrentHealth + " / " + health.MaxHealth);
                    break;
                case EnemyDefence defence:
                    EditorGUILayout.LabelField("Amount", defence.Amount.ToString());
                    break;
                case EnemyBoardPosition position:
                    EditorGUILayout.LabelField("Coordinate", position.Coordinate.ToString());
                    break;
                case EnemyActiveIntent activeIntent:
                    EditorGUILayout.LabelField("Active Index", activeIntent.ActiveIndex.ToString());
                    break;
                case EnemyIntentLoop intentLoop:
                    DrawIntentLoopTag(intentLoop);
                    break;
                case EnemyVisualReference visualReference:
                    EditorGUILayout.ObjectField("Prefab", visualReference.Prefab, typeof(GameObject), false);
                    EditorGUILayout.Vector3Field("Position Offset", visualReference.PositionOffset);
                    EditorGUILayout.ObjectField("Default Hit VFX", visualReference.DefaultHitVfx, typeof(GameObject), false);
                    EditorGUILayout.ObjectField("Default Death VFX", visualReference.DefaultDeathVfx, typeof(GameObject), false);
                    break;
                case EnemyIntent intent:
                    EditorGUILayout.LabelField("Effect", DescribeIntent(intent));
                    break;
                default:
                    EditorGUILayout.LabelField("Type", tag.GetType().FullName);
                    break;
            }
        }
    }

    private static void DrawIntentLoopTag(EnemyIntentLoop intentLoop)
    {
        IReadOnlyList<EnemyIntent> intents = intentLoop.Intents;
        if (intents == null || intents.Count == 0)
        {
            EditorGUILayout.LabelField("Intents", "None");
            return;
        }

        for (int i = 0; i < intents.Count; i++)
        {
            EditorGUILayout.LabelField("Step " + (i + 1), DescribeIntent(intents[i]));
        }
    }

    private static void DrawHealthBar(int currentHealth, int maxHealth)
    {
        int safeMaxHealth = Mathf.Max(1, maxHealth);
        float ratio = Mathf.Clamp01((float)Mathf.Max(0, currentHealth) / safeMaxHealth);
        Rect rect = EditorGUILayout.GetControlRect(false, HealthBarHeight);
        EditorGUI.DrawRect(rect, HealthBackColor);
        EditorGUI.DrawRect(new Rect(rect.x, rect.y, rect.width * ratio, rect.height), HealthFillColor);
        GUI.Label(rect, currentHealth + " / " + safeMaxHealth, CenteredBarStyle());
    }

    private static void DrawMetric(string label, string value, Color color)
    {
        using (new EditorGUILayout.VerticalScope(EditorStyles.helpBox, GUILayout.MinWidth(70f)))
        {
            Rect colorRect = EditorGUILayout.GetControlRect(false, 3f);
            EditorGUI.DrawRect(colorRect, color);
            EditorGUILayout.LabelField(label, MiniLabelStyle());
            EditorGUILayout.LabelField(value, MetricStyle());
        }
    }

    private static void DrawSectionTitle(string text)
    {
        EditorGUILayout.LabelField(text, EditorStyles.boldLabel);
    }

    private static string DescribeIntent(EnemyIntent intent)
    {
        switch (intent)
        {
            case null:
                return "None";
            case EnemyIntentAttack attack:
                return "Attack: " + attack.Damage + " damage";
            case EnemyIntentDefence defence:
                return "Defence: +" + defence.Defence;
            default:
                return ObjectNames.NicifyVariableName(intent.GetType().Name);
        }
    }

    private static GUIStyle HeaderStyle()
    {
        GUIStyle style = new GUIStyle(EditorStyles.boldLabel);
        style.normal.textColor = Color.white;
        style.fontSize = 15;
        return style;
    }

    private static GUIStyle SubHeaderStyle()
    {
        GUIStyle style = new GUIStyle(EditorStyles.miniLabel);
        style.normal.textColor = new Color(0.82f, 0.87f, 0.92f, 1f);
        return style;
    }

    private static GUIStyle CenteredBarStyle()
    {
        GUIStyle style = new GUIStyle(EditorStyles.boldLabel);
        style.alignment = TextAnchor.MiddleCenter;
        style.normal.textColor = Color.white;
        return style;
    }

    private static GUIStyle MiniLabelStyle()
    {
        GUIStyle style = new GUIStyle(EditorStyles.miniLabel);
        style.alignment = TextAnchor.MiddleCenter;
        return style;
    }

    private static GUIStyle MetricStyle()
    {
        GUIStyle style = new GUIStyle(EditorStyles.boldLabel);
        style.alignment = TextAnchor.MiddleCenter;
        return style;
    }
}
