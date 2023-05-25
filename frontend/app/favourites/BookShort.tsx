"use client";

import { Book } from "@/models/book";
import { useEffect, useState } from "react";
import BookShortContainer from "@/components/styling/BookShortContainer";

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
  return <BookShortContainer book={book} />;
}
