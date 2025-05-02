import { useManageWeaponFilters } from "~/features/weapon-controls/filtering/useManageWeaponFilters";

interface IPayload<T> {
  value?: T;
  mutate: (value: T) => void;
}

export const useControl = <T>({ key, type }: { key: string, type: "filter" | "sort" }) => {
  const { getCurrentWeaponFilters, updateWeaponFilter } =
    useManageWeaponFilters();

  const payload: IPayload<T> = {
    value: undefined,
    mutate: () => null,
  };

  if (type === "filter") {
    payload.value = getCurrentWeaponFilters()[key] as T;
    payload.mutate = (val: T) => updateWeaponFilter(key, val);
  }

  if (type === "sort") {
    // todo
  }

  return payload;
}