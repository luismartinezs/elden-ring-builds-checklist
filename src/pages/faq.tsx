import { Accordion } from "~/components/Accordion";
import { PageLayout } from "~/layouts/PageLayout";

const faq = [
  {
    question: "What is this site?",
    answer: "This site is a collection of builds and checklist for Elden Ring.",
  },
  {
    question: "How does the checklist status get saved?",
    answer:
      "It gets saved to the local storage in your browser. So if you are clearing your browser cache make sure not to delete the site data or your checklists will get reset.",
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
