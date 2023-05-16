import Link from "next/link";

export default function BookLyout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Link href="/books">back button</Link>
      {children}
    </section>
  );
}
