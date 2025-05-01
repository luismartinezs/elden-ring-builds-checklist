import { type Weapon } from "~/types/weapons";

type WeaponAdditionalInfoProps = {
  upgradeType: Weapon["upgrade_type"];
  damageTypes: Weapon["damage_types"];
};

export const WeaponAdditionalInfo = ({
  upgradeType,
  damageTypes,
}: WeaponAdditionalInfoProps) => {
  return (
    <div className="flex flex-wrap gap-4 text-sm text-stone-600 dark:text-stone-300">
      <div>
        <span className="font-medium">Upgrade Type:</span> {upgradeType}
      </div>
      <div>
        <span className="font-medium">Damage Types:</span>{" "}
        {damageTypes.join(", ")}
      </div>
    </div>
  );
};
