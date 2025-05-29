# Coding Practices Cheatsheet

This document outlines coding standards, rules, and best practices for developers working on the Elden Ring Checklists project. The goal is to maintain a clear, consistent, and maintainable codebase.

## 1. General Principles

- **Technology Stack**: Next.js 13, TypeScript, React 18, TailwindCSS, pnpm. Key configurations exist for ESLint and Prettier to enforce base styling.
- **Clarity and Readability**: Prioritize code that is easy to understand.
- **Consistency**: Adhere to established patterns and conventions.
- **Type Safety**: Fully leverage TypeScript's capabilities.
- **Performance**: Be mindful of client-side rendering and data fetching implications.

## 2. Project Structure

- Main application code resides in `src/`.
- **Path Alias**: `~/*` maps to `./src/*` (e.g., `import { MyComponent } from '~/components/MyComponent';`).
- Key Directories:
    - `src/pages`: Next.js pages for routing.
    - `src/components`: Reusable UI components. Consider `src/components/ui` for generic elements (buttons, inputs).
    - `src/features`: Modularized features (self-contained components, hooks, utils).
    - `src/data`: Static data files (e.g., checklist definitions).
    - `src/hooks`: Custom React hooks.
    - `src/utils`: Utility functions.
    - `src/server`: Server-side code (if any).
    - `src/pages/api`: API routes.
- Environment variables: Managed via `src/env.mjs` with `@t3-oss/env-nextjs`.

## 3. Coding Standards & Best Practices

### 3.1. General Design Principles
    - Single-responsibility for functions, components, and hooks.
    - (Existing content from previous 3.1, 3.3, 3.4 can be refactored or augmented here if it makes sense, or kept separate)

### 3.2. Size and Complexity Limits
- **Files**: Aim for files to be **no more than 300 lines**.
- **Functions**: Aim for functions to be **no more than 30 lines**.
- **React Components**: Aim for components to be **no more than 50 lines** (excluding JSX for very simple structures if necessary, but focus on conciseness).

### 3.3. Naming Conventions
- **`camelCase`**: Variables, functions (e.g., `myVariable`, `calculateValue`).
- **`PascalCase`**: Classes (if any), React component names as defined within the file (e.g., `const MyComponent = ...`).
- **`SNAKE_CASE`**: Constants, enum members (e.g., `MAX_ITEMS`, `StatusType.IS_LOADING`).
- **`kebab-case`**: Files and folders (e.g., `my-file.ts`, `user-profile-card.tsx`, `src/feature-modules/`).
- **Number Formatting**: Use underscores for readability in large numbers (e.g., `1_000_000`, `0.000_001`).
- **TypeScript Types/Interfaces**: Use `TPascalCase` with a `T` prefix (e.g., `TMyType`, `TUserProfileProps`).

### 3.4. Modularity & Exports
- **Named Exports**: **Always use named exports.** Avoid default exports for modules and components.
    - Example: `export const MyComponent = () => { /* ... */ };`
    - *Exception*: Data files in `src/data/` (e.g., checklist definitions) use default exports as per `README.md` instructions.
- **File Naming**: Use consistent casing. `kebab-case.ts` for general files/utils, `kebab-case.tsx` for React component files. Slugs are `kebab-case`. (`forceConsistentCasingInFileNames: true` in `tsconfig.json`).
- **No Index/Barrel Files**: Avoid using index files (`index.ts` or `index.js`) for re-exporting modules. Import directly from the module's file.
  ```typescript
  // Correct:
  import { específicoFunction } from '~/features/auth/utils/helpers';
  // Avoid:
  // import { específicoFunction } from '~/features/auth/utils';
  // (if helpers.ts is re-exported by utils/index.ts)
  ```
  The example `import { MyModuleFunction } from '@modules/my-module/my-function'` is illustrative of direct path imports. Adapt paths based on actual project structure (e.g. using `~/`).

### 3.5. Function Design
- **Parameters**: Functions requiring more than two logical parameters should accept a single options object.
    - Example: `function processUserData(id: string, options: TProcessUserOptions)` where `TProcessUserOptions` could be `{ forceUpdate?: boolean; notifyUser?: boolean; }`.
- **Functional Style**: Strongly prefer functional JavaScript (e.g., map, filter, reduce, pure functions) over class-based approaches where practical.
- **Single Responsibility**: Functions should aim to do one thing well.

### 3.6. React & Component Design
- **Modern React**: Use functional components with Hooks. **Never use class-based components or legacy React lifecycle methods.**
- **Component Composition**: Build complex UIs by composing smaller, reusable components.
- **Custom Hooks**: Place reusable component logic in custom hooks within `src/hooks/`.
- **Single Responsibility**: Components and hooks should have a clear and single responsibility.

### 3.7. TypeScript Usage
- **Strict Mode**: `strict: true` is enabled and enforced.
- **`noUncheckedIndexedAccess: true`**: Always check for `undefined` when accessing array elements or object properties by index/key.
- **Type Imports**: Use inline type imports.
    - Example: `import type { MyType } from './my-module';` (Enforced by ESLint)
- **Type Naming**: All custom type and interface names must be prefixed with `T` and use PascalCase (e.g., `TUser`, `TItemProps`, `TApiResponse`).
- **Interfaces over Types**: Prefer using `interface` for defining object shapes and function signatures. Use `type` primarily for union types, intersection types, mapped types, or when needing to use `typeof`.
- **Descriptive Generics**: Always use descriptive and meaningful names for generic type parameters. Avoid single-letter non-descriptive names like `<T>`.
    - Good: `<TItem, TId extends string | number>`
    - Avoid: `<T, U, V>`
- **Unused Variables**: Prefix unused variables (especially function arguments) with an underscore (`_`). (Convention checked by ESLint)

### 3.8. Styling (Tailwind CSS)
- **Utility-First**: Use Tailwind CSS utility classes directly in your components.
- **Conditional Classes**: Use the `cn` utility from `src/utils/cn.ts` (which combines `clsx` and `tailwind-merge`) for managing conditional classes.
- **Sizing Utilities**: Instead of `h-4 w-4`, use the combined `size-4` utility for equal width and height.
- **Theme Colors**: Utilize the project's theme colors defined in `tailwind.config.ts` (`primary: colors.amber`, `secondary: colors.sky`).
- **Minimize Global Styles**: Avoid custom global CSS. Rely on Tailwind's `preflight` and utility classes.

### 3.9. Data Handling & IDs
- **Checklist Item IDs**: Use UUIDs (version 4).
- **Slugs**: Must be `kebab-case`.

### 3.10. Environment Variables
- Typed and managed in `src/env.mjs`.
- Store secrets in `.env.local` (gitignored).
- Document all production variables in `.env.example`.

### 3.11. Testing Conventions
- **Colocation**: Test files should be colocated with their source code. For a file named `feature-x.ts`, its test file should be `feature-x.test.ts` and reside in the same directory.

## 4. Tooling Overview

- **Package Management**: `pnpm` is used.
- **Code Formatting**: Prettier automatically formats code on save (via `.vscode/settings.json` and `prettier-plugin-tailwindcss`