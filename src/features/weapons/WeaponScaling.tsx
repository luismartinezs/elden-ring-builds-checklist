import { type Weapon } from "~/types/weapons";
import { cn } from "~/utils/cn";
import { statColorMap, type TStatKey, stats } from "~/features/stats/stats";

// Create reverse mapping from full name to key
const nameToKey = Object.fromEntries(
  stats.map((stat) => [stat.name.toLowerCase(), stat.key])
) as Record<string, TStatKey>;

type WeaponScalingProps = {
  scaling: Weapon["scaling"];
};

export const WeaponScaling = ({ scaling }: WeaponScalingProps) => {
  return (
    <div>
      <div className="flex flex-wrap gap-0.5 sm:gap-1">
        {Object.entries(scaling).map(([stat, grade]) => {
          const statKey = nameToKey[stat];
          if (!statKey) return null;

          return (
            <div
              key={stat}
              className={cn(
                statColorMap[statKey],
                "flex size-5 flex-col items-center justify-center text-xs font-medium text-white shadow-sm sm:size-6 sm:text-sm"
              )}
              title={stat}
            >
              {grade ?? "-"}
            </div>
          );
        })}
      </div>
    </div>
  );
};
