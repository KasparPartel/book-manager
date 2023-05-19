import { Page, PageRequest } from "@/models/page";
import { Book } from "@/models/book";
import { buildParams } from "@/util/rest";
import Link from "next/link";
import { SearchParams } from "@/util/params";
import ItemsPerPageFilter from "@/components/ItemsPerPageFilter";
import SortingFilter from "@/components/SortingFilter";
import PaginationFilter from "@/components/PaginationFilter";

export default async function BooksPage({
  searchParams,
}: {
  searchParams: Partial<SearchParams>;
}) {
  const filter: PageRequest = {
    pageIndex: parseInt(searchParams.page ?? "1", 10) - 1,
    pageSize: parseInt(searchParams.size ?? "35", 10),
    sort: searchParams.sort ?? undefined,
    direction: searchParams.direction ?? undefined,
  };

  const data = await fetch(
    `${process.env.BACKEND_ROOT_PATH}/getBooks` + buildParams(filter),
    { cache: "no-cache" }
  );
  const page: Page<Book> = await data.json();

  return (
    <section>
      <h1 className="text-xl font-bold">Books</h1>
      <PaginationFilter
        url="/books"
        totalPages={page.totalPages}
        searchParams={searchParams}
      />
      <ItemsPerPageFilter
        url="/books"
        options={[20, 35, 50, 75]}
        searchParams={searchParams}
      />
      <SortingFilter
        url="/books"
        sortOn={"title"}
        searchParams={searchParams}
      />
      <section className="flex flex-col gap-2">
        {page.content.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </section>
    </section>
  );
}

function Book({ book }: { book: Book }) {
  return (
    <article className="p-3 bg-red-300">
      <h3>
        <Link href={`/books/${book.id}`}>{book.title}</Link> - {book.author}
      </h3>
    </article>
  );
}
