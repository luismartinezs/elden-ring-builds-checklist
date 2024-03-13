import React, { useRef, useState } from "react";
import { Modal } from "~/components/Modal";
import { FaRegLightbulb } from "react-icons/fa";
import { Button } from "~/components/Button";

export const Feedback = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const textarea = useRef<HTMLTextAreaElement>(null)

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
      return true;
    } else {
      // Handle error
      console.error("Failed to send feedback.");
      return false;
    }
  };

  return (
    <Modal
      header={
        <h2 className="text-xl font-semibold text-stone-900 dark:text-white">
          Send Feedback
        </h2>
      }
      renderToggleButton={({ openModal }) => (
        <div className="fixed bottom-0 right-0">
          <button
            type="button"
            onClick={openModal}
            className="!mb-8 mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 px-2 py-2 text-sm font-medium text-black hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-1 focus:ring-offset-stone-900 sm:mb-2 sm:focus:ring-4 sm:focus:ring-offset-2"
          >
            <FaRegLightbulb size={18} />
          </button>
        </div>
      )}
      renderFooter={({ closeModal, lastFocusableElementRef }) => (
        <Button
          className="ml-auto"
          variant="primary"
          type="button"
          ref={lastFocusableElementRef}
          onClick={async () => {
            const success = await handleSubmit();
            if (success) {
              closeModal();
            }
          }}
        >
          Submit
        </Button>
      )}
    >
      <div>
        <label htmlFor="feedback">Enter your feedback</label>
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
          placeholder="Tell me what build you want, report bugs, or suggest improvements."
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
      </div>
    </Modal>
  );
};
