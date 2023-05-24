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
    <section>
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
              className={
                // FIXME no sort label not bold when selected
                sort == activeSort || activeSort == "" ? "font-bold" : ""
              }
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
