"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const deleteBook = async (id: string) => {
  const url =
    process.env.NEXT_PUBLIC_API_ROOT + "book/deleteBook" + `?bookId=${id}`;

  const res = await fetch(url, {
    method: "DELETE",
    cache: "no-cache",
  });

  if (!res.ok) throw new Error("Something went wrong.");
};

interface DeleteBookProps {
  id: string;
}

export default function DeleteBook({ id }: DeleteBookProps) {
  const router = useRouter();
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    try {
      await deleteBook(id ?? "");
      router.refresh();
    } catch (e) {
      console.error((e as Error).message);
      setShowAlert(true);
    }
  };

  return (
    <>
      <button
        onClick={(e) => handleClick(e)}
        className="border-2 border-blue-400 py-2 px-4 rounded-lg hover:enabled:bg-blue-400 transition-all duration:150 hover:enabled:text-white hover:enabled:font-bold disabled:text-gray-500"
        disabled
      >
        Delete book
      </button>
      {/* Want to show alert on fetch problems */}
      {/*{showAlert && (*/}
      {/*  <Alert setShowAlert={setShowAlert}>Checkouts associated!</Alert>*/}
      {/*)}*/}
    </>
  );
}
