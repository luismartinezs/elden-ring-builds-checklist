# Write implementation plan
Write an implementation plan for the task provided. Break down the task into commit-size units

## How to write the checklist
1. Treat each **top-level checkbox** as a change that could fit in one Git commit:
   - Touches one file *or* a tight cluster of 1-3 files.
   - Adds or edits no more than ~15 lines of code per file (ignore this for verbose languages or heavy config files)
2. If a step needs finer detail, nest **sub-checkboxes** under it (≤ 5 per parent).
3. Each step should be small and clear enough for a junior developer to implement.
4. Keep every box actionable: after checking it the diff should compile and tests should pass.
5. End the list with
   `- [ ] Write or update tests`.

## Output format
```md
### {{Concise title of the task}}

{{concise description of task and deliverable}}

- [ ] **First narrow change**
      Short phrase why it matters.
- [ ] **Next narrow change**
      …
- [ ] Write or update tests
```

Do not attempt to implement the plan, just write it down.