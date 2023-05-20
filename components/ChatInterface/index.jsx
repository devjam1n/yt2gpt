"use client";

import MessageContainer from "./MessageContainer";
import Message from "./Message";
import { useState, createRef } from "react";
import TagList from "./TagList";

export default function ChatInterface({ videoUrl, transscript, videoDetails }) {
  const videoId = videoUrl.split("v=")[1];
  const messageRef = createRef();

  const [messages, setMessages] = useState([]);

  function handleTagClick(e) {
    e.preventDefault();
    messageRef.current.value = e.target.textContent;
    messageRef.current.focus();
  }

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
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <Message text={videoDetails.title} right={false} />
      </MessageContainer>
      <div className="fixed bottom-3 left-0 right-0 mx-auto flex max-w-4xl flex-col px-2">
        <TagList handleTagClick={handleTagClick} />
        <form className="flex w-full gap-2" onSubmit={handleSubmit}>
          <textarea ref={messageRef} id="message" name="message" type="text" placeholder="Write your message here..." className="input w-full" />
          <button className="btn ml-auto bg-primary">Send</button>
        </form>
      </div>
    </div>
  );
}
