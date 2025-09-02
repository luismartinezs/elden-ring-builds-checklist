import { useLocalStorage } from "usehooks-ts";
import { initAppData } from "~/features/checklist/hooks/useManageProfiles";
import { type AppData } from "~/features/checklist/types";
import { produce } from "immer";

export function useManageChallenges() {
  const [data, setData] = useLocalStorage<AppData>("appData", initAppData);

  const getCurrentChallenges = () => {
    return data.profiles[data.currentProfile]?.challenges ?? {};
  };

  const getBossSpecificChallenges = (challengeKey: string, bossKey?: string): string[] => {
    const challenges = getCurrentChallenges()[challengeKey];
    
    if (!bossKey) {
      // Return regular challenge array or empty array
      return Array.isArray(challenges) ? challenges : [];
    }
    
    // For boss-specific challenges
    if (challenges && typeof challenges === 'object' && !Array.isArray(challenges)) {
      return (challenges as Record<string, string[]>)[bossKey] ?? [];
    }
    
    return [];
  };

  const updateChallenge = (challengeKey: string, uuids: string[], bossKey?: string) => {
    if (!data.profiles[data.currentProfile]) {
      throw new Error("Profile not initialized, this is probably a bug");
    }
    setData(produce(data, draft => {
      const currentProfile = draft.profiles[draft.currentProfile]!;
      if (!currentProfile.challenges) {
        currentProfile.challenges = {};
      }
      
      if (!bossKey) {
        // Regular challenge
        currentProfile.challenges[challengeKey] = uuids;
      } else {
        // Boss-specific challenge
        const existing = currentProfile.challenges[challengeKey];
        if (!existing || Array.isArray(existing)) {
          // Initialize boss-specific structure
          currentProfile.challenges[challengeKey] = { [bossKey]: uuids };
        } else {
          // Update existing boss-specific structure
          (currentProfile.challenges[challengeKey] as Record<string, string[]>)[bossKey] = uuids;
        }
      }

      return draft;
    }))
  };

  return {
    getCurrentChallenges,
    getBossSpecificChallenges,
    updateChallenge,
  };
}