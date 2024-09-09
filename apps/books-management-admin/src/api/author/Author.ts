import { Book } from "../book/Book";

export type Author = {
  biography: string | null;
  birthdate: Date | null;
  books?: Array<Book>;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
};
