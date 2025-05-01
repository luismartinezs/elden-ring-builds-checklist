import { type Weapon } from "~/types/weapons";

type WeaponAttackProps = {
  attack: Weapon["attack"];
};

export const WeaponAttack = ({ attack }: WeaponAttackProps) => {
  return (
    <div className="space-y-1">
      <div className="text-xs font-medium uppercase text-stone-500 dark:text-stone-400">
        Attack
      </div>
      <div className="grid grid-cols-5 gap-2 text-sm">
        {Object.entries(attack)
          .filter(([key]) => key !== "critical")
          .map(([type, value]) => (
            <div key={type} className="flex flex-col items-center">
              <span className="capitalize">{type}</span>
              <span>{value}</span>
            </div>
          ))}
      </div>
    </div>
  );
};
