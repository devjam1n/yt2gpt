export default function TagList({ handleTagClick }) {
  return (
    <ul className="mb-1 flex gap-1">
      <li>
        <button onClick={handleTagClick} className="rounded-md bg-xLightBg px-3 py-2">
          Summarize this video
        </button>
      </li>
      <li>
        <button onClick={handleTagClick} className="rounded-md bg-xLightBg px-3 py-2">
          Fact check
        </button>
      </li>
    </ul>
  );
}
