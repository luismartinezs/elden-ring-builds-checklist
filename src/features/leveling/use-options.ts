import { useProfileData } from "../storage/use-profile-data";

export const useOptions = () => {
  const { get, mutateAll, mutateOne } = useProfileData({
    objKey: "options",
    initProfileData: {},
  });

  return {
    getOptions: get,
    mutateOption: mutateOne,
    mutateOptions: mutateAll,
  };
};
