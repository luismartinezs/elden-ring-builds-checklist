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

const ChecklistItem = ({ item }: { item: TChecklistItem }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  function onCheckboxChange()  {
    return null;
  }

  const visibleTags = ['OPTIONAL']

  return (
    <li>
      <div className="flex items-start justify-start gap-3">
        <Checkbox
          itemId={item.id}
          isChecked={
            false
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
}

ChecklistItem.displayName = "ChecklistItem";

export {
  ChecklistItem,
}