import "./globals.css";
import Navbar from "@/app/Navbar";
import { IBM_Plex_Serif, Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-plex",
  weight: ["400", "500"],
  subsets: ["latin-ext"],
});

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
    <html lang="en" className={`${inter.className} ${ibmPlexSerif.variable}`}>
      <body>
        <header>
          <Navbar routes={routes} />
        </header>
        <main className="px-12 md:px-24 lg:px-36 py-10">{children}</main>
      </body>
    </html>
  );
}
