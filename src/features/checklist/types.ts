export interface TChecklistItem {
  id: string;
  description: string;
  tags?: string[];
}

export interface TChecklist {
  id: string;
  slug: string;
  title: string;
  items: TChecklistItem[];
}