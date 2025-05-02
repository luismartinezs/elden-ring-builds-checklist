import { useLocalStorage } from "usehooks-ts";
import { initAppData } from "../checklist/hooks/useManageProfiles";
import {
  type AppData,
  type Profile,
} from "~/features/checklist/types";
import { produce } from "immer";
import { useEffect } from "react";

/**
 * useProfileData is a custom React hook for managing a specific property of the current user profile
 * in local storage. It provides type-safe access and mutation utilities for a single key of the Profile object.
 *
 * - Initializes the property if it does not exist, using the provided initial value.
 * - Returns getter and mutator functions for the selected property.
 * - Ensures type safety for the property being managed.
 *
 * @template K extends keyof Profile
 * @param {K} objKey - The key of the Profile property to manage.
 * @param {Profile[K]} initProfileData - The initial value to use if the property is missing.
 * @returns {Object} An object with `get`, `mutateAll`, and `mutateOne` methods for the property.
 */

type TProfileDataParams<K extends keyof Profile> = {
  objKey: K;
  initProfileData: Profile[K];
}

export const useProfileData = <K extends keyof Profile>({ objKey, initProfileData }: TProfileDataParams<K>) => {
  const [data, setData] = useLocalStorage<AppData>("appData", initAppData);

  useEffect(() => {
    const currentProfile = data.profiles[data.currentProfile];
    if (currentProfile && !currentProfile[objKey]) {
      setData(
        produce((draft: AppData) => {
          draft.profiles[draft.currentProfile]![objKey] = initProfileData;
        })
      );
    }
  }, [data, setData, objKey, initProfileData]);

  const get = () => {
    const currentProfile = data.profiles[data.currentProfile];
    return currentProfile?.[objKey] ?? {};
  }

  const mutateAll = (newData: Profile[K]) => {
    setData(
      produce((draft: AppData) => {
        draft.profiles[draft.currentProfile]![objKey] = newData;
      })
    );
  }

  const mutateOne = <T extends keyof Profile[K]>(key: T, value: Profile[K][T]) => {
    setData(
      produce((draft: AppData) => {
        (draft.profiles[draft.currentProfile]![objKey] as Profile[K])[key] = value;
      })
    );
  }

  return {
    get,
    mutateAll,
    mutateOne,
  }
}
