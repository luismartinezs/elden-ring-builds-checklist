export type SortDirection = 'asc' | 'desc' | 'off';

export type RequirementSortKey = 'str';

export interface SortState {
  key: RequirementSortKey;
  direction: SortDirection;
}

export interface SortConfig {
  section: 'requirements';
  key: RequirementSortKey;
  label: string;
}