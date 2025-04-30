import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { ShareModal, useShareModal } from "~/features/share";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AnnouncementBar } from "~/components/AnnouncementBar";
import { useAnnouncements } from "~/hooks/useAnnouncements";
import { FeaturebaseFeedbackLink } from "~/features/feedback/components/FeaturebaseFeedbackLink";

export function PageLayout({ children }: { children: React.ReactNode }) {
  const { showModal, handleClose, handleShare } = useShareModal();
  const { currentAnnouncement, dismissAnnouncement } = useAnnouncements();

  return (
    <div className="relative isolate flex h-full min-h-screen flex-col justify-between">
      <div>
        {currentAnnouncement && (
          <AnnouncementBar
            announcement={currentAnnouncement}
            onDismiss={dismissAnnouncement}
          />
        )}
        <Header className="sticky top-0 z-30" />
        <main className="relative isolate">{children}</main>
      </div>
      <ShareModal
        isOpen={showModal}
        onClose={() => handleClose()}
        onShare={() => handleShare()}
      />
      <Footer />
      <FeaturebaseFeedbackLink />
      <SpeedInsights />
    </div>
  );
}
