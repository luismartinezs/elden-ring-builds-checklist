import { useState } from "react";
import { useManageProfiles } from "~/features/checklist/hooks/useManageProfiles";

export function ProfileSelect() {
  const { getAllProfiles, switchProfile, currentProfile } = useManageProfiles();
  const [value, setValue] = useState<string>(currentProfile);

  if (value !== currentProfile) {
    setValue(currentProfile);
  }

  return (
    <div>
      <label
        htmlFor="profile-select"
        className="mr-2 font-medium text-stone-900 dark:text-white"
      >
        Selected profile:
      </label>
      <select
        value={value}
        onChange={(e) => switchProfile(e.target.value)}
        id="profile-select"
        className="w-full rounded-lg border border-stone-300 bg-stone-50 p-2.5 text-sm text-stone-900 focus:border-amber-500 focus:ring-amber-500 dark:border-stone-600 dark:bg-stone-700 dark:text-white dark:placeholder-stone-400 dark:focus:border-amber-500 dark:focus:ring-amber-500"
      >
        {getAllProfiles().map((profile) => (
          <option value={profile} key={profile}>
            {profile}
          </option>
        ))}
      </select>
    </div>
  );
}
