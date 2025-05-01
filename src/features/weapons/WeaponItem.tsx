import { type Weapon } from "~/types/weapons";
import { cn } from "~/utils/cn";

type WeaponItemProps = {
  weapon: Weapon;
};

export const WeaponItem = ({ weapon }: WeaponItemProps) => {
  return (
    <div
      className={cn(
        "rounded-lg border p-4 shadow-sm transition-colors hover:bg-stone-50",
        "dark:border-stone-800 dark:hover:bg-stone-800/50"
      )}
    >
      <a
        href={weapon.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block hover:text-primary-700 dark:hover:text-primary-300"
      >
        <h3 className="text-lg font-semibold">{weapon.name}</h3>
      </a>
      <p className="text-sm text-stone-500 dark:text-stone-400">
        {weapon.category}
      </p>

      <div className="mt-4 space-y-4">
        {/* Requirements */}
        <div className="space-y-1">
          <div className="text-xs font-medium uppercase text-stone-500 dark:text-stone-400">
            Requirements
          </div>
          <div className="grid grid-cols-5 gap-2 text-sm">
            {Object.entries(weapon.requirements).map(
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

        {/* Attack Stats */}
        <div className="space-y-1">
          <div className="text-xs font-medium uppercase text-stone-500 dark:text-stone-400">
            Attack
          </div>
          <div className="grid grid-cols-5 gap-2 text-sm">
            {Object.entries(weapon.attack)
              .filter(([key]) => key !== "critical")
              .map(([type, value]) => (
                <div key={type} className="flex flex-col items-center">
                  <span className="capitalize">{type}</span>
                  <span>{value}</span>
                </div>
              ))}
          </div>
        </div>

        {/* Scaling */}
        <div className="space-y-1">
          <div className="text-xs font-medium uppercase text-stone-500 dark:text-stone-400">
            Scaling
          </div>
          <div className="grid grid-cols-5 gap-2 text-sm">
            {Object.entries(weapon.scaling).map(
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

        {/* Status Effects */}
        {Object.entries(weapon.status_buildup).some(
          ([_, value]) => value > 0
        ) && (
          <div className="space-y-1">
            <div className="text-xs font-medium uppercase text-stone-500 dark:text-stone-400">
              Status Effects
            </div>
            <div className="grid grid-cols-4 gap-2 text-sm">
              {Object.entries(weapon.status_buildup)
                .filter(([_, value]) => value > 0)
                .map(([effect, value]) => (
                  <div key={effect} className="flex flex-col items-center">
                    <span className="capitalize">
                      {effect.replace("_", " ")}
                    </span>
                    <span>{value}</span>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Additional Info */}
        <div className="flex flex-wrap gap-4 text-sm text-stone-600 dark:text-stone-300">
          <div>
            <span className="font-medium">Upgrade Type:</span>{" "}
            {weapon.upgrade_type}
          </div>
          <div>
            <span className="font-medium">Damage Types:</span>{" "}
            {weapon.damage_types.join(", ")}
          </div>
        </div>
      </div>
    </div>
  );
};
