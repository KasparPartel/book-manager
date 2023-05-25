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

  return (
    <section className="py-2 px-4 h-full rounded-lg bg-white bg-opacity-30">
      <ul className="flex gap-2 ">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((v, i) => {
          searchParams.page = v.toString();

          return (
            <li
              key={i}
              className={`py-1 px-2 rounded-md ${
                v == activePage ? "font-bold bg-white bg-opacity-50" : ""
              }`}
            >
              <Link href={url + buildQueryParams(searchParams)}>{v}</Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
