"use client";

import Mascot from "@components/Mascot";

export default function Loading() {
  return (
    <main className="mx-auto mt-[130px] flex flex-col items-center gap-7 ">
      <Mascot />
      <h1 className="font-P2P text-2xl">Loading...</h1>
    </main>
  );
}
