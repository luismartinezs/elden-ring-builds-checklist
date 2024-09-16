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
        "list-disc space-y-2 py-6 text-stone-300",
        "marker:text-sm marker:text-stone-500",
        className
      )}
    >
      {children}
    </ul>
  );
}
