export function Tag({ tag }: { tag: string }) {
  return (
    <span className="rounded bg-amber-500 px-1 py-0.5 text-sm font-bold text-black">
      {tag}
    </span>
  );
}
