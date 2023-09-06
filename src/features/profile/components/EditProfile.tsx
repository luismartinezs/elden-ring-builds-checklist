import { useEffect, useRef, useState } from "react";
import { Button } from "~/components/Button";
import { useManageProfiles } from "~/features/checklist/hooks/useManageProfiles";
import { useOnClickOutside } from "usehooks-ts";
import classnames from "classnames";
import { FormGroup } from "~/components/FormGroup";
import { Input } from "~/components/Input";

export function EditProfile() {
  const { editProfile, currentProfile } = useManageProfiles();
  const [showModal, setShowModal] = useState(false);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setShowModal(false));

  const [form, setForm] = useState({
    newProfileName: currentProfile,
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setForm({ newProfileName: currentProfile });
  }, [currentProfile]);

  function closeModal() {
    setForm({ newProfileName: currentProfile });
    setError(null);
    setShowModal(false);
  }

  function validateForm() {
    if (form.newProfileName === "") {
      setError("Profile name cannot be empty");
      return false;
    }
    return true;
  }

  function updateForm(key: string) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
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
      editProfile(form.newProfileName);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
        return;
      }
      console.error(e);
    }
    closeModal();
  }

  return (
    <>
      <Button type="button" onClick={() => setShowModal(true)}>
        Edit Profile
      </Button>
      {showModal && (
        <div
          id="authentication-modal"
          tabIndex={-1}
          aria-hidden="true"
          className={classnames(
            "fixed left-0 right-0 top-0 z-50 flex h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-stone-900/50 p-4 md:inset-0"
          )}
        >
          <div className="relative max-h-full w-full max-w-md" ref={ref}>
            {/* Modal content */}
            <div className="relative rounded-lg bg-white shadow dark:bg-stone-700">
              <button
                type="button"
                className="absolute right-2.5 top-3 ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-stone-400 hover:bg-stone-200 hover:text-stone-900 dark:hover:bg-stone-600 dark:hover:text-white"
                data-modal-hide="authentication-modal"
                onClick={() => closeModal()}
              >
                <svg
                  className="h-3 w-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-stone-900 dark:text-white">
                  Edit profile name
                </h3>
                <form className="space-y-2" onSubmit={handleSubmit}>
                  <FormGroup className="mt-4">
                    <label>New profile name</label>
                    <Input
                      onChange={updateForm("newProfileName")}
                      value={form.newProfileName}
                    />
                  </FormGroup>
                  {error && <p className="text-red-500">{error}</p>}
                  <Button type="submit" className="w-full">
                    Save
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full"
                    onClick={() => closeModal()}
                  >
                    Close
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
