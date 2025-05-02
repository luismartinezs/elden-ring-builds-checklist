// filters to toggle weapons that deal elemental damage of type

import { CheckboxControl } from "~/features/weapon-controls/checkbox-control";

export const physDmgTypesKeys = [
  "Standard",
  "Strike",
  "Slash",
  "Pierce",
] as const;

export const PhysDmg = () => {
  return (
    <>
      {physDmgTypesKeys.map((type) => (
        <CheckboxControl
          key={type}
          controlKey={type}
          type="filter"
          label={type}
        />
      ))}
    </>
  );
};
