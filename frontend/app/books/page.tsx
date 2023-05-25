import { Page, PageRequest } from "@/models/page";
import { Book } from "@/models/book";
import { buildParams } from "@/util/rest";
import { SearchParams } from "@/util/params";
import ItemsPerPageFilter from "@/components/ItemsPerPageFilter";
import SortingFilter from "@/components/SortingFilter";
import PaginationFilter from "@/components/PaginationFilter";
import createFilter from "@/util/filterFactory";
import BookShort from "@/app/books/BookShort";
import PageHeading from "@/components/styling/PageHeading";

const getBooks = async (filter: PageRequest) => {
  const url =
    process.env.NEXT_PUBLIC_API_ROOT + "book/getBooks" + buildParams(filter);
  const res = await fetch(url, { cache: "no-cache" });
  return res.json();
};

interface BooksPageProps {
  searchParams: Partial<SearchParams>;
}

export default async function BooksPage({ searchParams }: BooksPageProps) {
  const filter: PageRequest = createFilter(searchParams);
  const page: Page<Book> = await getBooks(filter);

  return (
    <section className="flex flex-col gap-6">
      <PageHeading text="Book Library" />
      <section className="flex flex-wrap justify-between items-center gap-2 p-4 rounded-lg bg-blue-300 sticky">
        <PaginationFilter
          url="/books"
          totalPages={page.totalPages}
          searchParams={searchParams}
        />
        <div className="flex gap-2">
          <ItemsPerPageFilter
            url="/books"
            options={[35, 50, 75]}
            searchParams={searchParams}
          />
          <SortingFilter
            url="/books"
            sortOn={"title"}
            searchParams={searchParams}
          />
        </div>
      </section>
      <section className="flex flex-col gap-2">
        {page.content.map((book) => (
          <BookShort key={book.id} book={book} />
        ))}
      </section>
    </section>
  );
}
