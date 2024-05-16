import { useManageFilters } from '~/features/checklist/hooks/useManageFilters';

export function useToggleFilters() {
  const {
    updateAllFilters,
    getCurrentFilters
  } = useManageFilters()

  const getAllTrue = () => {
    const currentFilters = getCurrentFilters();
    console.log('Current Filters in getAllTrue:', currentFilters);
    return Object.values(currentFilters).every(Boolean);
  };

  return {
    toggleFilters: () => {
      const allTrue = getAllTrue();
      console.log('allTrue when calling toggleFilters:', allTrue);

      updateAllFilters(!allTrue);
    },
    allFiltersChecked: getAllTrue()
  };
}