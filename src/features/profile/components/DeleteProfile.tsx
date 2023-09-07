import { useState } from "react";
import { Button } from "~/components/Button";
import { useManageProfiles } from "~/features/checklist/hooks/useManageProfiles";

export function DeleteProfile() {
  const { deleteProfile, currentProfile } = useManageProfiles();
  const [error, setError] = useState<string | null>(null);

  function handleDelete() {
    try {
      deleteProfile();
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
        setTimeout(() => {
          setError(null);
        }, 5000);
        return;
      }
      console.error(e);
    }
  }

  return (
    <>
      <Button onClick={handleDelete} variant="danger">
        Delete {currentProfile} Profile
      </Button>
      {error && <p className="mt-2 text-red-500">{error}</p>}
    </>
  );
}
