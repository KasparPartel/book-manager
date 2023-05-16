import { Book } from "@/models/book";

export default async function BookPage({ params }: { params: { id: string } }) {
  const res = await fetch(
    `${process.env.BACKEND_ROOT_PATH}/getBook?bookId=${params.id}`
  );
  const book: Book = await res.json();
  console.log(book);

  return (
    <article>
      <h1>
        <span className="font-bold text-xl">&quot;{book.title}&quot;</span> by{" "}
        <span className="text-xl">{book.author}</span>
      </h1>
      <p>{book.year}</p>
      <p>{book.genre}</p>
      <hr />
      {Object.entries(book).map((bookItem) => (
        <p key="">{bookItem}</p>
      ))}
    </article>
  );
}
