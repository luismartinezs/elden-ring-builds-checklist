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
    <footer className="container mx-auto max-w-7xl px-2 py-2 font-medium lg:px-0">
      <div className="flex justify-between">
        <div className="text-sm text-gray-400">Luis Martinez @2023</div>
        <div className="flex justify-center space-x-6">
          {links.map(({ label, icon: Icon, href }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-500"
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
