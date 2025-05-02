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
  if (isCollapsed) {
    return (
      <a
        href={weapon.url}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex items-center text-sm",
          "hover:text-primary-700 dark:hover:text-primary-300"
        )}
      >
        {weapon.name}
        <FiExternalLink
          className="ml-1 inline-block text-stone-400 dark:text-stone-500"
          aria-hidden="true"
          size={12}
        />
      </a>
    );
  }

  return (
    <div
      className={cn(
        "rounded-lg border shadow-sm",
        "dark:border-stone-800",
        "p-1 text-xs md:p-2 md:text-base"
      )}
    >
      <a
        href={weapon.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block hover:text-primary-700 dark:hover:text-primary-300"
      >
        <h3 className="flex items-center text-xs font-semibold md:text-base">
          {weapon.name}
          <FiExternalLink
            className="ml-1 inline-block text-stone-400 dark:text-stone-500"
            aria-hidden="true"
            size={14}
          />
        </h3>
      </a>
      <p className="text-xs text-stone-500 md:text-sm dark:text-stone-400">
        {weapon.category} | {weapon.upgrade_type}{" "}
        {weapon.sote ? (
          <span className="rounded-md bg-stone-700 px-1 py-0.5 text-xs uppercase text-stone-300">
            sote
          </span>
        ) : (
          ""
        )}
      </p>
      <div className="mt-1 space-y-0.5 md:mt-2 md:space-y-1">
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
    </div>
  );
};
