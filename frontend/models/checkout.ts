import { Book } from "@/models/book";

export default interface Checkout {
  id: string;
  borrowerFirstName: string;
  borrowerLastName: string;
  borrowedBook: Book;
  checkedOutDate: string;
  dueDate: string;
  returnedDate: string;
}
