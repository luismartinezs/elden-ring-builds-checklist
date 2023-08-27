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
  items: TChecklistItem[];
}