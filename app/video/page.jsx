import ChatInterface from "@components/ChatInterface";

export default async function Video({ params, searchParams }) {
  const videoUrl = searchParams["url"];

  // Check if it's a valid YouTube URL
  const youtubeRegex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;
  if (!youtubeRegex.test(videoUrl)) {
    throw new Error("No valid YouTube URL found...");
  }

  // fetch the video data via API routes
  const response = await fetch("http://localhost:3000/api/video_data?url=" + videoUrl, { cache: "no-cache" });

  // error handling
  if (response.status !== 200) {
    if (response?.error) {
      // from API route
      throw new Error(response?.error);
    }
    // other errors
    throw new Error("Internal server error...");
  }

  // parse data
  const json = await response.json();
  const { transscript, videoDetails } = json;

  return (
    <main className="w-full">
      <ChatInterface videoUrl={videoUrl} transscript={transscript} videoDetails={videoDetails} />
    </main>
  );
}
