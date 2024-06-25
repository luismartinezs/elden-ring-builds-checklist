import ClientOnly from "~/components/ClientOnly";
import { Feedback } from "~/features/feedback";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { ShareModal, useShareModal } from "~/features/share";
import { SpeedInsights } from "@vercel/speed-insights/next";
import CookieModal from "~/components/CookieModal";

export function PageLayout({ children }: { children: React.ReactNode }) {
  const { showModal, handleClose, handleShare } = useShareModal();

  return (
    <div className="relative isolate flex h-full min-h-screen flex-col justify-between">
      <div>
        <Header className="sticky top-0 z-30" />
        <main className="relative isolate">{children}</main>
      </div>
      <ShareModal
        isOpen={showModal}
        onClose={() => handleClose()}
        onShare={() => handleShare()}
      />
      <Footer />
      <ClientOnly>
      <CookieModal
          message={<p>
            Ah, tarnished one. Know this: thy visits are observed through analytics most compliant with the edicts of GDPR. By granting thy consent, thou dost acknowledge this truth.
          </p>}
          acceptLabel="Embrace Edict"
        />
      </ClientOnly>
      <ClientOnly>
        <Feedback />
      </ClientOnly>
      <SpeedInsights />
    </div>
  );
}
