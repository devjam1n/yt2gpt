"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";

// The floating mascot logo component.
export default function Mascot() {
    const searchParams = useSearchParams();

    return (
        <div className="relative">
            <Image className="w-[200px] animate-floating object-contain sm:w-[300px]" src="/assets/images/logo.png" width={300} height={300} alt="Robot mascot logo." />
        </div>
    );
}
