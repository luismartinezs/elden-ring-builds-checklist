# Elden Ring Build Checklist: Add Memory Stones

This document outlines the plan to add Memory Stones to the main checklist in the Elden Ring Build Checklist application.

## 1. Research

The following is a list of all 8 Memory Stones and their locations, which will be used to place them correctly in the checklist:

1.  **Purchased from Twin Maiden Husks** at the Roundtable Hold for 3,000 Runes. (Roundtable Hold, early game)
2.  **Oridys's Rise** (Weeping Peninsula): Solve the three tortoise puzzle. (Weeping Peninsula, early game)
3.  **Converted Tower** (Liurnia of the Lakes): Perform the "Erudition" gesture. Requires giving the Academy Glintstone Key to Thops. (Liurnia, after getting a key)
4.  **Testu's Rise** (Liurnia of the Lakes): Solve the three tortoise puzzle. (Liurnia, near academy)
5.  **Seluvis's Rise** (Liurnia of the Lakes, Three Sisters): At the top in a chest. (After Caria Manor)
6.  **Lenne's Rise** (Caelid): Use the spirit spring to get to the balcony. (Caelid, can be done early but the area is high level)
7.  **Dropped by Red Wolf of Radagon** (Raya Lucaria Academy). (Raya Lucaria)
8.  **Dropped by Demi-Human Queen Maggie** (Mt. Gelmir). (Mt. Gelmir)

## 2. File Changes

The following files will be modified to add the "Memory Stone" filter and checklist items.

### `src/features/tags/constants.ts`

A new tag constant `MEMORY_STONE` will be added.

```typescript:src/features/tags/constants.ts
// ... existing code ...
  D_QUESTLINE: 'd-questline',
  ROGIER_QUESTLINE: 'rogier-questline',
  FIA_QUESTLINE: 'fia-questline',
  MEMORY_STONE: 'memory-stone',
  // SOTE
  LEDA: 'leda-questline',
  FREYJA: 'freyja-questline',
// ... existing code ...
```

### `src/features/tags/tags.ts`

A new tag object for `MEMORY_STONE` will be added to define its appearance.

```typescript:src/features/tags/tags.ts
// ... existing code ...
  [TAGS.FIA_QUESTLINE]: {
    label: 'Fia',
    key: TAGS.FIA_QUESTLINE,
    buttonClasses: 'border-stone-400 text-stone-400 hover:bg-stone-400 hover:text-black focus:ring-stone-400',
    tagClasses: 'bg-stone-400 text-black',
    questlineRewards: [
      "Twinned Set",
      "Inseparable Sword",
      "Mending Rune of the Death-Prince"
    ]
  },
  [TAGS.MEMORY_STONE]: {
    label: 'Memory Stone',
    key: TAGS.MEMORY_STONE,
    buttonClasses: 'border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black focus:ring-blue-400',
    tagClasses: 'bg-blue-400 text-black',
  },
  // SOTE
  [TAGS.LEDA]: {
    label: 'Leda',
// ... existing code ...
```

### `src/components/SettingsMenu/SettingsMenu.tsx`

A new `FilterButton` will be added to allow toggling the visibility of Memory Stones on the checklist.

```typescript:src/components/SettingsMenu/SettingsMenu.tsx
// ... existing code ...
          <div className="my-3 flex flex-wrap items-center gap-2 md:gap-1">
            <FilterButton filterTag={TAGS.GOLDEN_SEED} />
            <FilterButton filterTag={TAGS.SACRED_TEAR} />
            <FilterButton filterTag={TAGS.MEMORY_STONE} />
            <FilterButton filterTag={TAGS.SMITHING_STONE_BELL} />
            <FilterButton filterTag={TAGS.SOMBER_STONE_BELL} />
            <FilterButton filterTag={TAGS.GLOVEWORT_BELL} />
// ... existing code ...
```

### `src/data/simple-game-progress/items.ts`

The 8 Memory Stones will be added to the checklist at locations that make sense from a game progression perspective.

```typescript:src/data/simple-game-progress/items.ts
// ... existing code ...
  {
    id: '2ffa52b8-8b74-4111-a975-4da2c97d3c4c',
    description: 'Let Magrit kill you to access Roundtable Hold',
    tags: []
  },
  {
    id: 'f9e6c4a8-5d2e-4e1c-8c7a-3b9e4a3d4f6b',
    description: 'Purchase Memory Stone from Twin Maiden Husks in Roundtable Hold for 3,000 Runes.',
    tags: [MEMORY_STONE]
  },
  {
    id: 'fd2775db-5c31-41af-b4e2-b32a05d2a6f5',
    description: 'Talk to Corhyn in Rountable Hold',
// ... existing code ...
  {
    id: 'beb91cca-8f5f-48e5-af14-2de4acd380f2',
    description: 'Tombsward Catacombs, found by moving directly south from the Church of Pilgrimage.',
    locationLink: "https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=163989",
    tags: [CATACOMBS]
  },
  {
    id: 'a3d2e5b7-7c1f-4d9e-8b3a-5f8c1e2a3d4f',
    description: "Oridys's Rise (Weeping Peninsula): Solve the three wise beasts puzzle to get a Memory Stone. The puzzle requires you to find and kill three spectral turtles.",
    tags: [MEMORY_STONE]
  },
  {
    id: 'cc380636-9bd9-45ef-a590-e87c202acd53',
    description: 'Lhutel the Headless: Dropped by the Cemetery Shade at the Tombsward Catacombs.',
// ... existing code ...
  {
    id: '5d177901-90f6-449b-b13f-f8df8eef3ee4',
    description: 'Get Academy Glintstone Key from Liurnia of the Lakes, south from Crystalline Woods site of grace, behind Glintstone Dragon Smarag',
    tags: [NGPLUS]
  },
  {
    id: 'b5e8c1a4-3f7d-4b9e-8a1c-9e2c8a7d6f5b',
    description: "Converted Tower (Liurnia of the Lakes): Obtain the Memory Stone by using the 'Erudition' gesture in front of the statue. You can get the gesture from Thops after giving him an Academy Glintstone Key.",
    tags: [MEMORY_STONE]
  },
  {
    id: '83eb9516-23c0-4f13-b05f-4a8b006fb5c3',
    description: 'Talk to Nepheli at Village Of The Albinaurics and defeat Omenkiller',
// ... existing code ...
  {
    id: '054a08f7-70ba-4ede-a188-b3a286808cb5',
    description: 'Beat Red Wolf of Radagon in Raya Lucaria and activate the Debate Parlor grace. It\'s strong vs magic, bleed and frost, and weak vs slash',
    tags: [NGPLUS]
  },
  {
    id: 'c7d4e1b8-9f3a-4d2e-8c6a-7f1d9e4a5c8d',
    description: 'Dropped by Red Wolf of Radagon boss.',
    tags: [MEMORY_STONE]
  },
  {
    id: 'e7d07e93-5789-41b7-a8bc-5742cc8437f1',
    description: `Radagon Icon: Found inside a treasure chest on the second floor of the Debate Parlor Site of Grace. To reach it, exit the Debate Parlor room north, make two hard rights and enter the building`,
// ... existing code ...
  {
    id: "e155c17d-a120-4dc2-bcda-24beedc4c812",
    description: "Academy Crystal Cave. Entrance is found west of the Raya Lucaria Academy",
    locationLink: "https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164423",
    tags: [CAVES]
  },
  {
    id: 'd9e8c7a6-5f1d-4e8c-9b5a-3f7d1e8a9c4b',
    description: "Testu's Rise (Liurnia of the Lakes): Solve the three wise beasts puzzle to get a Memory Stone. The puzzle requires you to find and kill three spectral turtles. The tower is located north of Raya Lucaria Academy.",
    tags: [MEMORY_STONE]
  },
  {
    id: '3ffa2105-a1e0-428c-8a40-c7a6b64fe72f',
    description: 'Obtain the Black Knifeprint from Black Knife Catacombs in Liurnia, behind an illusory wall in the room before dropping down to a flooded pit with levers.',
// ... existing code ...
  {
    id: 'ebb627a5-1cb1-496f-8339-6da8d51587b6',
    description: 'Beat Royal Knight Loretta in Caria Manor. She is strong vs magic and fire, and weak vs lightning. Note: If you are collecting the legendary weapon Dark Moon Greatsword, follow Ranni\'s questline until the end to get it.',
    tags: [RANNI_QUESTLINE, SELLEN_QUESTLINE, LEGENDARY_WEAPONS_ACH, FIA_QUESTLINE]
  },
  {
    id: 'e1f3a9c8-7d5e-4c6b-8a9d-2e7c5a9d8f3a',
    description: "Seluvis's Rise (Liurnia of the Lakes): Found in a chest at the top of Seluvis's Rise, in the Three Sisters area, accessible after Caria Manor.",
    tags: [MEMORY_STONE]
  },
  {
    id: '90813e2a-75de-4167-8603-af4bab0bd2ca',
    description: 'Among the rewards of the Resurrection painting. The painting is in the Artist\'s Shack in North-East Liurnia of The Lakes, heading north in the path up from the Liurnia Highway North. To find the painting rewards, start at the Behind Caria Manor Site of Grace (<a href="https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=165492" target="_blank">Location</a>) and head slightly southeast until you arrive at a graveyard, behind a big rock you should see the spirit of the artist sitting in a chair',
// ... existing code ...
  // CAELID EARLY

  {
    id: 'a9b8c7d6-5e3f-4d1e-9a7c-8f2d5e4a7c6d',
    description: "Lenne's Rise (Caelid): Use the spirit spring to jump onto the balcony and get the Memory Stone from the chest inside. Be careful of the powerful enemies in the area.",
    tags: [MEMORY_STONE]
  },
  {
    id: '3ebfbeb9-f5f8-42fc-957b-2a83ecf15d88',
    description: 'Get 50,000 runes from killing the sleeping dragon Greyoll in Dragonbarrow with bleed (Reduvia, Uchigatana, Flail, or Bloody slash ash of war)',
// ... existing code ...
  // MT GELMIR 80-100 +15-20
  {
    id: 'f7e2d9c8-4b1d-4e9c-8a3d-9e6c4a8d7f9b',
    description: 'Defeat Demi-Human Queen Maggie in Mt. Gelmir to get a Memory Stone. She is located at the end of the Hermit Village.',
    tags: [MEMORY_STONE]
  },
  {
    id: "22436ce7-c4a3-4612-aa32-6aaf689cb517",
    description:
      "At the base of the Golden Tree in the ravine to the south of a burnt up Minor Erdtree. Mt. Gelmir. Head north through the ravine west of Wyndham Ruins to find it.",
// ... existing code ...
```

## 3. Codebase Review

I have reviewed the codebase and the plan outlined above. The proposed changes are accurate and align with the existing structure of the application. The locations for the new checklist items are logical within the game's progression.

### `src/features/tags/constants.ts`

-   **Lines 44-46**: The new `MEMORY_STONE` constant will be added here. This is the correct location for a new item tag.

### `src/features/tags/tags.ts`

-   **Lines 331-338**: The `MEMORY_STONE` tag object will be added after the `FIA_QUESTLINE` tag. The styling is consistent with other similar items. The existing definition for `FIA_QUESTLINE` in the file is slightly different from the one in the outline, but this does not affect the addition of the new tag.

### `src/components/SettingsMenu/SettingsMenu.tsx`

-   **Lines 98-100**: The new `FilterButton` for `MEMORY_STONE` will be added within the `div` that contains other item filters like `GOLDEN_SEED` and `SACRED_TEAR`. This is the correct place to ensure it appears with similar filters in the UI.

### `src/data/simple-game-progress/items.ts`

The placement of the 8 Memory Stones is contextually appropriate and respects the general progression of the game areas.

-   **Roundtable Hold**: The item for purchasing a Memory Stone is correctly placed after the player gains access to the Roundtable Hold.
-   **Weeping Peninsula**: The Memory Stone from Oridys's Rise is correctly placed within the Weeping Peninsula section.
-   **Liurnia of the Lakes**: The four Memory Stones available in Liurnia are correctly placed at logical points in the progression through that region (after obtaining the Glintstone Key, after defeating the Red Wolf of Radagon, in the vicinity of other Liurnia items, and after Caria Manor).
-   **Caelid**: The Memory Stone from Lenne's Rise is placed in an early Caelid section, which is appropriate for an item that can be acquired early despite the area's difficulty.
-   **Mt. Gelmir**: The Memory Stone from Demi-Human Queen Maggie is correctly placed within the Mt. Gelmir section.

The plan is solid and ready for implementation.
