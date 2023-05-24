import "./globals.css";
import Navbar from "@/app/Navbar";

export const metadata = {
  title: "CGI Library",
  description: "Suvepraktika 2023 home exercise",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const routes: { [key: string]: string } = {
    books: "/books",
    favourites: "/favourites",
    checkouts: "/checkouts",
  };

  return (
    <html lang="en">
      <body className="mx-12 lg:mx-24">
        <header>
          <Navbar routes={routes} />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
