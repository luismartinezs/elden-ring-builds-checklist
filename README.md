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

## Generate sitemap

- Run `pnpm build` locally
- Run `pnpm sitemap` (there was a script `postbuild`, I replaced it)
- Paste the content of `sitemap-0.xml` to `sitemap.xml` (google has problems to read `sitemap-0.xml`)

## Notes

- When to add the `OPTIONAL` tag to a step?
  - YES: When the step is an optional part of the playthrough that is not required to reach the final boss. Example: Defeating the Regal Ancestor Spirit boss, defeating Radahn, etc.
  - NO: When a questline has an optional step specific to that questline. Example: Meeting Alexander in Limgrave.
- I'm considering removing the OPTIONAL tag as I realize it's a bit ambiguous
- Removing all filters should show a path straight to the final boss
- Removing all filters except OPTIONAL should show the path to optional areas

## Roadmap

- [ ] SotE improvements
  - [x] add missing NPC rewards
  - [x] improve SotE tags: add character tag to a step if that step is required for that character questline
  - [x] add dungeons to SotE
  - [x] add ancient stones
  - [ ] ghost gloveworts to SotE
- [x] add share button to all pages (it copies url to clipboard)
- [ ] ER improvements
  - [ ] weaknesses and resistances for base game bosses
  - [ ] memory stones
  - [ ] legendary items
  - [ ] check of the remaining side quests which ones i should add, and add them
- [ ] Growth
  - [ ] Estimate cost of:
    - [ ] domain name
    - [ ] database and authentication
  - [ ] Find someone who wants to be sponsor so I can work on that more and can offset the cost
    - [ ] similar apps (e.g. fextralife, elden ring map)
    - [ ] sponsors of elden ring youtubers eg lilaggy, vaait, etc
  - [ ] if find sponsor that covers costs, build new features to grow site
  - [ ] users can create their own checklists