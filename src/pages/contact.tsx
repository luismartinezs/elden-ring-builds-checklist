import Head from "next/head";
import { useRef, useState } from "react";
import { Button } from "~/components/Button";
import { Heading } from "~/components/Heading";
import { SectionWrapper } from "~/components/SectionWrapper";
import Spinner from "~/components/Spinner";
import { PageLayout } from "~/layouts/PageLayout";

function ContactPage() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const textarea = useRef<HTMLTextAreaElement>(null);

  const validateMessage = (message: string): string | null => {
    if (message.trim().length < 10) {
      return "Message is empty or too short.";
    }
    return null;
  };

  const handleSubmit = async (): Promise<boolean> => {
    setError("");

    const _error = validateMessage(message);
    if (_error) {
      setError(_error);
      textarea.current?.focus();
      return false;
    }

    setLoading(true);

    const response = await fetch("/api/send-feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    if (response.ok) {
      // Handle success
      console.log("Feedback sent successfully.");
      setMessage(""); // Reset message
      setLoading(false);
      return true;
    } else {
      // Handle error
      console.error("Failed to send feedback.");
      setLoading(false);
      return false;
    }
  };

  return (
    <PageLayout>
      <Head>
        <title>Contact | Elden Ring Checklists - Elden Hub</title>
        <meta
          name="description"
          content="Contact Elden Ring Checklists - Elden Hub"
        />
        <link
          rel="canonical"
          href="https://eldenringbuilds.vercel.app/contact"
          key="canonical"
        />
      </Head>
      <SectionWrapper>
        <Heading.H1>Contact</Heading.H1>
        <div>
          <label htmlFor="feedback">Enter your message</label>
          <textarea
            id="feedback"
            value={message}
            onChange={(e) => {
              const msg = e.target.value;

              setMessage(msg);

              const error = validateMessage(msg);

              if (error) {
                setError(error);
              } else {
                setError("");
              }
            }}
            placeholder="Tell me what build you want, report bugs, suggest improvements or anything else."
            required
            rows={7}
            className="block w-full rounded-md border border-stone-500 bg-stone-800 p-2 text-white"
            aria-describedby={error ? "feedback-error" : undefined}
            ref={textarea}
          />
          {error && (
            <p className="text-red-500" id="feedback-error">
              {error}
            </p>
          )}
          <div className="mt-4 flex justify-end">
            <Button
              className="ml-auto !mr-0"
              variant="primary"
              type="button"
              onClick={() => {
                void (async () => {
                  const success = await handleSubmit();
                  if (success) {
                    setMessage("");
                  }
                })();
              }}
            >
              {loading ? <Spinner /> : "Submit"}
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </PageLayout>
  );
}

export default ContactPage;
