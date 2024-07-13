// cookie not needed with Umami
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { cn } from "~/utils/cn";

const defaultMessage = (
  <p>
    We use cookies to provide our services and for analytics and marketing. To
    find out more about our use of cookies, please see our{" "}
    <Link
      href="/privacy-policy"
      className="text-primary-100 underline hover:text-primary-200"
    >
      Privacy Policy
    </Link>
    . By continuing to browse our website, you agree to our use of cookies.
  </p>
);

const Separator = ({ thickness = 1 }) => {
  return (
    <div
      className={cn(
        "elden-ring-fade-separator w-full",
        thickness === 1 ? "h-px" : `h-[${thickness}px]`
      )}
    ></div>
  );
};

const CookieModal = ({
  message = defaultMessage,
  acceptLabel = "Accept",
  // denyLabel = "Deny",
}) => {
  const [open, setOpen] = useState(true);

  const getGdpr = () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("GDPR:accepted");
    }
    return null;
  };

  useEffect(() => {
    if (!getGdpr()) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, []);

  const accept = useCallback(() => {
    if (typeof window !== "undefined") {
      setOpen(false);
      localStorage.setItem("GDPR:accepted", "true");
    }
  }, [setOpen]);

  // const deny = () => {
  //   if (typeof window !== "undefined") {
  //     setOpen(false);
  //     localStorage.setItem("GDPR:accepted", "false");
  //   }
  // };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "E" || event.key === "e") {
        accept();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [accept]);

  if (!open) {
    return null;
  }

  return (
    <div className="elden-ring-background fixed bottom-10 z-50 w-full text-white">
      <Separator thickness={2} />
      <div className="relative py-2">
        <div className="mx-auto mb-4 flex max-w-xl flex-col items-center justify-center space-y-2 px-4 md:px-0 lg:flex-row lg:space-x-2 lg:space-y-0">
          <div className="flex items-center justify-center space-x-2">
            <div className="flex-grow text-center font-serif">
              <div>{message}</div>
            </div>
          </div>
        </div>
        <Separator />
        <button
          className="group flex w-full flex-shrink items-baseline justify-center pt-1"
          onClick={accept}
        >
          <div
            className="mr-1 flex size-8 items-center justify-center rounded-sm border-2 border-stone-600 px-2 text-2xl text-white group-hover:bg-stone-700"
            onClick={accept}
          >
            <span>E</span>
          </div>
          <span className="font-serif">: {acceptLabel}</span>
          <div
            className="absolute inset-x-0 bottom-0 h-1"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(68, 64, 60, 0.1) 10%, rgba(68, 64, 60, 0.1) 90%, transparent)",
            }}
          />
        </button>
      </div>
      <Separator thickness={2} />
    </div>
  );
};

export default CookieModal;
