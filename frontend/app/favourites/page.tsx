"use client"; // Want to use localstorage

import BookShort from "@/app/favourites/BookShort";

export default function FavouritesPage() {
  const data = localStorage.getItem("saved-book-ids");
  const bookIds: string[] = data ? JSON.parse(data) : [];

  return (
    <>
      <h1>Favourites</h1>
      {bookIds?.map((id) => (
        <BookShort key={id} bookId={id} />
      ))}
    </>
  );
}
