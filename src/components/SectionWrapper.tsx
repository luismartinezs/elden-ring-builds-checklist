import { cn } from "~/utils/cn";

export function SectionWrapper(
  props: React.ComponentPropsWithoutRef<"section"> & {
    fullBleed?: boolean;
  }
) {
  const { className, children, fullBleed, ...otherProps } = props;

  return (
    <section
      className={cn(
        "py-12 xl:my-12",
        fullBleed ? "" : "container mx-auto max-w-6xl px-4 xl:px-0",
        className
      )}
      {...otherProps}
    >
      {children}
    </section>
  );
}
