using System.Collections.Generic;
using _Game.Configs;
using _Game.Stacks;
using UnityEngine;

namespace _Game.Runes
{
    /// <summary>
    /// Provides runtime default rune definitions for current HexColor-authored levels until stack and hand data migrate to rune ids.
    /// </summary>
    public sealed class LegacyHexColorRuneResolver : IRuneResolver
    {
        private readonly Dictionary<HexColor, RuneDefinition> runesByColor = new Dictionary<HexColor, RuneDefinition>();

        public LegacyHexColorRuneResolver(HexColorConfig colorConfig)
        {
            AddDamageRune(HexColor.Red, "fire", "Fire Rune", colorConfig, 3, 1, new RuneFireEffectTag());
            AddDamageRune(HexColor.Blue, "water", "Water Rune", colorConfig, 2, 1, null);
            AddHealRune(HexColor.Green, "heal", "Heal Rune", colorConfig, 1);
            AddDamageRune(HexColor.Yellow, "light", "Light Rune", colorConfig, 2, 1, null);
            AddDamageRune(HexColor.Purple, "arcane", "Arcane Rune", colorConfig, 2, 1, null);
            AddDamageRune(HexColor.Orange, "ember", "Ember Rune", colorConfig, 2, 1, new RuneFireEffectTag());
        }

        public bool TryResolveLegacyColor(HexColor color, out RuneDefinition rune)
        {
            return runesByColor.TryGetValue(color, out rune);
        }

        private void AddDamageRune(HexColor color, string runeId, string displayName, HexColorConfig colorConfig, int damage, int additionalDamage, RuneTag optionalThemeTag)
        {
            List<RuneTag> tags = new List<RuneTag>
            {
                new RuneIdentityTag(runeId, displayName),
                new RuneColorTag(ResolveColor(color, colorConfig)),
                new RuneMatchGroupTag(runeId),
                new RuneDamageTag(damage),
                new RuneAdditionalDamageTag(additionalDamage),
                new RuneChargeVisualTag(),
                new RuneProjectileVisualTag(),
                new TargetNearestEnemyTag(),
                new DamageEnemyRuneEffect()
            };

            if (optionalThemeTag != null)
            {
                tags.Add(optionalThemeTag);
            }

            runesByColor[color] = new RuneDefinition(runeId, displayName, tags);
        }

        private void AddHealRune(HexColor color, string runeId, string displayName, HexColorConfig colorConfig, int heal)
        {
            runesByColor[color] = new RuneDefinition(runeId, displayName, new RuneTag[]
            {
                new RuneIdentityTag(runeId, displayName),
                new RuneColorTag(ResolveColor(color, colorConfig)),
                new RuneMatchGroupTag(runeId),
                new RuneHealPlayerTag(heal),
                new RuneChargeVisualTag(),
                new RuneProjectileVisualTag(),
                new HealPlayerRuneEffect()
            });
        }

        private static Color ResolveColor(HexColor color, HexColorConfig colorConfig)
        {
            return colorConfig != null ? colorConfig.GetColor(color) : HexColorConfig.GetFallbackColor(color);
        }
    }
}
