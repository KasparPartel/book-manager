"use client";

import { useRouter } from "next/navigation";
import { Book } from "@/models/book";

const checkoutBook = async (book: Book) => {
  const url = process.env.API_ROOT + "checkout";
  return await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      borrowerFirstName: "test",
      borrowerLastName: "test",
      borrowedBook: book,
      checked_out_date: "2023-05-23",
      due_date: "2023-06-23",
    }),
  });
};

export default function CheckoutChanger({ book }: { book: Book }) {
  const router = useRouter();

  const handleClick = async () => {
    const url = process.env.API_ROOT + "checkout";
    console.log(url);
    // const res = await checkoutBook(book);
    // if (!res.ok) {
    //   console.error(res.status);
    //   return;
    // }
    //
    // const data: UUID = await res.json();
    // console.log(data);
    // router.refresh();
  };

  return book.status == "AVAILABLE" ? (
    <p onClick={handleClick}>Checkout book</p>
  ) : (
    <p>Book not available</p>
  );
}
