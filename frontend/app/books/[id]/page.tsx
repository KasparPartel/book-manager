import { Book } from "@/models/book";
import CheckoutChanger from "@/components/CheckoutChanger";
import SaveBook from "@/app/books/SaveBook";

const getBook = async (id: string): Promise<Book> => {
  const url = process.env.NEXT_PUBLIC_API_ROOT + `book/getBook?bookId=${id}`;
  const res = await fetch(url);
  return await res.json();
};

interface BookPageProps {
  params: { id: string };
}

export default async function BookPage({ params }: BookPageProps) {
  const book = await getBook(params.id);

  return (
    <article className="py-3 flex flex-col gap-1">
      <div className="flex flex-wrap gap-3 justify-between">
        <h1 className="font-heading">
          <span className={`font-bold text-4xl`}>{book.title}</span> by{" "}
          <span className="text-xl">{book.author}</span>
        </h1>
        <div className="flex gap-2">
          <CheckoutChanger book={book} />
          <SaveBook bookId={book.id} />
        </div>
      </div>
      <p>{book.year}</p>
      <p>{book.genre}</p>
      <hr />
      {/*{Object.entries(book).map((bookItem, i) => (*/}
      {/*  <p key={i}>{bookItem}</p>*/}
      {/*))}*/}
    </article>
  );
}
