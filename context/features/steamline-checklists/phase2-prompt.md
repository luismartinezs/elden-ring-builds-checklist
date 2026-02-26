# Phase 2: Checklist Data Generation Prompt

Use this prompt to transform a Phase 1 conversation into a valid TypeScript checklist data file for `src/data/`.

## Instructions

1. Replace `{{CONVERSATION_CONTENT}}` with the full Phase 1 conversation (copy-paste)
2. Replace `{{CHECKLIST_SLUG}}` with the kebab-case slug (e.g. `pure-faith-caster`)
3. Replace `{{CHECKLIST_TITLE}}` with the display title (e.g. `Pure Faith Caster`)
4. Replace `{{CHECKLIST_TAGS}}` with the top-level build tags as a comma-separated list from this set:
   - Stats: `fai`, `int`, `str`, `dex`, `arc`
   - Progression: `early`, `mid`, `late`, `full`
5. Paste into an LLM (ideally one with large context, like Gemini or Claude)
6. The output will use `"__UUID__"` placeholders — run `node scripts/inject-uuids.mjs <file>` to replace them with real UUIDs
7. Review the output, manually verify wiki links, then save as `src/data/{{CHECKLIST_SLUG}}.ts`

---

## Prompt

````
You are a code generator. Convert the following Elden Ring build conversation into a TypeScript data file that matches the exact schema and style shown below.

### TypeScript Schema

```ts
interface TChecklistItem {
  id: string;          // UUID v4
  description: string; // plain text or HTML with <a> links to fextralife wiki
  tags?: string[];     // use 'OPTIONAL' tag string for non-core items (see import below)
  locationLink?: string; // fextralife interactive map link if applicable
  items?: TChecklistItem[]; // nested sub-items (e.g. for stat breakdowns)
}

interface TChecklist {
  id: string;    // UUID v4
  slug: string;  // kebab-case, used in URL
  title: string; // display title
  tags?: string[]; // build tags like ['fai', 'early']
  notes?: string[]; // HTML strings for source attribution
  items: TChecklistItem[];
}
```

### Example File (moonveil-samurai.ts)

```ts
import { TAGS } from '~/features/tags';

const { OPTIONAL } = TAGS

const list = {
  id: "8ea63098-c6a4-4a7b-beb4-bbf639f1eefa",
  slug: "moonveil-samurai",
  title: "Moonveil Samurai 50",
  tags: ['int', 'dex', 'mid'],
  notes: [
    `Combination of the <a href="https://www.youtube.com/watch?v=ngnKoSkUuTY" target="_blank">Samurai beginner</a> and the <a href="https://www.youtube.com/watch?v=fi8PiBPfJ0w">Moonveil Samurai</a> Fextralife guides`,
  ],
  items: [
    {
      id: 'e58988bb-e32f-4832-9a3d-c2b6a55d9c1e',
      description: 'Start as Samurai',
      tags: []
    },
    {
      id: '41f41ea4-4b24-4a94-bef0-a65fa10f1a95',
      description: 'Get Golden Seed as Keepsake',
      tags: [OPTIONAL]
    },
    {
      id: '96243acd-0293-4663-8ca9-114e759e5971',
      description: 'Pump these stats initially',
      tags: [],
      items: [
        {
          id: 'c3eef0ad-c4ba-49fa-8922-f6fd7b165797',
          description: 'VGR 20',
          tags: []
        },
        {
          id: '260ae847-faf7-477e-a4c9-5b47cb87beda',
          description: 'DEX 18',
          tags: []
        },
      ]
    },
  ]
}

export default list
```

### Style Rules

1. **Use `"__UUID__"` as a placeholder** for every `id` field. UUIDs will be injected programmatically after generation.
2. **Use `OPTIONAL` tag** (imported from `~/features/tags`) for items the conversation marks as optional or alternative.
3. **Items with no tags** should have `tags: []` (empty array, not omitted).
4. **Stat milestones** should be a parent item with nested `items` for each stat (see example above).
5. **Wiki links**: Where possible, link item names to their fextralife wiki page using `<a href="https://eldenring.wiki.fextralife.com/Item+Name" target="_blank">Item Name</a>` format inside the description string. Only add links you are confident are correct.
6. **Descriptions should be concise**, one line, action-oriented. "Get X from Y" or "Defeat X to obtain Y". Include stat requirements in parentheses when relevant, e.g. "(FAI 24)". Use periods to separate sentences, NEVER use em-dashes (—).
7. **Keep items flat by default.** Only use nested `items` for: stat milestone breakdowns (parent = "Target these stats at level X", children = individual stats) or either/or choices (parent = "Choose one of these approaches", children = alternatives). Do NOT group items under phase headings like "Early Game" or "Limgrave".
8. **Order items by when they can actually be obtained**, not by importance. If the conversation discusses items out of order (e.g. mentions an end-game item before a mid-game one), reorder them so items accessible earlier come first. Within the DLC, order by actual accessibility in the game world.
9. **Do not invent items** not mentioned in the conversation.
10. **Notes array**: Leave empty or omit unless there's a specific guide URL to credit.
11. **Never use em-dashes (—)** anywhere in the output. Use periods or commas instead.

### Conversation Content

{{CONVERSATION_CONTENT}}

### Output

Generate a complete TypeScript file for this checklist:
- slug: "{{CHECKLIST_SLUG}}"
- title: "{{CHECKLIST_TITLE}}"
- tags: [{{CHECKLIST_TAGS}}]

Output ONLY the TypeScript code, no explanations.
````
