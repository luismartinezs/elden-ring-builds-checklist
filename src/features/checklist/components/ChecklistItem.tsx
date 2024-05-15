import { useState } from "react";
import { TChecklistItem } from "../types";
import { useCheckItem } from "../hooks/useCheckItem";
import { Checkbox } from "./Checkbox";
import { ChecklistLabel } from "./ChecklistLabel";
import Toggler from "./Toggler";

function hasNestedItems(
  item: TChecklistItem
): item is TChecklistItem & { items: TChecklistItem[] } {
  return "items" in item && Array.isArray(item.items);
}

const ChecklistItem = ({ item }: { item: TChecklistItem }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { isChecked, checkItem } = useCheckItem();

  function onCheckboxChange() {
    return checkItem(item.id);
  }

  return (
    <li>
      <div className="flex items-start justify-start gap-3">
        <Checkbox
          itemId={item.id}
          isChecked={isChecked(item.id)}
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

ChecklistItem.displayName = "ChecklistItem";

export { ChecklistItem };
