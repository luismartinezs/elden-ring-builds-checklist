import { type Weapon } from "~/types/weapons";
import { type RequirementSortKey, type SortDirection } from "./types";

const requirementKeyMap: Record<RequirementSortKey, keyof Weapon["requirements"]> = {
  str: "strength",
  dex: "dexterity",
  int: "intelligence",
  fai: "faith",
  arc: "arcane",
};

export function useWeaponSorting() {
  const sortWeapons = (
    weapons: Weapon[],
    key: RequirementSortKey,
    direction: SortDirection
  ) => {
    if (direction === "off") return weapons;

    const requirementKey = requirementKeyMap[key];

    return [...weapons].sort((a, b) => {
      const aValue = a.requirements[requirementKey];
      const bValue = b.requirements[requirementKey];

      const comparison = aValue - bValue;
      return direction === "asc" ? comparison : -comparison;
    });
  };

  return {
    sortWeapons,
  };
}