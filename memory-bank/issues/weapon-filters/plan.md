# Weapon Filters Implementation Plan

## User story description
Implement a filtering system for weapons that allows users to filter by elements, damage types, status effects, and upgrade types. The system will use client-side filtering with local storage persistence and immediate updates.

## User story completion requirements
- Implement filtering for elements (fire, magic, lightning, holy)
- Implement filtering for damage types (standard, pierce, strike, slash)
- Implement filtering for status effects (poison, hemorrhage, frostbite, scarlet rot, sleep, madness, death blight)
- Implement filtering for upgrade types (somber, regular)
- Store filter preferences in local storage per profile
- Apply filters before sorting for better performance
- Provide immediate updates on filter changes

## Tasks
- [ ] Create filter types and constants

  - [ ] Create `types.ts` with WeaponFilters interface
  - [ ] Create `constants.ts` with INITIAL_FILTERS constant
  - [ ] Test by importing types and constants into a temporary file

- [ ] Implement local storage management

  - [ ] Create `storage.ts` with functions for saving and loading filters
  - [ ] Implement profile-specific storage
  - [ ] Handle initial state when no stored filters exist
  - [ ] Test by manually calling storage functions and checking local storage

- [ ] Create main filtering hook

  - [ ] Expand existing `useWeaponFilters.ts` to include new filter categories
  - [ ] Implement filter logic for elements (> 0 check)
  - [ ] Implement filter logic for damage types (includes check)
  - [ ] Implement filter logic for status effects (includes check)
  - [ ] Implement filter logic for upgrade type (exact match)
  - [ ] Integrate with local storage
  - [ ] Return filters state, setter, and filterWeapons function
  - [ ] Test by creating a test component that uses the hook

- [ ] Create filter controls component

  - [ ] Create `FilterControls.tsx` component
  - [ ] Implement checkbox inputs for each filter category
  - [ ] Group filters by category (elements, damage types, etc.)
  - [ ] Handle immediate updates on checkbox changes
  - [ ] Integrate with useWeaponFilters hook
  - [ ] Test by rendering component and checking UI

- [ ] Integrate with existing components

  - [ ] Update `WeaponsDisplay.tsx` to use the new filter controls
  - [ ] Apply filters before sorting for better performance
  - [ ] Use useMemo for filtered results caching
  - [ ] Test by checking if filters are correctly applied to weapon list

- [ ] Create automated tests

  - [ ] Write unit tests for filter logic functions
  - [ ] Write tests for local storage integration
  - [ ] Write tests for performance optimizations
  - [ ] Write integration tests for the complete filtering system
