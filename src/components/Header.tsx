import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { BsChevronRight } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import { PrimaryLink } from "~/components/PrimaryLink";
import { BurgerButton } from "~/components/BurgerButton";
import { EldenRingLogo } from "~/components/EldenRingLogo";
import { AiOutlineClose } from "react-icons/ai";
import { cn } from "~/utils/cn";
import Link from "next/link";

const links = [
  {
    label: "Checklists",
    href: "/checklists#checklists",
  },
  {
    label: "NPC rewards",
    href: "/npc-questline-rewards",
  },
  {
    label: "Profile",
    href: "/profile",
  },
  {
    label: "FAQ",
    href: "/faq",
  },
];

const socialLinks = [
  {
    label: "X",
    icon: FaXTwitter,
    href: "https://twitter.com/LuisMartinezSu2",
  },
  {
    label: "Github",
    icon: FaGithub,
    href: "https://github.com/luismartinezs/elden-ring-builds-checklist",
  },
];

function LogoLink(props: React.ComponentPropsWithoutRef<"a">) {
  const { className, ...otherProps } = props;
  return (
    <PrimaryLink
      href="/"
      className={cn("flex items-center gap-3 hover:opacity-70", className)}
      {...otherProps}
    >
      <EldenRingLogo />
    </PrimaryLink>
  );
}

export function Header(props: React.ComponentPropsWithoutRef<"header">) {
  const { className, ...otherProps } = props;
  const router = useRouter();
  const [open, setOpen] = useState(true);

  const closeMenu = () => {
    setOpen(false);
  };

  const openMenu = () => {
    setOpen(true);
  };

  useEffect(() => {
    closeMenu();
  }, [router.pathname]);

  return (
    <header className={cn(className, "bg-stone-800 px-2 py-2")} {...otherProps}>
      <nav className="px-4 text-white lg:px-6">
        <div className="relative mx-auto flex max-w-screen-xl flex-wrap items-center justify-between py-2">
          <LogoLink className="lg:hidden" />
          <Link className="text-xl font-bold lg:hidden" href="/">
            Elden Ring Checklists
          </Link>
          <div className="flex items-center lg:order-2 lg:hidden">
            <BurgerButton onClick={openMenu} />
          </div>
          <div className="hidden w-full items-center justify-between gap-12 lg:order-1 lg:flex">
            <div className="flex items-center gap-4">
              <LogoLink />
              <Link href="/" className="hidden text-xl font-bold lg:block">
                Elden Ring Checklists
              </Link>
            </div>
            <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
              {links.map((link) => (
                <li key={link.label}>
                  <PrimaryLink href={link.href}>{link.label}</PrimaryLink>
                </li>
              ))}
            </ul>
          </div>

          {/* MOBILE NAV BAR */}
          {open && (
            <div
              className={cn(
                "fixed inset-4 z-10 grid grid-cols-1 text-white transition-opacity duration-500 ease-out md:grid-cols-2 lg:hidden",
                open ? "opacity-100" : "pointer-events-none opacity-0"
              )}
              id="mobile-menu"
            >
              <div className="col-span-1 hidden md:block"></div>
              <div
                className={cn(
                  "col-span-1 rounded-xl bg-black text-white shadow-xl transition-opacity duration-300 ease-out lg:hidden"
                )}
              >
                <div className="flex h-full flex-col items-center">
                  <div className="flex w-full items-start justify-between px-6 pt-4">
                    <div className="flex items-center gap-2">
                      <LogoLink className="scale-50" />
                      <span>Elden Ring Checklists</span>
                    </div>
                    <button
                      onClick={closeMenu}
                      className="max-h-[50px] self-end rounded-xl p-2 text-white hover:bg-stone-800"
                    >
                      <AiOutlineClose color="#ffffff" size={30} />
                    </button>
                  </div>
                  <ul className="mt-4 flex w-full flex-col items-center text-xl text-white">
                    {links.map((link) => (
                      <li
                        key={link.label}
                        className="w-full border-b border-stone-500 last:border-0"
                      >
                        <PrimaryLink
                          onClick={closeMenu}
                          href={link.href}
                          className="flex w-full items-center justify-between px-6 py-5 hover:text-stone-300"
                        >
                          <span className="font-semibold">{link.label}</span>
                          <BsChevronRight size={20} strokeWidth={1} />
                        </PrimaryLink>
                      </li>
                    ))}
                  </ul>
                  {/* social links */}
                  <ul className="flex w-full items-center justify-center border-t border-stone-700 pt-4">
                    {socialLinks.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="flex items-center justify-center gap-2 p-4 text-xl text-stone-300 hover:text-white"
                          target="_blank"
                        >
                          <link.icon size={20} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
