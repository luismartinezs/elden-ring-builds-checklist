export function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-6 text-lg font-normal text-stone-400 lg:text-xl">
      {children}
    </p>
  );
}
