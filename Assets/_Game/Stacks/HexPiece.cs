namespace _Game.Stacks
{
    /// <summary>
    /// Stores one runtime stack piece as a rune identity token; gameplay effects and visuals are resolved by rune services instead of enum data.
    /// </summary>
    [System.Serializable]
    public class HexPiece
    {
        public string runeId;

        public HexPiece(string runeId)
        {
            this.runeId = string.IsNullOrWhiteSpace(runeId) ? "fire" : runeId;
        }
    }
}
