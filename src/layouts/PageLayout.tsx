import ClientOnly from "~/components/ClientOnly";
import { Feedback } from "~/features/feedback";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { ShareModal, useShareModal } from "~/features/share";
import { SpeedInsights } from "@vercel/speed-insights/next"

export function PageLayout({ children }: { children: React.ReactNode }) {
  const { showModal, handleClose, handleShare } = useShareModal();

  return (
    <div className="relative isolate flex h-full min-h-screen flex-col justify-between">
      <div>
        <Header className="sticky top-0 z-30" />
        <main className="relative isolate">
          {children}
        </main>
      </div>
      <ShareModal
        isOpen={showModal}
        onClose={() => handleClose()}
        onShare={() => handleShare()}
      />
      <Footer />
      <ClientOnly>
        <Feedback />
      </ClientOnly>
      <SpeedInsights />
    </div>
  );
}
