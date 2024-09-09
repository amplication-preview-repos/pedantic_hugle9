import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { PublisherWhereUniqueInput } from "../publisher/PublisherWhereUniqueInput";

export type BookWhereInput = {
  author?: AuthorWhereUniqueInput;
  category?: CategoryWhereUniqueInput;
  id?: StringFilter;
  isbn?: StringNullableFilter;
  publishDate?: DateTimeNullableFilter;
  publisher?: PublisherWhereUniqueInput;
  title?: StringNullableFilter;
};
