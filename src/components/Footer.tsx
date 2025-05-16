import { AiFillGithub } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { Button } from "./Button";

// Placeholder links - update these as needed
const mainLinks = [
  { label: "Checklists", href: "/checklists" },
  { label: "NPC rewards", href: "/npc-questline-rewards" },
  { label: "Profile", href: "/profile" },
  { label: "Weapons", href: "/weapons" },
  { label: "Soft Caps", href: "/soft-caps" },
  { label: "Leveling Guide", href: "/leveling-guide" },
  { label: "Stats", href: "/stats" },
];

const secondaryLinks = [
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
  { label: "Changelog", href: "/changelog" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

const socialLinks = [
  {
    label: "X",
    icon: FaXTwitter,
    href: "https://twitter.com/LuisMartinezSu2",
  },
  {
    label: "Github",
    icon: AiFillGithub,
    href: "https://github.com/luismartinezs/elden-ring-builds-checklist",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50 dark:border-stone-700 dark:bg-stone-900">
      <div className="container mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Placeholder Column 1 */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold leading-6 text-stone-900 dark:text-white">
              Elden Links
            </h3>
            <ul role="list" className="space-y-3">
              {mainLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm leading-6 text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Placeholder Column 2 */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold leading-6 text-stone-900 dark:text-white">
              Other Links
            </h3>
            <ul role="list" className="space-y-3">
              {secondaryLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm leading-6 text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={process.env.NEXT_PUBLIC_DONATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm leading-6 text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white"
                >
                  <Button variant="primary">donate</Button>
                </a>
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div className="space-y-4 md:col-start-4">
            <h3 className="text-sm font-semibold leading-6 text-stone-900 dark:text-white">
              Social
            </h3>
            <div className="flex items-center space-x-6">
              {socialLinks.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-400 hover:text-stone-500 dark:hover:text-white"
                >
                  <span className="sr-only">{label}</span>
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 border-t border-stone-900/10 pt-8 sm:mt-20 lg:mt-24 dark:border-white/10">
          <p className="text-xs leading-5 text-stone-500 dark:text-stone-400">
            &copy; 2024 Luis Martinez. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
