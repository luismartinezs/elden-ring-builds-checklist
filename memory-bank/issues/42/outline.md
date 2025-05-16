# Outline: Add Tips Widget (Donate Button)

## Objective
Implement a tips widget that allows users to send monetary donations to support the project. The widget will be a simple, clearly-labeled "donate" button placed in the application's footer.

## Requirements
- Add a widget to the footer of the application.
- The widget consists of a single button with the text "donate".
- The button should use the project's primary color scheme for styling.
- When clicked, the button will direct users to a donation page powered by Stripe (Payment Links, https://support.stripe.com/questions/how-to-accept-donations-through-stripe)
- No additional statistics or supporter information should be displayed—just the button for tipping.

## Design
- Button text: "donate"
- Styling: Use the project's primary color scheme
- Placement: Footer (visible on all pages)

## Functionality
- Clicking the button opens the configured donation link in a new tab or window.
- The donation link should be easy to update/configure in the codebase or via environment variables if possible.

## Out of Scope
- No display of number of tips or recent supporters
- No modal or custom messaging
- No additional widgets or buttons

## Codebase Review for Donate Button Task

### 1. `src/components/Footer.tsx`
- **Lines 1-111 (entire file):**
  - This is the main Footer component where the donate button should be added. The footer is rendered on all pages (see `PageLayout.tsx`).
  - The best place to add the donate button is in a new column or as a distinct section, ensuring it is visible and styled according to the project's primary color scheme.
  - The Footer currently uses Tailwind classes and custom color schemes for styling.

### 2. `src/components/Button.tsx`
- **Lines 1-90 (entire file):**
  - This is a reusable Button component supporting several variants, including `primary`, which uses the project's main color scheme (amber/yellow). Use this for the donate button for visual consistency.
  - Usage: `<Button variant="primary">donate</Button>`

### 3. `src/layouts/PageLayout.tsx`
- **Lines 1-40:**
  - The Footer is included at the bottom of every page, ensuring the donate button will be globally visible once added to the Footer.

### 4. Environment Variable Configuration
- **File:** `src/env.mjs`
  - Add a new client-side environment variable, e.g., `NEXT_PUBLIC_DONATION_URL`, to make the donation link easily configurable.
  - Example addition to the `client` schema:
    ```js
    NEXT_PUBLIC_DONATION_URL: z.string().url(),
    ```
  - Example addition to `runtimeEnv`:
    ```js
    NEXT_PUBLIC_DONATION_URL: process.env.NEXT_PUBLIC_DONATION_URL,
    ```
  - The button's `href` should use this variable: `process.env.NEXT_PUBLIC_DONATION_URL`.

### 5. Styling
- The Button component's `primary` variant matches the project's main color scheme. For further customization, additional Tailwind classes can be added inline or via a custom variant.

### 6. Usage Example
- In `Footer.tsx`, add:
  ```tsx
  import { Button } from "./Button";
  // ...
  <a href={process.env.NEXT_PUBLIC_DONATION_URL} target="_blank" rel="noopener noreferrer">
    <Button variant="primary">donate</Button>
  </a>
  ```

### 7. Documentation
- Document the new environment variable in your `.env.example` or project README for easy configuration by maintainers.

---

**Summary:**
- Add the donate button to `Footer.tsx` using the `Button` component with the `primary` variant.
- Make the donation link configurable via a new `NEXT_PUBLIC_DONATION_URL` environment variable, validated in `src/env.mjs`.
- The button will be visible on all pages due to the Footer's placement in `PageLayout.tsx`.
- Style and accessibility will be consistent with the rest of the app.
