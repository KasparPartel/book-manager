import { Book } from "@/models/book";
import Link from "next/link";
import SaveBook from "@/app/books/SaveBook";

interface BookShortProps {
  book: Book;
}

export default function BookShort({ book }: BookShortProps) {
  return (
    <article className="flex justify-between align-baseline p-3 bg-red-300">
      <h3>
        <Link href={`/books/${book.id}`}>{book.title}</Link> - {book.author}
      </h3>
      <div className="flex gap-2">
        <p>{book.status}</p>
        <SaveBook bookId={book.id} />
      </div>
    </article>
  );
}
