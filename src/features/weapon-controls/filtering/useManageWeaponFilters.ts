import { useLocalStorage } from "usehooks-ts";
import { initAppData } from "~/features/checklist/hooks/useManageProfiles";
import { type AppData, type WeaponFilters } from "~/features/checklist/types";
import { produce } from 'immer';
import { useEffect } from "react";

const initFilters = {}

export function useManageWeaponFilters() {
  const [data, setData] = useLocalStorage<AppData>("appData", initAppData);

  useEffect(() => {
    const currentProfile = data.profiles[data.currentProfile];
    if (currentProfile && !currentProfile.weaponFilters) {
      setData(produce(data, draft => {
        draft.profiles[draft.currentProfile]!.weaponFilters = { ...initFilters };
      }));
    }
  }, [data, setData]);

  const getCurrentWeaponFilters = (): WeaponFilters => {
    const currentProfile = data.profiles[data.currentProfile];
    return currentProfile?.weaponFilters ?? initFilters;
  };

  const updateWeaponFilter = (filterName: string, value: boolean) => {
    setData(produce(data, draft => {
      const currentProfile = draft.profiles[draft.currentProfile];
      if (currentProfile) {
        if (!currentProfile.weaponFilters) {
          currentProfile.weaponFilters = { ...initFilters };
        }
        currentProfile.weaponFilters[filterName] = value;
      }
    }));
  };

  const updateAllWeaponFilters = (newWeaponFilters: WeaponFilters) => {
    setData(produce(data, draft => {
      const currentProfile = draft.profiles[draft.currentProfile];
      if (currentProfile) {
        currentProfile.weaponFilters = newWeaponFilters;
      }
    }));
  };

  return {
    getCurrentWeaponFilters,
    updateWeaponFilter,
    updateAllWeaponFilters,
  };
}