import { useManageFilters } from '~/features/checklist/hooks/useManageFilters';

export function useToggleFilters() {
  const {
    updateAllFilters,
    getCurrentFilters
  } = useManageFilters()

  const allTrue = Object.values(getCurrentFilters()).every(Boolean)

  return {
    toggleFilters: () => {
      console.log('allTrue when calling toggleFilters:', allTrue);

      updateAllFilters(!allTrue)
    },
    allFiltersChecked: allTrue
  };
}