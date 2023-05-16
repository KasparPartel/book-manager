export default function BooksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="flex flex-col">{children}</section>;
}
