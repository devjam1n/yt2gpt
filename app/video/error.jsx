"use client";

import Mascot from "@components/Mascot";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Error({ error, reset }) {
  const router = useRouter();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="mx-auto mt-[50px] flex max-w-4xl flex-col items-center gap-7 sm:mt-[100px]">
      <Mascot />
      <h1 className="font-P2P text-2xl">Error :(</h1>
      <p>{error.message}</p>
      <button className="btn bg-primary" onClick={() => router.push("/")}>
        Try again
      </button>
    </main>
  );
}
