# Streamline Checklist Creation with AI

## Workflow

Four-step process to generate new checklist data files for `src/data/`:

### Phase 1: Knowledge Extraction
Guided conversation with an LLM to surface the optimal item collection order for a build archetype. Iterate with your game knowledge. Use `phase1-prompt.md`.

### Phase 1.5a: Self-Verification
Paste the final item list back to the LLM with the verification prompt. Review flagged items. Catches logical inconsistencies (e.g. stat milestones contradicting item requirements).

### Phase 1.5b: Fextralife Wiki Fact-Check
For every item in the list, look up the fextralife wiki page and verify: location, enemy, stat requirements, missability, and prerequisites. **This step is mandatory.** In testing, ~70% of location/enemy details were wrong before wiki verification.

### Phase 2: Data Generation
Transform the verified conversation into a valid TypeScript checklist file. Use `phase2-prompt.md`. Run `node scripts/inject-uuids.mjs <file>` to replace UUID placeholders.

## Files

- `phase1-prompt.md` — prompt template + self-verification prompt + wiki fact-check instructions
- `phase2-prompt.md` — prompt template to convert conversation → `.ts` checklist
- `convo.md` — example Phase 1 conversation (pure faith build, via Gemini)

## Planned checklists

- [x] Pure faith incantations (complete, see `convo.md`)
- [ ] Pure arcane / bleed
- [ ] Hybrid STR/DEX quality
- [ ] Faith / DEX hybrid