import Link from "next/link";
import buildQueryParams, { SearchParams } from "@/util/params";
import { SortDirection } from "@/models/page";

interface SortingFilterProps {
  url: string;
  sortOn: string;
  searchParams: Partial<SearchParams>;
}

export default function SortingFilter({
  url,
  sortOn,
  searchParams,
}: SortingFilterProps) {
  const sortDirections: SortDirection[] = ["asc", "desc", ""];
  const activeSort = searchParams.direction;

  return (
    <section className="flex flex-col gap-2 justify-center items-center py-2 px-4 rounded-lg bg-white bg-opacity-30">
      <h3>Sorting</h3>
      <ul className="flex gap-2">
        {sortDirections.map((sort, i) => {
          if (sort == "") {
            searchParams.sort = undefined;
            searchParams.direction = undefined;
          } else {
            searchParams.sort = sortOn;
            searchParams.direction = sort;
          }

          return (
            <li
              key={i}
              className={`py-1 px-2 rounded-md ${
                sort == activeSort || (activeSort == undefined && sort == "")
                  ? "font-bold bg-white bg-opacity-50"
                  : ""
              }`}
            >
              <Link href={url + buildQueryParams(searchParams)}>
                {sort != "" ? sort : "no sort"}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
