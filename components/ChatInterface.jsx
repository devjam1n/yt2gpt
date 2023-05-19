"use client";

import { useState } from "react";

function MessageContainer({ children }) {
  return <ul className="mb-[84px] flex w-full flex-col gap-3">{children}</ul>;
}

function Message({ text, right }) {
  return <li className={`max-w-[70%] px-5 py-3 shadow-sm ${right ? "self-end rounded-rightMessage bg-primary" : "self-start rounded-leftMessage bg-lightBg"}`}>{text}</li>;
}

export default function ChatInterface({ videoUrl, transscript, videoDetails }) {
  const [messages, setMessages] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.message.value);
  }

  return (
    <div className="mt-3 flex flex-col">
      <MessageContainer>
        <iframe
          className="w-full max-w-[400px] rounded-leftMessage"
          width="400"
          height="250"
          src="https://www.youtube.com/embed/0vuzqunync8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <Message text="Hej med dig du er en lille lakage" right={false} />
        <Message text="Hej med dig" right={true} />
      </MessageContainer>
      <form onSubmit={handleSubmit} className="fixed bottom-3 left-0 right-0 mx-auto flex max-w-4xl gap-2 px-2">
        <textarea id="message" name="message" type="text" placeholder="Write your message here..." className="input w-full" />
        <button className="btn ml-auto bg-primary">Send</button>
      </form>
    </div>
  );
}
