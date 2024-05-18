// src/constants/tags.ts
export const TAGS = {
  OPTIONAL: 'OPTIONAL',
  VOLCANO_MANOR_ASSASSINATION: 'volcano-manor-assassination',
  RANNI_QUESTLINE: 'ranni-questline',
  VARRE_QUESTLINE: 'varre-questline',
  NEPHELI_QUESTLINE: 'nepheli-questline',
  SMITHING_STONE_BELL: 'smithing-stone-bell',
  SOMBER_STONE_BELL: 'somber-stone-bell',
  GLOVEWORT_BELL: 'glovewort-bell',
  GHOST_GLOVEWORT_BELL: 'ghost-glovewort-bell',
  SELUVIS_QUESTLINE: 'seluvis-questline',
  WHETBLADES: 'whetblades',
  LATENNA_QUESTLINE: 'latenna-questline',
  ALEXANDER_QUESTLINE: 'alexander-questline',
  MILLICENT_QUESTLINE: 'millicent-questline',
  ALL_REMEMBERANCES: 'all-remembrances',
  HYETTA_QUESTLINE: 'hyetta-questline',
  DUNG_EATER_QUESTLINE: 'dung-eater-questline',
  SELLEN_QUESTLINE: 'sellen-questline',
  PATCHES_QUESTLINE: 'patches-questline',
  YURA_QUESTLINE: 'yura-questline',
  CORHYN_QUESTLINE: 'corhyn-questline',
  BOGGART_QUESTLINE: 'boggart-questline',
  RYA_QUESTLINE: 'rya-questline',
  TUNNELS: 'tunnels',
} as const;

// these tags are "hidden" tags that are not displayed as filters
export const EXTRA_TAGS = {
  NGPLUS: 'ng+',
  ALWAYS_SHOW: 'always-show', // I suspect this tag and NGPLUS might be doing the same thing
}