import { Book } from "@/models/book";
import BookShortContainer from "@/components/styling/BookShortContainer";

interface BookShortProps {
  book: Book;
}

export default function BookShort({ book }: BookShortProps) {
  if (!book) return null;
  return <BookShortContainer book={book} />;
}
