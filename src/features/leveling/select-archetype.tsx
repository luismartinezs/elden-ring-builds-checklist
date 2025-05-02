import { Select } from "~/components/Select";
import { type Archetype } from "./leveling";

const archetypes: Archetype[] = ["melee", "caster", "hybrid", "bleed"];

export const SelectArchetype = () => {
  return (
    <Select
      label="Archetype"
      orientation="horizontal"
      options={archetypes.map((archetype) => ({
        label: archetype,
        value: archetype,
      }))}
    />
  );
};
