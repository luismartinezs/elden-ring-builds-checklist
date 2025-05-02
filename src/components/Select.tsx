import { type ChangeEvent, type ComponentPropsWithoutRef } from "react";
import { cn } from "~/utils/cn";

export type SelectOption = {
  label: string;
  value: string;
};

export type SelectProps = {
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  placeholder?: string;
  error?: string;
  className?: string;
  orientation?: "vertical" | "horizontal";
} & Omit<
  ComponentPropsWithoutRef<"select">,
  "onChange" | "value" | "className"
>;

export const Select = ({
  options,
  value,
  onChange,
  label,
  placeholder,
  error,
  className,
  orientation = "vertical",
  ...props
}: SelectProps) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div
      className={cn(
        "flex flex-col gap-1.5",
        orientation === "horizontal" && "flex-row items-center gap-2"
      )}
    >
      {label && (
        <label htmlFor={props.id} className="text-sm text-stone-200">
          {label}
        </label>
      )}
      <select
        {...props}
        value={value}
        onChange={handleChange}
        className={cn(
          "rounded-md border border-stone-500 bg-stone-800 px-3 py-1.5 text-sm text-stone-200",
          "focus:border-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-400/20",
          "disabled:cursor-not-allowed disabled:opacity-50",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
          className
        )}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};
