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
    <section className="flex flex-col gap-2 justify-center items-center py-2 px-4 rounded-lg bg-white bg-opacity-30">
      <h3 className="opacity-70">Items per page</h3>
      <ul className="flex gap-2">
        {options.map((option, i) => {
          searchParams["size"] = option.toString();

          // FIXME same size changes page to 1 - shouldn't
          if (searchParams["size"] != activeOption.toString()) {
            searchParams["page"] = "1";
          }

          return (
            <li
              key={i}
              className={`
                ${
                  option == activeOption
                    ? "font-bold bg-white bg-opacity-50 "
                    : ""
                } py-1 px-2 rounded-md`}
            >
              <Link href={url + buildQueryParams(searchParams)}>{option}</Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
