import Head from "next/head";

export default function page() {
  return (
    <>
      <Head>
        <title>Coming Soon</title>
      </Head>
      <div className="flex items-center justify-center min-h-screen bg-white text-center px-6">
        <div className="max-w-xl">
          <h1 className="text-5xl font-extrabold mb-4 text-emerald-600 animate-pulse">
            Coming Soon
          </h1>
          <p className="text-lg mb-6 text-gray-700">
            We’re working hard to bring something amazing to you. Stay tuned!
          </p>
        </div>
      </div>
    </>
  );
}
