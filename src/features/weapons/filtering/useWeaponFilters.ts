import { type Weapon } from "~/types/weapons";
import { useManageStats } from "~/features/stats/useManageStats";
import { type TStatKey } from "~/features/stats/stats";

// Map TStatKey to weapon requirement keys
const statKeyToRequirementKey: Record<TStatKey, keyof Weapon["requirements"]> = {
  str: "strength",
  dex: "dexterity",
  int: "intelligence",
  fai: "faith",
  arc: "arcane",
  vgr: "strength", // These stats don't have weapon requirements
  mnd: "strength", // so we'll map them to strength as a default
  end: "strength", // they won't be used in practice
};

export function useWeaponFilters() {
  const { getCurrentStats } = useManageStats();

  const filterWeapons = (weapons: Weapon[]) => {
    const currentStats = getCurrentStats();

    return weapons.filter((weapon) =>
      // Check if character meets all stat requirements
      Object.entries(weapon.requirements).every(([reqKey, reqValue]) => {
        // Find the corresponding stat key for this requirement
        const statKey = Object.entries(statKeyToRequirementKey).find(
          ([_, weaponKey]) => weaponKey === reqKey
        )?.[0] as TStatKey | undefined;

        if (!statKey) return true; // Skip if no matching stat found
        return currentStats[statKey] >= reqValue;
      })
    );
  };

  return {
    filterWeapons,
  };
}