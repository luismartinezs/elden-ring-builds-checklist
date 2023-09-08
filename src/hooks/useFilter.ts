import { useManageFilters } from '~/features/checklist/hooks/useManageFilters';
import type { TTagKeys } from '~/features/tags';

export function useFilter(tag: TTagKeys | 'completed') {
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