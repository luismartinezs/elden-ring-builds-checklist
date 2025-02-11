# System Patterns

## Architecture Overview
The application follows a modern Next.js architecture with clear separation of concerns:

### Core Layers
1. Pages Layer (`src/pages/`)
   - Route definitions
   - Page components
   - API routes

2. Features Layer (`src/features/`)
   - Checklist management
   - Profile system
   - Filtering system
   - Sharing functionality
   - Tags system

3. Components Layer (`src/components/`)
   - Reusable UI components
   - Layout components
   - Common elements

4. Data Layer (`src/data/`)
   - Build definitions
   - Game progress data
   - Announcements
   - Static content

### Key Patterns

1. Feature-First Organization
   - Features are self-contained
   - Each feature has its own components, hooks, and types
   - Clear boundaries between features

2. Component Patterns
   - Composition over inheritance
   - Hooks for logic separation
   - Context for state management
   - Client-side rendering considerations

3. Data Management
   - Prisma for database operations
   - tRPC for type-safe APIs
   - Local storage for persistence
   - Data migration support

4. State Management
   - React Context for global state
   - Custom hooks for shared logic
   - Local component state where appropriate

## Design Patterns
1. Container/Presenter Pattern
   - Logic separation in components
   - Reusable presentational components

2. Hook Pattern
   - Custom hooks for shared functionality
   - Feature-specific hooks
   - Data fetching hooks

3. Context Pattern
   - Feature-specific contexts
   - Global application state
   - Theme and settings management

4. Builder Pattern
   - Checklist construction
   - Profile management
   - Filter creation

## Technical Decisions
1. TypeScript for type safety
2. Tailwind for styling
3. tRPC for API communication
4. NextAuth for authentication
5. Prisma for database access
