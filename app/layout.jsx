import "@/styles/globals.css";

export const metadata = {
  title: "YT-to-GPT",
  description: "Chat about YouTube videos to fact-check them, summarise them and much more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="md:text-red bg-slate-200 text-yellow-200">{children}</body>
    </html>
  );
}
