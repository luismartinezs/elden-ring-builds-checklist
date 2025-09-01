# Weapon Filters Implementation Plan

## Overview
Implement a filtering system for weapons that allows users to filter by elements, damage types, status effects, and upgrade types. The system will use client-side filtering with local storage persistence and immediate updates.

## File Structure
```
src/features/weapons/filtering/
├── types.ts                 # Type definitions for filters
├── constants.ts             # Filter configurations
├── useWeaponFilters.ts     # Main filtering hook
├── FilterControls.tsx       # Filter UI components
└── storage.ts              # Local storage management
```

## Implementation Steps

### 1. Types and Constants (types.ts, constants.ts)

#### Filter Interface
```typescript
export interface WeaponFilters {
  elements: {
    fire: boolean;
    magic: boolean;
    lightning: boolean;
    holy: boolean;
  };
  damageTypes: {
    standard: boolean;
    pierce: boolean;
    strike: boolean;
    slash: boolean;
  };
  statusEffects: {
    poison: boolean;
    hemorrhage: boolean;
    frostbite: boolean;
    scarlet_rot: boolean;
    sleep: boolean;
    madness: boolean;
    death_blight: boolean;
  };
  upgradeType: {
    somber: boolean;
    regular: boolean;
  };
}
```

#### Initial State
```typescript
export const INITIAL_FILTERS: WeaponFilters = {
  elements: {
    fire: false,
    magic: false,
    lightning: false,
    holy: false
  },
  damageTypes: {
    standard: false,
    pierce: false,
    strike: false,
    slash: false
  },
  statusEffects: {
    poison: false,
    hemorrhage: false,
    frostbite: false,
    scarlet_rot: false,
    sleep: false,
    madness: false,
    death_blight: false
  },
  upgradeType: {
    somber: false,
    regular: false
  }
};
```

### 2. Storage Management (storage.ts)
- Implement local storage functions for saving and loading filters
- Use already existing storage module
- weapon filters are stored per profile in the local storage
- Handle initial state when no stored filters exist

### 3. Main Filtering Hook (useWeaponFilters.ts)
- Create custom hook for filter state management
- Implement filter logic for each category:
  - Elements (> 0 check)
  - Damage types (includes check)
  - Status effects (includes check)
  - Upgrade type (exact match)
- Integrate with local storage
- Return filters state, setter, and filterWeapons function

### 4. Filter Controls Component (FilterControls.tsx)
- Create main filter controls container
- Implement checkbox inputs for each filter category
- Group filters by category (elements, damage types, etc.)
- Handle immediate updates on checkbox changes
- Integrate with useWeaponFilters hook

### 5. Integration
- Integrate with existing WeaponsDisplay component
- Apply filters before sorting for better performance
- Use useMemo for filtered results caching

## Technical Considerations

### Performance
- Client-side filtering for ~400 weapons
- Filters applied before sorting to reduce sorting workload
- Memoization of filtered results
- Efficient boolean checks for filter conditions

### State Management
- Local storage for persistence
- Immediate updates on filter changes
- No separate filter display needed (checkboxes show state)

### Filter Logic
- AND logic between different filters
- Simple boolean checks for most filters
- Numeric comparison for elemental damage (> 0)

## Future Improvements
1. Add debouncing for local storage updates
2. Implement filter presets for common combinations
3. Add analytics for filter usage patterns
4. Consider adding a clear/reset filters option if needed

## Testing Considerations
1. Test filter logic with various weapon combinations
2. Verify local storage persistence
3. Check performance with full weapon dataset
4. Ensure proper integration with sorting system

## Codebase Review

### Relevant Files

1. `src/types/weapons.ts` (Lines 1-55)
   - Contains the core `Weapon` type definition
   - Includes all filterable properties: elements (attack), damage_types, status_buildup, upgrade_type
   - Will be used as the base type for filter implementation

2. `src/features/weapons/WeaponsDisplay.tsx` (Lines 1-122)
   - Main component for displaying weapons
   - Already integrates with filtering system through `useWeaponFilters` hook
   - Contains weapon data fetching logic
   - Will need to be updated to include new filter controls

3. `src/features/weapons/filtering/useWeaponFilters.ts` (Lines 1-37)
   - Current filtering hook implementation
   - Only handles stat requirement filtering
   - Will need to be expanded to include new filter categories

4. `src/features/weapons/WeaponItem.tsx` (Lines 1-73)
   - Individual weapon display component
   - Shows all filterable properties
   - No changes needed unless we want to highlight filtered properties

5. `src/features/weapons/WeaponStatusEffects.tsx` (Lines 1-39)
   - Displays status effect information
   - Will be useful for reference when implementing status effect filters

6. `src/features/weapons/WeaponAdditionalInfo.tsx` (Lines 1-26)
   - Shows damage types
   - Will be useful for reference when implementing damage type filters

### Integration Points

1. Filter State Management:
   - Expand `useWeaponFilters.ts` to include new filter categories
   - Implement local storage persistence
   - Add filter reset functionality

2. UI Components:
   - Create new `FilterControls.tsx` in the filtering directory
   - Integrate with `WeaponsDisplay.tsx`
   - Group filters by category as specified

3. Data Flow:
   - Weapons data is already loaded in `WeaponsDisplay.tsx`
   - Filter logic will be applied before sorting
   - Changes will maintain existing component hierarchy

### Technical Considerations

1. Performance:
   - Current implementation loads ~400 weapons
   - Filtering is done client-side
   - Existing memoization patterns can be reused

2. State Management:
   - Local storage integration needed
   - Consider using React context if filter state needs to be shared

3. Type Safety:
   - Strong type definitions already exist
   - Can extend current types for filter state

### Implementation Strategy

1. Start with filter types and constants
2. Implement storage management
3. Expand filtering hook
4. Create UI components
5. Integrate with existing display
6. Add persistence layer

This review confirms that the codebase is well-structured for the planned changes, with clear integration points and existing patterns to follow.
