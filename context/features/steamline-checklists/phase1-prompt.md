# Phase 1: Build Knowledge Extraction Prompt

Use this prompt as the **opening message** in a new LLM conversation (Gemini, Claude, etc.) to generate the raw build knowledge for a specific archetype. The LLM's final response will be used as input for Phase 2.

## Instructions

1. Replace `{{BUILD_ARCHETYPE}}` with the build description (e.g. "pure faith incantations", "pure arcane / bleed", "hybrid strength + dexterity quality build")
2. Replace `{{LEVEL_RANGE}}` with the target level range (e.g. "1-50", "1-150", "full game including DLC")
3. Paste the prompt into a fresh LLM conversation
4. The LLM may ask clarifying questions — answer them (this is where your domain knowledge adds value)
5. **Iterate**: Read the output, push back on anything that looks wrong, ask follow-up questions (e.g. "what about melee weapons?", "what spirit ash works best here?"). Your game knowledge is the quality gate.
6. When the final ordered list is complete, paste it back with the **self-verification prompt** below
7. Review the flagged items, correct anything that's wrong
8. **Fact-check against fextralife wiki** (see below). This step is mandatory — LLMs get location/enemy details wrong ~70% of the time
9. Save the entire conversation as a markdown file (e.g. `convo-pure-arcane.md`)

## Self-Verification Prompt (paste after the final item list is ready)

```
Review the complete item list you just provided. For each item, verify:
1. The item exists in Elden Ring (base game or DLC as specified)
2. The location description is accurate
3. The stat requirements are correct
4. The item is obtainable at the point in the game where it appears in the list
5. Stat milestones are logically consistent: if a previous item requires FAI 24, the stat milestone should not say "aim for FAI 15". Cross-check every stat milestone against the requirements of all items collected before that point.

Flag any items you are uncertain about with [UNCERTAIN] and explain why.
```

## Fextralife Wiki Fact-Check (step 8)

For every item in the final list, look up its fextralife wiki page at `https://eldenring.wiki.fextralife.com/Item+Name` and verify:

1. **Location**: Is the region correct? Is the landmark name correct?
2. **Enemy**: Is it dropped by the right enemy type? (e.g. Erdtree Avatar vs. Putrid Avatar vs. Ulcerated Tree Spirit)
3. **Stat requirements**: Do STR/DEX/INT/FAI/ARC match the wiki?
4. **Missability**: Is there a point of no return? (e.g. items in Leyndell before defeating Maliketh)
5. **Acquisition conditions**: Are there prerequisites like a festival being inactive, a questline step, or a specific NPC state?

This step catches factual errors that the LLM self-verification misses. In testing, ~70% of location/enemy details were wrong before wiki verification.

---

## Prompt

```
You are an expert Elden Ring build advisor. I need you to help me plan a complete {{BUILD_ARCHETYPE}} build for levels {{LEVEL_RANGE}}.

The goal is to create a step-by-step item collection checklist that a player can follow in order. The checklist will be organized by game phase (regions the player progresses through), with items listed in the optimal pickup order based on map routing — not importance.

Here are the constraints:
- Prioritize items that can be obtained WITHOUT defeating major bosses, especially in the early game. The player wants to become overpowered before tackling bosses.
- For each item, provide: the item name, exact location (region + landmark), any stat requirements, and a one-line note on why it matters for the build.
- Clearly mark optional/alternative items vs. core items.
- Include stat milestones: what stats the player should target at key level thresholds (e.g. level 25, 50, 80, 120).
- Include: weapons, catalysts/seals/staves, spells/incantations/sorceries, ashes of war, **whetblades** (needed to apply specific affinities like Sacred, Flame Art, Lightning), talismans, spirit ashes, **crystal tears for the Flask of Wondrous Physick**, armor (only if build-relevant), and upgrade material routes.
- Cover the full game: base game (Limgrave → Mountaintops) and Shadow of the Erdtree DLC if applicable.

Structure your response as:
1. **Starting Class & Keepsake** — which class and why
2. **Phase-by-phase item list** — grouped by region/game phase, items in pickup order within each phase
3. **Upgrade priorities** — which items to spend smithing stones and somber stones on (remember catalysts compete with weapons for regular stones)
4. **Stat progression** — target stat spreads at levels 25, 50, 80, 120, 150
5. **Spirit Ash recommendations** — best summons for a spellcaster/melee build at each stage

For each item in the phase-by-phase list, use this format:
- **Item Name** (Type: weapon/spell/talisman/etc.) — Location description. Stat requirements if any. Why it's important. [OPTIONAL] if not core.

Do NOT provide general gameplay tips or lore. Focus exclusively on what to collect and in what order.
```
