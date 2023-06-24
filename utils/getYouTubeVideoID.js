export default function getYouTubeVideoID(url) {
  let videoID = "";
  const urlArray = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);

  if (urlArray[2] !== undefined) {
    videoID = urlArray[2].split(/[^0-9a-z_\-]/i);
    videoID = videoID[0];
  } else {
    videoID = urlArray;
  }

  return videoID;
}
