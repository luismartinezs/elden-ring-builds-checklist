# Elden Ring Checklists

This is to make it easier to play the game without having to look up guides constantly

## Dev tasks

- [x] Home should probably redirect to /checklists for now
- [x] Structure project properly (local static data)
  - [x] Data files are ts
  - [x] item ids are uuid
  - [x] Checklists have title and slug properties
- [ ] UX
  - [ ] A button expand / collapse all expands and collapses all sublists
  - [x] checkbox is big and nice to use on mobile
  - [x] Style tags
- [ ] List items can have child lists
- [x] Checked items are saved in localStorage
  - [x] save data has shape 'listId=[...itemIds]'
- [x] Button uncheck all
- [ ] Button filter completed
- [x] Filter by tag (optional)