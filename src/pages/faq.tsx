import Link from "next/link";
import { Accordion } from "~/components/Accordion";
import { PageLayout } from "~/layouts/PageLayout";

const faq = [
  {
    question: "What is this site?",
    answer:
      "This site is a collection of builds and checklists for Elden Ring.",
  },
  {
    question: "Why are there so few checklists?",
    answer:
      "I created this recently. I work full time so I don't have that much time to add things. I hope to add more over time.",
  },
  {
    question: "I want to provide a suggestion / feedback / report a bug",
    answer: (
      <p>
        You can do so by opening an issue on{" "}
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
          a pull request.
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
];

function FaqPage() {
  return (
    <PageLayout>
      <Accordion items={faq} initialActiveId={0} />
    </PageLayout>
  );
}

export default FaqPage;
