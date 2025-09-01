import Head from "next/head";
import Link from "next/link";
import { PageLayout } from "~/layouts/PageLayout";

export default function JohnEldenChallenge() {
  return (
    <>
      <Head>
        <title>John Elden Challenge - Elden Hub</title>
        <meta
          name="description"
          content="Incremental challenge list with progressive difficulty for Elden Ring"
        />
      </Head>
      <PageLayout>
        <div className="container mx-auto max-w-4xl px-4 py-8">
          <div className="mb-6">
            <Link
              href="/challenges"
              className="text-amber-400 hover:text-amber-300 transition-colors"
            >
              ← Back to Challenges
            </Link>
          </div>
          
          <h1 className="mb-8 text-3xl font-bold text-amber-400">John Elden Challenge</h1>
          
          <div className="rounded-lg border border-amber-400/30 bg-stone-800/50 p-6">
            <p className="text-stone-300 text-lg">
              Challenge content placeholder - coming soon!
            </p>
            
            <div className="mt-6 text-sm text-stone-400">
              <p>This will contain the incremental challenge list with progressive difficulty levels.</p>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
}