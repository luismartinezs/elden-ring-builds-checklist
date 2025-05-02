import { type Weapon } from "~/types/weapons";
import { useManageStats } from "~/features/stats/useManageStats";
import { useManageWeaponFilters } from "./useManageWeaponFilters";
import { useMemo } from "react";
import { meetsElemDmgRequirements, meetsStatRequirements, meetsPhysDmgRequirements, meetsStatusEffectRequirements, type WeaponPredicate, meetsUpgradeTypeRequirements } from "./predicates";


export function useWeaponFilters() {
  const { getCurrentStats } = useManageStats();
  const { getCurrentWeaponFilters } =
    useManageWeaponFilters();

  // memoize so you don't rebuild on every render
  const predicates = useMemo<WeaponPredicate[]>(() => [
    meetsStatRequirements,
    meetsElemDmgRequirements,
    meetsPhysDmgRequirements,
    meetsStatusEffectRequirements,
    meetsUpgradeTypeRequirements
  ], []);

  const filterWeapons = (weapons: Weapon[]) => {
    const stats = getCurrentStats();
    const filters = getCurrentWeaponFilters();

    return weapons.filter((w) =>
      predicates.every((pred) => pred({ weapon: w, stats, filters }))
    );
  };

  return {
    filterWeapons,
  };
}