import { SortOrder } from "../../util/SortOrder";

export type BookOrderByInput = {
  authorId?: SortOrder;
  categoryId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isbn?: SortOrder;
  publishDate?: SortOrder;
  publisherId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
