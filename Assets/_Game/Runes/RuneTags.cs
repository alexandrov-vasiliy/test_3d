using System;
using UnityEngine;

namespace _Game.Runes
{
    /// <summary>
    /// Provides the common base for serialized rune composition tags; tags carry presentation, targeting, or gameplay effect data without using enum-driven rune identity.
    /// </summary>
    [Serializable]
    public abstract class RuneTag
    {
    }

    /// <summary>
    /// Stores stable authored identity for a rune; runtime matching and effects are supplied by other rune tags.
    /// </summary>
    [Serializable]
    public sealed class RuneIdentityTag : RuneTag
    {
        [SerializeField] private string runeId = "rune";
        [SerializeField] private string displayName = "Rune";

        public RuneIdentityTag()
        {
        }

        public RuneIdentityTag(string runeId, string displayName)
        {
            this.runeId = string.IsNullOrWhiteSpace(runeId) ? "rune" : runeId;
            this.displayName = string.IsNullOrWhiteSpace(displayName) ? this.runeId : displayName;
        }

        public string RuneId => string.IsNullOrWhiteSpace(runeId) ? "rune" : runeId;
        public string DisplayName => string.IsNullOrWhiteSpace(displayName) ? RuneId : displayName;
    }

    /// <summary>
    /// Defines presentation color for rune pieces and cast visuals; gameplay identity and matching stay in separate tags.
    /// </summary>
    [Serializable]
    public sealed class RuneColorTag : RuneTag
    {
        [SerializeField] private Color color = Color.white;

        public RuneColorTag()
        {
        }

        public RuneColorTag(Color color)
        {
            this.color = color;
        }

        public Color Color => color;
    }

    /// <summary>
    /// Defines optional material presentation for rune visuals; gameplay effects do not depend on this tag.
    /// </summary>
    [Serializable]
    public sealed class RuneMaterialTag : RuneTag
    {
        [SerializeField] private Material material;

        public Material Material => material;
    }

    /// <summary>
    /// Defines how rune pieces should be grouped for merge matching when rune ids should share a match family.
    /// </summary>
    [Serializable]
    public sealed class RuneMatchGroupTag : RuneTag
    {
        [SerializeField] private string matchGroup = "default";

        public RuneMatchGroupTag()
        {
        }

        public RuneMatchGroupTag(string matchGroup)
        {
            this.matchGroup = string.IsNullOrWhiteSpace(matchGroup) ? "default" : matchGroup;
        }

        public string MatchGroup => string.IsNullOrWhiteSpace(matchGroup) ? "default" : matchGroup;
    }

    /// <summary>
    /// Stores the base damage applied by a target-dependent damage rune effect after a cast projectile hits.
    /// </summary>
    [Serializable]
    public sealed class RuneDamageTag : RuneTag
    {
        [SerializeField] private int value = 1;

        public RuneDamageTag()
        {
        }

        public RuneDamageTag(int value)
        {
            this.value = value;
        }

        public int Value => Mathf.Max(0, value);
    }

    /// <summary>
    /// Stores extra damage per cleared rune beyond the first ten; damage resolution remains in rune effects.
    /// </summary>
    [Serializable]
    public sealed class RuneAdditionalDamageTag : RuneTag
    {
        [SerializeField] private int value;

        public RuneAdditionalDamageTag()
        {
        }

        public RuneAdditionalDamageTag(int value)
        {
            this.value = value;
        }

        public int Value => Mathf.Max(0, value);
    }

    /// <summary>
    /// Marks a damage rune effect as ignoring enemy defence; it does not remove or mutate defence by itself.
    /// </summary>
    [Serializable]
    public sealed class RuneTrueDamageTag : RuneTag
    {
    }

    /// <summary>
    /// Stores player healing amount for non-target rune effects; application is performed by HealPlayerRuneEffect.
    /// </summary>
    [Serializable]
    public sealed class RuneHealPlayerTag : RuneTag
    {
        [SerializeField] private int value = 1;

        public RuneHealPlayerTag()
        {
        }

        public RuneHealPlayerTag(int value)
        {
            this.value = value;
        }

        public int Value => Mathf.Max(0, value);
    }

    /// <summary>
    /// Marks a rune as fire-themed for presentation and future status effects; concrete gameplay stays in effect tags.
    /// </summary>
    [Serializable]
    public sealed class RuneFireEffectTag : RuneTag
    {
    }

    /// <summary>
    /// Configures the visual charge created above a stack while cleared rune pieces disappear.
    /// </summary>
    [Serializable]
    public sealed class RuneChargeVisualTag : RuneTag
    {
        [SerializeField] private GameObject prefab;
        [SerializeField] private float baseScale = 0.25f;
        [SerializeField] private float scalePerPiece = 0.04f;
        [SerializeField] private float maxScale = 1.5f;
        [SerializeField] private Vector3 offset = new Vector3(0f, 0.85f, 0f);

        public GameObject Prefab => prefab;
        public float BaseScale => Mathf.Max(0.01f, baseScale);
        public float ScalePerPiece => Mathf.Max(0f, scalePerPiece);
        public float MaxScale => Mathf.Max(BaseScale, maxScale);
        public Vector3 Offset => offset;
    }

    /// <summary>
    /// Configures projectile presentation for a completed rune cast; hit timing is reported back to RuneCombatController.
    /// </summary>
    [Serializable]
    public sealed class RuneProjectileVisualTag : RuneTag
    {
        [SerializeField] private GameObject prefab;
        [SerializeField] private float speed = 17f;
        [SerializeField] private float hitDistance = 0.18f;
        [SerializeField] private float dissipateDuration = 0.2f;

        public GameObject Prefab => prefab;
        public float Speed => Mathf.Max(0.1f, speed);
        public float HitDistance => Mathf.Max(0.01f, hitDistance);
        public float DissipateDuration => Mathf.Max(0f, dissipateDuration);
    }
}
