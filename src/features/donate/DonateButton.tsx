import { Button } from "~/components/Button";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface DonateButtonProps {
  // Future props can be added here
}

export function DonateButton({}: DonateButtonProps = {}) {
  const donationUrl = process.env.NEXT_PUBLIC_DONATION_URL;

  if (!donationUrl) {
    if (process.env.NODE_ENV === "development") {
      console.warn("Donation URL is not set.");
    }
    return null;
  }

  return (
    <a href={donationUrl} target="_blank" rel="noopener noreferrer">
      <Button variant="primary">Donate</Button>
    </a>
  );
}
