import { type Weapon } from "~/types/weapons";
import { cn } from "~/utils/cn";

type WeaponAdditionalInfoProps = {
  damageTypes: Weapon["damage_types"];
};

export const WeaponAdditionalInfo = ({
  damageTypes,
}: WeaponAdditionalInfoProps) => {
  return (
    <div className="flex flex-wrap gap-1">
      {damageTypes.map((damageType) => (
        <span
          key={damageType}
          className={cn(
            "rounded-full bg-stone-100 px-1.5 py-0.5 text-xs text-stone-500",
            "tracking-wide dark:bg-stone-700 dark:text-stone-100"
          )}
        >
          {damageType}
        </span>
      ))}
    </div>
  );
};
