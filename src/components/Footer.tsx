import { AiFillGithub } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

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

const pageLinks = [
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export function Footer() {
  return (
    <footer className="container mx-auto max-w-7xl px-2 py-2 font-medium xl:px-0">
      <div className="flex flex-col space-y-4 sm:flex-row sm:justify-between sm:space-y-0">
        <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row space-x-6 text-sm text-stone-400 items-center">
          <div className="flex items-center space-x-1">
            <a
              href="https://www.webdevluis.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Luis Martinez
            </a>
            <span>@2024</span>
          </div>
          <div className="flex space-x-4">
            {pageLinks.map(({ label, href }) => (
              <Link key={label} href={href} className="hover:text-stone-500">
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-center space-x-6">
          {socialLinks.map(({ label, icon: Icon, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-stone-500"
            >
              <span className="sr-only">{label}</span>
              <Icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
