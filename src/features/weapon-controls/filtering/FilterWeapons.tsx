import { TwoHandCheckbox } from "./two-hand";

export const FilterWeapons = () => {
  return (
    <div>
      <h2 className="text-xs text-stone-400">Filters</h2>
      <div className="flex flex-col gap-2 rounded-md border border-stone-500 p-2">
        <TwoHandCheckbox />
      </div>
    </div>
  );
};
