import { Page, PageRequest } from "@/models/page";
import { Book } from "@/models/book";
import { buildParams } from "@/util/rest";
import Link from "next/link";
import PaginationFilter from "@/app/books/paginationFilter";
import ItemsPerPageFilter from "@/app/books/itemsPerPageFilter";
import SortingFilter from "@/app/books/SortingFilter";

export default async function BooksPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const filter: PageRequest = {
    pageIndex: parseInt(searchParams?.page ?? "1", 10) - 1,
    pageSize: parseInt(searchParams?.size ?? "35", 10),
  };

  const data = await fetch(
    `${process.env.BACKEND_ROOT_PATH}/getBooks` +
      buildParams(filter) +
      `&sort=title,asc`,
    { cache: "no-cache" }
  );
  const page: Page<Book> = await data.json();

  return (
    <section>
      <h1 className="text-xl font-bold">Books</h1>
      <PaginationFilter
        totalPages={page.totalPages}
        searchParams={searchParams}
      />
      <ItemsPerPageFilter
        options={[20, 35, 50, 75]}
        searchParams={searchParams}
      />
      <SortingFilter sortOn={"title"} searchParams={searchParams} />
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
