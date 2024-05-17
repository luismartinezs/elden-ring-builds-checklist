import { cn } from "~/utils/cn";
import Link, { type LinkProps } from "next/link";
import React from "react";

export function PrimaryLink(
  props: LinkProps & { children: React.ReactNode; className?: string }
) {
  return (
    <Link
      {...props}
      className={cn("hover:opacity-70", props.className)}
    >
      {props.children}
    </Link>
  );
}
