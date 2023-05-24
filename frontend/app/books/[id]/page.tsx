import { Book } from "@/models/book";
import { IBM_Plex_Serif } from "next/font/google";
import CheckoutChanger from "@/components/CheckoutChanger";
import SaveBook from "@/app/books/SaveBook";

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-plex",
  weight: ["400", "500"],
  subsets: ["latin-ext"],
});

const getBook = async (id: string): Promise<Book> => {
  const url = process.env.NEXT_PUBLIC_API_ROOT + `book/getBook?bookId=${id}`;
  const res = await fetch(url);
  return await res.json();
};

interface BookPageProps {
  params: { id: string };
}

export default async function BookPage({ params }: BookPageProps) {
  const book = await getBook(params.id);
  
  return (
    <article>
      <CheckoutChanger book={book} />
      <div className="flex justify-between">
        <h1>
          <span className={`font-bold text-4xl ${ibmPlexSerif.className}`}>
            {book.title}
          </span>{" "}
          by <span className="text-xl">{book.author}</span>
        </h1>
        <SaveBook bookId={book.id} />
      </div>
      <p>{book.year}</p>
      <p>{book.genre}</p>
      <hr />
      {Object.entries(book).map((bookItem, i) => (
        <p key={i}>{bookItem}</p>
      ))}
    </article>
  );
}
