using System;
using _Game.Runes;
using _Game.Runes.Tags;
using _Game.Runes.Tags.Effects;
using UnityEditor;
using UnityEngine;

/// <summary>
/// Provides a dedicated editor window for composing project-wide rune definitions from serializable rune tags; levels reference rune ids from the shared catalog but do not own rune composition.
/// </summary>
public sealed class RuneComposerEditorWindow : EditorWindow
{
    private SerializedObject catalogObject;
    private SerializedProperty runes;
    private RuneCatalog runeCatalog;
    private Vector2 listScroll;
    private Vector2 detailsScroll;
    private int selectedRuneIndex = -1;

    [MenuItem("Tools/Runes/Rune Composer")]
    public static void Open()
    {
        GetWindow<RuneComposerEditorWindow>("Rune Composer").Show();
    }

    private void OnEnable()
    {
        if (Selection.activeObject is RuneCatalog catalog)
        {
            SetCatalog(catalog);
        }
    }

    private void OnGUI()
    {
        DrawToolbar();
        if (runeCatalog == null || catalogObject == null || runes == null)
        {
            EditorGUILayout.HelpBox("Select a RuneCatalog asset to edit the shared rune compositions.", MessageType.Info);
            return;
        }

        catalogObject.Update();
        using (new EditorGUILayout.HorizontalScope())
        {
            DrawRuneList();
            DrawRuneDetails();
        }
        catalogObject.ApplyModifiedProperties();
    }

    private void DrawToolbar()
    {
        using (new EditorGUILayout.HorizontalScope(EditorStyles.toolbar))
        {
            EditorGUI.BeginChangeCheck();
            RuneCatalog selected = (RuneCatalog)EditorGUILayout.ObjectField(runeCatalog, typeof(RuneCatalog), false, GUILayout.MinWidth(240f));
            if (EditorGUI.EndChangeCheck())
            {
                SetCatalog(selected);
            }

            GUILayout.FlexibleSpace();
            using (new EditorGUI.DisabledScope(Selection.activeObject is not RuneCatalog))
            {
                if (GUILayout.Button("Use Selection", EditorStyles.toolbarButton, GUILayout.Width(100f)))
                {
                    SetCatalog((RuneCatalog)Selection.activeObject);
                }
            }
        }
    }

    private void DrawRuneList()
    {
        using (new EditorGUILayout.VerticalScope(GUILayout.Width(250f)))
        {
            EditorGUILayout.LabelField("Runes", EditorStyles.boldLabel);
            listScroll = EditorGUILayout.BeginScrollView(listScroll, GUI.skin.box);
            for (int i = 0; i < runes.arraySize; i++)
            {
                SerializedProperty rune = runes.GetArrayElementAtIndex(i);
                string runeId = rune.FindPropertyRelative("runeId").stringValue;
                string displayName = rune.FindPropertyRelative("displayName").stringValue;
                string label = string.IsNullOrWhiteSpace(displayName) ? runeId : displayName + " (" + runeId + ")";
                if (GUILayout.Toggle(selectedRuneIndex == i, label, "Button"))
                {
                    selectedRuneIndex = i;
                }
            }
            EditorGUILayout.EndScrollView();

            if (GUILayout.Button("Add Empty Rune"))
            {
                AddRune("rune_" + (runes.arraySize + 1), "New Rune", null);
            }

            using (new EditorGUILayout.HorizontalScope())
            {
                if (GUILayout.Button("Fire Template"))
                {
                    AddFireRune();
                }
                if (GUILayout.Button("Heal Template"))
                {
                    AddHealRune();
                }
            }

            using (new EditorGUI.DisabledScope(selectedRuneIndex < 0 || selectedRuneIndex >= runes.arraySize))
            {
                if (GUILayout.Button("Remove Selected"))
                {
                    runes.DeleteArrayElementAtIndex(selectedRuneIndex);
                    selectedRuneIndex = Mathf.Min(selectedRuneIndex, runes.arraySize - 1);
                }
            }
        }
    }

    private void DrawRuneDetails()
    {
        using (new EditorGUILayout.VerticalScope())
        {
            if (selectedRuneIndex < 0 || selectedRuneIndex >= runes.arraySize)
            {
                EditorGUILayout.HelpBox("Select a rune or create one from a template.", MessageType.None);
                return;
            }

            SerializedProperty rune = runes.GetArrayElementAtIndex(selectedRuneIndex);
            detailsScroll = EditorGUILayout.BeginScrollView(detailsScroll);
            EditorGUILayout.PropertyField(rune.FindPropertyRelative("runeId"));
            EditorGUILayout.PropertyField(rune.FindPropertyRelative("displayName"));

            SerializedProperty tags = rune.FindPropertyRelative("tags");
            EditorGUILayout.Space(8f);
            using (new EditorGUILayout.HorizontalScope())
            {
                EditorGUILayout.LabelField("Tags", EditorStyles.boldLabel);
                if (GUILayout.Button("Add Tag", GUILayout.Width(90f)))
                {
                    ShowAddTagMenu(tags);
                }
            }

            for (int i = 0; i < tags.arraySize; i++)
            {
                if (DrawTagElement(tags, i))
                {
                    break;
                }
            }

            EditorGUILayout.EndScrollView();
        }
    }

    private void ShowAddTagMenu(SerializedProperty tags)
    {
        GenericMenu menu = new GenericMenu();
        bool hasAvailableTags = false;
        foreach (Type type in TypeCache.GetTypesDerivedFrom<RuneTag>())
        {
            if (type.IsAbstract || type.IsGenericType || HasTagOfType(tags, type))
            {
                continue;
            }

            hasAvailableTags = true;
            menu.AddItem(new GUIContent(type.Name), false, () => AddTag(tags, type));
        }

        if (!hasAvailableTags)
        {
            menu.AddDisabledItem(new GUIContent("All Tags Added"));
        }

        menu.ShowAsContext();
    }

    private static bool HasTagOfType(SerializedProperty tags, Type type)
    {
        for (int i = 0; i < tags.arraySize; i++)
        {
            object tag = tags.GetArrayElementAtIndex(i).managedReferenceValue;
            if (tag != null && tag.GetType() == type)
            {
                return true;
            }
        }

        return false;
    }

    private void SetCatalog(RuneCatalog catalog)
    {
        runeCatalog = catalog;
        catalogObject = catalog != null ? new SerializedObject(catalog) : null;
        runes = catalogObject?.FindProperty("runes");
        selectedRuneIndex = runes != null && runes.arraySize > 0 ? Mathf.Clamp(selectedRuneIndex, 0, runes.arraySize - 1) : -1;
    }

    private void AddFireRune()
    {
        AddRune("fire", "Fire Rune", new RuneTag[]
        {
            new RuneIdentityTag("fire", "Fire Rune"),
            new RuneColorTag(new Color(0.95f, 0.18f, 0.18f)),
            new RuneMatchGroupTag("fire"),
            new RuneDamageTag(3),
            new RuneAdditionalDamageTag(1),
            new RuneChargeVisualTag(),
            new RuneProjectileVisualTag(),
            new TargetNearestEnemyTag(),
            new RuneFireEffectTag(),
            new DamageEnemyRuneEffect()
        });
    }

    private void AddHealRune()
    {
        AddRune("heal", "Heal Rune", new RuneTag[]
        {
            new RuneIdentityTag("heal", "Heal Rune"),
            new RuneColorTag(new Color(0.18f, 0.75f, 0.32f)),
            new RuneMatchGroupTag("heal"),
            new RuneHealPlayerTag(1),
            new RuneAdditionalHealPlayerTag(1),
            new RuneChargeVisualTag(),
            new RuneProjectileVisualTag(),
            new HealPlayerRuneEffect()
        });
    }

    private static bool DrawTagElement(SerializedProperty tags, int index)
    {
        SerializedProperty tag = tags.GetArrayElementAtIndex(index);
        object value = tag.managedReferenceValue;
        Type tagType = value != null ? value.GetType() : null;

        using (new EditorGUILayout.VerticalScope(EditorStyles.helpBox))
        {
            using (new EditorGUILayout.HorizontalScope())
            {
                string label = tagType != null ? ObjectNames.NicifyVariableName(tagType.Name) : "Missing Tag";
                EditorGUILayout.LabelField(label, EditorStyles.boldLabel);
                if (GUILayout.Button("Remove", GUILayout.Width(70f)))
                {
                    tags.DeleteArrayElementAtIndex(index);
                    return true;
                }
            }

            if (tagType == null)
            {
                EditorGUILayout.HelpBox("Serialized tag reference could not be resolved. Remove it or restore the missing type mapping.", MessageType.Warning);
            }

            EditorGUILayout.PropertyField(tag, GUIContent.none, true);
        }

        return false;
    }

    private void AddRune(string runeId, string displayName, RuneTag[] tags)
    {
        runes.InsertArrayElementAtIndex(runes.arraySize);
        selectedRuneIndex = runes.arraySize - 1;
        SerializedProperty rune = runes.GetArrayElementAtIndex(selectedRuneIndex);
        rune.FindPropertyRelative("runeId").stringValue = runeId;
        rune.FindPropertyRelative("displayName").stringValue = displayName;
        SerializedProperty tagList = rune.FindPropertyRelative("tags");
        tagList.ClearArray();
        if (tags != null)
        {
            for (int i = 0; i < tags.Length; i++)
            {
                AddTagInstance(tagList, tags[i]);
            }
        }
    }

    private static void AddTag(SerializedProperty tags, Type type)
    {
        if (Activator.CreateInstance(type) is RuneTag tag)
        {
            AddTagInstance(tags, tag);
            tags.serializedObject.ApplyModifiedProperties();
        }
    }

    private static void AddTagInstance(SerializedProperty tags, RuneTag tag)
    {
        tags.InsertArrayElementAtIndex(tags.arraySize);
        tags.GetArrayElementAtIndex(tags.arraySize - 1).managedReferenceValue = tag;
    }

}
