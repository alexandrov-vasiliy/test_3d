using System;
using System.Collections.Generic;
using _Game.Enemies;
using UnityEditor;
using UnityEngine;
using Object = UnityEngine.Object;

/// <summary>
/// Provides editor-only enemy composition tooling for EnemyCatalog assets and scene components; runtime spawning, gameplay execution, and view lifecycle stay in the Enemies module.
/// </summary>
public sealed class EnemyComposerEditorWindow : EditorWindow
{
    private const string MenuPath = "Tools/Enemies/Enemy Composer";

    private static readonly Type[] HiddenArchetypeTagTypes =
    {
        typeof(EnemyBoardPosition),
        typeof(EnemyActiveIntent)
    };

    private EnemyCatalog catalog;
    private SerializedObject catalogObject;
    private Vector2 listScroll;
    private Vector2 detailScroll;
    private int selectedIndex;
    private string newEnemyId = "new_enemy";
    private string newDisplayName = "New Enemy";
    private int newHealth = 1;
    private int newDefence;

    [MenuItem(MenuPath)]
    public static void Open()
    {
        EnemyComposerEditorWindow window = GetWindow<EnemyComposerEditorWindow>("Enemy Composer");
        window.minSize = new Vector2(780f, 460f);
        window.FindSceneCatalogIfNeeded();
        window.Show();
    }

    public static void Open(EnemyCatalog targetCatalog)
    {
        EnemyComposerEditorWindow window = GetWindow<EnemyComposerEditorWindow>("Enemy Composer");
        window.minSize = new Vector2(780f, 460f);
        window.SetCatalog(targetCatalog);
        window.Show();
    }

    private void OnEnable()
    {
        FindSceneCatalogIfNeeded();
    }

    private void OnSelectionChange()
    {
        if (Selection.activeGameObject != null && Selection.activeGameObject.TryGetComponent(out EnemyCatalog selectedCatalog))
        {
            SetCatalog(selectedCatalog);
            Repaint();
        }
    }

    private void OnGUI()
    {
        DrawCatalogPicker();
        if (catalog == null)
        {
            DrawMissingCatalogState();
            return;
        }

        EnsureSerializedObject();
        if (catalogObject == null)
        {
            return;
        }

        catalogObject.Update();
        SerializedProperty archetypes = catalogObject.FindProperty("archetypes");
        if (archetypes == null)
        {
            EditorGUILayout.HelpBox("EnemyCatalog.archetypes was not found.", MessageType.Error);
            return;
        }

        using (new EditorGUILayout.HorizontalScope())
        {
            DrawArchetypeList(archetypes);
            DrawSelectedArchetype(archetypes);
        }

        catalogObject.ApplyModifiedProperties();
    }

    private void DrawCatalogPicker()
    {
        using (new EditorGUILayout.VerticalScope(EditorStyles.helpBox))
        {
            using (new EditorGUILayout.HorizontalScope())
            {
                EditorGUI.BeginChangeCheck();
                EnemyCatalog selectedCatalog = (EnemyCatalog)EditorGUILayout.ObjectField("Enemy Catalog", catalog, typeof(EnemyCatalog), true);
                if (EditorGUI.EndChangeCheck())
                {
                    SetCatalog(selectedCatalog);
                }

                if (GUILayout.Button("Find In Scene", GUILayout.Width(108f)))
                {
                    SetCatalog(FindSceneCatalog());
                }
            }

            EditorGUILayout.HelpBox("Compose enemies from EnemyTag instances. Add new EnemyIntent classes in code, then use the Intent Loop section to assemble enemy behavior.", MessageType.None);
        }
    }

    private void DrawMissingCatalogState()
    {
        EditorGUILayout.Space(16f);
        EditorGUILayout.HelpBox("Assign an EnemyCatalog component or create one on a scene GameObject before composing enemies.", MessageType.Info);
        if (GUILayout.Button("Create EnemyCatalog GameObject", GUILayout.Height(32f)))
        {
            GameObject catalogObject = new GameObject("EnemyCatalog");
            Undo.RegisterCreatedObjectUndo(catalogObject, "Create Enemy Catalog");
            SetCatalog(catalogObject.AddComponent<EnemyCatalog>());
            Selection.activeGameObject = catalogObject;
        }
    }

    private void DrawArchetypeList(SerializedProperty archetypes)
    {
        using (new EditorGUILayout.VerticalScope(GUILayout.Width(260f)))
        {
            EditorGUILayout.LabelField("Enemies", EditorStyles.boldLabel);
            DrawNewEnemyPanel(archetypes);

            EditorGUILayout.Space(4f);
            listScroll = EditorGUILayout.BeginScrollView(listScroll);
            for (int i = 0; i < archetypes.arraySize; i++)
            {
                DrawArchetypeRow(archetypes, i);
            }
            EditorGUILayout.EndScrollView();
        }
    }

    private void DrawNewEnemyPanel(SerializedProperty archetypes)
    {
        using (new EditorGUILayout.VerticalScope(EditorStyles.helpBox))
        {
            EditorGUILayout.LabelField("Create Enemy", EditorStyles.boldLabel);
            newEnemyId = EditorGUILayout.TextField("Id", newEnemyId);
            newDisplayName = EditorGUILayout.TextField("Display Name", newDisplayName);
            newHealth = EditorGUILayout.IntField("Health", Mathf.Max(1, newHealth));
            newDefence = EditorGUILayout.IntField("Defence", Mathf.Max(0, newDefence));

            using (new EditorGUI.DisabledScope(string.IsNullOrWhiteSpace(newEnemyId)))
            {
                if (GUILayout.Button("Create From Tags"))
                {
                    CreateEnemy(archetypes);
                }
            }
        }
    }

    private void DrawArchetypeRow(SerializedProperty archetypes, int index)
    {
        SerializedProperty archetype = archetypes.GetArrayElementAtIndex(index);
        string label = BuildArchetypeLabel(archetype, index);
        Color previousColor = GUI.backgroundColor;
        if (selectedIndex == index)
        {
            GUI.backgroundColor = new Color(0.65f, 0.95f, 1f, 1f);
        }

        using (new EditorGUILayout.VerticalScope(EditorStyles.helpBox))
        {
            GUI.backgroundColor = previousColor;
            using (new EditorGUILayout.HorizontalScope())
            {
                if (GUILayout.Toggle(selectedIndex == index, string.Empty, GUILayout.Width(18f)) && selectedIndex != index)
                {
                    selectedIndex = index;
                    GUI.FocusControl(null);
                }

                EditorGUILayout.LabelField(label, EditorStyles.boldLabel);
            }

            using (new EditorGUILayout.HorizontalScope())
            {
                using (new EditorGUI.DisabledScope(index <= 0))
                {
                    if (GUILayout.Button("Up"))
                    {
                        archetypes.MoveArrayElement(index, index - 1);
                        selectedIndex = index - 1;
                    }
                }

                using (new EditorGUI.DisabledScope(index >= archetypes.arraySize - 1))
                {
                    if (GUILayout.Button("Down"))
                    {
                        archetypes.MoveArrayElement(index, index + 1);
                        selectedIndex = index + 1;
                    }
                }

                if (GUILayout.Button("Remove"))
                {
                    RemoveArrayElement(archetypes, index);
                    selectedIndex = Mathf.Clamp(index, 0, Mathf.Max(0, archetypes.arraySize - 1));
                }
            }
        }

        GUI.backgroundColor = previousColor;
    }

    private void DrawSelectedArchetype(SerializedProperty archetypes)
    {
        using (new EditorGUILayout.VerticalScope())
        {
            if (archetypes.arraySize == 0)
            {
                EditorGUILayout.HelpBox("Create an enemy to start composing tags.", MessageType.Info);
                return;
            }

            selectedIndex = Mathf.Clamp(selectedIndex, 0, archetypes.arraySize - 1);
            SerializedProperty archetype = archetypes.GetArrayElementAtIndex(selectedIndex);
            if (archetype.managedReferenceValue == null)
            {
                EditorGUILayout.HelpBox("Selected archetype reference is null.", MessageType.Warning);
                if (GUILayout.Button("Replace With Empty Archetype"))
                {
                    SetManagedReference(archetype, new EnemyArchetypeDefinition(), "Replace Enemy Archetype");
                }
                return;
            }

            detailScroll = EditorGUILayout.BeginScrollView(detailScroll);
            DrawArchetypeHeader(archetype);
            DrawTagComposition(archetype);
            EditorGUILayout.EndScrollView();
        }
    }

    private void DrawArchetypeHeader(SerializedProperty archetype)
    {
        using (new EditorGUILayout.VerticalScope(EditorStyles.helpBox))
        {
            EditorGUILayout.LabelField("Selected Enemy", EditorStyles.boldLabel);
            EditorGUILayout.LabelField("Type", ObjectNames.NicifyVariableName(archetype.managedReferenceValue.GetType().Name));

            SerializedProperty tags = archetype.FindPropertyRelative("tags");
            SerializedProperty identity = FindFirstManagedReference(tags, typeof(EnemyIdentity));
            if (identity == null)
            {
                EditorGUILayout.HelpBox("This enemy has no EnemyIdentity tag. Catalog lookup should be driven by EnemyIdentity.", MessageType.Warning);
                if (GUILayout.Button("Add EnemyIdentity Tag"))
                {
                    AddManagedReference(tags, new EnemyIdentity(ReadFallbackId(archetype), ReadFallbackName(archetype)), "Add Enemy Identity");
                }
            }
            else
            {
                DrawIdentityFields(archetype, identity);
            }
        }
    }

    private void DrawIdentityFields(SerializedProperty archetype, SerializedProperty identity)
    {
        SerializedProperty identityId = identity.FindPropertyRelative("enemyId");
        SerializedProperty identityName = identity.FindPropertyRelative("displayName");
        EditorGUI.BeginChangeCheck();
        EditorGUILayout.PropertyField(identityId, new GUIContent("Enemy Id"));
        EditorGUILayout.PropertyField(identityName, new GUIContent("Display Name"));
        if (EditorGUI.EndChangeCheck())
        {
            SerializedProperty legacyId = archetype.FindPropertyRelative("enemyId");
            SerializedProperty legacyName = archetype.FindPropertyRelative("displayName");
            if (legacyId != null)
            {
                legacyId.stringValue = identityId.stringValue;
            }
            if (legacyName != null)
            {
                legacyName.stringValue = identityName.stringValue;
            }
        }
    }

    private void DrawTagComposition(SerializedProperty archetype)
    {
        SerializedProperty tags = archetype.FindPropertyRelative("tags");
        if (tags == null)
        {
            EditorGUILayout.HelpBox("Selected archetype has no tags list.", MessageType.Error);
            return;
        }

        using (new EditorGUILayout.VerticalScope(EditorStyles.helpBox))
        {
            using (new EditorGUILayout.HorizontalScope())
            {
                EditorGUILayout.LabelField("EnemyTag Composition", EditorStyles.boldLabel);
                if (GUILayout.Button("Add Tag", GUILayout.Width(92f)))
                {
                    ShowAddTagMenu(tags);
                }
            }

            if (tags.arraySize == 0)
            {
                EditorGUILayout.HelpBox("No tags. Add EnemyIdentity, EnemyHealth, EnemyDefence, EnemyVisualReference, and optionally EnemyIntentLoop.", MessageType.Warning);
            }

            for (int i = 0; i < tags.arraySize; i++)
            {
                DrawTagElement(tags, i);
            }
        }
    }

    private void DrawTagElement(SerializedProperty tags, int index)
    {
        SerializedProperty tag = tags.GetArrayElementAtIndex(index);
        object value = tag.managedReferenceValue;
        Type tagType = value != null ? value.GetType() : null;

        using (new EditorGUILayout.VerticalScope(EditorStyles.helpBox))
        {
            using (new EditorGUILayout.HorizontalScope())
            {
                EditorGUILayout.LabelField(tagType != null ? ObjectNames.NicifyVariableName(tagType.Name) : "Missing Tag", EditorStyles.boldLabel);
                using (new EditorGUI.DisabledScope(index <= 0))
                {
                    if (GUILayout.Button("Up", GUILayout.Width(44f)))
                    {
                        tags.MoveArrayElement(index, index - 1);
                    }
                }
                using (new EditorGUI.DisabledScope(index >= tags.arraySize - 1))
                {
                    if (GUILayout.Button("Down", GUILayout.Width(52f)))
                    {
                        tags.MoveArrayElement(index, index + 1);
                    }
                }
                if (GUILayout.Button("Remove", GUILayout.Width(68f)))
                {
                    RemoveArrayElement(tags, index);
                    return;
                }
            }

            if (tagType == typeof(EnemyIntentLoop))
            {
                DrawIntentLoop(tag);
            }
            else
            {
                EditorGUILayout.PropertyField(tag, GUIContent.none, true);
            }
        }
    }

    private void DrawIntentLoop(SerializedProperty intentLoop)
    {
        SerializedProperty intents = intentLoop.FindPropertyRelative("intents");
        if (intents == null)
        {
            EditorGUILayout.HelpBox("EnemyIntentLoop.intents was not found.", MessageType.Error);
            return;
        }

        using (new EditorGUILayout.HorizontalScope())
        {
            EditorGUILayout.LabelField("Intent Loop", EditorStyles.boldLabel);
            if (GUILayout.Button("Add Intent", GUILayout.Width(96f)))
            {
                ShowAddIntentMenu(intents);
            }
        }

        if (intents.arraySize == 0)
        {
            EditorGUILayout.HelpBox("Add intent instances to define this enemy turn loop.", MessageType.Info);
        }

        for (int i = 0; i < intents.arraySize; i++)
        {
            DrawIntentElement(intents, i);
        }
    }

    private void DrawIntentElement(SerializedProperty intents, int index)
    {
        SerializedProperty intent = intents.GetArrayElementAtIndex(index);
        object value = intent.managedReferenceValue;
        Type intentType = value != null ? value.GetType() : null;

        using (new EditorGUILayout.VerticalScope(EditorStyles.helpBox))
        {
            using (new EditorGUILayout.HorizontalScope())
            {
                EditorGUILayout.LabelField((index + 1) + ". " + (intentType != null ? ObjectNames.NicifyVariableName(intentType.Name) : "Missing Intent"), EditorStyles.boldLabel);
                using (new EditorGUI.DisabledScope(index <= 0))
                {
                    if (GUILayout.Button("Up", GUILayout.Width(44f)))
                    {
                        intents.MoveArrayElement(index, index - 1);
                    }
                }
                using (new EditorGUI.DisabledScope(index >= intents.arraySize - 1))
                {
                    if (GUILayout.Button("Down", GUILayout.Width(52f)))
                    {
                        intents.MoveArrayElement(index, index + 1);
                    }
                }
                if (GUILayout.Button("Remove", GUILayout.Width(68f)))
                {
                    RemoveArrayElement(intents, index);
                    return;
                }
            }

            EditorGUILayout.PropertyField(intent, GUIContent.none, true);
        }
    }

    private void CreateEnemy(SerializedProperty archetypes)
    {
        RecordCatalogUndo("Create Enemy Archetype");
        int index = archetypes.arraySize;
        archetypes.InsertArrayElementAtIndex(index);
        SerializedProperty archetype = archetypes.GetArrayElementAtIndex(index);
        archetype.managedReferenceValue = new EnemyArchetypeDefinition();
        catalogObject.ApplyModifiedProperties();
        catalogObject.Update();

        SerializedProperty refreshedArchetypes = catalogObject.FindProperty("archetypes");
        SerializedProperty created = refreshedArchetypes.GetArrayElementAtIndex(index);
        SerializedProperty legacyId = created.FindPropertyRelative("enemyId");
        SerializedProperty legacyName = created.FindPropertyRelative("displayName");
        if (legacyId != null)
        {
            legacyId.stringValue = newEnemyId;
        }
        if (legacyName != null)
        {
            legacyName.stringValue = newDisplayName;
        }

        SerializedProperty tags = created.FindPropertyRelative("tags");
        tags.ClearArray();
        AppendManagedReference(tags, new EnemyIdentity(newEnemyId, newDisplayName));
        AppendManagedReference(tags, new EnemyHealth(newHealth));
        AppendManagedReference(tags, new EnemyDefence(newDefence));
        AppendManagedReference(tags, new EnemyIntentLoop());
        AppendManagedReference(tags, new EnemyVisualReference());

        selectedIndex = index;
        catalogObject.ApplyModifiedProperties();
        MarkCatalogDirty();
    }

    private void ShowAddTagMenu(SerializedProperty tags)
    {
        GenericMenu menu = new GenericMenu();
        string tagsPath = tags.propertyPath;
        List<Type> tagTypes = GetConcreteTypes<EnemyTag>();
        for (int i = 0; i < tagTypes.Count; i++)
        {
            Type type = tagTypes[i];
            GUIContent label = new GUIContent(ObjectNames.NicifyVariableName(type.Name));
            if (typeof(EnemyIntent).IsAssignableFrom(type) || IsHiddenArchetypeTag(type))
            {
                continue;
            }

            if (FindFirstManagedReference(tags, type) != null)
            {
                menu.AddDisabledItem(new GUIContent(label.text + " (already added)"));
                continue;
            }

            if (type.GetConstructor(Type.EmptyTypes) == null)
            {
                menu.AddDisabledItem(new GUIContent(label.text + " (needs empty constructor)"));
                continue;
            }

            menu.AddItem(label, false, () => AddManagedReferenceAtPath(tagsPath, Activator.CreateInstance(type), "Add Enemy Tag"));
        }

        if (menu.GetItemCount() == 0)
        {
            menu.AddDisabledItem(new GUIContent("No tag types available"));
        }

        menu.ShowAsContext();
    }

    private void ShowAddIntentMenu(SerializedProperty intents)
    {
        GenericMenu menu = new GenericMenu();
        string intentsPath = intents.propertyPath;
        List<Type> intentTypes = GetConcreteTypes<EnemyIntent>();
        for (int i = 0; i < intentTypes.Count; i++)
        {
            Type type = intentTypes[i];
            GUIContent label = new GUIContent(ObjectNames.NicifyVariableName(type.Name));
            if (type.GetConstructor(Type.EmptyTypes) == null)
            {
                menu.AddDisabledItem(new GUIContent(label.text + " (needs empty constructor)"));
                continue;
            }

            menu.AddItem(label, false, () => AddManagedReferenceAtPath(intentsPath, Activator.CreateInstance(type), "Add Enemy Intent"));
        }

        if (menu.GetItemCount() == 0)
        {
            menu.AddDisabledItem(new GUIContent("No intent types available"));
        }

        menu.ShowAsContext();
    }

    private static List<Type> GetConcreteTypes<TBase>()
    {
        List<Type> types = new List<Type>();
        foreach (Type type in TypeCache.GetTypesDerivedFrom<TBase>())
        {
            if (type.IsAbstract || type.IsGenericType)
            {
                continue;
            }

            types.Add(type);
        }

        types.Sort((left, right) => string.Compare(left.Name, right.Name, StringComparison.Ordinal));
        return types;
    }

    private static bool IsHiddenArchetypeTag(Type type)
    {
        for (int i = 0; i < HiddenArchetypeTagTypes.Length; i++)
        {
            if (HiddenArchetypeTagTypes[i] == type)
            {
                return true;
            }
        }

        return false;
    }

    private void AddManagedReferenceAtPath(string arrayPropertyPath, object instance, string undoName)
    {
        EnsureSerializedObject();
        if (catalogObject == null)
        {
            return;
        }

        catalogObject.Update();
        SerializedProperty array = catalogObject.FindProperty(arrayPropertyPath);
        AddManagedReference(array, instance, undoName);
    }

    private void AddManagedReference(SerializedProperty array, object instance, string undoName)
    {
        if (array == null || instance == null)
        {
            return;
        }

        RecordCatalogUndo(undoName);
        AppendManagedReference(array, instance);
        catalogObject.ApplyModifiedProperties();
        MarkCatalogDirty();
    }

    private static void AppendManagedReference(SerializedProperty array, object instance)
    {
        int index = array.arraySize;
        array.InsertArrayElementAtIndex(index);
        SerializedProperty element = array.GetArrayElementAtIndex(index);
        element.managedReferenceValue = instance;
    }

    private void SetManagedReference(SerializedProperty property, object instance, string undoName)
    {
        RecordCatalogUndo(undoName);
        property.managedReferenceValue = instance;
        catalogObject.ApplyModifiedProperties();
        MarkCatalogDirty();
    }

    private void RemoveArrayElement(SerializedProperty array, int index)
    {
        RecordCatalogUndo("Remove Enemy Composition Item");
        int sizeBefore = array.arraySize;
        array.DeleteArrayElementAtIndex(index);
        if (array.arraySize == sizeBefore && index < array.arraySize)
        {
            array.DeleteArrayElementAtIndex(index);
        }

        catalogObject.ApplyModifiedProperties();
        MarkCatalogDirty();
    }

    private static SerializedProperty FindFirstManagedReference(SerializedProperty array, Type type)
    {
        if (array == null || type == null)
        {
            return null;
        }

        for (int i = 0; i < array.arraySize; i++)
        {
            SerializedProperty element = array.GetArrayElementAtIndex(i);
            object value = element.managedReferenceValue;
            if (value != null && value.GetType() == type)
            {
                return element;
            }
        }

        return null;
    }

    private static string BuildArchetypeLabel(SerializedProperty archetype, int index)
    {
        SerializedProperty tags = archetype.FindPropertyRelative("tags");
        SerializedProperty identity = FindFirstManagedReference(tags, typeof(EnemyIdentity));
        if (identity != null)
        {
            string id = identity.FindPropertyRelative("enemyId")?.stringValue;
            string displayName = identity.FindPropertyRelative("displayName")?.stringValue;
            if (!string.IsNullOrWhiteSpace(displayName))
            {
                return displayName + " (" + id + ")";
            }
            if (!string.IsNullOrWhiteSpace(id))
            {
                return id;
            }
        }

        string fallbackName = archetype.FindPropertyRelative("displayName")?.stringValue;
        if (!string.IsNullOrWhiteSpace(fallbackName))
        {
            return fallbackName;
        }

        return "Enemy " + (index + 1);
    }

    private static string ReadFallbackId(SerializedProperty archetype)
    {
        string value = archetype.FindPropertyRelative("enemyId")?.stringValue;
        return string.IsNullOrWhiteSpace(value) ? "basic" : value;
    }

    private static string ReadFallbackName(SerializedProperty archetype)
    {
        string value = archetype.FindPropertyRelative("displayName")?.stringValue;
        return string.IsNullOrWhiteSpace(value) ? ReadFallbackId(archetype) : value;
    }

    private void SetCatalog(EnemyCatalog targetCatalog)
    {
        catalog = targetCatalog;
        catalogObject = catalog != null ? new SerializedObject(catalog) : null;
        selectedIndex = 0;
    }

    private void EnsureSerializedObject()
    {
        if (catalogObject == null || catalogObject.targetObject != catalog)
        {
            catalogObject = catalog != null ? new SerializedObject(catalog) : null;
        }
    }

    private void FindSceneCatalogIfNeeded()
    {
        if (catalog == null)
        {
            SetCatalog(FindSceneCatalog());
        }
    }

    private static EnemyCatalog FindSceneCatalog()
    {
#if UNITY_2023_1_OR_NEWER
        return Object.FindFirstObjectByType<EnemyCatalog>();
#else
        return Object.FindObjectOfType<EnemyCatalog>();
#endif
    }

    private void RecordCatalogUndo(string name)
    {
        if (catalog != null)
        {
            Undo.RecordObject(catalog, name);
        }
    }

    private void MarkCatalogDirty()
    {
        if (catalog != null)
        {
            EditorUtility.SetDirty(catalog);
        }
    }
}
