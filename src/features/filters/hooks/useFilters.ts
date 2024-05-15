import { useManageFilters } from '~/features/checklist/hooks/useManageFilters';

export function useFilters() {
  const {
    getCurrentFilters,
  } = useManageFilters()

  return {
    activeFilters: Object.entries(getCurrentFilters()).filter(([_,isDisabled]) => !isDisabled).map(([tag,_]) => tag),
  };
}