import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heading } from "./Heading";
import { SectionWrapper } from "./SectionWrapper";

const Hero = () => {
  return (
    <SectionWrapper className="relative py-0">
      <div className="rounded-lg overflow-hidden w-full h-[500px] relative">
        <Image
          src="/ranni.jpg"
          fill
          alt="Ranni the Witch"
          className="object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 object-cover bg-stone-900 opacity-10"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center text-center">
        <p className="text-xl text-stone-200">Don&apos;t simp for Ranni, be Ranni</p>
        <div className="flex items-center">
          <Image
            src="/images/icons/rannis_dark_moon_sorcery_elden_ring_wiki_guide_200px.png"
            width={100}
            height={100}
            alt="Ranni the Witch"
          />
          <Heading.H2 className="mt-4 !text-sky-300">Ranni Build</Heading.H2>
        </div>
        <Link
          href="/checklists/ranni"
          className="mt-2 inline-block rounded-lg px-4 py-4 font-medium bg-gradient-to-br text-black focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-1 focus:ring-offset-stone-900 sm:mb-2 sm:mr-2 sm:px-5 sm:py-2.5 sm:focus:ring-4 sm:focus:ring-offset-2 fancy-gradient-secondary"
        >
          Start Ranni playthrough
        </Link>
      </div>
    </SectionWrapper>
  );
};

export default Hero;
