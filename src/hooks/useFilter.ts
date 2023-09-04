import { useLocalStorage } from 'usehooks-ts'

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
} as const

export function useFilter(tag: typeof filterKeys[keyof typeof filterKeys]) {
  const [filter, setFilter] = useLocalStorage(
    `filter-${tag}`,
    false
  );

  return {
    filter,
    setFilter,
  };
}