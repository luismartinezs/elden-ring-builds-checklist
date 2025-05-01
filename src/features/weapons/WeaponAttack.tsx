import { type Weapon } from "~/types/weapons";
import { cn } from "~/utils/cn";
import { dmgColorMap, type TDmgType } from "~/features/stats/dmgtypes";

type WeaponAttackProps = {
  attack: Weapon["attack"];
};

export const WeaponAttack = ({ attack }: WeaponAttackProps) => {
  return (
    <div className="">
      <div className="flex flex-wrap gap-1">
        {Object.entries(attack).map(([type, value]) => (
          <div
            key={type}
            className={cn(
              dmgColorMap[type as TDmgType],
              "flex size-6 flex-col items-center justify-center text-sm font-medium text-white shadow-sm"
            )}
            title={type}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};
