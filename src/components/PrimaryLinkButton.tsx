import Link, { type LinkProps } from "next/link";
import React from "react";
import { cn } from "~/utils/cn";

export function PrimaryLinkButton(
  props: LinkProps & { children: React.ReactNode; className?: string }
) {
  const { className, ...otherProps } = props;

  return (
    <Link
      {...otherProps}
      className={cn(
        "rounded bg-primary-500 px-4 py-2 text-white outline-offset-2 outline-2 sm:outline-4 outline-primary-400 hover:translate-y-px hover:bg-primary-600 focus:outline",
        className
      )}
    >
      {props.children}
    </Link>
  );
}
