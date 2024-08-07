// src/constants/tags.ts
export const TAGS = {
  OPTIONAL: 'OPTIONAL',
  ALL_REMEMBERANCES: 'all-remembrances',
  // BASE GAME
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
  HYETTA_QUESTLINE: 'hyetta-questline',
  DUNG_EATER_QUESTLINE: 'dung-eater-questline',
  SELLEN_QUESTLINE: 'sellen-questline',
  PATCHES_QUESTLINE: 'patches-questline',
  YURA_QUESTLINE: 'yura-questline',
  CORHYN_QUESTLINE: 'corhyn-questline',
  BOGGART_QUESTLINE: 'boggart-questline',
  RYA_QUESTLINE: 'rya-questline',
  TUNNELS: 'tunnels',
  GOLDEN_SEED: 'golden-seed',
  SACRED_TEAR: 'sacred-tear',
  LARVAL_TEAR: 'larval-tear',
  RITUAL_POT: 'ritual-pot',
  // SOTE
  LEDA: 'leda-questline',
  FREYJA: 'freyja-questline',
  DANE: 'dane-questline',
  MOORE: 'moore-questline',
  ANSBACH: 'ansbach-questline',
  THIOLLIER: 'thiollier-questline',
  QUEELIGN: 'queelign-questline',
  HORNSENT: 'hornsent-questline',
  IGON: 'igon-questline',
  FORAGER: 'forager',
  YMIR: 'ymir-questline',
  JOLAN: 'jolan-questline',
  DRAGON_PRIESTESS: 'dragon-priestess',
  MAP_FRAGMENT: 'map-fragment',
} as const;

// these tags are "hidden" tags that are not displayed as filters
export const EXTRA_TAGS = {
  NGPLUS: 'ng+',
  ALWAYS_SHOW: 'always-show', // I suspect this tag and NGPLUS might be doing the same thing
}