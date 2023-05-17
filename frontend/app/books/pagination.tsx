"use client";

import Link from "next/link";

export default function Pagination({ totalPages }: { totalPages: number }) {
  return (
    <ul className="flex gap-2">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((v, i) => (
        <li key={i}>
          <Link href={`/books?page=${v}`}>{v}</Link>
        </li>
      ))}
    </ul>
  );
}
