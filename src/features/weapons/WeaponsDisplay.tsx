import { type Weapon } from "~/types/weapons";
import { useQuery } from "@tanstack/react-query";
import { WeaponItem } from "./WeaponItem";
import { useState } from "react";
import { cn } from "~/utils/cn";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { useWeaponFilters } from "../weapon-controls/filtering/useWeaponFilters";
import { useWeaponSorting } from "../weapon-controls/sorting/useWeaponSorting";
import {
  type RequirementSortKey,
  type SortDirection,
  type SortState,
} from "../weapon-controls/sorting/types";
import { DEFAULT_SORT_STATE } from "../weapon-controls/sorting/constants";
import { SortWeapons } from "../weapon-controls/sorting/SortWeapons";
import { FilterWeapons } from "../weapon-controls/filtering/FilterWeapons";

export const WeaponsDisplay = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [sortState, setSortState] = useState<SortState>(DEFAULT_SORT_STATE);

  const { data: weapons, isLoading } = useQuery<Weapon[]>({
    queryKey: ["weapons"],
    queryFn: async () => {
      const response = await fetch("/data/weapons/weapons.json");
      return response.json();
    },
  });

  const { filterWeapons } = useWeaponFilters();
  const { sortWeapons } = useWeaponSorting();

  const handleSortChange = (key: RequirementSortKey) => {
    setSortState((prev) => {
      // If clicking the same key, cycle through directions
      if (prev.key === key) {
        const nextDirection: SortDirection =
          prev.direction === "off"
            ? "asc"
            : prev.direction === "asc"
            ? "desc"
            : "off";

        return {
          ...prev,
          direction: nextDirection,
        };
      }

      // If clicking a different key, start with ascending
      return {
        key,
        direction: "asc",
      };
    });
  };

  if (isLoading) {
    return (
      <div className="flex min-h-[200px] items-center justify-center">
        <div className="text-lg">Loading weapons...</div>
      </div>
    );
  }

  const filteredWeapons = weapons ? filterWeapons(weapons) : [];
  const sortedWeapons = sortWeapons(
    filteredWeapons,
    sortState.key,
    sortState.direction
  );
  const totalWeapons = weapons?.length ?? 0;
  const filteredOutCount = totalWeapons - filteredWeapons.length;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold">Weapons</h2>
          {filteredOutCount > 0 ? (
            <p className="text-sm text-stone-600 dark:text-stone-400">
              {filteredOutCount} weapons hidden
            </p>
          ) : (
            <p className="text-sm text-stone-600 dark:text-stone-400">
              All {totalWeapons} weapons
            </p>
          )}
        </div>
      </div>

      <FilterWeapons />
      <SortWeapons sortState={sortState} onSortChange={handleSortChange} />

      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={cn(
          "ml-auto flex items-center gap-1 rounded-lg px-3 py-1.5",
          "text-sm font-medium",
          "bg-stone-800 text-stone-300 hover:bg-stone-700"
        )}
      >
        {isCollapsed ? (
          <FiChevronRight className="size-4" />
        ) : (
          <FiChevronDown className="size-4" />
        )}
        {isCollapsed ? "Expand" : "Collapse"}
      </button>

      <div
        className={cn(
          isCollapsed
            ? "flex flex-wrap gap-x-3 gap-y-1"
            : "grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-x-0.5 gap-y-2 md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] md:gap-2"
        )}
      >
        {sortedWeapons.length === 0 ? (
          <div className="text-center text-stone-600 dark:text-stone-400">
            No weapons found, try to remove some filters
          </div>
        ) : (
          sortedWeapons.map((weapon) => (
            <WeaponItem
              key={weapon.name}
              weapon={weapon}
              isCollapsed={isCollapsed}
            />
          ))
        )}
      </div>
    </div>
  );
};
