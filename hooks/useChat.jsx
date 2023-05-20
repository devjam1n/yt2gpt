import { useState } from "react";
import { useSession } from "next-auth/react";

export default function useChat(transscript) {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const messageContent = e.target.message.value;

    // Add user's message to messages array
    setMessages((prev) => [...prev, { role: "user", content: messageContent }]);
    e.target.message.value = "";
    setIsLoading(true);

    const response = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({
        messages: [...messages, { role: "user", content: messageContent }],
        transscript: transscript,
      }),
    });

    if (response.status !== 200) {
      const data = await response.json();
      const message = data?.error ? data.error : "Internal server error...";
      throw new Error(message);
    }

    const json = await response.json();

    setMessages((prev) => [...prev, { role: "system", content: json }]);
    setIsLoading(false);
  };

  return { handleSubmit, messages, isLoading };
}
