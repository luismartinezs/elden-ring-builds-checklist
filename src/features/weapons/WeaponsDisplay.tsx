import { type Weapon } from "~/types/weapons";
import { useQuery } from "@tanstack/react-query";
import { WeaponItem } from "./WeaponItem";

export const WeaponsDisplay = () => {
  const { data: weapons, isLoading } = useQuery<Weapon[]>({
    queryKey: ["weapons"],
    queryFn: async () => {
      const response = await fetch("/data/weapons/weapons.json");
      return response.json();
    },
  });

  if (isLoading) {
    return (
      <div className="flex min-h-[200px] items-center justify-center">
        <div className="text-lg">Loading weapons...</div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Weapons</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {weapons?.map((weapon) => (
          <WeaponItem key={weapon.name} weapon={weapon} />
        ))}
      </div>
    </div>
  );
};
