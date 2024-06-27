import { AiFillGithub } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

const links = [
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
    <footer className="container mx-auto max-w-7xl px-2 py-2 font-medium xl:px-0">
      <div className="flex justify-between">
        <div className="text-sm text-stone-400"><a href="https://www.webdevluis.com/" target="_blank">Luis Martinez</a> @2024</div>
        <div className="flex justify-center space-x-6">
          {links.map(({ label, icon: Icon, href }) => (
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
