import { PrimaryLinkButton } from "~/components/PrimaryLinkButton";
import { SectionWrapper } from "~/components/SectionWrapper";
import { FaListCheck } from "react-icons/fa6";
import Link from "next/link";
// import Image from 'next/image';

export function HeroSection() {
  return (
    <SectionWrapper className="flex flex-col items-center justify-center gap-4 py-[150px] md:gap-5 xl:gap-8">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <div
          className="h-[30px] w-[30px] md:h-[40px] md:w-[40px]
          lg:h-[50px] lg:w-[50px] xl:h-[60px] xl:w-[60px]
        "
        >
          {/* <Image src='/images/icons/greatsword_colossal_swords_elden_ring_wiki_guide_200px.png'
          width={200}
          height={200}
          alt="Greatsword"
          /> */}
          <FaListCheck
            size={70}
            className="max-h-[100%] max-w-[100%] text-primary-500"
          />
        </div>
        <h1 className="text-center text-3xl font-bold md:text-5xl xl:text-7xl">
          {/* <span className="text-primary-500">Elden</span><span className="text-secondary-500">Hub</span> */}
          <span className="text-secondary-500">Checklists</span> for <span className="text-primary-500 whitespace-nowrap">Elden Ring</span>
        </h1>
      </div>
      <p className="text-center text-xl text-stone-300 md:text-2xl xl:text-3xl">
        Replay the game without looking at guides every 5 minutes
      </p>
      <div className="flex flex-col items-center justify-center">
        <PrimaryLinkButton
          href="/checklists/shadow-of-the-erdtree"
          className="fancy-gradient min-w-[200px] bg-gradient-to-br px-8 py-4 text-center font-semibold tracking-wide text-black lg:text-2xl xl:text-3xl uppercase rounded-lg"
        >
          Shadow of the Erdtree
        </PrimaryLinkButton>
        <Link href="/#checklists" className="text-sm md:text-base xl:text-lg mt-4">
          See all checklists
        </Link>
      </div>
    </SectionWrapper>
  );
}
