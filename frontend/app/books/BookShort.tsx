import { Book } from "@/models/book";
import Link from "next/link";
import SaveBook from "@/app/books/SaveBook";
import StatusDiv from "@/components/styling/StatusDiv";

interface BookShortProps {
  book: Book;
}

export default function BookShort({ book }: BookShortProps) {
  return (
    <article className="flex flex-wrap justify-between align-baseline p-3 rounded-lg shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
      <h2 className="text-lg">
        <span className="font-heading font-bold">
          <Link href={`/books/${book.id}`}>{book.title}</Link>
        </span>{" "}
        - {book.author}
      </h2>
      <div className="flex gap-2">
        <StatusDiv color={book.status == "AVAILABLE" ? "green" : "red"}>
          {book.status}
        </StatusDiv>
        <SaveBook bookId={book.id} />
      </div>
    </article>
  );
}
