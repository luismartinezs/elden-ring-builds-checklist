import { type SortConfig } from "./types";

export const SORT_CONFIGS: SortConfig[] = [
  {
    section: "requirements",
    key: "str",
    label: "STR",
  },
];

export const DEFAULT_SORT_STATE = {
  key: "str" as const,
  direction: "off" as const,
};