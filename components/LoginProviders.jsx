"use client";

import { signIn, getProviders } from "next-auth/react";
import { useState, useEffect } from "react";
import Image from "next/image";

// Displays options for all login providers
export default function LoginProviders() {
    const [providers, setProviders] = useState(null);

    // Fetch providers on first render
    useEffect(() => {
        (async () => {
            const res = await getProviders();
            setProviders(res);
        })();
    }, []);

    return (
        providers && (
            <div className="flex flex-col gap-3 rounded-md bg-lightBg px-10 py-4">
                {Object.values(providers).map((provider) => (
                    <button key={provider.id} type="button" onClick={() => signIn(provider.id, { callbackUrl: process.env.NEXT_PUBLIC_LOGIN_CALLBACK })} className="btn flex min-w-[250px] items-center justify-center gap-4 rounded-md border border-text py-4 font-medium text-text sm:min-w-[400px]">
                        <Image src={`/assets/providers/${provider.id}.svg`} alt={provider.name} width="24" height="24" />
                        Sign in with {provider.name}
                    </button>
                ))}
            </div>
        )
    );
}
