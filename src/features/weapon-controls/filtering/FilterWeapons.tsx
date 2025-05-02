import { ElementDmg } from "./element-dmg";
import { PhysDmg } from "./phys-dmg";
import { StatusEffect } from "./status-effect";
import { TwoHandCheckbox } from "./two-hand";

const Pipe = () => {
  return <div className="w-px bg-stone-600"></div>;
};

export const FilterWeapons = () => {
  return (
    <div>
      <h2 className="text-xs text-stone-400">Filters</h2>
      <div className="flex flex-wrap items-stretch gap-3 rounded-md border border-stone-500 p-2">
        <TwoHandCheckbox />
        <Pipe />
        <ElementDmg />
        <Pipe />
        <PhysDmg />
        <Pipe />
        <StatusEffect />
      </div>
    </div>
  );
};
