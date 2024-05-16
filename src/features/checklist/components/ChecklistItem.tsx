import { useState } from "react";
import type { TChecklistItem } from "../types";
import { Checkbox } from "./Checkbox";
import { ChecklistLabel } from "./ChecklistLabel";
import Toggler from "./Toggler";

const ChecklistItem = ({
  item,
  children,
  onCheck,
  isChecked,
  hasNested,
}: {
  item: TChecklistItem;
  onCheck: (itemId: string) => void;
  isChecked: boolean;
  children?: React.ReactNode;
  hasNested?: boolean;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <div className="flex items-start justify-start gap-3">
        <Checkbox
          itemId={item.id}
          isChecked={isChecked}
          onChange={() => onCheck(item.id)}
          label={item.description + " " + item?.tags?.join(", ")}
        />
        <ChecklistLabel description={item.description} tags={item.tags} />
        {hasNested && (
          <Toggler
            onClick={(evt) => {
              evt.preventDefault();
              setIsExpanded(!isExpanded);
            }}
            isExpanded={isExpanded}
          />
        )}
      </div>
      {hasNested && isExpanded ? children : null}
    </div>
  );
};

ChecklistItem.displayName = "ChecklistItem";

export { ChecklistItem };
