// controls to influence level suggestion

import { TwoHandCheckbox } from "../weapon-controls/filtering/two-hand";
import { ItemRequirements } from "./item-requirements";
import { LuSword } from "react-icons/lu";
import { IoOptionsOutline } from "react-icons/io5";
import { SelectArchetype } from "./select-archetype";

export const LvlControls = () => {
  return (
    <>
      <div>
        <div className="flex items-center gap-2 text-stone-400">
          <IoOptionsOutline size={20} /> Options
        </div>
        <div className="flex flex-wrap items-stretch gap-x-6 gap-y-4 rounded-md border border-stone-500 p-2">
          <TwoHandCheckbox />
          <SelectArchetype />
        </div>
      </div>
      <div>
        <div className="text-stone-400">
          <LuSword className="inline-block" size={20} /> Weapon requirements
        </div>
        <div className="flex flex-wrap items-stretch gap-x-2 gap-y-4 rounded-md border border-stone-500 p-2">
          <ItemRequirements />
        </div>
      </div>
    </>
  );
};
