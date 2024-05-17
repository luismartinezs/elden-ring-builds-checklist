import { PrimaryLinkButton } from "~/components/PrimaryLinkButton";
import { SectionWrapper } from "~/components/SectionWrapper";
import { FaListCheck } from "react-icons/fa6";

export function HeroSection() {
  return (
    <SectionWrapper className="flex flex-col items-center justify-center gap-4 py-[150px] md:gap-5 xl:gap-8">
      <div className="flex items-center justify-center gap-3">
        <div
          className="h-[30px] w-[30px] md:h-[40px] md:w-[40px]
          lg:h-[60px] lg:w-[60px]
        "
        >
          <FaListCheck
            size={70}
            className="max-h-[100%] max-w-[100%] text-primary-500"
          />
        </div>
        <h1 className="text-center text-3xl font-bold md:text-5xl xl:text-7xl">
          Checklists for <span className="text-primary-500">Elden Ring</span>
        </h1>
      </div>
      <p className="text-center text-xl text-gray-300 md:text-2xl xl:text-3xl">
        Replay the game without looking at guides every 5 minutes and without missing stuff
      </p>
      <PrimaryLinkButton
        href="/checklists/simple-game-progress"
        className="fancy-gradient min-w-[200px] bg-gradient-to-br px-5 py-3 text-center font-semibold tracking-wide text-black xl:text-2xl hover:text-white"
      >
        START HERE
      </PrimaryLinkButton>
    </SectionWrapper>
  );
}
