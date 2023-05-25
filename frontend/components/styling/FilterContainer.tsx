interface FilterContainerProps {
  children: React.ReactNode;
}

export default function FilterContainer({ children }: FilterContainerProps) {
  return (
    <section className="flex flex-wrap justify-between items-center gap-2 px-2 py-2 rounded-lg bg-blue-300">
      {children}
    </section>
  );
}
