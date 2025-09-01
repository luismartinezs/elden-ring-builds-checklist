import Head from "next/head";
import Link from "next/link";
import { PageLayout } from "~/layouts/PageLayout";

export default function Challenges() {
  return (
    <>
      <Head>
        <title>Challenges - Elden Hub</title>
        <meta
          name="description"
          content="Various challenge runs for Elden Ring"
        />
      </Head>
      <PageLayout>
        <div className="container mx-auto max-w-4xl px-4 py-8">
          <h1 className="mb-8 text-3xl font-bold text-amber-400">Challenges</h1>
          <div className="space-y-4">
            <Link
              href="/challenges/john-elden"
              className="block rounded-lg border border-amber-400/30 bg-stone-800/50 p-4 transition-colors hover:bg-stone-700/50"
            >
              <h2 className="text-xl font-semibold text-amber-400">John Elden Challenge</h2>
              <p className="text-stone-300">Incremental challenge list with progressive difficulty</p>
            </Link>
          </div>
        </div>
      </PageLayout>
    </>
  );
}