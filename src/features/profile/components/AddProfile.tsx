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
      <FormGroup className="mt-4">
        <label>Add new Profile</label>
        <Input onChange={updateForm("profileName")} value={form.profileName} />
      </FormGroup>
      {error && <p className="mt-2 text-red-500">{error}</p>}
      <Button type="submit" className="mt-2">
        Add Profile
      </Button>
    </form>
  );
}
