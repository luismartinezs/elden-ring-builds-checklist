import Link, { type LinkProps } from "next/link";
import React from "react";
import { cn } from "~/utils/cn";

export function SecondaryLinkButton(
  props: LinkProps & { children: React.ReactNode; className?: string }
) {
  const { className, ...otherProps } = props;

  return (
    <Link
      {...otherProps}
      className={cn(
        "rounded bg-secondary-500 px-4 py-2 text-white outline-2 outline-offset-2 outline-secondary-400 hover:translate-y-px hover:bg-secondary-600 focus:outline sm:outline-4",
        className
      )}
    >
      {props.children}
    </Link>
  );
}
