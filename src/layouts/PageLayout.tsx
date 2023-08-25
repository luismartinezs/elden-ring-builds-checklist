import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative isolate flex h-full min-h-screen flex-col justify-between">
      <div>
        <Header className="z-30" />
        <main className="relative isolate">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
