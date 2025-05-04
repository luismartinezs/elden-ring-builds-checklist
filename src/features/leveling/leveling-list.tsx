import { Heading } from "~/components/Heading";
import { LevelingItem } from "./leveling-item";
import { useManageStats } from "../stats/useManageStats";
import { type Archetype, getNextLevels, type Requirements } from "./leveling";
import ClientOnly from "~/components/ClientOnly";
import { useManageWeaponFilters } from "../weapon-controls/filtering/useManageWeaponFilters";
import { twoHandKey } from "../weapon-controls/filtering/two-hand";
import { useManageStatRequirements } from "./use-manage-stat-requirements";
import { useOptions } from "./use-options";
import { type Options } from "../checklist/types";
import { getDmgStats } from "./select-dmg-stats";

export const LevelingList = () => {
  const { getCurrentStats } = useManageStats();
  const { getCurrentWeaponFilters } = useManageWeaponFilters();
  const { getCurrentStatRequirements } = useManageStatRequirements();
  const { getOptions } = useOptions();
  const stats = getCurrentStats();
  const weaponFilters = getCurrentWeaponFilters();
  const statRequirements = getCurrentStatRequirements() as Requirements;
  const options = getOptions() as Options;
  const nextLevels = getNextLevels({
    stats,
    archetype: options.archetype as Archetype,
    twoHanding: !!weaponFilters[twoHandKey],
    dmgStats: getDmgStats(options),
    requirements: statRequirements,
    maxFpFlask: options.maxFpFlask,
    isSpellcaster: options.isSpellcaster,
  });

  return (
    <div className="">
      <Heading.H3 className="!text-base !font-medium">
        Suggested leveling order
      </Heading.H3>
      <ClientOnly>
        <ul className="flex flex-col gap-1">
          {nextLevels.map((item) => (
            <li key={`${item.stat}-${item.target}`}>
              <LevelingItem {...item} />
            </li>
          ))}
        </ul>
      </ClientOnly>
    </div>
  );
};
