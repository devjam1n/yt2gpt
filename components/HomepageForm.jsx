"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import getYouTubeVideoID from "@utils/getYouTubeVideoID";

/*  Is the form on the homepage with video input and continue button,
    validates and redirects to video page with ID param on submit */
export default function HomepageForm() {
    const { data: session } = useSession();
    const router = useRouter();

    const [videoURL, setVideoURL] = useState(""); // The video URL input
    const [error, setError] = useState("");

    // Handle input of video URL and redirect to the video page
    function handleSubmit(e) {
        e.preventDefault();

        // If user is not signed in, redirect to sign in page
        if (!session?.user) {
            router.push("/login");
            return;
        }

        if (videoURL === "") {
            setError("Enter a video URL");
            return;
        }

        // Check if it's a valid YouTube URL
        const youtubeRegex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;
        if (!youtubeRegex.test(videoURL)) {
            setError("Invalid video URL");
            return;
        }

        // Get the video ID from our utility function
        const videoId = getYouTubeVideoID(videoURL);

        router.push(`/video/${videoId}`); // Navigate to video page
    }

    // Clear error message when videoURL changes
    useEffect(() => {
        setError("");
    }, [videoURL]);

    return (
        <>
            {!session?.user && <p className="mb-4 text-error">Please sign in before continuing.</p>}
            <form onSubmit={handleSubmit} className="flex flex-col">
                <input value={videoURL} onChange={(e) => setVideoURL(e.target.value)} type="text" placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="input mb-1 w-full" />
                <div className="flex gap-4">
                    <p className="ml-auto self-center text-error">{error}</p>
                    <button className="btn bg-primary">Continue</button>
                </div>
            </form>
        </>
    );
}
