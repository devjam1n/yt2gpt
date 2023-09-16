"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import Countdown from "./Countdown";
import { usePathname } from "next/navigation";

/*  Navigation menu at the top of the page
    also login and menu with users tokens info etc. */
export default function Nav() {
    const router = useRouter(); // For pushing to login page
    const { data: session } = useSession();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const pathname = usePathname(); // Used to hide the nav on the login page

    return (
        pathname !== "/login" && (
            <nav className="fixed left-4 right-4 z-10 mx-auto flex max-w-5xl items-center justify-between bg-bg pb-4 pt-4">
                {/* Main logo */}
                <Link href="/" className="flex items-center gap-4">
                    <Image src="/assets/images/logo.png" width={50} height={50} alt="Logo in navigation menu of a robot mascot." />
                    <p className="hidden font-P2P text-base sm:block">YT2GPT</p>
                </Link>
                {/* If signed in display user icon and menu */}
                {session?.user ? (
                    <div className="relative flex items-center gap-4">
                        <p>Tokens: {session?.user.tokens}</p>
                        <Image onClick={() => setIsMenuOpen((prev) => !prev)} className="cursor-pointer overflow-hidden rounded-full" src={session?.user.image} width={40} height={40} alt="Logo in navigation menu of a robot mascot." />
                        {isMenuOpen && (
                            <div className="absolute right-0 top-14 z-10 min-w-[250px] rounded-lg bg-lightBg p-4 shadow-md">
                                <p className="mb-3">Hello, {session?.user.name}</p>
                                <p className="mb-8">
                                    Tokens refill <Countdown targetDate={new Date(session?.user.tokensRefill)} />
                                </p>
                                <button onClick={signOut} className="btn w-full bg-bg">
                                    Sign out
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    // If not signed in display login button
                    <button type="button" onClick={() => router.push("/login")} className="btn bg-xLightBg">
                        Sign in
                    </button>
                )}
            </nav>
        )
    );
}
