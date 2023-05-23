import { Book } from "@/models/book";
import { IBM_Plex_Serif } from "next/font/google";
import CheckoutChanger from "@/components/CheckoutChanger";

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-plex",
  weight: ["400", "500"],
  subsets: ["latin-ext"],
});

const getBook = async (id: string): Promise<Book> => {
  const url = process.env.API_ROOT + `book/getBook?bookId=${id}`;
  const res = await fetch(url);
  return await res.json();
};

export default async function BookPage({ params }: { params: { id: string } }) {
  const book = await getBook(params.id);

  if (!book) return <div>Loading</div>;
  return (
    <article>
      <CheckoutChanger book={book} />
      <h1>
        <span className={`font-bold text-4xl ${ibmPlexSerif.className}`}>
          {book.title}
        </span>{" "}
        by <span className="text-xl">{book.author}</span>
      </h1>
      <p>{book.year}</p>
      <p>{book.genre}</p>
      <hr />
      {Object.entries(book).map((bookItem) => (
        <p key="">{bookItem}</p>
      ))}
    </article>
  );
}
