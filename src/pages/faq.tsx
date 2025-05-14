import Head from "next/head";
import { FiExternalLink } from "react-icons/fi";
import { Accordion } from "~/components/Accordion";
import { Heading } from "~/components/Heading";
import { SectionWrapper } from "~/components/SectionWrapper";
import { PageLayout } from "~/layouts/PageLayout";

const faq = [
  {
    question: "What is this site?",
    answer:
      "This site is a collection of builds and checklists for Elden Ring to make it simple to progress through the game.",
  },
  {
    question: "Is the main checklist for game playthrough complete?",
    answer:
      'It is "almost" complete. But it depends on what you understand by complete. You can check the filters in the checklist page to see what is included. Few additions to the checklists themselves will happen, as mostly everything important is already there. If there\'s something you want to see added, let me know using the feedback button at the bottom right.',
  },
  {
    question: "Why are there so few checklists?",
    answer:
      "Long answer: It takes some time to actually put one checklist together and this is just a side project and I'm the only one updating it. I might create a UI so that you can add checklists some day, but that would mean a significant revamp of the project. Short answer: I'm lazy.",
  },
  {
    question: "The filters are broken! Helppp!",
    answer:
      "Sometimes newly added filters are not 'registered' properly. Try to toggle the broken ones once, that should fix any problems.",
  },
  {
    question: "I want to provide a suggestion / feedback / report a bug",
    answer: (
      <p>
        You can do so here:{" "}
        <a
          href="https://eldenhub.featurebase.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          provide feedback
          <span className="sr-only">(opens in new tab)</span>
          <FiExternalLink className="ml-1 inline-block" aria-hidden="true" />
        </a>
      </p>
    ),
  },
  {
    question: "How can I help?",
    answer: (
      <p>Share it with everyone! More visitors is more &quot;juice&quot;</p>
    ),
  },
  {
    question: "How does the checklist status get saved?",
    answer: (
      <p>
        It gets saved to the local storage in your browser. So if you are
        clearing your browser cache make sure not to delete the site data or
        your checklists will get reset. That also means that if you use a
        different browser or device nothing will be kept.
      </p>
    ),
  },
  {
    question: "Where do the different profiles get saved?",
    answer: (
      <p>
        They get saved to the local storage in your browser. So if you are
        clearing your browser cache make sure not to delete the site data or
        your profiles will get reset. That also means that if you use a
        different browser or device any profiles that you created in a different
        device or browser will not be there.
      </p>
    ),
  },
  {
    question:
      "Will you add user login to be able to save progress and access it from different browsers or devices?",
    answer:
      "I would love to add that :) But that's a non trivial amount of work, and this is just a hobby side project. If this project gets traction and more users, the chances I add that increase. The best you can do is share this site online and provide feedback so that I know what to improve.",
  },
  {
    question:
      "The checklist I was following looks different today, what happened?",
    answer: (
      <p>
        Occasionally (every few weeks or months) I update a checklist to tweak
        it or add more steps. Sometimes that leads to me having to change
        previous existing steps slightly for the checklist to make sense.
      </p>
    ),
  },
  {
    question:
      "Why is step X before step Y if they can also be done in the opposite order?",
    answer: (
      <p>
        I had to pick one order. I tried to pick an order such that even if you
        wanted to do all questlines, it still makes sense. If you want to ignore
        some questlines, you have lots more freedom in the order you do things,
        as Elden Ring is very open ended.
      </p>
    ),
  },
  {
    question: "Plz add the steps for the Scoobydoo fragments!",
    answer: <p>Pfffff... 😭 I don&apos;t want to...</p>,
  },
];

function FaqPage() {
  return (
    <PageLayout>
      <Head>
        <title>
          Frequently Asked Questions | Elden Ring Checklists - Elden Hub
        </title>
        <meta
          name="description"
          content="Frequently asked questions about Elden Ring Checklists - Elden Hub"
        />
        <link
          rel="canonical"
          href="https://eldenhub.appforgelabs.com/faq"
          key="canonical"
        />
      </Head>
      <SectionWrapper>
        <Heading.H1 className="mb-3">Frequently Asked Questions</Heading.H1>
        <div>
          <Accordion items={faq} initialActiveId={0} />
        </div>
      </SectionWrapper>
    </PageLayout>
  );
}

export default FaqPage;
