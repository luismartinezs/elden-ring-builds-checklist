import { cn } from "~/utils/cn";

type CheckboxSize = "xs" | "sm" | "md" | "lg" | "xl";

const sizeClasses: Record<CheckboxSize, string> = {
  xs: "size-4 min-h-4 min-w-4",
  sm: "size-5 min-h-5 min-w-5",
  md: "size-6 min-h-6 min-w-6",
  lg: "size-7 min-h-7 min-w-7",
  xl: "size-8 min-h-8 min-w-8",
};

export const Checkbox = ({
  itemId,
  isChecked,
  onChange,
  label,
  size = "md",
  className,
}: {
  itemId: string;
  isChecked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  size?: CheckboxSize;
  className?: string;
}) => (
  <input
    aria-label={label}
    type="checkbox"
    name={itemId}
    checked={isChecked}
    onChange={onChange}
    className={cn(
      "mt-1 flex-shrink-0 rounded border-stone-300 bg-stone-500 text-amber-600 accent-amber-500 focus:ring-2 focus:ring-amber-500",
      sizeClasses[size],
      className
    )}
  />
);
