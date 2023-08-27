import React from "react";
import { produce } from "immer";

import { type TChecklistItem } from "~/features/checklist/types";
import { useLocalStorage } from "~/hooks/useLocalStorage";
import { useRouter } from "next/router";

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
    <ul className="flex flex-col gap-2 px-4">
      {items.map((item) => (
        <li key={item.id}>
          <label className="flex gap-2">
            <input
              type="checkbox"
              name={item.id}
              checked={checkedItems.includes(item.id)}
              onChange={handleCheckboxChange}
            />
            <span dangerouslySetInnerHTML={{ __html: item.description }}></span>
            {item.tags && item.tags.includes("optional") && (
              <span> (Optional)</span>
            )}
          </label>
        </li>
      ))}
    </ul>
  );
}
