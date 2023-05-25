import Link from "next/link";

interface NavbarProps {
  routes: { [key: string]: string };
}

export default function Navbar({ routes }: NavbarProps) {
  return (
    <nav className="py-6 fixed w-fit left-1/2 top-0">
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
