import Link from "next/link";
import buildQueryParams, { SearchParams } from "@/util/params";

interface ItemsPerPageFilterProps {
  url: string;
  options: number[];
  searchParams: Partial<SearchParams>;
}

export default function ItemsPerPageFilter({
  url,
  options,
  searchParams,
}: ItemsPerPageFilterProps) {
  const activeOption = parseInt(searchParams.size ?? "35", 10);

  return (
    <section className="">
      Items per page
      <ul className="flex gap-2">
        {options.map((option, i) => {
          searchParams["size"] = option.toString();

          // FIXME same size changes page to 1 - shouldn't
          if (searchParams["size"] != activeOption.toString()) {
            searchParams["page"] = "1";
          }

          return (
            <li key={i} className={option == activeOption ? "font-bold" : ""}>
              <Link href={url + buildQueryParams(searchParams)}>{option}</Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
