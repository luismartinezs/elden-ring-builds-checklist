import { Heading } from "~/components/Heading";
import { LevelingItem } from "./leveling-item";
import { useManageStats } from "../stats/useManageStats";
import { getNextLevels } from "./leveling";
import ClientOnly from "~/components/ClientOnly";
import { useManageWeaponFilters } from "../weapon-controls/filtering/useManageWeaponFilters";
import { twoHandKey } from "../weapon-controls/filtering/two-hand";
import { useManageStatRequirements } from "./use-manage-stat-requirements";

export const LevelingList = () => {
  const { getCurrentStats } = useManageStats();
  const { getCurrentWeaponFilters } = useManageWeaponFilters();
  const { getCurrentStatRequirements } = useManageStatRequirements();
  const stats = getCurrentStats();
  const weaponFilters = getCurrentWeaponFilters();
  const statRequirements = getCurrentStatRequirements();
  const nextLevels = getNextLevels({
    stats,
    archetype: "melee",
    twoHanding: !!weaponFilters[twoHandKey],
    requirements: statRequirements,
  });
  return (
    <div className="">
      <Heading.H3 className="!text-base !font-medium">
        Suggested leveling order
      </Heading.H3>
      <ClientOnly>
        <ul>
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
