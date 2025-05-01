export type TDmgType = "physical" | "magic" | "fire" | "lightning" | "holy" | "critical"

export const dmgColorMap: Record<TDmgType, string> = {
  physical: "bg-gray-500/60",
  magic: "bg-sky-500/60",
  fire: "bg-red-500/60",
  lightning: "bg-yellow-500/60",
  holy: "bg-lime-500/60",
  critical: "bg-purple-500/60",
};