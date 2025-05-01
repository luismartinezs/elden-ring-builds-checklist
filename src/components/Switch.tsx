import { cn } from "~/utils/cn";

interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  className?: string;
}

export function Switch({ checked, onChange, label, className }: SwitchProps) {
  return (
    <label
      className={cn(
        "relative inline-flex cursor-pointer items-center",
        className
      )}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="peer sr-only"
      />
      <div
        className={cn(
          "h-6 w-11 rounded-full bg-stone-700",
          "after:absolute after:left-[2px] after:top-[2px]",
          "after:h-5 after:w-5 after:rounded-full after:bg-white",
          "after:transition-all after:content-['']",
          "peer-checked:bg-amber-500",
          "peer-checked:after:translate-x-full",
          "peer-checked:after:border-white",
          "peer-focus:outline-none peer-focus:ring-4",
          "peer-focus:ring-amber-300/20"
        )}
      />
      {label && (
        <span className="ml-3 text-sm font-medium text-stone-300">{label}</span>
      )}
    </label>
  );
}
