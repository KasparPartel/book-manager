"use client";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useRouter } from "next/navigation";

interface SaveBookProps {
  bookId: string;
}

export default function SaveBook({ bookId }: SaveBookProps) {
  const router = useRouter();
  const data = localStorage.getItem("saved-book-ids");
  const bookIds: string[] = data ? JSON.parse(data) : [];

  const isPresent = (id: string) => {
    return bookIds ? bookIds.includes(id) : false;
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (isPresent(bookId)) {
      const index = bookIds.indexOf(bookId);
      bookIds.splice(index, 1);
    } else {
      bookIds.push(bookId);
    }

    localStorage.setItem("saved-book-ids", JSON.stringify(bookIds));
    router.refresh();
  };

  return (
    <button onClick={(e) => handleClick(e)}>
      {isPresent(bookId) ? <AiFillHeart /> : <AiOutlineHeart />}
    </button>
  );
}
