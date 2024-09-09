import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { PublisherWhereUniqueInput } from "../publisher/PublisherWhereUniqueInput";

export type BookUpdateInput = {
  author?: AuthorWhereUniqueInput | null;
  category?: CategoryWhereUniqueInput | null;
  isbn?: string | null;
  publishDate?: Date | null;
  publisher?: PublisherWhereUniqueInput | null;
  title?: string | null;
};
