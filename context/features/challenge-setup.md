Challenge lists should be made stateful and use storage

- Explore how app state is saved to local storage in this app, e.g you can explore @src/features/checklist/hooks/useCheckItem.ts
- @src/features/checklist/components/ChecklistItem.tsx can be taken as a reference to implement stateful checkbox (basically reuse component if possible)
- app state should include: `profiles[profile_key].challenges[challenge-key]` being an array of checked ids matching the challenge ids from @src/pages/challenges/john-elden.tsx