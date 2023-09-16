// Tag list displaying suggestions for prompts at chat interface
export default function TagList({ handleTagClick }) {
    const options = ["Summarize video", "Main talking points", "Fact check ", "Audience for this video"];

    return (
        <ul className="flex gap-1 overflow-y-scroll pb-1">
            {options.map((option, index) => {
                return (
                    <li key={index}>
                        <button onClick={handleTagClick} className="truncate text-ellipsis rounded-md bg-xLightBg px-3 py-2 text-sm">
                            {option}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}
