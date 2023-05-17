import Link from "next/link";
import buildQueryParams from "@/util/params";

export default function Sorting({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const options = [20, 35, 45, 50, 100];
  const activeOption = parseInt(searchParams?.size ?? "35", 10);

  return (
    <section className="border-2">
      Items per page
      <ul className="flex gap-2">
        {options.map((option, i) => {
          searchParams["size"] = option.toString();
          if (searchParams["size"] != activeOption.toString())
            searchParams["page"] = "1";

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
