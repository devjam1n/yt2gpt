import ChatInterface from "@components/ChatInterface";

export default async function Video({ params, searchParams }) {
  const video_url = searchParams["url"];

  // Check if it's a valid YouTube URL
  const youtubeRegex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;
  if (!youtubeRegex.test(video_url)) {
    throw new Error("No valid YouTube URL found...");
  }

  // fetch the video data via API routes
  const response = await fetch("http://localhost:3000/api/video_data?url=" + video_url, { cache: "no-cache" });

  // error handling
  if (response.status !== 200) {
    if (response?.error) {
      // from API route
      throw new Error(response.error);
    }
    // other errors
    throw new Error("Internal server error...");
  }

  // parse data
  const json = await response.json();
  const { transscript, videoDetails } = json;

  return (
    <div>
      <ChatInterface video_url={video_url} transscript={transscript} videoDetails={videoDetails} />
    </div>
  );
}
