import { type TStatKey } from "~/features/stats/stats";

export interface StatCapInfo {
  softCaps: number[];
  items: string[];
}

export const levelCapsData: Record<TStatKey, StatCapInfo> = {
  vgr: {
    softCaps: [40, 60],
    items: [
      'From 40 to 60 there are progressively decreasing returns'
    ]
  },
  mnd: {
    softCaps: [15, 35, 50, 60],
    items: [
      'FP/level maxes between 36-50',
      '38 = one fully upgraded flask'
    ]
  },
  end: {
    softCaps: [25, 30, 50, 60],
    items: [
      '30/50 = stamina soft caps',
      '25/60 = equipment load',
    ]
  },
  str: {
    softCaps: [20, 55, 80],
    items: [
      '30/45 for clawmark and frenzied flame seals',
    ]
  },
  dex: {
    softCaps: [20, 55, 80],
    items: [
      '30/45 for frenzied flame seal',
    ]
  },
  int: {
    softCaps: [20, 50, 60, 80],
    items: [
      '20/50/80 = attack rating',
      '60/80 = sorcery scaling'
    ]
  },
  fai: {
    softCaps: [20, 50, 60, 80],
    items: [
      '20/50/80 = attack rating',
      '60/80 = incantation scaling'
    ]
  },
  arc: {
    softCaps: [20, 30, 45, 50, 80],
    items: [
      '20/50/80 = attack rating',
      '30/45 = incantation scaling'
    ]
  },
};
