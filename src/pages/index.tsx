import { type GetStaticProps } from "next";
import { lists } from "~/data";
import Head from "next/head";
import FeatureSection from "~/components/FeatureSection";
import Hero from "~/components/Hero";
import { HeroSection } from "~/components/HeroSection";
import { PageLayout } from "~/layouts/PageLayout";
import { Checklists } from "~/components/Checklists";
import Image from "next/image";
import Link from "next/link";

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      checklists: lists.map(({ slug, title, tags }) => ({
        slug,
        title,
        tags: tags ? tags : [],
      })),
    },
  };
};

export default function Landing({
  checklists,
}: {
  checklists: {
    slug: string;
    title: string;
    tags: string[];
  }[];
}) {
  return (
    <>
      <Head>
        <title>Elden Ring Checklists - Elden Hub</title>
        <meta
          name="description"
          content="Checklists for the video game Elden Ring"
        />
        <link
          rel="canonical"
          href="https://eldenhub.appforgelabs.com/"
          key="canonical"
        />
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="w-pLQz21PWiQX668ORYlEZfbAhUWK118uvyMA_9H5pI"
        />
      </Head>
      <PageLayout>
        <div className="mb-16 flex flex-col">
          <HeroSection />
          <FeatureSection />

          <Hero
            image={
              <Image
                src="/moonveil-samurai.webp"
                fill
                alt="Moonveil Samurai"
                className="object-cover"
                loading="lazy"
              />
            }
            title="Moonveil Samurai"
            subtitle="Hold L2. R2. Roll. Repeat."
            link={
              <Link
                href="/checklists/moonveil-samurai"
                className="fancy-gradient-secondary mt-2 inline-block rounded-lg bg-gradient-to-br px-4 py-4 font-bold uppercase text-black focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-1 focus:ring-offset-stone-900 sm:mb-2 sm:mr-2 sm:px-5 sm:py-2.5 sm:focus:ring-4 sm:focus:ring-offset-2"
              >
                Start Moonveil Playthrough
              </Link>
            }
          />
          <Checklists checklists={checklists} />
          <Hero
            image={
              <Image
                src="/ranni.jpg"
                fill
                alt="Ranni the Witch"
                className="object-cover"
                loading="lazy"
              />
            }
            title="Ranni Build"
            subtitle="Don't simp for Ranni, be Ranni"
            link={
              <Link
                href="/checklists/ranni"
                className="fancy-gradient-secondary mt-2 inline-block rounded-lg bg-gradient-to-br px-4 py-4 font-bold uppercase text-black focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-1 focus:ring-offset-stone-900 sm:mb-2 sm:mr-2 sm:px-5 sm:py-2.5 sm:focus:ring-4 sm:focus:ring-offset-2"
              >
                Start Ranni Playthrough
              </Link>
            }
            icon={
              <Image
                src="/images/icons/rannis_dark_moon_sorcery_elden_ring_wiki_guide_200px.png"
                width={100}
                height={100}
                alt="Ranni the Witch"
              />
            }
          />
        </div>
      </PageLayout>
    </>
  );
}
