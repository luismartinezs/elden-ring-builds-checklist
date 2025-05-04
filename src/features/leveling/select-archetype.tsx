import { Select } from "~/components/Select";
import { useOptions } from "./use-options";
import { archetypes } from "./leveling";
import { toTitleCase } from "~/utils/text";

export const key = "archetype" as const;

export const SelectArchetype = () => {
  const { getOptions, mutateOption } = useOptions();
  const selected = getOptions(key) as string | undefined;

  return (
    <Select
      label="Playstyle"
      orientation="horizontal"
      className="gap-1 text-xs sm:gap-2 sm:text-sm"
      options={archetypes.map((archetype) => ({
        label: toTitleCase(archetype),
        value: archetype,
      }))}
      value={selected ?? undefined}
      onChange={(value) => mutateOption(key, value)}
    />
  );
};
