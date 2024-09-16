import { cn } from "~/utils/cn";

export function List({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <ul
      className={cn(
        "list-disc space-y-2 ml-4 text-stone-300 mb-8",
        className
      )}
    >
      {children}
    </ul>
  );
}
