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

export const isCheckoutValid = (checkout: Checkout) => {
  // const errors: Error[] = [];

  if (checkout.borrowerFirstName == "") {
    // errors.push(new Error("First name is empty or not valid!"));
    throw new Error("First name is empty or not valid!");
  }
  if (checkout.borrowerLastName == "") {
    // errors.push(new Error("Last name is empty or not valid!"));
    throw new Error("Last name is empty or not valid!");
  }

  // if (errors.length != 0) throw errors;
  return true;
};
