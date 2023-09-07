import React, { useEffect, useState } from "react";

import { type TChecklistItem } from "~/features/checklist/types";
import { Tag } from "~/features/checklist/components/Tag";
import Toggler from "~/features/checklist/components/Toggler";
import { useCheckItem } from "~/features/checklist/hooks/useCheckItem";
import { useFilter } from "~/hooks/useFilter";

const ChecklistLabel = ({
  description,
  tags = [],
}: {
  description: string;
  tags?: string[];
}) => (
  <div>
    <span className="inline-flex items-center gap-1" aria-hidden="true">
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

function useShowChecklistItem(
  item: TChecklistItem,
  isChecked: (id: string) => boolean
) {
  const [show, setShow] = useState(true);
  const { filter: filterOptional } = useFilter("optional");
  const { filter: filterCompleted } = useFilter("completed");
  const { filter: filterVolcanoManorAssassination } = useFilter(
    "volcano-manor-assassination"
  );
  const { filter: filterRanniQuestline } = useFilter("ranni-questline");
  const { filter: filterVarreQuestline } = useFilter("varre-questline");
  const { filter: filterNepheliQuestline } = useFilter("nepheli-questline");
  const { filter: filterSeluvisQuestline } = useFilter("seluvis-questline");
  const { filter: filterLatennaQuestline } = useFilter("latenna-questline");
  const { filter: filterAlexanderQuestline } = useFilter("alexander-questline");
  const { filter: filterMillicentQuestline } = useFilter("millicent-questline");
  const { filter: filterSmithingStoneBell } = useFilter("smithing-stone-bell");
  const { filter: filterSomberStoneBell } = useFilter("somber-stone-bell");
  const { filter: filterGlovewortBell } = useFilter("glovewort-bell");
  const { filter: filterGhostGlovewortBell } = useFilter(
    "ghost-glovewort-bell"
  );
  const { filter: filterWhetblades } = useFilter("whetblades");

  // NOTE: Using an effect instead of a derived state to avoid hydration errors
  useEffect(() => {
    const filters = [
      {
        tag: "OPTIONAL",
        filter: filterOptional,
      },
      {
        tag: "volcano-manor-assassination",
        filter: filterVolcanoManorAssassination,
      },
      {
        tag: "ranni-questline",
        filter: filterRanniQuestline,
      },
      {
        tag: "seluvis-questline",
        filter: filterSeluvisQuestline,
      },
      {
        tag: "varre-questline",
        filter: filterVarreQuestline,
      },
      {
        tag: "nepheli-questline",
        filter: filterNepheliQuestline,
      },
      {
        tag: "smithing-stone-bell",
        filter: filterSmithingStoneBell,
      },
      {
        tag: "somber-stone-bell",
        filter: filterSomberStoneBell,
      },
      {
        tag: "glovewort-bell",
        filter: filterGlovewortBell,
      },
      {
        tag: "ghost-glovewort-bell",
        filter: filterGhostGlovewortBell,
      },
      {
        tag: "whetblades",
        filter: filterWhetblades,
      },
      {
        tag: "latenna-questline",
        filter: filterLatennaQuestline,
      },
      {
        tag: "alexander-questline",
        filter: filterAlexanderQuestline,
      },
      {
        tag: "millicent-questline",
        filter: filterMillicentQuestline,
      },
    ];
    const shouldHide =
      Array.isArray(item?.tags) && item?.tags?.length > 0
        ? item.tags.every((tag) =>
            filters.some(
              ({ tag: filterTag, filter }) => tag === filterTag && filter
            )
          )
        : false;

    setShow(!shouldHide && !(isChecked(item.id) && filterCompleted));
  }, [
    filterOptional,
    filterVolcanoManorAssassination,
    filterRanniQuestline,
    item.tags,
    filterCompleted,
    isChecked,
    item.id,
    filterVarreQuestline,
    filterNepheliQuestline,
    filterSmithingStoneBell,
    filterSomberStoneBell,
    filterGlovewortBell,
    filterGhostGlovewortBell,
    filterSeluvisQuestline,
    filterWhetblades,
  ]);

  return show;
}

const ChecklistItem = ({ item }: { item: TChecklistItem }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { isChecked, checkItem, checkItems } = useCheckItem();
  const show = useShowChecklistItem(item, isChecked);

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
        <ChecklistLabel description={item.description} tags={item.tags} />
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
