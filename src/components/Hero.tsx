import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heading } from "./Heading";

const Hero = () => {
  return (
    <div className="relative my-16">
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
        <p className="text-xl text-gray-200">Don&apos;t simp for Ranni, be Ranni</p>
        <Heading.H2 className="mt-4">Ranni Build</Heading.H2>
        <Link
          href="/checklists/ranni"
          className="mt-2 inline-block rounded-lg bg-gradient-to-r from-sky-500 to-blue-500 px-4 py-4 font-medium text-black hover:from-sky-600 hover:to-blue-600 hover:text-white focus:outline-none focus:ring-1 focus:ring-2 focus:ring-sky-500 focus:ring-offset-1 focus:ring-offset-stone-900 sm:mb-2 sm:mr-2 sm:px-5 sm:py-2.5 sm:focus:ring-2 sm:focus:ring-4 sm:focus:ring-offset-2"
        >
          I wanna be Ranni
        </Link>
      </div>
    </div>
  );
};

export default Hero;
