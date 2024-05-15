import { memo, useState } from "react";
import { TChecklistItem } from "../types";
import { useCheckItem } from "../hooks/useCheckItem";
import { useShowChecklistItem } from "../hooks/useShowChecklistItem";
import { useManageFilters } from "../hooks/useManageFilters";
import { EXTRA_TAGS } from "~/features/tags";
import { Checkbox } from "./Checkbox";
import ClientOnly from "~/components/ClientOnly";
import { ChecklistLabel } from "./ChecklistLabel";
import Toggler from "./Toggler";

function hasNestedItems(
  item: TChecklistItem
): item is TChecklistItem & { items: TChecklistItem[] } {
  return "items" in item && Array.isArray(item.items);
}

const ChecklistItem = memo(({ item }: { item: TChecklistItem }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { isChecked, checkItem, checkItems } = useCheckItem();
  const show = useShowChecklistItem(item, isChecked);
  const { getCurrentFilters } = useManageFilters();
  const hiddenFilterKeys = Object.entries(getCurrentFilters())
    .filter(([_, val]) => val)
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
        ![
          EXTRA_TAGS.NGPLUS,
          EXTRA_TAGS.ALWAYS_SHOW,
          ...hiddenFilterKeys,
        ].includes(tag)
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
        {/* prevent hydration error */}
        <ClientOnly>
          <ChecklistLabel description={item.description} tags={visibleTags} />
        </ClientOnly>
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
});

ChecklistItem.displayName = "ChecklistItem";

export {
  ChecklistItem,
}