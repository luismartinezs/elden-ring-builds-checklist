# Before Merging PR Checklist

Complete all items before merging any pull request to maintain code quality and documentation consistency.

## 1. Investigate Branch Changes

### 1.1 Review Commit History

- [ ] Run `git log --oneline --graph main..HEAD` to see all commits in this branch
- [ ] Run `git diff main...HEAD --stat` to see file changes summary
- [ ] Review each commit for:
  - [ ] Clear, descriptive commit messages
  - [ ] Logical code organization
  - [ ] No sensitive information (keys, passwords, etc.)

### 1.2 Analyze Code Changes

- [ ] Run `git diff main...HEAD` to review all code changes
- [ ] Verify changes align with PR description/requirements
- [ ] Check for:
  - [ ] New functions/exports that need documentation
  - [ ] Changed function signatures
  - [ ] New dependencies added
  - [ ] Breaking changes to existing API

## 2. Update Documentation Files

### 2.1 Update CHANGELOG.md

- [ ] Add new version entry with current date
- [ ] Format: `## [x.x.x] - YYYY-MM-DD`
- [ ] Document all user-facing changes:
  - [ ] New features (start with "feat:")
  - [ ] Bug fixes (start with "fix:")
  - [ ] Breaking changes (clearly marked)
  - [ ] Dependencies updates if user-impacting

### 2.2 Update changelog.tsx

- [ ] Add new version entry with current date
- [ ] Document key user-facing changes in a user-friendly way

### 2.3 Update package.json

Check if any of these need updating:

- [ ] **Version number** - bump according to semver:
  - Major: Breaking changes
  - Minor: New features (backward compatible)
  - Patch: Bug fixes
- [ ] **Exports field** - if new functions/modules added
- [ ] **Dependencies** - if new packages were added
- [ ] **Scripts** - if new build/test commands added
- [ ] **Types field** - if TypeScript definitions changed

### 2.4 Update CLAUDE.md (Following Best Practices)

Update only if changes affect development workflow:

- [ ] **Bash commands** - new build/test/lint commands
- [ ] **Code style** - new patterns or conventions introduced
- [ ] **Core files** - new important files added to project
- [ ] **Testing** - new test approaches or frameworks
- [ ] **Workflow** - changes to development process
- [ ] **Build system** - modifications to build outputs or process

**CLAUDE.md Best Practices:**

- [ ] Keep concise and human-readable
- [ ] Focus on project-specific context Claude needs
- [ ] Use clear command examples with descriptions
- [ ] Avoid duplicating information available elsewhere

### 2.5 Update README.md

- [ ] **Installation** - verify instructions are current
- [ ] **Usage examples** - add examples for new features
- [ ] **API documentation** - document new exported functions
- [ ] **Import syntax** - show how to import new functions
- [ ] **Breaking changes** - update examples if API changed

## 3. Quality Assurance

### 3.1 Code Quality

- [ ] Run `pnpm lint` - no lint errors
- [ ] Run `pnpm test` - all tests pass

### 3.2 Build Verification

- [ ] Run `pnpm build` - successful build
- [ ] Check `package.json` has correct configuration

### 3.3 Final Review

- [ ] All new code follows project conventions
- [ ] No TODO comments left in code
- [ ] No debugging console.log statements
- [ ] Git status is clean (no untracked files)

---

**Note:** This checklist ensures consistency and quality. Skip sections that don't apply to your specific changes, but document why in the PR description.
