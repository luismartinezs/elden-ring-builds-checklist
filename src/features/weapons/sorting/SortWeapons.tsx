import { type RequirementSortKey, type SortState } from "./types";
import { SORT_CONFIGS } from "./constants";
import { SortButton } from "./SortButton";

interface SortWeaponsProps {
  sortState: SortState;
  onSortChange: (key: RequirementSortKey) => void;
}

export function SortWeapons({ sortState, onSortChange }: SortWeaponsProps) {
  // Group configs by section
  const requirementConfigs = SORT_CONFIGS.filter(
    (config) => config.section === "requirements"
  );

  return (
    <div className="flex flex-col gap-3">
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-stone-600 dark:text-stone-400">
          Sort by Requirements
        </h3>
        <div className="flex flex-wrap items-center gap-2">
          {requirementConfigs.map((config) => (
            <SortButton
              key={config.key}
              direction={
                sortState.key === config.key ? sortState.direction : "off"
              }
              label={config.label}
              onClick={() => onSortChange(config.key)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
