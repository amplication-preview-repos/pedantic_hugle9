import { BookUpdateManyWithoutAuthorsInput } from "./BookUpdateManyWithoutAuthorsInput";

export type AuthorUpdateInput = {
  biography?: string | null;
  birthdate?: Date | null;
  books?: BookUpdateManyWithoutAuthorsInput;
  name?: string | null;
};
