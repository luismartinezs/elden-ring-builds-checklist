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

## Contribute

- Fork this project, do your changes in your fork, and then create a PR

### Add new checklist

- Add new file under `/src/data`
- The file has a default export. Take `src/data/lightning-lancer-50-100.ts` as an example. The list types are in `src/features/checklist/types.ts` (`TChecklist`)
  - id: all of them must be unique, use a uuid generator, e.g. https://www.uuidgenerator.net/version4, or this VSCODE extensions comes in very handy: https://marketplace.visualstudio.com/items?itemName=netcorext.uuid-generator
  - slug: must be kebab-case
  - items are the actual list of steps
    - Tags: in practice, build checklists will not need tags or will only need OPTIONAL tag. You can import it as: `import { TAGS } from '~/features/tags'` and then access it as `TAGS.OPTIONAL`
- In `src/data/index.ts`, import the new list and append it to the `lists` array

### Add new filter by key

- Add key to `src/features/tags/constants.ts`
- Add tag to `src/features/tags/tags.ts`
- Add button to `src/components/SettingsMenu/SettingsMenu.tsx`

## Notes

- When to add the `OPTIONAL` tag to a step?
  - YES: When the step is an optional part of the playthrough that is not required to reach the final boss. Example: Defeating the Regal Ancestor Spirit boss, defeating Radahn, etc.
  - NO: When a questline has an optional step. Example: Meeting Alexander in Limgrave.
- I'm considering removing the OPTIONAL tag as I realize it's a bit ambiguous