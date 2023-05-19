"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function HomepageForm() {
  const { data: session } = useSession();
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    const url = e.target[0].value;

    if (!session?.user) {
      router.push(`/?error=Please sign in before continuing`);
      return;
    }

    if (!url) {
      router.push(`/?error=Please enter a URL`);
      return;
    }

    // Check if it's a valid YouTube URL
    const youtubeRegex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;
    if (!youtubeRegex.test(url)) {
      router.push(`/?error=Please enter a valid YouTube URL`);
      return;
    }

    router.push(`/video/?url=${url}`);
  }

  return (
    <>
      {!session?.user && <p className="mb-4 text-error">Please sign in before continuing.</p>}
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input type="text" placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="input mb-1 w-full" />
        <button className="btn ml-auto bg-primary">Continue</button>
      </form>
    </>
  );
}
