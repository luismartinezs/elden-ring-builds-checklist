import { Checkbox } from "~/features/checklist/components/Checkbox";
import { useControl } from "./use-controls";

export const CheckboxControl = ({
  controlKey,
  type,
  label,
}: {
  controlKey: string;
  type: "filter" | "sort";
  label: string;
}) => {
  const { value, mutate } = useControl<boolean>({ key: controlKey, type });
  return (
    <div className="flex items-center gap-1">
      <label className="text-sm">{label}</label>
      <Checkbox
        size="sm"
        itemId={controlKey}
        label={label}
        isChecked={!!value}
        onChange={() => mutate(!value)}
        className="mt-0"
      />
    </div>
  );
};
