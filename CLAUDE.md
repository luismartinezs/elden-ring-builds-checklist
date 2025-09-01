# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` - Start development server
- `pnpm build` - Build for production (also generates sitemap via postbuild)
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm test` - Run tests once with Vitest
- `pnpm test:watch` - Run tests in watch mode

## Architecture Overview

This is a **Next.js application** for Elden Ring game checklists with feature-based architecture:

### Core Concepts
- **Feature-Based Structure**: Code is organized by features in `src/features/` (checklist, leveling, weapons, etc.)
- **Vertical Slices**: Each feature is self-contained with its own components, hooks, and types
- **Path Aliases**: Use `~/` for absolute imports from `src/`
- **Relative Imports**: Use relative imports within the same feature slice

### Data Structure
- **Static Data**: Game data lives in `src/data/` as TypeScript files
- **Checklists**: Defined as `TChecklist` with hierarchical items structure
- **UUIDs Required**: All item IDs must be unique UUIDs
- **Local Storage**: User progress stored as profiles in localStorage

### Key Features
- **Checklists**: Step-by-step game progress tracking
- **Weapons**: Database with filtering, sorting, and stat requirements
- **Leveling**: Character stat management and soft cap calculations  
- **Profiles**: Multiple save profiles with separate progress
- **Tags & Filters**: Customizable item filtering (OPTIONAL, character-specific, etc.)

### Technology Stack
- Next.js 13 with Pages Router
- TypeScript with strict mode
- TailwindCSS for styling (primary: amber, secondary: sky)
- TanStack React Query for state management
- Vitest for testing
- PWA enabled with next-pwa

### Adding New Checklists
1. Create new file in `src/data/`
2. Follow `TChecklist` type structure 
3. Generate unique UUIDs for all item IDs
4. Import and add to `lists` array in `src/data/index.ts`
5. Use kebab-case for slugs

### Component Patterns
- Functional components only (no classes)
- Custom hooks for state management
- Feature-based component organization
- Shared components in `src/components/`