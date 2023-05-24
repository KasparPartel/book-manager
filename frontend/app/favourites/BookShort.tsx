"use client";

import { Book } from "@/models/book";
import Link from "next/link";
import SaveBook from "@/app/books/SaveBook";
import { useEffect, useState } from "react";

const getBook = async (id: string): Promise<Book> => {
  const url = process.env.NEXT_PUBLIC_API_ROOT + `book/getBook?bookId=${id}`;
  const res = await fetch(url);
  return res.json();
};

interface BookShortProps {
  bookId: string;
}

export default function BookShort({ bookId }: BookShortProps) {
  const [book, setBook] = useState<Book>();

  useEffect(() => {
    const fetchBook = async () => {
      const data = await getBook(bookId);
      setBook(data);
    };

    fetchBook();
  }, [bookId]);

  if (!book) return null;
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
