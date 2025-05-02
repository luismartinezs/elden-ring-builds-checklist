import { CheckboxControl } from "../checkbox-control";

export const upgradeTypeKeys = ["somber-stone", "regular-stone"] as const;

export const upgradeTypeToLabel: Record<
  (typeof upgradeTypeKeys)[number],
  string
> = {
  "somber-stone": "Somber",
  "regular-stone": "Regular",
};

export const UpgradeType = () => {
  return (
    <>
      {upgradeTypeKeys.map((type) => (
        <CheckboxControl
          key={type}
          controlKey={type}
          type="filter"
          label={upgradeTypeToLabel[type]}
        />
      ))}
    </>
  );
};
