import Link from "next/link";

interface NavbarProps {
  routes: { [key: string]: string };
}

export default function Navbar({ routes }: NavbarProps) {
  return (
    <nav className="py-2">
      <ul className="flex justify-center gap-4">
        {Object.entries(routes).map(([key, val], i) => (
          <li key={i}>
            <Link href={val}>{key}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
