import { useLocalStorage } from "usehooks-ts";
import { initAppData } from "~/features/checklist/hooks/useManageProfiles";
import { type AppData } from "~/features/checklist/types";
import { produce } from 'immer'

export function useManageFilters() {
  const [data, setData] = useLocalStorage<AppData>("appData", initAppData);

  const getCurrentFilters = () => {
    const filters = data.profiles[data.currentProfile]?.filters ?? {};
    // console.log('getCurrentFilters:', JSON.stringify(filters));
    return filters;
  };

  const updateFilter = (filterName: string, value: boolean) => {
    setData(produce(data, draft => {
      // console.log(`Updating filter ${filterName} to ${value}`);
      draft.profiles[draft.currentProfile]!.filters[filterName] = value;
      return draft;
    }))
  };

  const updateAllFilters = (value: boolean) => {
    setData(produce(data, draft => {
      // console.log(`Updating all filters to ${value}`);
      const currentFilters = draft.profiles[draft.currentProfile]?.filters ?? {};

      Object.keys(currentFilters).forEach(filterName => {
        currentFilters[filterName] = value;
      })

      draft.profiles[draft.currentProfile]!.filters = currentFilters
    }))
  }

  return {
    getCurrentFilters,
    updateFilter,
    updateAllFilters
  };
}
