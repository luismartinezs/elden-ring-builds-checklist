import { type Weapon } from "~/types/weapons";

type WeaponScalingProps = {
  scaling: Weapon["scaling"];
};

export const WeaponScaling = ({ scaling }: WeaponScalingProps) => {
  return (
    <div className="space-y-1">
      <div className="text-xs font-medium uppercase text-stone-500 dark:text-stone-400">
        Scaling
      </div>
      <div className="grid grid-cols-5 gap-2 text-sm">
        {Object.entries(scaling).map(
          ([stat, grade]) =>
            grade && (
              <div key={stat} className="flex flex-col items-center">
                <span className="capitalize">{stat}</span>
                <span>{grade}</span>
              </div>
            )
        )}
      </div>
    </div>
  );
};
