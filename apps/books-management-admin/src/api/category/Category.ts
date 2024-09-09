import { Book } from "../book/Book";

export type Category = {
  books?: Array<Book>;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
