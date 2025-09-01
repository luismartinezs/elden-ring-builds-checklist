import { useLocalStorage } from "usehooks-ts";
import { initAppData } from "~/features/checklist/hooks/useManageProfiles";
import { type AppData } from "~/features/checklist/types";
import { produce } from "immer";

export function useManageChallenges() {
  const [data, setData] = useLocalStorage<AppData>("appData", initAppData);

  const getCurrentChallenges = () => {
    return data.profiles[data.currentProfile]?.challenges ?? {};
  };

  const updateChallenge = (challengeKey: string, uuids: string[]) => {
    if (!data.profiles[data.currentProfile]) {
      throw new Error("Profile not initialized, this is probably a bug");
    }
    setData(produce(data, draft => {
      const currentProfile = draft.profiles[draft.currentProfile]!;
      if (!currentProfile.challenges) {
        currentProfile.challenges = {};
      }
      currentProfile.challenges[challengeKey] = uuids;

      return draft;
    }))
  };

  return {
    getCurrentChallenges,
    updateChallenge,
  };
}