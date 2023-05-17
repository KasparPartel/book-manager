import Link from "next/link";
import buildQueryParams from "@/util/params";

export default function Pagination({
  totalPages,
  searchParams,
}: {
  totalPages: number;
  searchParams: { [key: string]: string | undefined };
}) {
  const activePage = parseInt(searchParams?.page ?? "1", 10);

  return (
    <ul className="flex gap-2">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((v, i) => {
        searchParams.page = v.toString();

        return (
          <li key={i} className={v == activePage ? "font-bold" : ""}>
            <Link href={"/books" + buildQueryParams(searchParams)}>{v}</Link>
          </li>
        );
      })}
    </ul>
  );
}
