import React, { useEffect, useState } from "react";

import { type TChecklistItem } from "~/features/checklist/types";
import { EXTRA_TAGS, TAGS, Tag } from "~/features/tags";
import Toggler from "~/features/checklist/components/Toggler";
import { useCheckItem } from "~/features/checklist/hooks/useCheckItem";
import { useFilter } from "~/hooks/useFilter";
import { useManageFilters } from "../hooks/useManageFilters";

const ChecklistLabel = ({
  description,
  tags = [],
}: {
  description: string;
  tags?: string[];
}) => (
  <div>
    <span
      className="inline-flex flex-wrap items-center gap-1"
      aria-hidden="true"
    >
      {[...tags].sort().map((tag) => (
        <span key={tag} className="!inline">
          <Tag tag={tag} />
        </span>
      ))}
    </span>{" "}
    <span
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: description }}
    ></span>
  </div>
);

const Checkbox = ({
  itemId,
  isChecked,
  onChange,
  label,
}: {
  itemId: string;
  isChecked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}) => (
  <input
    aria-label={label}
    type="checkbox"
    name={itemId}
    checked={isChecked}
    onChange={onChange}
    className="min-h-6 min-w-6 h-6 w-6 flex-shrink-0 rounded border-stone-300 bg-stone-100 text-amber-600 accent-amber-500 focus:ring-2 focus:ring-amber-500"
  />
);

function hasNestedItems(
  item: TChecklistItem
): item is TChecklistItem & { items: TChecklistItem[] } {
  return "items" in item && Array.isArray(item.items);
}

// I know this hook sucks but It's Friday evening
function useShowChecklistItem(
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
    TAGS.DUNG_EATER_QUESTILINE
  );
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
        tag: TAGS.ALL_REMEMBERANCES,
        filter: filterAllRememberances,
      },
      {
        tag: TAGS.HYETTA_QUESTLINE,
        filter: filterHyettaQuestline,
      },
      {
        tag: TAGS.DUNG_EATER_QUESTILINE,
        filter: filterDungEaterQuestline,
      },
      {
        tag: TAGS.SELLEN_QUESTLINE,
        filter: filterSellenQuestline,
      },
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
  ]);

  return show;
}

const ChecklistItem = ({ item }: { item: TChecklistItem }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { isChecked, checkItem, checkItems } = useCheckItem();
  const show = useShowChecklistItem(item, isChecked);
  const { getCurrentFilters } = useManageFilters();
  const hiddenFilterKeys = Object.entries(getCurrentFilters())
    .filter(([key, val]) => val)
    .map(([key]) => key);

  function onCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (hasNestedItems(item)) {
      checkItems(item.items.map((el) => el.id));
    } else {
      checkItem(event.target.name);
    }
  }

  if (!show) {
    return null;
  }

  const visibleTags =
    item.tags?.filter(
      (tag) =>
        ![EXTRA_TAGS.NGPLUS, EXTRA_TAGS.ALWAYS_SHOW, ...hiddenFilterKeys].includes(
          tag
        )
    ) ?? [];

  return (
    <li>
      <div className="flex items-start justify-start gap-3">
        <Checkbox
          itemId={item.id}
          isChecked={
            hasNestedItems(item)
              ? item.items.every((nested) => isChecked(nested.id))
              : isChecked(item.id)
          }
          onChange={onCheckboxChange}
          label={item.description + " " + item?.tags?.join(", ")}
        />
        <ChecklistLabel description={item.description} tags={visibleTags} />
        {item.items && (
          <Toggler
            onClick={(evt) => {
              evt.preventDefault();
              setIsExpanded(!isExpanded);
            }}
            isExpanded={isExpanded}
          />
        )}
      </div>
      {item.items && isExpanded && (
        <ul className="my-6 flex flex-col gap-6 pl-8">
          {item.items.map((childItem) => (
            <ChecklistItem key={childItem.id} item={childItem} />
          ))}
        </ul>
      )}
    </li>
  );
};

export function Checklist({ items }: { items: TChecklistItem[] }) {
  return (
    <ul className="flex flex-col gap-6 px-4">
      {items.map((item) => (
        <ChecklistItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
