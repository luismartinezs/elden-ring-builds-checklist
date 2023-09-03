import { useLocalStorage } from 'usehooks-ts'

export const filterKeys = {
  optional: 'optional',
  completed: 'completed',
  volcanoManorAssassination: 'volcano-manor-assassination',
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