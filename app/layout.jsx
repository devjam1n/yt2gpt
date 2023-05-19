import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";

export const metadata = {
  title: "YT-to-GPT",
  description: "Chat about YouTube videos to fact-check them, summarise them and much more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-bg">
        <div className="relative mx-auto flex w-full max-w-6xl flex-col overflow-hidden text-text">
          <Provider>
            <Nav />
            <div className="mx-auto mt-[70px] w-full max-w-4xl px-4">{children}</div>
          </Provider>
        </div>
      </body>
    </html>
  );
}
