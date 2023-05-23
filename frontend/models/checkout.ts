import { Book } from "@/models/book";
import { UUID } from "crypto";

export default interface Checkout {
  id?: UUID;
  borrowerFirstName: string;
  borrowerLastName: string;
  borrowedBook: Book;
  checkedOutDate: string;
  dueDate: string;
  returnedDate: string | null;
}
