function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Video({ params, searchParams }) {
  const video_url = searchParams["url"];

  // Check if it's a valid YouTube URL
  const youtubeRegex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;
  if (!youtubeRegex.test(video_url)) {
    throw new Error("No valid YouTube URL found...");
  }

  await sleep(10000);

  return <div>video</div>;
}
