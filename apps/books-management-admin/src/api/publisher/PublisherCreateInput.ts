import { BookCreateNestedManyWithoutPublishersInput } from "./BookCreateNestedManyWithoutPublishersInput";

export type PublisherCreateInput = {
  address?: string | null;
  books?: BookCreateNestedManyWithoutPublishersInput;
  contactEmail?: string | null;
  name?: string | null;
};
