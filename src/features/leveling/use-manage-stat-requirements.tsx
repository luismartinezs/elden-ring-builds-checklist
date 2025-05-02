import { useProfileData } from "../storage/use-profile-data";

const initStatRequirements = {};

export const useManageStatRequirements = () => {
  const { get, mutateAll, mutateOne } = useProfileData({
    objKey: "statRequirements",
    initProfileData: initStatRequirements,
  });

  return {
    getCurrentStatRequirements: get,
    updateStatRequirement: mutateOne,
    updateAllStatRequirements: mutateAll,
  };
};
