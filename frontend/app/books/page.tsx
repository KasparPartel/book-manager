import { Page, PageRequest } from "@/models/page";
import { Book } from "@/models/book";
import { buildParams } from "@/util/rest";
import Link from "next/link";
import Pagination from "@/app/books/pagination";

export default async function BooksPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  // console.log("searchParams", searchParams);

  const filter: PageRequest = {
    pageIndex: parseInt(searchParams?.page ?? "1", 10) - 1,
    pageSize: parseInt(searchParams?.size ?? "35", 10),
  };

  const data = await fetch(
    `${process.env.BACKEND_ROOT_PATH}/getBooks` + buildParams(filter),
    { cache: "no-cache" }
  );
  const page: Page<Book> = await data.json();
  // console.log(page);

  return (
    <section>
      <h1 className="text-xl font-bold">Books</h1>
      <Pagination totalPages={page.totalPages} />
      {page.content.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </section>
  );
}

function Book({ book }: { book: Book }) {
  return (
    <article>
      <h3>
        <Link href={`/books/${book.id}`}>{book.title}</Link>
      </h3>
    </article>
  );
}
