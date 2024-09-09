import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BookListRelationFilter } from "../book/BookListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type PublisherWhereInput = {
  address?: StringNullableFilter;
  books?: BookListRelationFilter;
  contactEmail?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
