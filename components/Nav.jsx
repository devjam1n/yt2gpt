"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

export default function Nav() {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <nav className="z-10 mb-4 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-4">
        <Image src="/assets/images/logo.png" width={50} height={50} alt="Logo in navigation menu of a robot mascot." />
        <p className="hidden font-P2P text-base sm:block">YT-to-GPT</p>
      </Link>
      {session?.user ? (
        <div className="relative flex items-center gap-4">
          <p>Tokens: {session?.user.tokens}</p>
          <Image onClick={() => setIsDropdownOpen((prev) => !prev)} className="cursor-pointer overflow-hidden rounded-full" src={session?.user.image} width={40} height={40} alt="Logo in navigation menu of a robot mascot." />
          {isDropdownOpen && (
            <div className="absolute right-0 top-14 min-w-[220px] rounded-lg bg-lightBg p-4 shadow-md">
              <p className="mb-3">Hello, {session?.user.name}</p>
              <p className="mb-8">
                Next token refill:
                <br />
                {new Date(session?.user.tokensRefill).toLocaleString()}
              </p>
              <button onClick={signOut} className="btn w-full bg-bg">
                Sign out
              </button>
            </div>
          )}
        </div>
      ) : (
        providers &&
        Object.values(providers).map((provider) => (
          <button key={provider.name} type="button" onClick={() => signIn(provider.id)} className="btn bg-xLightBg">
            Sign in
          </button>
        ))
      )}
    </nav>
  );
}
