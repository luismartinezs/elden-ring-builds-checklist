import { useLocalStorage } from "usehooks-ts";
import { initAppData } from "~/features/checklist/hooks/useManageProfiles";
import { type AppData } from "~/features/checklist/types";
import { produce } from 'immer'
import { TAGS } from "~/features/tags"

export function useManageFilters() {
  const [data, setData] = useLocalStorage<AppData>("appData", initAppData);

  const getCurrentFilters = () => {
    return data.profiles[data.currentProfile]?.filters ?? {};
  };

  const updateFilter = (filterName: string, value: boolean) => {
    setData(produce(data, draft => {
      console.log(`Updating filter ${filterName} to ${value}`);
      draft.profiles[draft.currentProfile]!.filters[filterName] = value;
      return draft;
    }))
  };

  const updateAllFilters = (value: boolean) => {
    setData(produce(data, draft => {
      console.log(`Updating all filters to ${value}`);
      draft.profiles[draft.currentProfile]!.filters.completed = value;
      Object.values(TAGS).forEach(tag => {
        draft.profiles[draft.currentProfile]!.filters[tag] = value;
        console.log(`Setting filter ${tag} to ${value}`);

        return draft
      })
    }))
  }

  return {
    getCurrentFilters,
    updateFilter,
    updateAllFilters
  };
}
