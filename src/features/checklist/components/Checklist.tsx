import { type TChecklistItem } from "~/features/checklist/types";
import { ChecklistItem } from "./ChecklistItem";
import { useCheckItem } from "../hooks/useCheckItem";
import { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";

function hasNestedItems(
  item: TChecklistItem
): item is TChecklistItem & { items: TChecklistItem[] } {
  return "items" in item && Array.isArray(item.items);
}

// virtualizer for lists of items of unknown height
function DynamicVirtualizer({
  checklist,
}: {
  checklist: TChecklistItem[];
}) {
  const parentRef = useRef<HTMLDivElement>(null);
  const { checkItem, isChecked } = useCheckItem();

  const virtualizer = useVirtualizer({
    count: checklist.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 70,
  });

  const items = virtualizer.getVirtualItems();

  return (
    <div
      ref={parentRef}
      style={{
        height: "100%",
      }}
    >
      <div
        style={{
          height: virtualizer.getTotalSize(),
          width: "100%",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            transform: `translateY(${items[0]?.start ?? 0}px)`,
          }}
        >
          {items.map((virtualRow) => {
            const _item = checklist[virtualRow.index];
            if (!_item) {
              return null;
            }
            return (
              <div
                key={virtualRow.key}
                data-index={virtualRow.index}
                ref={virtualizer.measureElement}
              >
                <div style={{ padding: "10px 0" }}>
                  <ChecklistItem
                    key={_item.id}
                    item={_item}
                    onCheck={() =>
                      checkItem(_item.id, {
                        childrenIds: _item.items?.map(({ id }) => id),
                      })
                    }
                    isChecked={isChecked(_item.id)}
                    hasNested={hasNestedItems(_item)}
                  >
                    {hasNestedItems(_item) ? (
                      <div className="my-6 flex flex-col gap-6 pl-8">
                        {_item.items.map((childItem) => (
                          <ChecklistItem
                            key={childItem.id}
                            item={childItem}
                            onCheck={() =>
                              checkItem(childItem.id, {
                                parentId: _item.id,
                                siblingIds: _item.items?.map(({ id }) => id),
                              })
                            }
                            isChecked={isChecked(childItem.id)}
                          />
                        ))}
                      </div>
                    ) : null}
                  </ChecklistItem>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function Checklist({ items }: { items: TChecklistItem[] }) {
  return (
    <div className="flex flex-col gap-6 px-4">
      <DynamicVirtualizer checklist={items} />
    </div>
  );
}
