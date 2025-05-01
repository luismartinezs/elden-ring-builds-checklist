export type TDmgType = "Pysical" | "Magic" | "Fire" | "Lightning" | "Holy"

export const dmgColorMap: Record<TDmgType, string> = {
  Pysical: "bg-gray-500/60",
  Magic: "bg-sky-500/60",
  Fire: "bg-red-500/60",
  Lightning: "bg-yellow-500/60",
  Holy: "bg-lime-500/60",
};