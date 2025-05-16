# Add Tips Widget (Donate Button)

## User story description
As a project maintainer, I want to add a "donate" button to the application's footer so that users can easily find a way to support the project financially.

## User story completion requirements
- A "donate" button is present in the footer of all pages.
- The button uses the project's primary color scheme.
- Clicking the button opens a configurable donation link in a new tab.
- The donation link is configurable via an environment variable.
- The new environment variable is documented.

## Tasks
- [ ] **Configure Environment Variable for Donation Link**
    - [ ] Define a new client-side environment variable `NEXT_PUBLIC_DONATION_URL` in `src/env.mjs`.
        - [ ] Add `NEXT_PUBLIC_DONATION_URL: z.string().url()` to the `client` schema.
        - [ ] Add `NEXT_PUBLIC_DONATION_URL: process.env.NEXT_PUBLIC_DONATION_URL` to `runtimeEnv`.
    - [ ] Add `NEXT_PUBLIC_DONATION_URL` to the `.env.example` file with a placeholder URL.
    - [ ] Document the new environment variable in the project README or relevant documentation.
    - **Testing:**
        - [ ] Verify that the application builds successfully after changes to `src/env.mjs`.
        - [ ] Check that the environment variable can be set in a local `.env` file and is accessible in the application.

- [ ] **Implement Donate Button in Footer**
    - [ ] Import the `Button` component in `src/components/Footer.tsx`.
    - [ ] Add an anchor (`<a>`) tag in `src/components/Footer.tsx` that wraps the `Button` component.
        - [ ] Set the `href` attribute of the anchor tag to `process.env.NEXT_PUBLIC_DONATION_URL`.
        - [ ] Set the `target` attribute to `_blank` to open the link in a new tab.
        - [ ] Set the `rel` attribute to `noopener noreferrer` for security.
    - [ ] Use the `Button` component with `variant="primary"` and text "donate".
        - Example: `<Button variant="primary">donate</Button>`
    - [ ] Style the button's placement within the footer for visibility and aesthetics, potentially in a new column or section.
    - **Testing:**
        - [ ] Verify the "donate" button is visible in the footer on multiple pages.
        - [ ] Check that the button uses the primary color scheme.
        - [ ] Click the button and confirm it opens the URL specified in `NEXT_PUBLIC_DONATION_URL` in a new tab.
        - [ ] Test with a placeholder URL and then with a real donation link if available.
        - [ ] Ensure the button is responsive and looks good on different screen sizes.