import React, { useState } from "react";
import { Modal } from "~/components/Modal";
import { FaRegLightbulb } from "react-icons/fa";
import { Button } from "~/components/Button";

export const Feedback = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    console.log("onsubmit.");

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
    } else {
      // Handle error
      console.error("Failed to send feedback.");
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
        <div className="fixed bottom-0 left-0">
          <button
            type="button"
            onClick={openModal}
            className="m-4 flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 px-2 py-2 text-sm font-medium text-black hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-1 focus:ring-offset-stone-900 sm:mb-2 sm:focus:ring-4 sm:focus:ring-offset-2"
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
           onClick={() => {
             closeModal();
             handleSubmit();
           }}
         >
           Submit
         </Button>
      )}
    >
      <div>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me what build you want, report bugs, or suggest improvements."
          required
          className="block w-full rounded-md border border-gray-300 p-2 text-black"
        />
      </div>
    </Modal>
  );
};
