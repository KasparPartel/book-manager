import Link from "next/link";
import buildQueryParams from "@/util/params";

export default function SortingFilter({
  sortOn,
  searchParams,
}: {
  sortOn: string;
  searchParams: { [key: string]: string | undefined };
}) {
  const sortDirections = ["asc", "desc", "no sort"];

  return (
    <section>
      <ul>
        {sortDirections.map((sort, i) => {
          sort != "no sort"
            ? (searchParams.sort = `${sortOn},${sort}`)
            : (searchParams.sort = "");

          return (
            <li key={i}>
              <Link href={"/books" + buildQueryParams(searchParams)}>
                {sort}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
