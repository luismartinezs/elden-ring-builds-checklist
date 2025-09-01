# Filtering and Sorting System Documentation

## Overview
The application implements a modular and extensible filtering and sorting system for weapons. Both systems are implemented as separate features with their own hooks and components, making them easy to maintain and extend.

## Filtering System

### Structure
```
src/features/weapons/filtering/
├── useWeaponFilters.ts  # Main filtering hook
```

### How Filtering Works
1. The filtering system uses the character's current stats to filter weapons based on their requirements
2. A mapping between stat keys and weapon requirement keys is maintained:
   ```typescript
   const statKeyToRequirementKey = {
     str: "strength",
     dex: "dexterity",
     int: "intelligence",
     fai: "faith",
     arc: "arcane"
   };
   ```
3. The `useWeaponFilters` hook provides a `filterWeapons` function that:
   - Takes an array of weapons
   - Gets current character stats
   - Returns only weapons where the character meets all stat requirements

## Sorting System

### Structure
```
src/features/weapons/sorting/
├── types.ts              # Type definitions
├── constants.ts          # Sort configurations
├── useWeaponSorting.ts  # Sorting logic
├── SortButton.tsx       # Individual sort button
└── SortWeapons.tsx      # Sort buttons container
```

### Components

#### SortButton
- A three-state button that cycles through: off → ascending → descending
- Uses icons to indicate sort direction:
  - `-` for off
  - `↑` for ascending
  - `↓` for descending

#### SortWeapons
- Container component that groups sort buttons by section
- Currently displays the "Requirements" section with STR, DEX, INT, FAI, and ARC sorting options

### How Sorting Works

1. **Sort State**
   ```typescript
   interface SortState {
     key: RequirementSortKey;  // 'str' | 'dex' | 'int' | 'fai' | 'arc'
     direction: SortDirection; // 'asc' | 'desc' | 'off'
   }
   ```

2. **Sort Configuration**
   ```typescript
   interface SortConfig {
     section: 'requirements';
     key: RequirementSortKey;
     label: string;
   }
   ```

3. **Sorting Behavior**
   - Clicking the same stat button cycles through directions (off → asc → desc → off)
   - Clicking a different stat button:
     - Sets that stat as the active sort key
     - Starts with ascending direction
   - When direction is "off", weapons remain in their original order

4. **Sort Implementation**
   - The `useWeaponSorting` hook provides a `sortWeapons` function
   - Uses a mapping object to convert sort keys to weapon requirement properties
   - Performs an in-memory sort using the standard array sort method

## Integration

The filtering and sorting systems are integrated in the `WeaponsDisplay` component:

1. Weapons are first filtered based on character stats
2. The filtered weapons are then sorted based on the current sort state
3. The final sorted and filtered list is rendered as weapon items

## Extensibility

The system is designed to be easily extended:

1. **Adding New Filters**
   - Add new filter functions to `useWeaponFilters`
   - Update the filter state management as needed

2. **Adding New Sort Options**
   - Add new sort key to `RequirementSortKey` type
   - Add new configuration to `SORT_CONFIGS`
   - Update the `requirementKeyMap` in `useWeaponSorting`
   - The UI will automatically include the new sort option

3. **Adding New Sort Sections**
   - Update the `SortConfig` interface to include new section types
   - Add new configurations with the new section
   - Update the `SortWeapons` component to handle the new section