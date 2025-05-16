import { Button } from "~/components/Button";

export function DonateButton() {
  const donationUrl = process.env.NEXT_PUBLIC_DONATION_URL;

  if (!donationUrl) {
    // Optionally handle the case where the URL is not set,
    // though env validation should catch this.
    // console.warn("Donation URL is not set.");
    return null;
  }

  return (
    <a href={donationUrl} target="_blank" rel="noopener noreferrer">
      <Button variant="primary">donate</Button>
    </a>
  );
}
