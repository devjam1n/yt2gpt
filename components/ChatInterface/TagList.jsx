export default function TagList({ handleTagClick }) {
  return (
    <ul className="flex gap-2 overflow-y-scroll pb-2">
      <li>
        <button onClick={handleTagClick} className="truncate text-ellipsis rounded-md bg-xLightBg px-3 py-2">
          Summarize video
        </button>
      </li>
      <li>
        <button onClick={handleTagClick} className="truncate text-ellipsis rounded-md bg-xLightBg px-3 py-2">
          Main talking points
        </button>
      </li>
      <li>
        <button onClick={handleTagClick} className="truncate text-ellipsis rounded-md bg-xLightBg px-3 py-2">
          Fact check...
        </button>
      </li>
      <li>
        <button onClick={handleTagClick} className="truncate text-ellipsis rounded-md bg-xLightBg px-3 py-2">
          Audience for this video
        </button>
      </li>
    </ul>
  );
}
