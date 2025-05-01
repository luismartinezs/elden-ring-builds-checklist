import { type Weapon } from "~/types/weapons";
import { cn } from "~/utils/cn";
import { WeaponRequirements } from "./WeaponRequirements";
import { WeaponAttack } from "./WeaponAttack";
import { WeaponScaling } from "./WeaponScaling";
import { WeaponStatusEffects } from "./WeaponStatusEffects";
import { WeaponAdditionalInfo } from "./WeaponAdditionalInfo";
import { FiExternalLink } from "react-icons/fi";

type WeaponItemProps = {
  weapon: Weapon;
  isCollapsed: boolean;
};

export const WeaponItem = ({ weapon, isCollapsed }: WeaponItemProps) => {
  return (
    <div
      className={cn("rounded-lg border p-2 shadow-sm", "dark:border-stone-800")}
    >
      <a
        href={weapon.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block hover:text-primary-700 dark:hover:text-primary-300"
      >
        <h3 className="flex items-center text-base font-semibold">
          {weapon.name}
          <FiExternalLink
            className="ml-1 inline-block text-stone-400 dark:text-stone-500"
            aria-hidden="true"
            size={14}
          />
        </h3>
      </a>
      {!isCollapsed && (
        <>
          <p className="text-sm text-stone-500 dark:text-stone-400">
            {weapon.category} | {weapon.upgrade_type}
          </p>

          <div className="mt-2 space-y-1">
            <WeaponRequirements requirements={weapon.requirements} />
            <WeaponScaling scaling={weapon.scaling} />
            <WeaponAttack
              attack={weapon.attack}
              sorceryScaling={weapon.sorcery_scaling}
              incantationScaling={weapon.incantation_scaling}
            />
            <WeaponStatusEffects statusBuildup={weapon.status_buildup} />
            <WeaponAdditionalInfo damageTypes={weapon.damage_types} />
          </div>
        </>
      )}
    </div>
  );
};
