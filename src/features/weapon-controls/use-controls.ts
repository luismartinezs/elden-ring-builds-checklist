import { useManageWeaponFilters } from "~/features/weapon-controls/filtering/useManageWeaponFilters";

type TValue = boolean
interface IPayload {
  value?: TValue;
  mutate: (value: TValue) => void;
}

export const useControl = ({ key, type }: { key: string, type: "filter" | "sort" }) => {
  const { getCurrentWeaponFilters, updateWeaponFilter } =
    useManageWeaponFilters();

  const payload: IPayload = {
    value: undefined,
    mutate: () => null,
  };

  if (type === "filter") {
    payload.value = getCurrentWeaponFilters()[key];
    payload.mutate = (val: TValue) => updateWeaponFilter(key, val);
  }

  if (type === "sort") {
    // todo
  }

  return payload;
}