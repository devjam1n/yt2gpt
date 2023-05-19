"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";

// mascot floating and displays error, if any in search params
export default function Mascot() {
  const searchParams = useSearchParams();
  const errorMsg = searchParams.get("error");

  return (
    <div className="relative">
      {errorMsg && <span className="absolute bottom-0 z-10 min-w-[230px] rounded-md bg-error px-4 py-2 shadow-sm sm:bottom-auto sm:right-[65%]">{errorMsg}</span>}
      <Image className="w-[300px] animate-floating object-contain" src="/assets/images/logo.png" width={300} height={300} alt="Robot mascot logo." />
    </div>
  );
}
