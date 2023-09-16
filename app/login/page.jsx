import LoginProviders from "@components/LoginProviders";

export default function Page() {
    return (
        <main className="mx-auto mt-[130px] flex max-w-fit flex-col">
            <h1 className="mb-3 text-center text-2xl text-text">Sign in</h1>
            <LoginProviders />
        </main>
    );
}
