import React from "react";
import { cn } from "~/utils/cn";

export function Divider(props: React.ComponentPropsWithoutRef<"div">) {
  const { className, ...otherProps } = props;
  return (
    <div
      className={cn("my-2 w-full border-t border-stone-500", className)}
      {...otherProps}
    />
  );
}
