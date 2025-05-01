import { type Weapon } from "~/types/weapons";
import { cn } from "~/utils/cn";
import { dmgColorMap, type TDmgType } from "~/features/stats/dmgtypes";

type WeaponAttackProps = {
  attack: Weapon["attack"];
  sorceryScaling?: number;
  incantationScaling?: number;
};

export const WeaponAttack = ({
  attack,
  sorceryScaling,
  incantationScaling,
}: WeaponAttackProps) => {
  const hasSorceryOrIncantationScaling =
    (typeof sorceryScaling === "number" && sorceryScaling > 0) ||
    (typeof incantationScaling === "number" && incantationScaling > 0);

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
        {hasSorceryOrIncantationScaling && (
          <div className="flex h-6 w-px bg-stone-500/60"></div>
        )}
        {typeof sorceryScaling === "number" && sorceryScaling > 0 && (
          <div
            className="flex size-6 flex-col items-center justify-center bg-blue-600/60 text-sm font-medium text-white shadow-sm"
            title="Sorcery Scaling"
          >
            {sorceryScaling}
          </div>
        )}
        {typeof incantationScaling === "number" && incantationScaling > 0 && (
          <div
            className="flex size-6 flex-col items-center justify-center bg-yellow-600/60 text-sm font-medium text-white shadow-sm"
            title="Incantation Scaling"
          >
            {incantationScaling}
          </div>
        )}
      </div>
    </div>
  );
};
