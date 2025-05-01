import { type Weapon } from "~/types/weapons";
import { useQuery } from "@tanstack/react-query";
import { WeaponItem } from "./WeaponItem";
import { useState } from "react";
import { cn } from "~/utils/cn";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { useWeaponFilters } from "./filtering/useWeaponFilters";

export const WeaponsDisplay = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { data: weapons, isLoading } = useQuery<Weapon[]>({
    queryKey: ["weapons"],
    queryFn: async () => {
      const response = await fetch("/data/weapons/weapons.json");
      return response.json();
    },
  });

  const { filterWeapons } = useWeaponFilters();

  if (isLoading) {
    return (
      <div className="flex min-h-[200px] items-center justify-center">
        <div className="text-lg">Loading weapons...</div>
      </div>
    );
  }

  const filteredWeapons = weapons ? filterWeapons(weapons) : [];
  const totalWeapons = weapons?.length ?? 0;
  const filteredOutCount = totalWeapons - filteredWeapons.length;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold">Weapons</h2>
          {filteredOutCount > 0 && (
            <p className="text-sm text-stone-600 dark:text-stone-400">
              {filteredOutCount} weapons hidden (stat requirements not met)
            </p>
          )}
        </div>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={cn(
            "flex items-center gap-1 rounded-lg px-3 py-1.5",
            "bg-stone-100 text-sm font-medium text-stone-700",
            "hover:bg-stone-200",
            "dark:bg-stone-800 dark:text-stone-300 dark:hover:bg-stone-700"
          )}
        >
          {isCollapsed ? (
            <FiChevronRight className="size-4" />
          ) : (
            <FiChevronDown className="size-4" />
          )}
          {isCollapsed ? "Expand" : "Collapse"}
        </button>
      </div>

      <div
        className={cn(
          isCollapsed
            ? "flex flex-wrap gap-x-2 gap-y-1"
            : "grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-2"
        )}
      >
        {filteredWeapons.map((weapon) => (
          <WeaponItem
            key={weapon.name}
            weapon={weapon}
            isCollapsed={isCollapsed}
          />
        ))}
      </div>
    </div>
  );
};
