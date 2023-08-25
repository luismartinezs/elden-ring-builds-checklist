import classnames from "classnames";
import { AnimatedArrow } from "~/components/AnimatedArrow";
import { PrimaryLink } from "~/components/PrimaryLink";

export function ArrowButton(props: React.ComponentPropsWithoutRef<"a">) {
  const { children, className, ...otherProps } = props;
  return (
    <PrimaryLink
      href="#"
      className={classnames(
        "group flex items-center gap-1 rounded-full",
        className
      )}
      {...otherProps}
    >
      <span>{children}</span>
      <AnimatedArrow />
    </PrimaryLink>
  );
}
