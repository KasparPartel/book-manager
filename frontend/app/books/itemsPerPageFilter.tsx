import Link from "next/link";
import buildQueryParams from "@/util/params";

export default function ItemsPerPageFilter({
  options,
  searchParams,
}: {
  options: number[];
  searchParams: { [key: string]: string | undefined };
}) {
  const activeOption = parseInt(searchParams?.size ?? "35", 10);

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
              <Link href={"/books" + buildQueryParams(searchParams)}>
                {option}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
