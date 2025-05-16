### Add Tips Widget (Donate Button)

- [x] **Define Environment Variable for Donation Link**
      Done: Added NEXT_PUBLIC_DONATION_URL to src/env.mjs for client-side validation and runtime access.
      Add `NEXT_PUBLIC_DONATION_URL` to `src/env.mjs` for validation and to `runtimeEnv`. This makes the Stripe donation link configurable.
- [x] **Update Example Environment File**
      Done: Added NEXT_PUBLIC_DONATION_URL to .env.example.
      Add `NEXT_PUBLIC_DONATION_URL` to `.env.example` with a placeholder value to guide users.
- [x] **Add Donate Button to Footer Component**
      Done: Added donate button to Footer component.
      Modify `src/components/Footer.tsx` to include an `<a>` tag wrapping the `Button` component. The `href` will use `process.env.NEXT_PUBLIC_DONATION_URL`, and the button will have `variant="primary"` and text "donate". Ensure it opens in a new tab.
- [x] **Style Donate Button Placement in Footer**
      Done: Moved donate button to the social column in the footer for better visibility.
      Adjust styling in `src/components/Footer.tsx` if necessary to ensure the donate button is well-placed and visually distinct within the footer, possibly in a new column or section.
- [x] **Update Project README**
      Done: Verified that NEXT_PUBLIC_DONATION_URL is already documented in README.md.
      Add documentation for the new `NEXT_PUBLIC_DONATION_URL` environment variable in the project's README file.
- [x] Create a new donate folder under src/features
      Done: Created the `src/features/donate` directory.
- [x] in the donate folder, create a new component called `DonateButton.tsx` (copy the component content from the current Footer.tsx)
      Done: Created `src/features/donate/DonateButton.tsx` with the donate button logic.
- [x] use this component in the Footer, replacing the existing donate button
      Done: Updated `Footer.tsx` to use the new `DonateButton` component.
- [ ] the DonateButton label should be capitalized
- [ ] Put the DonateButton under the "other links" section in the footer
- [-] Write or update tests
      Ensure the new donate button functionality is covered by appropriate tests, including link functionality and visibility.
