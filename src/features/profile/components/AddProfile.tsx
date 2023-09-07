import { useState } from "react";
import { Button } from "~/components/Button";
import { FormGroup } from "~/components/FormGroup";
import { Input } from "~/components/Input";
import { useManageProfiles } from "~/features/checklist/hooks/useManageProfiles";

export function AddProfile() {
  const { addProfile } = useManageProfiles();
  const [form, setForm] = useState({
    profileName: "",
  });
  const [error, setError] = useState<string | null>(null);

  function validateForm() {
    if (form.profileName === "") {
      setError("Profile name cannot be empty");
      return false;
    }
    return true;
  }

  function updateForm(key: string) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setError(null);
      setForm({
        ...form,
        [key]: e.target.value,
      });
    };
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    if (!validateForm()) {
      return;
    }
    try {
      addProfile(form.profileName);
      setForm({
        profileName: "",
      });
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
        return;
      } else {
        console.error(e);
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <label htmlFor="add-profile">Add new Profile</label>
        <div className="flex gap-2">
          <Input
            onChange={updateForm("profileName")}
            value={form.profileName}
            id="add-profile"
          />
          <Button type="submit" className="!mb-0">
            Add Profile
          </Button>
        </div>
      </FormGroup>
      {error && <p className="mt-2 text-red-500">{error}</p>}
    </form>
  );
}
