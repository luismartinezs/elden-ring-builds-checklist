import { useLocalStorage } from "usehooks-ts";
import { type AppData } from "~/features/checklist/types";
import { produce } from "immer"

export const initAppData = {
  profiles: {
    "Default": {
      checklists: {},
      filters: {},
    },
  },
  currentProfile: "Default",
};

export function useManageProfiles() {
  const [data, setData] = useLocalStorage<AppData>("appData", initAppData);

  const getAllProfiles = () => Object.keys(data.profiles);

  const addProfile = (profileName: string) => {
    setData(produce(data, draft => {
      draft.profiles[profileName] = { checklists: {}, filters: {} };
      return draft
    }))
  };

  const deleteProfile = (profileName: string) => {
    setData(produce(data, draft => {
      delete draft.profiles[profileName];
      return draft
    }))
  };

  const switchProfile = (profileName: string) => {
    setData(produce(data, draft => {
      draft.currentProfile = profileName;
      return draft
    }))
  };

  return {
    getAllProfiles,
    addProfile,
    deleteProfile,
    switchProfile,
  };
}