import Link from "next/link";
import { Accordion } from "~/components/Accordion";
import { PageLayout } from "~/layouts/PageLayout";

const faq = [
  {
    question: "What is this site?",
    answer:
      "This site is a collection of builds and checklists for Elden Ring.",
  },
  // {
  //   question: 'The Toggle All button does not work on mobile',
  //   answer: "I see this happen on Android Chrome. I'm debugging it. In the meantime, on Android Firefox it works (just keep in mind your progress is not shared)."
  // },
  // {
  //   question: "The app is slow / broken. By Marika's tits, what's going on??",
  //   answer: "Currently because of the amount of filters and the messy code I wrote, the lists perform slow on mobile (or at least I believe that is the reason). On desktop it works much better. I'll work on fixing it. If you can detect more bugs, use the button at the bottom right to let me know."
  // },
  {
    question: "Why are there so few checklists?",
    answer:
      "It takes some time to actually put one checklist together and this is just a side project and I'm the only one updating it. I might create a UI so that you can add checklists some day, but that would mean a significant revamp of the project.",
  },
  {
    question: "I want to provide a suggestion / feedback / report a bug",
    answer: (
      <p>
        You can do so with the bottom right button (it will send me an email) or by opening an issue on{" "}
        <Link
          href="https://github.com/luismartinezs/elden-ring-builds-checklist/issues"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
        .
      </p>
    ),
  },
  {
    question: "How can I help?",
    answer: (
      <>
        <p>
          You could create a list of steps for anything specific that is missing
          or for a different build and add it as a comment (or as a new issue)
          in{" "}
          <Link
            href="https://github.com/luismartinezs/elden-ring-builds-checklist/issues"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>{" "}
          so that I will see it and add it to the site.
        </p>
        <p>
          Or you can of course always fork the repo, add your changes and create
          a pull request. In the README.md file there are some instructions about how to do that.
        </p>
      </>
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
      "The checklist I was following looks different today, what happened?",
    answer: (
      <p>
        You&apos;re probably talking about the game progress checklist. This is
        a work in progress and I&apos;m adding things. I try to change what is
        already there as little as possible, but sometimes I have no alternative
        but to change existing steps. This should stop happening very soon as
        there isn&apos;t much more I plan to add.
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
];

function FaqPage() {
  return (
    <PageLayout>
      <Accordion items={faq} initialActiveId={0} />
    </PageLayout>
  );
}

export default FaqPage;
