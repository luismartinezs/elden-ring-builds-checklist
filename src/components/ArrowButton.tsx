import { AnimatedArrow } from "~/components/AnimatedArrow";
import { PrimaryLink } from "~/components/PrimaryLink";
import { cn } from "~/utils/cn";

export function ArrowButton(props: React.ComponentPropsWithoutRef<"a">) {
  const { children, className, ...otherProps } = props;
  return (
    <PrimaryLink
      href="#"
      className={cn(
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
