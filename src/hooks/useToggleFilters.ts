import { useManageFilters } from '~/features/checklist/hooks/useManageFilters';

export function useToggleFilters() {
  const {
    updateAllFilters,
    getCurrentFilters
  } = useManageFilters()

  const getAllTrue = () => {
    const currentFilters = getCurrentFilters();
    return Object.values(currentFilters).every(Boolean);
  };

  return {
    toggleFilters: (value: boolean) => {
      updateAllFilters(value);
    },
    allFiltersChecked: getAllTrue()
  };
}