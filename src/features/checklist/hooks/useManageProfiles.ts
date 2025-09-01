import { useLocalStorage } from "usehooks-ts";
import { type AppData } from "~/features/checklist/types";
import { produce } from "immer"
import { TAGS } from "~/features/tags";
import { initStats } from "~/features/stats/stats";

export const initFilters = { ...Object.fromEntries(Object.values(TAGS).map(val => ([val, false]))), completed: false } as Record<string, boolean>

export const initAppData: AppData = {
  profiles: {
    "Default": {
      checklists: {},
      challenges: {},
      // these filters are for the checklists
      filters: initFilters,
      stats: initStats,
      weaponFilters: {},
      statRequirements: {},
      options: {}
    },
  },
  currentProfile: "Default",
};

export function useManageProfiles() {
  const [data, setData] = useLocalStorage<AppData>("appData", initAppData);

  const getAllProfiles = (_data?: AppData) => {
    if (!_data) {
      _data = data;
    }
    return Object.keys(_data.profiles)
  }

  const addProfile = (profileName: string) => {
    if (!profileName.trim()) {
      throw new Error("Profile name cannot be empty");
    }

    if (getAllProfiles().includes(profileName)) {
      throw new Error(`Profile ${profileName} already exists`);
    }

    setData(produce(data, draft => {
      draft.profiles[profileName] = { checklists: {}, challenges: {}, filters: initFilters, stats: initStats, weaponFilters: {}, statRequirements: {}, options: {} };
      draft.currentProfile = profileName;
      return draft
    }))
  };

  const editProfile = (newProfileName: string) => {
    if (!newProfileName.trim()) {
      throw new Error("Profile name cannot be empty");
    }

    if (getAllProfiles().includes(newProfileName)) {
      throw new Error(`Profile ${newProfileName} already exists`);
    }

    const _currentProfile = data.currentProfile;

    if (!_currentProfile || !data.profiles[_currentProfile]) {
      // should never happen
      throw new Error(`Attempt to edit profile ${_currentProfile} which does not exist`);
    }

    setData(produce(data, draft => {
      const currentProfileData = draft.profiles[_currentProfile];

      if (!currentProfileData) {
        // should never happen
        throw new Error(`Profile data for ${_currentProfile} is missing`);
      }

      draft.profiles[newProfileName] = currentProfileData;
      delete draft.profiles[_currentProfile];
      draft.currentProfile = newProfileName;

      return draft;
    }))
  };

  const deleteProfile = (profileName?: string) => {
    if (getAllProfiles().length <= 1) {
      throw new Error("Cannot delete last remaining profile");
    }

    let profileToDelete: string

    if (!profileName) {
      profileToDelete = data.currentProfile;
    } else {
      profileToDelete = profileName;
    }

    if (!getAllProfiles().includes(profileToDelete)) {
      throw new Error(`Could not delete profile ${profileToDelete} since it does not exist`);
    }

    if (profileToDelete === data.currentProfile) {
      const remainingProfiles = getAllProfiles().filter(profile => profile !== profileToDelete);

      if (remainingProfiles[0]) { // should always be true
        switchProfile(remainingProfiles[0]);
      }
    }

    setData(produce(data, draft => {
      delete draft.profiles[profileToDelete];
      const remainingProfiles = getAllProfiles(draft).filter(profile => profile !== profileToDelete);

      if (remainingProfiles[0]) { // should always be true
        draft.currentProfile = remainingProfiles[0];
      }
      return draft
    }))
  };

  const switchProfile = (profileName: string) => {
    if (!profileName.trim()) {
      throw new Error("Profile name cannot be empty");
    }

    if (!getAllProfiles().includes(profileName)) {
      throw new Error(`Could not switch to profile ${profileName} since it does not exist`);
    }

    setData(produce(data, draft => {
      draft.currentProfile = profileName;
      return draft
    }))
  };

  return {
    getAllProfiles,
    addProfile,
    editProfile,
    deleteProfile,
    switchProfile,
    currentProfile: data.currentProfile,
  };
}