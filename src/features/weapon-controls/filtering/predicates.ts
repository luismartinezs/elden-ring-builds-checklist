import { type TAtkStatKey } from "~/features/stats/stats";
import { twoHandKey } from "./two-hand";
import { type WeaponFilters } from "~/features/checklist/types";
import { type Weapon } from "~/types/weapons";
import { elemDmgTypesKeys } from "./element-dmg";
import { physDmgTypesKeys } from "./phys-dmg";
import { isSubArray } from "~/utils/issubarray";
import { statusEffectKeys } from "~/features/stats/statusEffect";

export type WeaponPredicate = (
  { weapon, stats, filters }: {
    weapon: Weapon,
    stats: Record<TAtkStatKey, number>,
    filters: WeaponFilters
  }
) => boolean;

// Map TStatKey to weapon requirement keys
const statKeyToRequirementKey: Record<TAtkStatKey, keyof Weapon["requirements"]> = {
  str: "strength",
  dex: "dexterity",
  int: "intelligence",
  fai: "faith",
  arc: "arcane",
};

const elemDmgTypeToKey: Record<(typeof elemDmgTypesKeys)[number], keyof Weapon["attack"]> = {
  magicatk: "magic",
  fireatk: "fire",
  lightningatk: "lightning",
  holyatk: "holy",
};

export const meetsStatRequirements: WeaponPredicate = ({ weapon, stats, filters }) => {
  return (Object.entries(statKeyToRequirementKey) as [TAtkStatKey, keyof Weapon["requirements"]][])
    .every(([statKey, reqKey]) => {
      if (filters[twoHandKey] && statKey === "str") {
        return stats[statKey] * 1.5 >= weapon.requirements[reqKey];
      }
      return stats[statKey] >= weapon.requirements[reqKey];
    });
}

export const meetsElemDmgRequirements: WeaponPredicate = ({ weapon, filters }) => {
  /**
   * Logic:
   * - no filters applied (lal false): return true
   * - one or more filters applied: return only condition (ignore filters set to false)
   */
  if (elemDmgTypesKeys.every((key) => !filters[key])) {
    return true;
  }

  return elemDmgTypesKeys.every((key) => {
    const atkKey = elemDmgTypeToKey[key];
    const atkValue = weapon.attack[atkKey];
    const filterValue = filters[key];
    if (filterValue) {
      return atkValue > 0;
    }
    return true
  });
}

export const meetsPhysDmgRequirements: WeaponPredicate = ({ weapon, filters }) => {
  /**
   * Logic:
   * - if no filters applied, return true
   * - if one or more filters applied, check the weapon.damage_types array. If all applied filters are present in the array, return true
   */
  const noFiltersApplied = physDmgTypesKeys.every((key) => !filters[key]);

  if (noFiltersApplied) {
    return true;
  }

  const activeFilters = physDmgTypesKeys.filter((key) => filters[key]);

  return isSubArray(weapon.damage_types, activeFilters);
}

export const meetsStatusEffectRequirements: WeaponPredicate = ({ weapon, filters }) => {
  return statusEffectKeys.every((key) => {
    const filterValue = filters[key];
    if (filterValue) {
      return weapon.status_buildup[key] > 0;
    }
    return true;
  });
}
