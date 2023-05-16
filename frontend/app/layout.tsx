import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "CGI Library",
  description: "Suvepraktika 2023 home exercise",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="mx-12 lg:mx-24">
        <header>
          <nav className="py-2">
            <ul className="flex justify-center gap-4">
              <li>
                <Link href="/books">books</Link>
              </li>
              <li>
                <Link href="/checkout">checkout</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
