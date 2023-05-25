"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  routes: { [key: string]: string };
}

export default function Navbar({ routes }: NavbarProps) {
  const pathName = usePathname();

  return (
    <nav className="py-6 fixed w-full left-0 top-0 bg-white bg-opacity-80">
      <ul className="flex justify-center gap-4">
        {Object.entries(routes).map(([key, val], i) => {
          const isActive = pathName === val;

          return (
            <li
              key={i}
              className="hover:font-bold transition-all duration-150 rounded-lg "
            >
              <Link
                href={val}
                className={`py-1 px-3 rounded-lg ${
                  isActive ? "bg-blue-300" : ""
                }`}
              >
                {key}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
