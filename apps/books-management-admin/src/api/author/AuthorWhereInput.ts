import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { BookListRelationFilter } from "../book/BookListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type AuthorWhereInput = {
  biography?: StringNullableFilter;
  birthdate?: DateTimeNullableFilter;
  books?: BookListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
