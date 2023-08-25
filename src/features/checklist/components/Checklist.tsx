import React, { useState } from "react";

export interface ChecklistItem {
  id: string;
  description: string;
  tags?: string[];
}

export function Checklist({
  items,
}: {
  items: {
    id: string;
    description: string;
    tags?: string[];
  }[];
}) {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <ul className="flex flex-col gap-2 px-4">
      {items.map((item) => (
        <li key={item.id}>
          <label className="flex gap-2">
            <input
              type="checkbox"
              name={item.id}
              checked={checkedItems[item.id] ?? false}
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
