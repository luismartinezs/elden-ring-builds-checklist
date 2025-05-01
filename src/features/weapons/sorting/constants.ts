import { type SortConfig } from "./types";

export const SORT_CONFIGS: SortConfig[] = [
  {
    section: "requirements",
    key: "str",
    label: "STR",
  },
  {
    section: "requirements",
    key: "dex",
    label: "DEX",
  },
  {
    section: "requirements",
    key: "int",
    label: "INT",
  },
  {
    section: "requirements",
    key: "fai",
    label: "FAI",
  },
  {
    section: "requirements",
    key: "arc",
    label: "ARC",
  },
];

export const DEFAULT_SORT_STATE = {
  key: "str" as const,
  direction: "off" as const,
};