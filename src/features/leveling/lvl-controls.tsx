// controls to influence level suggestion

import { TwoHandCheckbox } from "../weapon-controls/filtering/two-hand";
import { ItemRequirements } from "./item-requirements";

export const LvlControls = () => {
  return (
    <>
      <div className="flex flex-wrap items-stretch gap-x-2 gap-y-4 rounded-md border border-stone-500 p-2">
        <TwoHandCheckbox />
        {/* item requirements inputs (similar to stat): str, dex, int, fai, arc */}
        {/* archetype select */}
      </div>
      <div>
        <div className="text-sm text-stone-400">Weapon requirements</div>
        <div className="flex flex-wrap items-stretch gap-x-2 gap-y-4 rounded-md border border-stone-500 p-2">
          <ItemRequirements />
        </div>
      </div>
    </>
  );
};
