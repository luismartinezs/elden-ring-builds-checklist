import { useEffect, useState } from "react";
import type { TChecklistItem } from "../types";
import { useFilter } from "~/hooks/useFilter";
import { EXTRA_TAGS, TAGS } from "~/features/tags";

// this sucks
export function useShowChecklistItem(
  item: TChecklistItem,
  isChecked: (id: string) => boolean
) {
  const [show, setShow] = useState(true);
  const { filter: filterOptional } = useFilter(TAGS.OPTIONAL);
  const { filter: filterCompleted } = useFilter("completed");
  const { filter: filterVolcanoManorAssassination } = useFilter(
    TAGS.VOLCANO_MANOR_ASSASSINATION
  );
  const { filter: filterRanniQuestline } = useFilter(TAGS.RANNI_QUESTLINE);
  const { filter: filterVarreQuestline } = useFilter(TAGS.VARRE_QUESTLINE);
  const { filter: filterNepheliQuestline } = useFilter(TAGS.NEPHELI_QUESTLINE);
  const { filter: filterSeluvisQuestline } = useFilter(TAGS.SELUVIS_QUESTLINE);
  const { filter: filterLatennaQuestline } = useFilter(TAGS.LATENNA_QUESTLINE);
  const { filter: filterAlexanderQuestline } = useFilter(
    TAGS.ALEXANDER_QUESTLINE
  );
  const { filter: filterMillicentQuestline } = useFilter(
    TAGS.MILLICENT_QUESTLINE
  );
  const { filter: filterHyettaQuestline } = useFilter(TAGS.HYETTA_QUESTLINE);
  const { filter: filterSellenQuestline } = useFilter(TAGS.SELLEN_QUESTLINE);
  const { filter: filterDungEaterQuestline } = useFilter(
    TAGS.DUNG_EATER_QUESTLINE
  );
  const { filter: filterPatchesQuestine } = useFilter(
    TAGS.PATCHES_QUESTLINE
  );
  const { filter: filterYuraQuestine } = useFilter(
    TAGS.YURA_QUESTLINE
  );
  const { filter: filterCorhynQuestline } = useFilter(
    TAGS.CORHYN_QUESTLINE
  );
  const { filter: filterRyaQuestline } = useFilter(TAGS.RYA_QUESTLINE);
  const { filter: filterBoggartQuestline } = useFilter(TAGS.BOGGART_QUESTLINE);
  const { filter: filterSmithingStoneBell } = useFilter(
    TAGS.SMITHING_STONE_BELL
  );
  const { filter: filterSomberStoneBell } = useFilter(TAGS.SOMBER_STONE_BELL);
  const { filter: filterGlovewortBell } = useFilter(TAGS.GLOVEWORT_BELL);
  const { filter: filterGhostGlovewortBell } = useFilter(
    TAGS.GHOST_GLOVEWORT_BELL
  );
  const { filter: filterWhetblades } = useFilter(TAGS.WHETBLADES);
  const { filter: filterAllRememberances } = useFilter(TAGS.ALL_REMEMBERANCES);
  const {filter: filterTunnels} = useFilter(TAGS.TUNNELS);
  const { filter: filterGoldenSeed } = useFilter(TAGS.GOLDEN_SEED);

  // NOTE: Using an effect instead of a derived state to avoid hydration errors
  useEffect(() => {
    const _tags = item.tags?.filter((tag) => tag !== EXTRA_TAGS.NGPLUS) ?? [];

    const filters = [
      {
        tag: TAGS.OPTIONAL,
        filter: filterOptional,
      },
      {
        tag: TAGS.VOLCANO_MANOR_ASSASSINATION,
        filter: filterVolcanoManorAssassination,
      },
      {
        tag: TAGS.RANNI_QUESTLINE,
        filter: filterRanniQuestline,
      },
      {
        tag: TAGS.SELUVIS_QUESTLINE,
        filter: filterSeluvisQuestline,
      },
      {
        tag: TAGS.VARRE_QUESTLINE,
        filter: filterVarreQuestline,
      },
      {
        tag: TAGS.NEPHELI_QUESTLINE,
        filter: filterNepheliQuestline,
      },
      {
        tag: TAGS.SMITHING_STONE_BELL,
        filter: filterSmithingStoneBell,
      },
      {
        tag: TAGS.SOMBER_STONE_BELL,
        filter: filterSomberStoneBell,
      },
      {
        tag: TAGS.GLOVEWORT_BELL,
        filter: filterGlovewortBell,
      },
      {
        tag: TAGS.GHOST_GLOVEWORT_BELL,
        filter: filterGhostGlovewortBell,
      },
      {
        tag: TAGS.WHETBLADES,
        filter: filterWhetblades,
      },
      {
        tag: TAGS.LATENNA_QUESTLINE,
        filter: filterLatennaQuestline,
      },
      {
        tag: TAGS.ALEXANDER_QUESTLINE,
        filter: filterAlexanderQuestline,
      },
      {
        tag: TAGS.MILLICENT_QUESTLINE,
        filter: filterMillicentQuestline,
      },
      {
        tag: TAGS.PATCHES_QUESTLINE,
        filter: filterPatchesQuestine,
      },
      {
        tag: TAGS.YURA_QUESTLINE,
        filter: filterYuraQuestine,
      },
      {
        tag: TAGS.ALL_REMEMBERANCES,
        filter: filterAllRememberances,
      },
      {
        tag: TAGS.HYETTA_QUESTLINE,
        filter: filterHyettaQuestline,
      },
      {
        tag: TAGS.DUNG_EATER_QUESTLINE,
        filter: filterDungEaterQuestline,
      },
      {
        tag: TAGS.SELLEN_QUESTLINE,
        filter: filterSellenQuestline,
      },
      {
        tag: TAGS.CORHYN_QUESTLINE,
        filter: filterCorhynQuestline,
      },
      {
        tag: TAGS.RYA_QUESTLINE,
        filter: filterRyaQuestline,
      },
      {
        tag: TAGS.TUNNELS,
        filter: filterTunnels,
      },
      {
        tag: TAGS.BOGGART_QUESTLINE,
        filter: filterBoggartQuestline,
      },
      {
        tag: TAGS.GOLDEN_SEED,
        filter: filterGoldenSeed,
      }
    ];
    const shouldHide =
      _tags.length > 0
        ? _tags.every((tag) =>
            filters.some(
              ({ tag: filterTag, filter }) => tag === filterTag && filter
            )
          )
        : false;

    setShow(!shouldHide && !(isChecked(item.id) && filterCompleted));
  }, [
    isChecked,
    item.id,
    item.tags,
    filterOptional,
    filterVolcanoManorAssassination,
    filterRanniQuestline,
    filterCompleted,
    filterVarreQuestline,
    filterNepheliQuestline,
    filterSmithingStoneBell,
    filterSomberStoneBell,
    filterGlovewortBell,
    filterGhostGlovewortBell,
    filterSeluvisQuestline,
    filterWhetblades,
    filterLatennaQuestline,
    filterAlexanderQuestline,
    filterMillicentQuestline,
    filterAllRememberances,
    filterHyettaQuestline,
    filterDungEaterQuestline,
    filterSellenQuestline,
    filterPatchesQuestine,
    filterYuraQuestine,
    filterCorhynQuestline,
    filterRyaQuestline,
    filterTunnels,
    filterBoggartQuestline,
    filterGoldenSeed,
  ]);

  return show;
}