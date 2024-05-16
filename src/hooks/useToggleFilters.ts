import { useManageFilters } from '~/features/checklist/hooks/useManageFilters';

export function useToggleFilters() {
  const {
    updateAllFilters,
    getCurrentFilters
  } = useManageFilters()

  const getAllTrue = () => {
    const currentFilters = getCurrentFilters();
    console.log('Current Filters in getAllTrue:', JSON.stringify(currentFilters));
    return Object.values(currentFilters).every(Boolean);
  };

  return {
    toggleFilters: (value:boolean) => {
      updateAllFilters(value);
    },
    allFiltersChecked: getAllTrue()
  };
}