import type { TTagKeys } from "./types";
import { TAGS } from "./constants";

export const tags: Record<TTagKeys, {
  label: string;
  key: TTagKeys;
  buttonClasses: string;
  tagClasses: string;
}> = {
  [TAGS.OPTIONAL]: {
    label: 'Optional',
    key: TAGS.OPTIONAL,
    buttonClasses: '',
    tagClasses: 'border border-amber-500 text-amber-500',
  },
  [TAGS.VOLCANO_MANOR_ASSASSINATION]: {
    label: 'Volcano Manor Assassination',
    key: TAGS.VOLCANO_MANOR_ASSASSINATION,
    buttonClasses: 'border-red-400 text-red-400 hover:bg-red-400 hover:text-black focus:ring-red-400',
    tagClasses: 'bg-red-400 text-black',
  },
  [TAGS.RANNI_QUESTLINE]: {
    label: 'Ranni',
    key: TAGS.RANNI_QUESTLINE,
    buttonClasses: 'border-sky-200 text-sky-200 hover:bg-sky-200 hover:text-black focus:ring-sky-200',
    tagClasses: '',
  },
  [TAGS.VARRE_QUESTLINE]: {
    label: 'Varré',
    key: TAGS.VARRE_QUESTLINE,
    buttonClasses: 'border-red-700 text-red-700 hover:bg-red-700 hover:text-black focus:ring-red-700',
    tagClasses: 'bg-red-700 text-black',
  },
  [TAGS.NEPHELI_QUESTLINE]: {
    label: 'Nepheli',
    key: TAGS.NEPHELI_QUESTLINE,
    buttonClasses: 'border-orange-300 text-orange-300 hover:bg-orange-300 hover:text-black focus:ring-orange-300',
    tagClasses: 'bg-orange-300 text-black',
  },
  [TAGS.SMITHING_STONE_BELL]: {
    label: 'Smithing Stone Bell',
    key: TAGS.SMITHING_STONE_BELL,
    buttonClasses: 'border-orange-200 text-orange-200 hover:bg-orange-200 hover:text-black focus:ring-orange-200',
    tagClasses: 'bg-orange-200 text-black',
  },
  [TAGS.SOMBER_STONE_BELL]: {
    label: 'Somber Stone Bell',
    key: TAGS.SOMBER_STONE_BELL,
    buttonClasses: 'border-gray-100 text-gray-100 hover:bg-gray-100 hover:text-black focus:ring-gray-100',
    tagClasses: 'bg-gray-100 text-black',
  },
  [TAGS.GLOVEWORT_BELL]: {
    label: 'Glovewort Bell',
    key: TAGS.GLOVEWORT_BELL,
    buttonClasses: 'border-zinc-300 text-zinc-300 hover:bg-zinc-300 hover:text-black focus:ring-zinc-300',
    tagClasses: 'bg-zinc-300 text-black',
  },
  [TAGS.GHOST_GLOVEWORT_BELL]: {
    label: 'Ghost Glovewort Bell',
    key: TAGS.GHOST_GLOVEWORT_BELL,
    buttonClasses: 'border-blue-200 text-blue-200 hover:bg-blue-200 hover:text-black focus:ring-blue-200',
    tagClasses: 'bg-blue-200 text-black',
  },
  [TAGS.SELUVIS_QUESTLINE]: {
    label: 'Seluvis',
    key: TAGS.SELUVIS_QUESTLINE,
    buttonClasses: 'border-sky-300 text-sky-300 hover:bg-sky-300 hover:text-black focus:ring-sky-300',
    tagClasses: 'border border-sky-500 bg-sky-900 text-sky-100 -m-px',
  },
  [TAGS.WHETBLADES]: {
    label: 'Whetblades',
    key: TAGS.WHETBLADES,
    buttonClasses: 'border-green-300 text-green-300 hover:bg-green-300 hover:text-black focus:ring-green-300',
    tagClasses: 'bg-green-300 text-black',
  },
  [TAGS.LATENNA_QUESTLINE]: {
    label: 'Latenna',
    key: TAGS.LATENNA_QUESTLINE,
    buttonClasses: 'border-cyan-200 text-cyan-200 hover:bg-cyan-200 hover:text-black focus:ring-cyan-200',
    tagClasses: 'bg-cyan-200 text-black',
  },
  [TAGS.ALEXANDER_QUESTLINE]: {
    label: 'Alexander',
    key: TAGS.ALEXANDER_QUESTLINE,
    buttonClasses: 'border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black focus:ring-orange-400',
    tagClasses: 'bg-orange-400 text-black',
  },
  [TAGS.MILLICENT_QUESTLINE]: {
    label: 'Millicent',
    key: TAGS.MILLICENT_QUESTLINE,
    buttonClasses: 'border-rose-400 text-rose-400 hover:bg-rose-400 hover:text-black focus:ring-rose-400',
    tagClasses: 'bg-rose-400 text-black',
  },
}