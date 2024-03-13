import React, { useState } from "react";

export const Feedback = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your feedback..."
          required
          className="block w-full p-2 border border-gray-300 rounded-md text-black"
        />
        <button type="submit">Send Feedback</button>
      </form>
    </div>
  );
};
