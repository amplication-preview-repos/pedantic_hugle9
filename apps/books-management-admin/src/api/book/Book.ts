import { Author } from "../author/Author";
import { Category } from "../category/Category";
import { Publisher } from "../publisher/Publisher";

export type Book = {
  author?: Author | null;
  category?: Category | null;
  createdAt: Date;
  id: string;
  isbn: string | null;
  publishDate: Date | null;
  publisher?: Publisher | null;
  title: string | null;
  updatedAt: Date;
};
