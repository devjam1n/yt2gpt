import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";
import Script from "next/script";

export const metadata = {
    title: "YT2GPT",
    description: "Chat about YouTube videos to fact-check them, summarise them and much more.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-R6T9M5TZ70" strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-R6T9M5TZ70');
          `}
            </Script>
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
