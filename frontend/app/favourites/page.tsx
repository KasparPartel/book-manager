"use client"; // Want to use localstorage

import BookShort from "@/app/favourites/BookShort";
import PageHeading from "@/components/styling/PageHeading";

export default function FavouritesPage() {
  const data = localStorage.getItem("saved-book-ids");
  const bookIds: string[] = data ? JSON.parse(data) : null;

  return (
    <section>
      <PageHeading text="Favourites" />
      {bookIds ? (
        bookIds.map((id) => <BookShort key={id} bookId={id} />)
      ) : (
        <p>No books in favourites yet!</p>
      )}
    </section>
  );
}
