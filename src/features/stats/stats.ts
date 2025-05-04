export const vgr = 'vgr' as const;
export const mnd = 'mnd' as const;
export const end = 'end' as const;
export const str = 'str' as const;
export const dex = 'dex' as const;
export const int = 'int' as const;
export const fai = 'fai' as const;
export const arc = 'arc' as const;

export type TAtkStatKey = typeof str | typeof dex | typeof int | typeof fai | typeof arc;
export type TUtilStatKey = typeof vgr | typeof mnd | typeof end;
export type TStatKey = TAtkStatKey | TUtilStatKey;

// Define the type for the stats state
export type StatsState = Record<TStatKey, number>;

// Initial default stats - adjust as needed
export const initStats: StatsState = {
  [vgr]: 10,
  [mnd]: 10,
  [end]: 10,
  [str]: 10,
  [dex]: 10,
  [int]: 10,
  [fai]: 10,
  [arc]: 10,
}

export type TStat = {
  key: TStatKey;
  name: string;
};

export const stats: TStat[] = [
  {
    key: vgr,
    name: "Vigor"
  },
  {
    key: mnd,
    name: "Mind"
  },
  {
    key: end,
    name: "Endurance"
  },
  {
    key: str,
    name: "Strength"
  },
  {
    key: dex,
    name: "Dexterity"
  },
  {
    key: int,
    name: "Intelligence"
  },
  {
    key: fai,
    name: "Faith"
  },
  {
    key: arc,
    name: "Arcane"
  }
];

export const statLabelMap: Record<TStatKey, string> = {
  [vgr]: "Vigor",
  [mnd]: "Mind",
  [end]: "Endurance",
  [str]: "Strength",
  [dex]: "Dexterity",
  [int]: "Intelligence",
  [fai]: "Faith",
  [arc]: "Arcane",
};

export const statColorMap: Record<TStatKey, string> = {
  [vgr]: "bg-red-500/60",
  [mnd]: "bg-blue-500/60",
  [end]: "bg-green-500/60",
  [str]: "bg-orange-500/60",
  [dex]: "bg-teal-500/60",
  [int]: "bg-sky-500/60",
  [fai]: "bg-yellow-300/60",
  [arc]: "bg-pink-500/60",
};