import { type Weapon } from "~/types/weapons";
import { cn } from "~/utils/cn";
import {
  statusEffectColorMap,
  type TStatusEffect,
} from "~/features/stats/statusEffect";

type WeaponStatusEffectsProps = {
  statusBuildup: Weapon["status_buildup"];
};

export const WeaponStatusEffects = ({
  statusBuildup,
}: WeaponStatusEffectsProps) => {
  if (!Object.entries(statusBuildup).some(([_, value]) => value > 0)) {
    return null;
  }

  return (
    <div className="space-y-1">
      <div className="flex flex-wrap gap-1">
        {Object.entries(statusBuildup)
          .filter(([_, value]) => value > 0)
          .map(([effect, value]) => (
            <div
              key={effect}
              className={cn(
                statusEffectColorMap[effect as TStatusEffect],
                "flex size-6 flex-col items-center justify-center text-sm font-medium text-black shadow-sm"
              )}
              title={effect.replace("_", " ")}
            >
              {value}
            </div>
          ))}
      </div>
    </div>
  );
};
