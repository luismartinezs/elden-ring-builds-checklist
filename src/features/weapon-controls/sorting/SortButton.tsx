import { type SortDirection } from "./types";
import { cn } from "~/utils/cn";
import { FiArrowDown, FiArrowUp, FiMinus } from "react-icons/fi";

interface SortButtonProps {
  direction: SortDirection;
  label: string;
  onClick: () => void;
}

export function SortButton({ direction, label, onClick }: SortButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-1.5 rounded-lg px-3 py-1.5",
        "bg-stone-100 text-sm font-medium",
        "hover:bg-stone-200",
        "dark:bg-stone-800 dark:hover:bg-stone-700",
        direction === "off"
          ? "text-stone-500 dark:text-stone-400"
          : "text-stone-700 dark:text-stone-300"
      )}
    >
      {direction === "asc" && <FiArrowUp className="size-4" />}
      {direction === "desc" && <FiArrowDown className="size-4" />}
      {direction === "off" && <FiMinus className="size-4" />}
      {label}
    </button>
  );
}
