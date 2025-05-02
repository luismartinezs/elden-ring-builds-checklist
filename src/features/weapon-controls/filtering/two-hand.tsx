import { CheckboxControl } from "../checkbox-control";

export const twoHandKey = "2h" as const;

export const TwoHandCheckbox = () => {
  return (
    <CheckboxControl controlKey={twoHandKey} type="filter" label="2-Hand" />
  );
};
