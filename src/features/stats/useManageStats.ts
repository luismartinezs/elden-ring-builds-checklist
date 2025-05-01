import { useLocalStorage } from "usehooks-ts";
import { initAppData } from "~/features/checklist/hooks/useManageProfiles";
import { type AppData } from "~/features/checklist/types";
import { initStats, type StatsState } from "~/features/stats/stats";
import { produce } from 'immer';

export function useManageStats() {
  const [data, setData] = useLocalStorage<AppData>("appData", initAppData);

  const getCurrentStats = (): StatsState => {
    const currentProfile = data.profiles[data.currentProfile];
    if (currentProfile && !currentProfile.stats) {
      // Initialize stats if they don't exist and save to storage
      setData(produce(data, draft => {
        draft.profiles[draft.currentProfile]!.stats = { ...initStats };
      }));
      return initStats;
    }
    return currentProfile?.stats ?? initStats;
  };

  const updateStat = (statName: keyof StatsState, value: number) => {
    setData(produce(data, draft => {
      const currentProfile = draft.profiles[draft.currentProfile];
      if (currentProfile) {
        if (!currentProfile.stats) {
          currentProfile.stats = { ...initStats };
        }
        currentProfile.stats[statName] = value;
      }
    }));
  };

  const updateAllStats = (newStats: StatsState) => {
    setData(produce(data, draft => {
      const currentProfile = draft.profiles[draft.currentProfile];
      if (currentProfile) {
        currentProfile.stats = newStats;
      }
    }));
  };

  return {
    getCurrentStats,
    updateStat,
    updateAllStats,
  };
}