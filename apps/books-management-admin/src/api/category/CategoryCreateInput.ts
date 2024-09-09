import { BookCreateNestedManyWithoutCategoriesInput } from "./BookCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  books?: BookCreateNestedManyWithoutCategoriesInput;
  description?: string | null;
  name?: string | null;
};
