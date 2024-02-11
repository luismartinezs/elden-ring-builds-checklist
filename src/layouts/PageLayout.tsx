import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { ShareModal, useShareModal } from "~/features/share";

export function PageLayout({ children }: { children: React.ReactNode }) {
  const { showModal, handleClose, handleShare } = useShareModal();

  return (
    <div className="relative isolate flex h-full min-h-screen flex-col justify-between">
      <div>
        <Header className="sticky top-0 z-30" />
        <main className="container relative isolate mx-auto max-w-6xl px-4 py-8">
          {children}
        </main>
      </div>
      <ShareModal
        isOpen={showModal}
        onClose={() => handleClose()}
        onShare={() => handleShare()}
      />
      <Footer />
    </div>
  );
}
