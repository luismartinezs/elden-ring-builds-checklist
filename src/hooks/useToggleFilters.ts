import { useManageFilters } from '~/features/checklist/hooks/useManageFilters';

export function useToggleFilters() {
  const {
    updateAllFilters,
    getCurrentFilters
  } = useManageFilters()

  const allTrue = Object.values(getCurrentFilters()).every(Boolean)

  return {
    toggleFilters: () => {
      updateAllFilters(!allTrue)
    },
    allFiltersChecked: allTrue
  };
}