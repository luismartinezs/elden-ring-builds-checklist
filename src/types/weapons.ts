export type Weapon = {
  name: string;
  category: string;
  url: string;
  sote: boolean;
  attack: {
    physical: number;
    magic: number;
    fire: number;
    lightning: number;
    holy: number;
    critical: number;
  };
  sorcery_scaling: number;
  incantation_scaling: number;
  guard: {
    physical: number;
    magic: number;
    fire: number;
    lightning: number;
    holy: number;
    boost: number;
  };
  scaling: {
    strength: string | null;
    dexterity: string | null;
    intelligence: string | null;
    faith: string | null;
    arcane: string | null;
  };
  requirements: {
    strength: number;
    dexterity: number;
    intelligence: number;
    faith: number;
    arcane: number;
  };
  damage_types: string[];
  weapon_skill: {
    name: string;
    fp_cost: number;
  } | null;
  weight: number;
  upgrade_type: string;
  passive_description: string | null;
  status_buildup: {
    poison: number;
    hemorrhage: number;
    frostbite: number;
    scarlet_rot: number;
    sleep: number;
    madness: number;
    death_blight: number;
  };
};