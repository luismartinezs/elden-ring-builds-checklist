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
    <div className="flex items-center gap-2">
      <label>{label}</label>
      <Checkbox
        itemId={controlKey}
        label={label}
        isChecked={!!value}
        onChange={() => mutate(!value)}
      />
    </div>
  );
};
