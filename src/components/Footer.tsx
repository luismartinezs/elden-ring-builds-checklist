import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";

const links = [
  {
    label: "Github",
    icon: AiFillGithub,
    href: "https://github.com/luismartinezs/elden-ring-builds-checklist",
  },
];

export function Footer() {
  return (
    <footer className="container mx-auto max-w-7xl px-2 py-2 font-medium xl:px-0">
      <div className="flex justify-between">
        <div className="text-sm text-stone-400">Luis Martinez @2023</div>
        <div className="flex justify-center space-x-6">
          {links.map(({ label, icon: Icon, href }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-stone-500"
            >
              <span className="sr-only">{label}</span>
              <Icon className="h-6 w-6" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
