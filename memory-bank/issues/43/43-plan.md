### Add Memory Stone items and filter

This plan adds the 8 Memory Stones to the checklist and provides a new filter in the settings menu to toggle their visibility.

- [x] **Create `MEMORY_STONE` tag constant**
      Done: Added the `MEMORY_STONE` tag constant.
      - [x] In `src/features/tags/constants.ts`, insert the `MEMORY_STONE` constant.
        ```typescript
        // ... existing code ...
          FIA_QUESTLINE: 'fia-questline',
          MEMORY_STONE: 'memory-stone',
          // SOTE
          LEDA: 'leda-questline',
        // ... existing code ...
        ```

- [x] **Register the `MEMORY_STONE` tag object**
      Done: Registered the `MEMORY_STONE` tag object with its label and styles.
      - [x] In `src/features/tags/tags.ts`, add the tag definition for `MEMORY_STONE`.
        ```typescript
        // ... existing code ...
          [TAGS.MEMORY_STONE]: {
            label: 'Memory Stone',
            key: TAGS.MEMORY_STONE,
            buttonClasses: 'border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black focus:ring-blue-400',
            tagClasses: 'bg-blue-400 text-black',
          },
        // ... existing code ...
        ```
        Note: add right before the `// SOTE` comment

- [x] **Add the `MEMORY_STONE` filter button**
      So users can toggle the visibility of Memory Stone items in the checklist.
      - [x] In `src/components/SettingsMenu/SettingsMenu.tsx`, insert a new `FilterButton` for the `MEMORY_STONE` tag.
        ```tsx
        // ... existing code ...
                  <div className="my-3 flex flex-wrap items-center gap-2 md:gap-1">
                    <FilterButton filterTag={TAGS.GOLDEN_SEED} />
                    <FilterButton filterTag={TAGS.SACRED_TEAR} />
                    <FilterButton filterTag={TAGS.MEMORY_STONE} />
                    <FilterButton filterTag={TAGS.SMITHING_STONE_BELL} />
                    <FilterButton filterTag={TAGS.SOMBER_STONE_BELL} />
        // ... existing code ...
        ```

- [ ] **Add 8 Memory Stone items to the checklist**
      To populate the checklist with all discoverable Memory Stones in game-progression order.
      - [x] In `src/data/simple-game-progress/items.ts`, add the Roundtable Hold Memory Stone.
        ```typescript
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
        // ... existing code ...
        ```
      - [x] In `src/data/simple-game-progress/items.ts`, add the Oridys's Rise Memory Stone.
        ```typescript
        // ... existing code ...
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
        // ... existing code ...
        ```
        Note: link to the mapgenie location: https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=164676
      - [x] In `src/data/simple-game-progress/items.ts`, add the Converted Tower Memory Stone.
        ```typescript
        // ... existing code ...
          {
            id: 'b5e8c1a4-3f7d-4b9e-8a1c-9e2c8a7d6f5b',
            description: "Converted Tower (Liurnia of the Lakes): Obtain the Memory Stone by using the 'Erudition' gesture in front of the statue. You can get the gesture from Thops after giving him an Academy Glintstone Key.",
            tags: [MEMORY_STONE]
          },
        // ... existing code ...
        ```
        Notes:
        - this step should show up once the play can go inside Raya Lucaria Academy
        - link to the mapgenie location: https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=166183
      - [ ] In `src/data/simple-game-progress/items.ts`, add the Red Wolf of Radagon Memory Stone.
        ```typescript
        // ... existing code ...
            description: 'Beat Red Wolf of Radagon in Raya Lucaria and activate the Debate Parlor grace. It\'s strong vs magic, bleed and frost, and weak vs slash. The boss will drop a Memory Stone upon defeat.',
            tags: [NGPLUS, MEMORY_STONE]
          },
          {
            id: 'e7d07e93-5789-41b7-a8bc-5742cc8437f1',
        // ... existing code ...
        ```
      - [ ] In `src/data/simple-game-progress/items.ts`, add the Testu's Rise Memory Stone.
        ```typescript
        // ... existing code ...
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
        // ... existing code ...
        ```
        Notes:
        - link to the mapgenie location: https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167213
        - this step can be easily done before raya lucaria academy, as one of the area errands in Liurnia. I think it would make sense to list it next (before or after) to the first item that references anything in northern Liurnia
      - [ ] In `src/data/simple-game-progress/items.ts`, add the Seluvis's Rise Memory Stone.
        ```typescript
        // ... existing code ...
          {
            id: 'e1f3a9c8-7d5e-4c6b-8a9d-2e7c5a9d8f3a',
            description: "Seluvis's Rise (Liurnia of the Lakes): Found in a chest at the top of Seluvis's Rise, in the Three Sisters area, accessible after Caria Manor.",
            tags: [MEMORY_STONE]
          },
        // ... existing code ...
        ```
        Notes:
        - link to the mapgenie location: https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167143
        - this step should be listed after all the first part of Ranni's quest, after the player went to talk to Ranni in her Rise. Right after any step that involves
      - [ ] In `src/data/simple-game-progress/items.ts`, add the Lenne's Rise Memory Stone.
        ```typescript
        // ... existing code ...
          // CAELID EARLY

          {
            id: 'a9b8c7d6-5e3f-4d1e-9a7c-8f2d5e4a7c6d',
            description: "Lenne's Rise (Caelid): Use the spirit spring to jump onto the balcony and get the Memory Stone from the chest inside.",
            tags: [MEMORY_STONE]
          },
          {
            id: '3ebfbeb9-f5f8-42fc-957b-2a83ecf15d88',
        // ... existing code ...
        ```
        Notes:
        - link to the mapgenie location: https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167023
      - [ ] In `src/data/simple-game-progress/items.ts`, add the Mt. Gelmir Memory Stone.
        ```typescript
        // ... existing code ...
          {
            id: 'f7e2d9c8-4b1d-4e9c-8a3d-9e6c4a8d7f9b',
            description: 'Defeat Demi-Human Queen Maggie in Mt. Gelmir to get a Memory Stone. She is located nearby the Primeval Sorcerer Azur grace in Mt. Gelmir. How to reach her: From the Seethewater Terminus Site of Grace, head counterclockwise along the plateau\'s western and southern edges past Hermit\'s Shack and to the Craftsman\'s Shack Site of Grace. Head northeast from there past Hermit Village',
            tags: [MEMORY_STONE]
          },
        // ... existing code ...
        ```
        Notes:
        - link to the mapgenie location: https://mapgenie.io/elden-ring/maps/the-lands-between?locationIds=167216
        - add this right after the step related to obtaining the spell Comet Azur

### Update the announcements.ts file

- [ ] **Add a new announcement**
      To inform users about the new Memory Stones feature.
      - [ ] In `src/data/announcements.ts`, add a new announcement.