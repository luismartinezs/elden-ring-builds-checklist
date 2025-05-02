import { type StatsState } from "~/features/stats/stats";

interface TDeepChecklistItem {
  id: string;
  description: string;
  tags?: string[];
}

export type TChecklistItem = TDeepChecklistItem & {
  items?: TChecklistItem[];
}

export interface TChecklist {
  id: string;
  slug: string;
  title: string;
  notes?: string[];
  items: TChecklistItem[];
  tags?: string[];
}


// localStorage data structure
export type UUID = string;
export type Checklist = Record<string, UUID[]>;
export type Filters = Record<string, boolean>;
export type WeaponFilters = Record<string, boolean>;
export type StatRequirements = {
  str?: number;
  dex?: number;
  int?: number;
  fai?: number;
  arc?: number;
}
export type Options = {
  archetype?: string
  dmgstr?: boolean
  dmgdex?: boolean
  dmgint?: boolean
  dmgfai?: boolean
  dmgarc?: boolean
}
export type Profile = {
  checklists: Checklist;
  filters: Filters;
  stats: StatsState;
  weaponFilters: WeaponFilters;
  statRequirements: StatRequirements;
  options: Options;
}

export type AppData = {
  profiles: Record<string, Profile>;
  currentProfile: string;
}
