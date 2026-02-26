import React from "react";
import { SectionWrapper } from "./SectionWrapper";
import Image from "next/image";

const steps = [
  {
    icon: "/images/icons/golden_seed_elden_ring_wiki_guide_200px.png",
    label: "Open checklist",
  },
  {
    icon: "/images/icons/flask_of_crimson_tears_elden_ring_wiki_guide_200px.png",
    label: "Toggle filters",
  },
  {
    icon: "/images/icons/sacred_tear_elden_ring_wiki_guide_200px.webp",
    label: "Follow steps",
  },
];

const FeatureSection = () => {
  return (
    <SectionWrapper
      className="bg-stone-800 px-0 text-center text-white !mb-0 !mt-0"
      fullBleed
    >
     <div className="max-w-3xl mx-auto px-4 md:px-0">
       <h2 className="mb-4 text-4xl font-bold">
         Do not miss <span className="text-primary-500">NPC questlines</span>, do not get lost in the <span className="text-secondary-500">Lands Between</span>
       </h2>
       <p className="mb-6">
         Open the checklist, select what you want to track, do not worry about dying NPCs or in what order do what
       </p>
       <div className="mx-auto flex max-w-3xl items-center justify-center space-x-6">
         {steps.map((step, index) => (
           <div key={step.label} className="flex flex-1 flex-col items-center justify-end">
              <Image
                src={step.icon}
                alt={step.label}
                width={70}
                height={70}

              />
             <span className="mt-2 text-xl">
               <span className=" font-bold">{index + 1}</span>. {step.label}
             </span>
           </div>
         ))}
       </div>
     </div>
    </SectionWrapper>
  );
};

export default FeatureSection;
