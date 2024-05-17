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

export type Profile = {
  checklists: Checklist;
  filters: Filters;
}

export type AppData = {
  profiles: Record<string, Profile>;
  currentProfile: string;
}
