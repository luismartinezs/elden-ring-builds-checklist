import { useEffect } from "react";
import { lists } from "~/data";
import { initAppData } from "~/features/checklist/hooks/useManageProfiles";
import { type AppData } from "~/features/checklist/types";
import { TAGS } from "~/features/tags";
import { initStats } from "~/features/stats/stats";

export function useMigrateLegacyData() {
  useEffect(() => {
    // Step 1: Read New and Legacy Data
    const rawData = localStorage.getItem("appData");
    const newData = rawData ? (JSON.parse(rawData) as AppData) : initAppData;

    const legacyKeys = [
      ...Object.values(TAGS).map((key) => `filter-${key}`),
      ...lists.map((list) => list.slug),
    ];

    // Step 2: Check for Legacy Data
    const legacyDataExists = legacyKeys.some(
      (key) => localStorage.getItem(key) !== null
    );

    // Step 3: Migrate Data if Necessary
    if (legacyDataExists) {
      const defaultProfile = newData.profiles.Default ?? {
        checklists: {},
        filters: {} as Record<string, boolean>,
        stats: initStats,
        weaponFilters: {},
      };

      legacyKeys.forEach((key) => {
        const value = localStorage.getItem(key);

        if (key.startsWith("filter-")) {
          defaultProfile.filters[key.replace("filter-", "")] = value === "true";
        } else {
          if (value) {
            defaultProfile.checklists[key] = JSON.parse(value) as string[];
          }
        }

        // Delete the legacy item
        localStorage.removeItem(key);
      });

      // Add migrated data to new data structure
      newData.profiles.Default = defaultProfile;

      // Step 4: Save the New Data Structure
      localStorage.setItem("appData", JSON.stringify(newData));
    }
  }, []); // Run once on component mount
}
