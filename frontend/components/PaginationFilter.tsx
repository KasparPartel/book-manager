import Link from "next/link";
import buildQueryParams, { SearchParams } from "@/util/params";

interface PaginationFilterProps {
  url: string;
  totalPages: number;
  searchParams: Partial<SearchParams>;
}

export default function PaginationFilter({
  url,
  totalPages,
  searchParams,
}: PaginationFilterProps) {
  const activePage = parseInt(searchParams.page ?? "1", 10);

  const getVisibleRange = () => {
    const totalVisibleItems = Math.min(totalPages, 5); // Maximum number of visible items
    const rangeOffset = Math.floor((totalVisibleItems - 1) / 2);
    let startIndex = Math.max(1, activePage - rangeOffset);
    let endIndex = Math.min(totalPages, startIndex + totalVisibleItems - 1);

    // Adjust range if it exceeds total pages
    if (endIndex - startIndex < totalVisibleItems - 1) {
      startIndex = Math.max(1, endIndex - totalVisibleItems + 1);
    }

    return { startIndex, endIndex };
  };

  return (
    <section className="py-2 px-4 h-full rounded-lg bg-white bg-opacity-30">
      <ul className="flex gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((v, i) => {
          searchParams.page = v.toString();
          const { startIndex, endIndex } = getVisibleRange();

          if (
            v === 1 ||
            v === totalPages ||
            (v >= startIndex && v <= endIndex)
          ) {
            return (
              <li
                key={i}
                className={`py-1 px-2 rounded-md hover:font-bold transition-all duration-150 ${
                  v === activePage ? "font-bold bg-white bg-opacity-50" : ""
                }`}
              >
                <Link href={url + buildQueryParams(searchParams)}>{v}</Link>
              </li>
            );
          } else if (v === startIndex - 1 || v === endIndex + 1) {
            return <li key={i}>...</li>;
          } else {
            return null;
          }
        })}
      </ul>
    </section>
  );
}
