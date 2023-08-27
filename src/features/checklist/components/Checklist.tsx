import React from "react";
import { produce } from "immer";

import { type TChecklistItem } from "~/features/checklist/types";
import { useLocalStorage } from "~/hooks/useLocalStorage";
import { useRouter } from "next/router";
import { Tag } from "~/features/checklist/components/Tag";

export function Checklist({ items }: { items: TChecklistItem[] }) {
  const router = useRouter();
  const { checklistId } = router.query;

  if (typeof checklistId !== "string") {
    throw new Error("checklistId must be a string");
  }

  const [checkedItems, updateCheckedItems] = useLocalStorage<string[]>(
    checklistId,
    []
  );

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateCheckedItems(
      produce(checkedItems, (draft) => {
        const { checked, name } = event.target;
        if (checked) {
          if (!draft.includes(name)) {
            draft.push(name);
          }
        } else {
          const index = draft.indexOf(name);
          if (index !== -1) {
            draft.splice(index, 1);
          }
        }
        return draft;
      })
    );
  };

  return (
    <ul className="flex flex-col gap-3 px-4">
      {items.map((item) => (
        <li key={item.id}>
          <label className="flex items-center justify-start gap-2">
            <input
              aria-label={item.description + item.tags?.join(", ")}
              type="checkbox"
              name={item.id}
              checked={checkedItems.includes(item.id)}
              onChange={handleCheckboxChange}
              className="min-h-6 min-w-6 h-6 w-6 flex-shrink-0 rounded border-gray-300 bg-gray-100 text-amber-600 accent-amber-500 focus:ring-2 focus:ring-amber-500"
            />
            <span
              aria-hidden="true"
              dangerouslySetInnerHTML={{ __html: item.description }}
            ></span>
            <ul className="flex items-center" aria-hidden="true">
              {item.tags?.map((tag) => (
                <li key={tag}>
                  <Tag tag={tag} />
                </li>
              ))}
            </ul>
          </label>
        </li>
      ))}
    </ul>
  );
}
