import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "YT2GPT | YouTube ChatGPT Tool",
    description: "Discover YT2GPT, a tool designed to save your hours of time watching YouTube videos by e.g. summarizing them for you.",
};

export default async function Page() {
    return (
        <main className="mx-2 mb-11 mt-8 text-sm sm:text-base">
            <h1 className="mb-1 text-2xl font-medium">Discover YT2GPT: YouTube ChatGPT Tool</h1>
            <p className="mb-3">Welcome to YT2GPT, where YouTube videos meet engaging conversations. Are you spending countless hours watching videos? Simplify your experience with YT2GPT. Whether you want to summarize videos or tailor your viewing experience, the choice is yours. Dive into a world where convenience and customization meet, and reclaim your time.</p>
            <Link href="/login">
                <Image src="/assets/images/chat_interface.jpg" alt="Chat interface for YouTube To GPT" width={800} height={300} className="mb-8 rounded-lg border border-primary" />
            </Link>

            <section className="mb-8">
                <h2 className="mb-1 text-xl font-medium">Key Features</h2>
                <ul className="mb-3 ml-4 list-disc">
                    <li>Smart, intuitive, and responsive AI chat interface</li>
                    <li>Seamless integration with YouTube videos</li>
                    <li>We do not store your chats.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="mb-1 text-xl font-medium">Get Started</h2>
                <p className="mb-5">Sounds cool? Then lets get you started. You will need to sign in using either Google or Facebook. Afterwards you can paste in the URL of a YouTube video to start chatting about it. You have 5 tokens per day and spends one per message.</p>
                <Link href="/login">
                    <button className="btn bg-primary">Start Chatting</button>
                </Link>
            </section>
        </main>
    );
}
