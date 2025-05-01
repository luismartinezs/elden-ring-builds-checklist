import { type Weapon } from "~/types/weapons";

type WeaponRequirementsProps = {
  requirements: Weapon["requirements"];
};

export const WeaponRequirements = ({
  requirements,
}: WeaponRequirementsProps) => {
  return (
    <div className="space-y-1">
      <div className="text-xs font-medium uppercase text-stone-500 dark:text-stone-400">
        Requirements
      </div>
      <div className="grid grid-cols-5 gap-2 text-sm">
        {Object.entries(requirements).map(
          ([stat, value]) =>
            value > 0 && (
              <div key={stat} className="flex flex-col items-center">
                <span className="capitalize">{stat}</span>
                <span>{value}</span>
              </div>
            )
        )}
      </div>
    </div>
  );
};
