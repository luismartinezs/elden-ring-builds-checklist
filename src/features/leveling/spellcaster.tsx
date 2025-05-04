import { useId } from "react";
import { Checkbox } from "~/features/checklist/components/Checkbox";
import { useOptions } from "~/features/leveling/use-options";

const key = "isSpellcaster" as const;

export const SpellcasterCheckbox = () => {
  const { getOptions, mutateOption } = useOptions();
  const id = useId();
  const isChecked = getOptions(key);

  const onChange = () => mutateOption(key, !isChecked);

  return (
    <div className="flex flex-nowrap items-center gap-0.5 sm:gap-1">
      <label
        className="cursor-pointer whitespace-nowrap text-xs sm:text-sm"
        htmlFor={id}
      >
        Spellcaster
      </label>
      <Checkbox
        id={id}
        itemId={key}
        label={key}
        isChecked={!!isChecked}
        onChange={onChange}
        className="mt-0 cursor-pointer"
      />
    </div>
  );
};
