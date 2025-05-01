import { useLocalStorage } from "usehooks-ts";
import { initAppData } from "~/features/checklist/hooks/useManageProfiles";
import { type AppData } from "~/features/checklist/types";
import { initStats, type StatsState } from "~/features/stats/stats";
import { produce } from 'immer';

export function useManageStats() {
  const [data, setData] = useLocalStorage<AppData>("appData", initAppData);

  const getCurrentStats = (): StatsState => {
    const stats = data.profiles[data.currentProfile]?.stats ?? initStats;
    return stats;
  };

  const updateStat = (statName: keyof StatsState, value: number) => {
    setData(produce(data, draft => {
      if (draft.profiles[draft.currentProfile]) {
        draft.profiles[draft.currentProfile]!.stats[statName] = value;
      }
      return draft;
    }));
  };

  const updateAllStats = (newStats: StatsState) => {
    setData(produce(data, draft => {
      if (draft.profiles[draft.currentProfile]) {
        draft.profiles[draft.currentProfile]!.stats = newStats;
      }
      return draft;
    }));
  };

  return {
    getCurrentStats,
    updateStat,
    updateAllStats,
  };
}