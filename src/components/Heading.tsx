function HeadingH1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
      {children}
    </h1>
  );
}

export const Heading = {
  H1: HeadingH1,
};
