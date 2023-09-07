import { useLocalStorage } from "usehooks-ts";
import { initAppData } from "~/features/checklist/hooks/useManageProfiles";
import { type AppData } from "~/features/checklist/types";
import { produce } from "immer";

export function useManageChecklists() {
  const [data, setData] = useLocalStorage<AppData>("appData", initAppData);

  const getCurrentChecklists = () => {
    return data.profiles[data.currentProfile]?.checklists ?? {};
  };

  const updateChecklist = (checklistId: string, uuids: string[]) => {
    if (!data.profiles[data.currentProfile]) {
      throw new Error("Profile not initialized, this is probably a bug");
    }
    setData(produce(data, draft => {
      draft.profiles[draft.currentProfile]!.checklists[checklistId] = uuids;
      return draft;
    }))
  };

  return {
    getCurrentChecklists,
    updateChecklist,
  };
}
