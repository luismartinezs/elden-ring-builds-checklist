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
      label="Archetype"
      orientation="horizontal"
      options={archetypes.map((archetype) => ({
        label: toTitleCase(archetype),
        value: archetype,
      }))}
      value={selected ?? undefined}
      onChange={(value) => mutateOption(key, value)}
    />
  );
};
