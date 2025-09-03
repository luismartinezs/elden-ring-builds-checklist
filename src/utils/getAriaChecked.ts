export const getAriaChecked = (checked: boolean | "mixed" | undefined): boolean | "true" | "false" | "mixed" | undefined => {
  if (checked === "mixed") return "mixed";
  if (checked === undefined) return undefined;
  return checked ? "true" : "false";
};