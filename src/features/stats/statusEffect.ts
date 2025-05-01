export type TStatusEffect = "poison" | "hemorrhage" | "frostbite" | "scarletRot" | "sleep" | "madness" | "deathBlight"

export const statusEffectColorMap: Record<TStatusEffect, string> = {
  poison: "bg-green-500/60",
  hemorrhage: "bg-red-500/60",
  frostbite: "bg-indigo-500/60",
  scarletRot: "bg-rose-500/60",
  sleep: "bg-purple-500/60",
  madness: "bg-yellow-500/60",
  deathBlight: "bg-slate-500/60",
};
