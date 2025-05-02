import { ElementDmg } from "./element-dmg";
import { TwoHandCheckbox } from "./two-hand";

export const FilterWeapons = () => {
  return (
    <div>
      <h2 className="text-xs text-stone-400">Filters</h2>
      <div className="flex items-stretch gap-3 rounded-md border border-stone-500 p-2">
        <TwoHandCheckbox />
        <div className="w-px bg-stone-600"></div>
        <ElementDmg />
      </div>
    </div>
  );
};
