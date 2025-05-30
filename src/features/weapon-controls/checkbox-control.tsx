import { Checkbox } from "~/features/checklist/components/Checkbox";
import { useControl } from "./use-controls";
import { useId } from "react";

export const CheckboxControl = ({
  controlKey,
  type,
  label,
}: {
  controlKey: string;
  type: "filter" | "sort";
  label: string;
}) => {
  const { value, mutate } = useControl({ key: controlKey, type });
  const id = useId();
  return (
    <div className="flex flex-nowrap items-center gap-0.5 sm:gap-1">
      <label
        className="cursor-pointer whitespace-nowrap text-xs sm:text-sm"
        htmlFor={id}
      >
        {label}
      </label>
      <Checkbox
        id={id}
        size="sm"
        itemId={controlKey}
        label={label}
        isChecked={!!value}
        onChange={() => mutate(!value)}
        className="mt-0 cursor-pointer"
      />
    </div>
  );
};
