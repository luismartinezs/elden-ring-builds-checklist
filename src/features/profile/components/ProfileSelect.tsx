import { useState } from "react";
import { useManageProfiles } from "~/features/checklist/hooks/useManageProfiles";

function Select() {
  const { getAllProfiles, switchProfile, currentProfile } = useManageProfiles();
  const [value, setValue] = useState<string>(currentProfile);

  if (value !== currentProfile) {
    setValue(currentProfile);
  }

  return (
    <select
      value={value}
      onChange={(e) => switchProfile(e.target.value)}
      id="profile-select"
      className="rounded border border-stone-500 bg-stone-100/20 px-4 py-2 outline-2 outline-offset-2 outline-amber-400 focus:outline"
    >
      {getAllProfiles().map((profile) => (
        <option value={profile} key={profile} className="bg-stone-700">
          {profile}
        </option>
      ))}
    </select>
  );
}

export function ProfileSelect() {
  return (
    <div className="flex items-center gap-2">
      <label
        htmlFor="profile-select"
        className="mr-2 font-medium text-stone-400"
      >
        Selected profile:
      </label>
      <Select />
    </div>
  );
}

ProfileSelect.Select = Select;
