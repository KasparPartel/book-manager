import { BookStatus } from "./book-status";

export interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  year: number;
  added: string;
  checkOutCount: number;
  status: BookStatus;
  dueDate: string;
  comment: string;
}
