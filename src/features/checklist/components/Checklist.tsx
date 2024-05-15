import { type TChecklistItem } from "~/features/checklist/types";
import { ChecklistItem } from "./ChecklistItem";
import { useCheckItem } from "../hooks/useCheckItem";

function hasNestedItems(
  item: TChecklistItem
): item is TChecklistItem & { items: TChecklistItem[] } {
  return "items" in item && Array.isArray(item.items);
}

export function Checklist({ items }: { items: TChecklistItem[] }) {
  const { checkItem, isChecked } = useCheckItem();

  return (
    <ul className="flex flex-col gap-6 px-4">
      {items.map((item) => {
        return (
          <ChecklistItem
            key={item.id}
            item={item}
            onCheck={() => checkItem(item.id, {
              childrenIds: item.items?.map((item) => item.id),
            })}
            isChecked={isChecked(item.id)}
            hasNested={hasNestedItems(item)}
          >
            {hasNestedItems(item) ? (
              <ul className="my-6 flex flex-col gap-6 pl-8">
                {item.items.map((childItem) => (
                  <ChecklistItem
                    key={childItem.id}
                    item={childItem}
                    onCheck={() => checkItem(childItem.id, {
                      parentId: item.id,
                      siblingIds: item.items?.map((item) => item.id),
                    })}
                    isChecked={isChecked(childItem.id)}
                  />
                ))}
              </ul>
            ) : null}
          </ChecklistItem>
        );
      })}
    </ul>
  );
}
