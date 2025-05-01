import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { ShareModal, useShareModal } from "~/features/share";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AnnouncementBar } from "~/components/AnnouncementBar";
import { useAnnouncements } from "~/hooks/useAnnouncements";
import { FeaturebaseFeedbackLink } from "~/features/feedback/components/FeaturebaseFeedbackLink";
import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled up 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="bg-primary hover:bg-primary/90 focus:ring-primary fixed bottom-4 right-20 z-50 rounded-full p-3 text-white shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2"
      aria-label="Scroll to top"
    >
      <FaChevronUp className="size-4" />
    </button>
  );
}

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
      <ScrollToTopButton />
    </div>
  );
}
