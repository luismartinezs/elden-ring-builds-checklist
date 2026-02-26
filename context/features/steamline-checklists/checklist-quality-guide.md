# Checklist Quality Guide

Lessons learned from creating the Pure Faith Caster checklist. Use this as a reference when reviewing or creating new checklists.

## Region Progression Order

Items must follow the actual game progression. The canonical order is:

1. Limgrave
2. Weeping Peninsula
3. Caelid (early rush — Dragon Greyoll, Cathedral of Dragon Communion)
4. Liurnia of the Lakes (skip Stormveil first, grab prayerbooks, Crystal Tears, Raya Lucaria)
5. Stormveil Castle (come back overleveled)
6. Caelid (revisit — Redmane Castle, Sellia, Fort Gael, Gowry)
7. Altus Plateau / Mt. Gelmir / Volcano Manor
8. Radahn → Nokron, Eternal City
9. Leyndell, Royal Capital
10. Mountaintops of the Giants
11. Crumbling Farum Azula
12. Haligtree / Elphael (optional endgame area)
13. Endgame (Tiche, Flock's Canvas, etc.)
14. DLC: Shadow of the Erdtree

Items in the same location should be grouped together (e.g. Sanctified Whetblade + Coded Sword are both in Leyndell's Fortified Manor).

## Spell Stat Requirements

Every spell/incantation **must** include its stat requirements inline, e.g. `(FAI 17)` or `(FAI 15, ARC 12)`. Weapons with stat requirements should also include them, e.g. `(STR 16, DEX 16, FAI 24)`.

## Stat Milestone Consistency

Every stat milestone must be consistent with all items listed before it. If the Winged Scythe requires FAI 24, the first stat milestone cannot say "aim for FAI 15". Cross-check every milestone against every item that precedes it.

## Missability Warnings

Flag items that become permanently unobtainable:
- **Leyndell items** (e.g. Sanctified Whetblade): "WARNING: cannot be acquired after defeating Maliketh"
- **Radahn Festival**: Red-Hot Whetblade in Redmane Castle is "only accessible when the Radahn Festival is inactive"
- Any NPC shop that disappears after a quest stage

## Questline Items

For items that require multi-step questlines (e.g. Pest Threads via Millicent's quest):
- State the full prerequisite, not a simplified version (e.g. "requires giving Millicent the Valkyrie's Prosthesis", not just "give Gowry the Gold Needle")
- Add a tip to use the relevant filter in the game checklist if one exists (e.g. "Tip: turn on the Millicent filter in the simple game checklist to track this")

## Description Formatting

- Sentence fragments after the item name **must start with a capital letter**: "Behind a Stonesword Key fog wall", not "behind a stonesword key fog wall"
- Use periods to separate clauses, not em-dashes
- Spell out small numbers: "Five soldiers", not "5 soldiers"
- Include the item's purpose/why it matters in the description

## Categories Easily Missed

LLMs consistently forget these item categories. Explicitly check for:
- **Whetblades** (needed to apply specific affinities like Sacred, Flame Art, Lightning)
- **Crystal Tears** for the Flask of Wondrous Physick (Faith-Knot, damage-shrouding, Cerulean Hidden)
- **Buff incantations** (Flame Grant Me Strength, Golden Vow)
- **Prayerbooks** needed to unlock spells from NPCs

## Wiki Fact-Check Error Patterns

LLMs get these wrong most often (~70% error rate on details):
- **Wrong enemy type**: Erdtree Avatar vs. Putrid Avatar vs. Ulcerated Tree Spirit — these are different enemies at different Minor Erdtrees
- **Wrong region**: Crystal Tears are frequently placed in the wrong region (e.g. "Altus Plateau" when the item is actually in "Northeastern Liurnia")
- **Wrong acquisition method**: Saying "defeat the Erdtree Avatar" when the item is a ground pickup with no boss
- **Simplified quest descriptions**: Omitting intermediate quest steps required to unlock a purchase
