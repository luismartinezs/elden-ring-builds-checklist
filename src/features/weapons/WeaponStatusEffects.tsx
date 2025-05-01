import { type Weapon } from "~/types/weapons";

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
      <div className="text-xs font-medium uppercase text-stone-500 dark:text-stone-400">
        Status Effects
      </div>
      <div className="grid grid-cols-4 gap-2 text-sm">
        {Object.entries(statusBuildup)
          .filter(([_, value]) => value > 0)
          .map(([effect, value]) => (
            <div key={effect} className="flex flex-col items-center">
              <span className="capitalize">{effect.replace("_", " ")}</span>
              <span>{value}</span>
            </div>
          ))}
      </div>
    </div>
  );
};
