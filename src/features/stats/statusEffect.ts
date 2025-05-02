export type TStatusEffect = "poison" | "hemorrhage" | "frostbite" | "scarlet_rot" | "sleep" | "madness" | "death_blight"

export const statusEffectKeys = [
  "poison",
  "hemorrhage",
  "frostbite",
  "scarlet_rot",
  "sleep",
  "madness",
  "death_blight",
] as const;

export const statusEffectColorMap: Record<TStatusEffect, string> = {
  poison: "bg-green-400",
  hemorrhage: "bg-red-400",
  frostbite: "bg-cyan-400",
  scarlet_rot: "bg-rose-400",
  sleep: "bg-purple-400",
  madness: "bg-yellow-400",
  death_blight: "bg-slate-400",
};
