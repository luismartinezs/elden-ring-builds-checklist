import React from "react";
import { Heading } from "./Heading";
import { SectionWrapper } from "./SectionWrapper";
import { cn } from "~/utils/cn";

const Hero = ({
  image,
  title,
  subtitle,
  link,
  icon,
  titleClassName = "!text-sky-200"
}: {
  image: React.JSX.Element;
  title: string;
  subtitle: string;
  link: React.JSX.Element;
  icon?: React.JSX.Element;
  titleClassName?: string;
}) => {
  return (
    <SectionWrapper className="relative !my-0 py-0" fullBleed>
      <div className="relative h-[500px] w-full overflow-hidden rounded-lg">
        {image}
        <div className="absolute inset-0 bg-stone-900 object-cover opacity-50"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center text-center">
        <p className="text-xl text-stone-100 font-bold text-shadow">{subtitle}</p>
        <div className="flex items-center">
          {icon}
          <Heading.H2 className={cn("mt-4 text-shadow", titleClassName)}>{title}</Heading.H2>
        </div>
        {link}
      </div>
    </SectionWrapper>
  );
};

export default Hero;
