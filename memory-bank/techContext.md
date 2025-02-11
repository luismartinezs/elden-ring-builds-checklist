# Technical Context

## Development Stack

### Frontend
- Next.js 14+ with TypeScript
- React 18+ for UI components
- Tailwind CSS for styling
- Client-side state management via React Context

### Backend
- Next.js API routes
- tRPC for type-safe API endpoints
- Prisma ORM for database operations
- NextAuth.js for authentication

### Database
- PostgreSQL (via Prisma)
- Schema includes:
  - User profiles
  - Checklists
  - Progress tracking
  - Settings

## Development Setup
1. Node.js environment
2. PNPM for package management
3. PostgreSQL database
4. Environment variables:
   - Database connection
   - Authentication settings
   - API keys

## Key Dependencies
- @trpc/client, @trpc/server for API
- @prisma/client for database
- next-auth for authentication
- tailwindcss for styling
- typescript for type safety

## Technical Constraints
1. Browser Support
   - Modern browsers (Chrome, Firefox, Safari, Edge)
   - Mobile browser compatibility

2. Performance
   - Fast initial page load
   - Optimized client-side rendering
   - Efficient data fetching

3. Security
   - CSRF protection
   - XSS prevention
   - Secure authentication
   - Data validation

4. Accessibility
   - WCAG compliance
   - Keyboard navigation
   - Screen reader support

## Development Workflow
1. TypeScript for all new code
2. ESLint + Prettier for code style
3. Git for version control
4. Feature branch workflow
5. Automated testing where critical

## Deployment
- Vercel platform
- PostgreSQL database hosting
- Environment configuration
- Build optimization
