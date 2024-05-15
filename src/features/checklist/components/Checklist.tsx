import { type TChecklistItem } from "~/features/checklist/types";
import { ChecklistItem } from "./ChecklistItem";

export function Checklist({ items }: { items: TChecklistItem[] }) {
  return (
    <ul className="flex flex-col gap-6 px-4">
      {items.map((item) => (
        <ChecklistItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
