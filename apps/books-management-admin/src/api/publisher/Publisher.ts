import { Book } from "../book/Book";

export type Publisher = {
  address: string | null;
  books?: Array<Book>;
  contactEmail: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
};
