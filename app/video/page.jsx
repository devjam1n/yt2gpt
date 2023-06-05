import ChatInterface from "@components/ChatInterface";

export default async function Video({ params, searchParams }) {
  const videoUrl = searchParams["url"];

  // Check if it's a valid YouTube URL
  const youtubeRegex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;
  if (!youtubeRegex.test(videoUrl)) {
    throw new Error("No valid YouTube URL found...");
  }

  try {
    // fetch the video data via API routes
    const response = await fetch(`${process.env.URL}/api/video_data?url=${videoUrl}`, { cache: "no-cache" });

    // error handling
    if (response.status !== 200) {
      const json = response ? await response.json() : null;
      const errorMessage = json?.error || "Internal server error...";

      throw new Error(errorMessage);
    }

    // parse data
    const json = await response.json();
    var { transscript, videoDetails } = json;
  } catch (error) {
    console.error(error);
    if (error?.message) {
      throw new Error(error.message);
    }
    throw new Error("Internal server error");
  }

  return (
    <main className="w-full">
      <ChatInterface videoUrl={videoUrl} transscript={transscript} videoDetails={videoDetails} />
    </main>
  );
}
