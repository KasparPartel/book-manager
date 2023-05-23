"use client";

import { useRouter } from "next/navigation";
import { Book } from "@/models/book";
import moment from "moment";
import Checkout from "@/models/checkout";

const checkoutBook = async (checkout: Checkout) => {
  const url = process.env.NEXT_PUBLIC_API_ROOT + "checkout/checkout";
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(checkout),
    headers: { "Content-Type": "application/json" },
    cache: "no-cache",
  });

  if (!res.ok) throw new Error("Something went wrong");

  return res.text();
  // return res.json();
};

export default function CheckoutChanger({ book }: { book: Book }) {
  const router = useRouter();

  const dateNow = moment().format("yyyy-MM-DD");
  const dateDue = moment().add(1, "month").format("yyyy-MM-DD");

  const checkout: Checkout = {
    borrowerFirstName: "testEes",
    borrowerLastName: "testPere",
    borrowedBook: book,
    checkedOutDate: dateNow,
    dueDate: dateDue,
    returnedDate: null,
  };

  const handleClick = async () => {
    try {
      const data = await checkoutBook(checkout);
      console.log(data);
      router.refresh();
    } catch (e) {
      console.error((e as Error).message);
    }
  };

  return book.status == "AVAILABLE" ? (
    <p onClick={handleClick}>Checkout book</p>
  ) : (
    <p>Book not available</p>
  );
}
