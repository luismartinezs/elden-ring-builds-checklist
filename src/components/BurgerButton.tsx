import { GiHamburgerMenu } from "react-icons/gi";

export function BurgerButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={() => onClick()}
      data-collapse-toggle="mobile-menu"
      type="button"
      className="rounded-full bg-white/30 px-4 py-2 hover:bg-white/50"
      aria-controls="mobile-menu"
      aria-expanded="false"
    >
      <span className="sr-only">Open main menu</span>
      <GiHamburgerMenu size={20} />
    </button>
  );
}
