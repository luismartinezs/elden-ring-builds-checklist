import { useManageFilters } from '~/features/checklist/hooks/useManageFilters';

export const filterKeys = {
  optional: 'optional',
  completed: 'completed',
  volcanoManorAssassination: 'volcano-manor-assassination',
  ranniQuestline: 'ranni-questline',
  varreQuestline: 'varre-questline',
  nepheliQuestline: 'nepheli-questline',
  smithingStoneBell: 'smithing-stone-bell',
  somberStoneBell: 'somber-stone-bell',
  glovewortBell: 'glovewort-bell',
  ghostGlovewortBell: 'ghost-glovewort-bell',
  seluvisQuestline: 'seluvis-questline',
  whetblades: 'whetblades',
  latennaQuestline: 'latenna-questline',
  alexanderQuestline: 'alexander-questline',
  millicentQuestline: 'millicent-questline',
} as const

export function useFilter(tag: typeof filterKeys[keyof typeof filterKeys]) {
  const {
    getCurrentFilters,
    updateFilter
  } = useManageFilters()

  return {
    filter: getCurrentFilters()[tag] ?? false,
    setFilter: (value: boolean) => {
      updateFilter(tag, value)
    },
  };
}