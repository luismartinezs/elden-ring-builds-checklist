import { cn } from "~/utils/cn";

export function Paragraph({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mb-6 text-lg font-normal text-stone-400 lg:text-xl",
        className
      )}
    >
      {children}
    </p>
  );
}
