import { useEffect } from "react";
import { initAppData } from "~/features/checklist/hooks/useManageProfiles";

export function useInitAppData() {
  useEffect(() => {
    if (!localStorage.getItem("appData")) {
      localStorage.setItem("appData", JSON.stringify(initAppData));
    }
  }, []);
}
