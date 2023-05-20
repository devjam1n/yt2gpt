export default function Message({ text, right }) {
  return <li className={`max-w-[70%] px-5 py-3 shadow-sm ${right ? "self-end rounded-rightMessage bg-primary" : "self-start rounded-leftMessage bg-lightBg"}`}>{text}</li>;
}
