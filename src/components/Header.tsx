import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { BsChevronRight } from "react-icons/bs";

import { PrimaryLink } from "~/components/PrimaryLink";
import { BurgerButton } from "~/components/BurgerButton";
import classnames from "classnames";
import { EldenRingLogo } from "~/components/EldenRingLogo";
import { AiOutlineClose } from "react-icons/ai";

const links = [
  {
    label: "Checklists",
    href: "/checklists",
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

function LogoLink(props: React.ComponentPropsWithoutRef<"a">) {
  const { className, ...otherProps } = props;
  return (
    <PrimaryLink
      href="/"
      className={classnames(
        "flex items-center gap-3 hover:opacity-70",
        className
      )}
      {...otherProps}
    >
      <EldenRingLogo />
    </PrimaryLink>
  );
}

export function Header(props: React.ComponentPropsWithoutRef<"header">) {
  const { className, ...otherProps } = props;
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setOpen(false);
  }, [router.pathname]);

  return (
    <header
      className={classnames(className, "bg-stone-800 px-2 py-2")}
      {...otherProps}
    >
      <nav className="px-4 text-white lg:px-6">
        <div className="relative mx-auto flex max-w-screen-xl flex-wrap items-center justify-between py-2">
          <LogoLink className="lg:hidden" />
          <div className="lg:hidden">Elden Ring Checklists</div>
          <div className="flex items-center lg:order-2 lg:hidden">
            <BurgerButton onClick={toggleMenu} />
          </div>
          <div className="hidden w-full items-center justify-between gap-12 lg:order-1 lg:flex">
            <div className="flex items-center gap-4">
              <LogoLink />
              <div className="hidden lg:block">Elden Ring Checklists</div>
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
              className={classnames(
                "fixed inset-4 z-10 grid grid-cols-1 text-white transition-opacity duration-500 ease-out md:grid-cols-2 lg:hidden",
                open ? "opacity-100" : "pointer-events-none opacity-0"
              )}
              id="mobile-menu"
            >
              <div className="col-span-1 hidden md:block"></div>
              <div
                className={classnames(
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
                      onClick={toggleMenu}
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
                          href={link.href}
                          className="flex w-full items-center justify-between px-6 py-5 hover:text-stone-300"
                        >
                          <span className="font-semibold">{link.label}</span>
                          <BsChevronRight size={20} strokeWidth={1} />
                        </PrimaryLink>
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
