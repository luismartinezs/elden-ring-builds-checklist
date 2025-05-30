import { ElementDmg } from "./element-dmg";
import { PhysDmg } from "./phys-dmg";
import { GameArea } from "./sote";
import { StatusEffect } from "./status-effect";
import { TwoHandCheckbox } from "./two-hand";
import { UpgradeType } from "./upgrade-type";

const Pipe = () => {
  return <div className="w-px bg-stone-500"></div>;
};

export const FilterWeapons = () => {
  return (
    <div>
      <h2 className="text-xs text-stone-400">Filter</h2>
      <div className="flex flex-wrap items-stretch gap-x-2 gap-y-4 rounded-md border border-stone-500 p-2">
        <TwoHandCheckbox />
        <Pipe />
        <ElementDmg />
        <Pipe />
        <PhysDmg />
        <Pipe />
        <StatusEffect />
        <Pipe />
        <UpgradeType />
        <Pipe />
        <GameArea />
      </div>
    </div>
  );
};
