export const metadata = {
    title: "YT2GPT | Privacy Policy",
    description: "Review our Privacy Policy to understand how we manage and protect your personal data while using our chat service.",
};

export default async function Page() {
    return (
        <main className="mx-2 mb-11 mt-8 text-sm sm:text-base">
            <h1 className="mb-1 text-2xl font-medium">Privacy Policy</h1>
            <span className="mb-8 inline-block text-sm italic">Last Updated: 16 October 2023</span>
            <p className="mb-2">Welcome to YT2GPT! We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
            <p className="mb-8">This privacy policy aims to give you information on how YT2GPT collects and processes your personal data through your use of this website, including any data you may provide when you sign up.</p>
            {/* The Data We Collect About You */}
            <section className="mb-8">
                <h2 className="mb-1 text-xl font-medium">The Data We Collect About You</h2>
                <p className="mb-3">We collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                <ul className="ml-4 flex list-disc flex-col">
                    <li>Identity Data includes first name, last name, username or similar identifier. When you log in using third-party services such as Google and Facebook, we collect the information shared by these services.</li>
                    <li>Contact Data includes email address.</li>
                    <li>Technical Data includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                    <li>Usage Data includes information about how you use our website and services.</li>
                </ul>
            </section>
            {/* How Your Personal Data is Collected */}
            <section className="mb-8">
                <h2 className="mb-1 text-xl font-medium">How Your Personal Data is Collected</h2>
                <p className="mb-3">We use different methods to collect data from and about you including through:</p>
                <ul className="ml-4 flex list-disc flex-col">
                    <li>Automated technologies or interactions. As you interact with our website, we may automatically collect Technical Data about your equipment, browsing actions and patterns. We collect this personal data by using cookies, server logs and other similar technologies.</li>
                    <li>Third parties or publicly available sources. We may receive personal data about you from various third parties such as Google and Facebook when you use their services to sign in to our platform.</li>
                </ul>
            </section>
            {/* How We Use Your Personal Data */}
            <section className="mb-8">
                <h2 className="mb-1 text-xl font-medium">How We Use Your Personal Data</h2>
                <p className="mb-3">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                <ul className="ml-4 flex list-disc flex-col">
                    <li>To register you as a new customer.</li>
                    <li>To provide and improve our services; manage your account; personalize your use of the site.</li>
                    <li>To communicate with you about updates, maintenance, outages or other informational purposes related to the service’s functionality.</li>
                </ul>
            </section>
            {/* Disclosure of Your Personal Data */}
            <section className="mb-8">
                <h2 className="mb-1 text-xl font-medium">Disclosure of Your Personal Data</h2>
                <p>We may share your personal data with external third parties such as service providers acting as processors who provide IT and system administration services.</p>
            </section>
            {/* Data Security */}
            <section className="mb-8">
                <h2 className="mb-1 text-xl font-medium">Data Security</h2>
                <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.</p>
            </section>
            {/* Data Retention */}
            <section className="mb-8">
                <h2 className="mb-1 text-xl font-medium">Data Retention</h2>
                <p>We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for.</p>
            </section>
            {/* Your Legal Rights */}
            <section className="mb-8">
                <h2 className="mb-1 text-xl font-medium">Your Legal Rights</h2>
                <p className="mb-3">Under certain circumstances, you have rights under data protection laws in relation to your personal data. These include the right to:</p>
                <ul className="ml-4 flex list-disc flex-col">
                    <li>Request access to your personal data.</li>
                    <li>Request correction of your personal data.</li>
                    <li>Request erasure of your personal data.</li>
                    <li>Object to processing of your personal data.</li>
                    <li>Request restriction of processing your personal data.</li>
                    <li>Request transfer of your personal data.</li>
                    <li>Right to withdraw consent.</li>
                </ul>
            </section>
            {/* Third-Party Links */}
            <section className="mb-8">
                <h2 className="mb-1 text-xl font-medium">Third-Party Links</h2>
                <p>This website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.</p>
            </section>
            {/* Changes to the Privacy Policy and Your Duty to Inform Us of Changes */}
            <section className="mb-8">
                <h2 className="mb-1 text-xl font-medium">Changes to the Privacy Policy and Your Duty to Inform Us of Changes</h2>
                <p>We keep our privacy policy under regular review. Any changes we make to our privacy policy in the future will be posted on this page and, where appropriate, notified to you by e-mail.</p>
            </section>
            {/* Contact */}
            <section className="mb-8">
                <h2 className="mb-1 text-xl font-medium">Contact Us</h2>
                <p className="mb-1">For any questions about this privacy policy, please contact me using the details set out below.</p>
                <a href="mailto:yt2gpt@devjamin.com" className="hover:text-primary hover:underline">
                    yt2gpt@devjamin.com
                </a>
            </section>
        </main>
    );
}
