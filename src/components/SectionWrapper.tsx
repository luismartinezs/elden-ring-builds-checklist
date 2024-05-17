import { cn } from "~/utils/cn";

export function SectionWrapper(
  props: React.ComponentPropsWithoutRef<"section">
) {
  const { className, children, ...otherProps } = props;
  return (
    <section
      className={cn(
        "container mx-auto max-w-7xl py-12 xl:mb-32 xl:mt-16",
        className
      )}
      {...otherProps}
    >
      {children}
    </section>
  );
}
