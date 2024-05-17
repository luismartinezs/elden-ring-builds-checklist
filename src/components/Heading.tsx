import { cn } from "~/utils/cn";

type HeadingProps = React.ComponentPropsWithoutRef<"h1">;

function HeadingH1({
  className,
  children,
  ...rest
}: HeadingProps & {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={cn(
        className,
        "mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl"
      )}
      {...rest}
    >
      {children}
    </h1>
  );
}

function HeadingH2({
  className,
  children,
  ...rest
}: HeadingProps & {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        className,
        "mb-4 text-2xl font-extrabold leading-none tracking-tight text-white md:text-3xl lg:text-4xl"
      )}
      {...rest}
    >
      {children}
    </h2>
  );
}

export const Heading = {
  H1: HeadingH1,
  H2: HeadingH2,
};
