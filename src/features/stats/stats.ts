export type TStatKey = "vgr" | "mnd" | "end" | "str" | "dex" | "int" | "fai" | "arc";

export type TStat = {
  key: TStatKey;
  name: string;
};

export const stats: TStat[] = [
  {
    key: "vgr",
    name: "Vigor"
  },
  {
    key: "mnd",
    name: "Mind"
  },
  {
    key: "end",
    name: "Endurance"
  },
  {
    key: "str",
    name: "Strength"
  },
  {
    key: "dex",
    name: "Dexterity"
  },
  {
    key: "int",
    name: "Intelligence"
  },
  {
    key: "fai",
    name: "Faith"
  },
  {
    key: "arc",
    name: "Arcane"
  }
];

export const statLabelMap: Record<TStatKey, string> = {
  vgr: "Vigor",
  mnd: "Mind",
  end: "Endurance",
  str: "Strength",
  dex: "Dexterity",
  int: "Intelligence",
  fai: "Faith",
  arc: "Arcane",
};