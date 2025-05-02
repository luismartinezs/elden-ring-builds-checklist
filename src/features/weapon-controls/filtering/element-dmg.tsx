// filters to toggle weapons that deal elemental damage of type

import { CheckboxControl } from "~/features/weapon-controls/checkbox-control";

export const elemDmgTypesKeys = [
  "magicatk",
  "fireatk",
  "lightningatk",
  "holyatk",
] as const;

const elemDmgTypeToLabel: Record<(typeof elemDmgTypesKeys)[number], string> = {
  magicatk: "Magic",
  fireatk: "Fire",
  lightningatk: "Lightning",
  holyatk: "Holy",
};

export const ElementDmg = () => {
  return (
    <>
      {elemDmgTypesKeys.map((type) => (
        <CheckboxControl
          key={type}
          controlKey={type}
          type="filter"
          label={elemDmgTypeToLabel[type]}
        />
      ))}
    </>
  );
};
