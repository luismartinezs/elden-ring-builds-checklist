import React, { useState } from "react";

import { type TChecklistItem } from "~/features/checklist/types";
import { Tag } from "~/features/checklist/components/Tag";
import Toggler from "~/features/checklist/components/Toggler";
import { useCheckItem } from "~/features/checklist/hooks/useCheckItem";

const ChecklistLabel = ({
  description,
  tags,
}: {
  description: string;
  tags?: string[];
}) => (
  <div>
    <span className="inline-flex items-center" aria-hidden="true">
      {tags?.map((tag) => (
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
}: {
  itemId: string;
  isChecked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <input
    aria-label={itemId}
    type="checkbox"
    name={itemId}
    checked={isChecked}
    onChange={onChange}
    className="min-h-6 min-w-6 h-6 w-6 flex-shrink-0 rounded border-stone-300 bg-stone-100 text-amber-600 accent-amber-500 focus:ring-2 focus:ring-amber-500"
  />
);

const ChecklistItem = ({ item }: { item: TChecklistItem }) => {
  const { isChecked, checkItem } = useCheckItem();
  const [isExpanded, setIsExpanded] = useState(false);

  function onCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { checked, name } = event.target;
    checkItem({ checked, itemId: name });
  }

  return (
    <li>
      <label className="flex items-start justify-start gap-3">
        <Checkbox
          itemId={item.id}
          isChecked={isChecked(item.id)}
          onChange={onCheckboxChange}
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
      </label>
      {item.items && isExpanded && (
        <ul className="mt-4 flex flex-col gap-5 px-4">
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
    <ul className="flex flex-col gap-5 px-4">
      {items.map((item) => (
        <ChecklistItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
