import { type Weapon } from "~/types/weapons";
import { cn } from "~/utils/cn";
import { WeaponRequirements } from "./WeaponRequirements";
import { WeaponAttack } from "./WeaponAttack";
import { WeaponScaling } from "./WeaponScaling";
import { WeaponStatusEffects } from "./WeaponStatusEffects";
import { WeaponAdditionalInfo } from "./WeaponAdditionalInfo";

type WeaponItemProps = {
  weapon: Weapon;
};

export const WeaponItem = ({ weapon }: WeaponItemProps) => {
  return (
    <div
      className={cn(
        "rounded-lg border p-2 shadow-sm transition-colors hover:bg-stone-50",
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

      <div className="mt-2 space-y-1">
        <WeaponRequirements requirements={weapon.requirements} />
        <WeaponAttack
          attack={weapon.attack}
          sorceryScaling={weapon.sorcery_scaling}
          incantationScaling={weapon.incantation_scaling}
        />
        <WeaponScaling scaling={weapon.scaling} />
        <WeaponStatusEffects statusBuildup={weapon.status_buildup} />
        <WeaponAdditionalInfo
          upgradeType={weapon.upgrade_type}
          damageTypes={weapon.damage_types}
        />
      </div>
    </div>
  );
};
