import { useState } from "react";

export default function useChat(transscript) {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    const messageContent = e.target.message.value;

    if (messageContent.length < 1) {
      setError("Message cannot be empty");
      setIsLoading(false);
      return;
    }

    if (messageContent.length > 100) {
      setError("Message cannot be longer than 100 characters");
      setIsLoading(false);
      return;
    }

    // Add user's message to messages array
    setMessages((prev) => [...prev, { role: "user", content: messageContent }]);
    e.target.message.value = "";

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({
          messages: [...messages, { role: "user", content: messageContent }],
          transscript: transscript,
        }),
      });

      const json = await response.json();

      // error handling
      if (response.status !== 200) {
        // if error from API route
        if (json?.error) {
          throw new Error(json?.error);
        }
        // other errors
        throw new Error("Internal server error...");
      }

      setMessages((prev) => [...prev, { role: "system", content: json }]);
    } catch (error) {
      console.error("Error occurred in useChat:", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { handleSubmit, messages, isLoading, error };
}
