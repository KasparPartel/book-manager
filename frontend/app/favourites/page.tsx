"use client"; // Want to use localstorage

import BookShort from "@/app/favourites/BookShort";
import PageHeading from "@/components/styling/PageHeading";
import { Suspense, useEffect, useState } from "react";

export default function FavouritesPage() {
  // const data = localStorage.getItem("saved-book-ids");
  // const bookIds: string[] = data ? JSON.parse(data) : null;
  const [bookIds, setBookIds] = useState<string[] | null>(null);

  useEffect(() => {
    const data = localStorage.getItem("saved-book-ids");
    setBookIds(data ? JSON.parse(data) : null);
  }, []);

  return (
    <section className="flex flex-col gap-6">
      <PageHeading text="Favourites" />
      <Suspense fallback={<p>Loading favourites...</p>}>
        <section className="flex flex-col gap-2">
          {bookIds ? (
            bookIds.map((id) => <BookShort key={id} bookId={id} />)
          ) : (
            <p>No books in favourites yet!</p>
          )}
        </section>
      </Suspense>
    </section>
  );
}
