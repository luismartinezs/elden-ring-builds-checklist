# Pull request for issue: #42

This is a pull request for the following functionalities:

* Added a "Donate" button to the application footer.
* The donation link is configurable via the `NEXT_PUBLIC_DONATION_URL` environment variable.
* The "Donate" button opens the configured link in a new tab.

## How to test?

1.  Ensure the `NEXT_PUBLIC_DONATION_URL` environment variable is set in your `.env` file (e.g., `NEXT_PUBLIC_DONATION_URL=https://www.buymeacoffee.com/yourpage`).
2.  Run the application.
3.  Navigate to any page in the application.
4.  Observe the footer: a "Donate" button should be visible in the "Other Links" section.
5.  Click the "Donate" button.
6.  Verify that the configured donation link opens in a new browser tab.
7.  If `NEXT_PUBLIC_DONATION_URL` is not set, the button should not render.

## How have functionalities been implemented?

*   A new environment variable `NEXT_PUBLIC_DONATION_URL` was added to `src/env.mjs` for the donation link. This variable is also included in `.env.example`.
*   A new React component `DonateButton.tsx` was created in `src/features/donate/`. This component:
    *   Retrieves the `NEXT_PUBLIC_DONATION_URL`.
    *   Renders an `<a>` tag wrapping a `Button` component (from `~/components/Button`).
    *   The button has the text "Donate" and uses the `primary` variant.
    *   The link opens in a new tab using `target="_blank"` and `rel="noopener noreferrer"`.
    *   If the `NEXT_PUBLIC_DONATION_URL` is not set, the component returns `null`, effectively hiding the button.
*   The `DonateButton` component is imported and used in `src/components/Footer.tsx` under the "Other Links" section.
*   A `.keep` file was added to `src/features/donate/` to ensure the directory is tracked by git even if it becomes empty in the future.

## Any issues with implementation?

No known issues with the implementation.

## Any changes to automated tests?

No automated tests have been added or updated for this functionality in this PR. The implementation plan includes a step for writing or updating tests, which is currently marked as pending: `[-] Write or update tests`.

## Any changes to documentation?

*   The `NEXT_PUBLIC_DONATION_URL` environment variable has been added to `.env.example`.
*   The project README already includes instructions for environment variables, and this new variable will follow that existing pattern.

## Any technical debt repayment?

N/A

## Any improvements to CI/CD pipeline?

N/A
