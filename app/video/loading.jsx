"use client";

import Mascot from "@components/Mascot";

export default function Loading() {
  return (
    <main className="mx-auto mt-[50px] flex max-w-4xl flex-col items-center gap-7 sm:mt-[100px]">
      <Mascot />
      <h1 className="font-P2P text-2xl">Loading...</h1>
    </main>
  );
}
