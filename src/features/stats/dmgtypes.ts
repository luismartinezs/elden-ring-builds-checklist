export type TDmgType = "physical" | "magic" | "fire" | "lightning" | "holy" | "critical"

export const dmgColorMap: Record<TDmgType, string> = {
  physical: "bg-gray-600/90",
  magic: "bg-sky-700/80",
  fire: "bg-amber-700/80",
  lightning: "bg-yellow-200/50",
  holy: "bg-yellow-500/80",
  critical: "bg-red-600/60",
};