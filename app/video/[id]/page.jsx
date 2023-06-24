import ChatInterface from "@components/ChatInterface";
import Mascot from "@components/Mascot";
import ErrorMain from "@components/ErrorMain";

export default async function Video({ params }) {
  const videoId = params["id"];
  let error_message;
  let transscript;
  let videoDetails;

  try {
    // Check if it's a valid YouTube URL
    const youtubeRegex = /^[a-zA-Z0-9_-]{11}$/;
    if (!youtubeRegex.test(videoId)) {
      throw new Error("No valid video ID found.");
    }

    // fetch the video data via API routes
    const response = await fetch(`${process.env.URL}/api/video_data?id=${videoId}`, { cache: "no-cache" });

    // parse data
    const json = await response.json();

    if (json.error) {
      throw new Error(json.error);
    }

    transscript = json.transscript;
    videoDetails = json.videoDetails;
  } catch (error) {
    console.log(error);
    if (error?.message) {
      error_message = error.message;
    } else {
      error_message = "Internal server error";
    }
  }

  return (
    <>
      {error_message ? (
        <ErrorMain error={error_message} />
      ) : (
        <main className="w-full">
          <ChatInterface videoId={videoId} transscript={transscript} videoDetails={videoDetails} />
        </main>
      )}
    </>
  );
}
