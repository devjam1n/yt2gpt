import Mascot from "@components/Mascot";
import HomepageForm from "@components/HomepageForm";

export default function Page() {
  return (
    <main className="mt-[130px] flex flex-col-reverse items-center gap-7 sm:flex-row ">
      <div className="flex flex-col">
        <h1 className="mb-3 font-P2P text-2xl">Youtube To GPT</h1>
        <p className="mb-6">Unleash the power of a YouTube video. Get summaries, insights, fact-check and much more!</p>
        <HomepageForm />
      </div>
      <Mascot />
    </main>
  );
}
