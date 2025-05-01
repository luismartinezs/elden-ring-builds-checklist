import { type Weapon } from "~/types/weapons";
import { statColorMap, type TStatKey, stats } from "~/features/stats/stats";
import { cn } from "~/utils/cn";

// Create reverse mapping from full name to key
const nameToKey = Object.fromEntries(
  stats.map((stat) => [stat.name.toLowerCase(), stat.key])
) as Record<string, TStatKey>;

type WeaponRequirementsProps = {
  requirements: Weapon["requirements"];
};

export const WeaponRequirements = ({
  requirements,
}: WeaponRequirementsProps) => {
  return (
    <div className="">
      <div className="flex gap-1">
        {Object.entries(requirements).map(([statLabel, value]) => {
          const statKey = nameToKey[statLabel];
          if (!statKey) return null;

          return (
            <div
              key={statLabel}
              className={cn(
                statColorMap[statKey],
                "flex size-6 items-center justify-center text-sm font-medium text-white shadow-sm"
              )}
            >
              {value}
            </div>
          );
        })}
      </div>
    </div>
  );
};
