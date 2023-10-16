import Mascot from "@components/Mascot";
import Link from "next/link";

export const metadata = {
    title: "404 | Not Found",
};

export default function NotFound() {
    return (
        <main className="mt-[130px] flex flex-col items-center gap-7">
            <Mascot />
            <h1 className="font-P2P text-2xl">Not found</h1>
            <p>The page you are looking for does not exist.</p>
            <Link className="btn bg-primary" href="/">
                Go home
            </Link>
        </main>
    );
}
