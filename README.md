# Elden Ring Checklists

This is to make it easier to play the game without having to look up guides constantly

## Dev tasks

- [x] Home should probably redirect to /checklists for now
- [x] Structure project properly (local static data)
  - [x] Data files are ts
  - [x] item ids are uuid
  - [x] Checklists have title and slug properties
- [x] UX
  - [-] A button expand / collapse all expands and collapses all sublists
  - [x] checkbox is big and nice to use on mobile
  - [x] Style tags
- [x] List items can have child lists
- [x] Checked items are saved in localStorage
  - [x] save data has shape 'listId=[...itemIds]'
- [x] Button uncheck all
- [x] Button filter completed
- [x] Filter by tag (optional)
- [ ] Feedback widget


## How to dev

### Add new filter by key

- Add key to src/features/tags/constants.ts
- Add tag to src/features/tags/tags.ts
- Add button to src/components/SettingsMenu/SettingsMenu.tsx
- Extend useShowChecklistItem hook in src/features/checklist/components/Checklist.tsx