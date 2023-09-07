import classnames from "classnames";
import React from "react";

export function Divider(props: React.ComponentPropsWithoutRef<"div">) {
  const { className, ...otherProps } = props;
  return (
    <div
      className={classnames("my-2 w-full border-t border-stone-500", className)}
      {...otherProps}
    />
  );
}
