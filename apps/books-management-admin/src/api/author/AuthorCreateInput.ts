import { BookCreateNestedManyWithoutAuthorsInput } from "./BookCreateNestedManyWithoutAuthorsInput";

export type AuthorCreateInput = {
  biography?: string | null;
  birthdate?: Date | null;
  books?: BookCreateNestedManyWithoutAuthorsInput;
  name?: string | null;
};
