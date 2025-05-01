import { type Weapon } from "~/types/weapons";
import { type RequirementSortKey, type SortDirection } from "./types";

export function useWeaponSorting() {
  const sortWeapons = (
    weapons: Weapon[],
    key: RequirementSortKey,
    direction: SortDirection
  ) => {
    if (direction === "off") return weapons;

    return [...weapons].sort((a, b) => {
      const aValue = a.requirements.strength;
      const bValue = b.requirements.strength;

      const comparison = aValue - bValue;
      return direction === "asc" ? comparison : -comparison;
    });
  };

  return {
    sortWeapons,
  };
}