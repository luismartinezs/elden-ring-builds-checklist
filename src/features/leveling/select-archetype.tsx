import { Select } from "~/components/Select";
import { useOptions } from "./use-options";

export const archetypes = [
  "default",
  "melee",
  "caster",
  "hybrid",
  "bleed",
] as const;
export const key = "archetype" as const;

export const SelectArchetype = () => {
  const { getOptions, mutateOption } = useOptions();
  const selected = getOptions(key) as string | undefined;

  return (
    <Select
      label="Archetype"
      orientation="horizontal"
      options={archetypes.map((archetype) => ({
        label: archetype,
        value: archetype,
      }))}
      value={selected ?? undefined}
      onChange={(value) => mutateOption(key, value)}
    />
  );
};
