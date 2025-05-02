import { useLocalStorage } from "usehooks-ts";
import { produce } from "immer";
import { initAppData } from "../checklist/hooks/useManageProfiles";
import {
  type AppData,
  type StatRequirements,
} from "~/features/checklist/types";
import { useEffect } from "react";

const initStatRequirements = {};

export const useManageStatRequirements = () => {
  const [data, setData] = useLocalStorage<AppData>("appData", initAppData);

  useEffect(() => {
    const currentProfile = data.profiles[data.currentProfile];
    if (currentProfile && !currentProfile.statRequirements) {
      setData(
        produce((draft: AppData) => {
          draft.profiles[draft.currentProfile]!.statRequirements = {
            ...initStatRequirements,
          };
        })
      );
    }
  }, [data, setData]);

  const getCurrentStatRequirements = (): StatRequirements => {
    const currentProfile = data.profiles[data.currentProfile];
    return currentProfile?.statRequirements ?? initStatRequirements;
  };

  const updateStatRequirement = (
    key: keyof StatRequirements,
    value: number
  ) => {
    setData(
      produce((draft: AppData) => {
        draft.profiles[draft.currentProfile]!.statRequirements[key] = value;
      })
    );
  };

  const updateAllStatRequirements = (newStatRequirements: StatRequirements) => {
    setData(
      produce((draft: AppData) => {
        draft.profiles[draft.currentProfile]!.statRequirements =
          newStatRequirements;
      })
    );
  };

  return {
    getCurrentStatRequirements,
    updateStatRequirement,
    updateAllStatRequirements,
  };
};
