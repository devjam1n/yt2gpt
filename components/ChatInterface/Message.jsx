export default function Message({ text, right }) {
    return <li className={`max-w-[90%] px-4 py-2 shadow-sm ${right ? "self-end rounded-rightMessage bg-primary" : "self-start rounded-leftMessage bg-xLightBg"}`}>{text}</li>;
}
