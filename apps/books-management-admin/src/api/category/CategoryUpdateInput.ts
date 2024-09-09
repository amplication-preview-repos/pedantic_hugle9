import { BookUpdateManyWithoutCategoriesInput } from "./BookUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  books?: BookUpdateManyWithoutCategoriesInput;
  description?: string | null;
  name?: string | null;
};
