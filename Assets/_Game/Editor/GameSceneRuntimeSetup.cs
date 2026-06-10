using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;
using UnityEngine.SceneManagement;

/// <summary>
/// Provides batch and menu scene setup for runtime controller objects; authoring data remains in LevelConfig assets.
/// </summary>
public static class GameSceneRuntimeSetup
{
    private const string ScenePath = "Assets/_Game/Scenes/Game.unity";

    [MenuItem("Tools/Hex Merge/Setup Runtime Scene Objects")]
    public static void SetupRuntimeSceneObjects()
    {
        Scene scene = EditorSceneManager.OpenScene(ScenePath, OpenSceneMode.Single);
        Main main = Object.FindObjectOfType<Main>();
        if (main == null)
        {
            throw new MissingReferenceException("Main was not found in " + ScenePath + ".");
        }

        main.SetupSceneObjects();
        EditorUtility.SetDirty(main);
        EditorSceneManager.MarkSceneDirty(scene);
        EditorSceneManager.SaveScene(scene);
        AssetDatabase.SaveAssets();
        Debug.Log("Runtime scene objects were created or updated in " + ScenePath + ".");
    }
}
