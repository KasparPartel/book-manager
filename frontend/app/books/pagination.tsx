"use client";

export default function Pagination({ totalPages }: { totalPages: number }) {
  const url = new URL(window.location.href);
  console.log(url.searchParams.get("page")); // a string or null if not present

  return (
    <ul className="flex gap-2">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((v, i) => (
        <li key={i}>{v}</li>
      ))}
    </ul>
  );
}
