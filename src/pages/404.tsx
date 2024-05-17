import Link from "next/link";
import Image from "next/image";
import { Heading } from "~/components/Heading";
import { Paragraph } from "~/components/Paragraph";
import { SectionWrapper } from "~/components/SectionWrapper";
import { PageLayout } from "~/layouts/PageLayout";

export default function Custom404() {
  return (
    <PageLayout>
      <SectionWrapper>
        <div className="flex flex-col items-center justify-center text-white">
          <Heading.H1 className="!text-xl !text-stone-400">404</Heading.H1>
          <Paragraph className="mb-8 !text-6xl uppercase text-red-800 font-bold">You Died</Paragraph>
          <Paragraph className="mb-8">
            It seems you've ventured into unknown territory, <span className="text-primary-500">Tarnished</span>. This
            page is lost to the <span className="text-primary-500">Lands Between</span>.
          </Paragraph>
          <Image
            src="/images/site-of-grace.png"
            alt="Bonfire"
            className="mb-8"
            width={300}
            height={300}
          />
          <Paragraph className="mb-8">Would you like to return to a <span className="text-primary-500">Site of Grace</span>?</Paragraph>
          <Link
            href="/"
            className="rounded bg-primary-500 px-4 py-2 text-black transition duration-300 hover:bg-primary-600 hover:text-white uppercase font-bold"
          >
            Return to the Homepage
          </Link>
        </div>{" "}
      </SectionWrapper>
    </PageLayout>
  );
}
