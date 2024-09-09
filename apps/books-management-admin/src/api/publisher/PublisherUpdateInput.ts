import { BookUpdateManyWithoutPublishersInput } from "./BookUpdateManyWithoutPublishersInput";

export type PublisherUpdateInput = {
  address?: string | null;
  books?: BookUpdateManyWithoutPublishersInput;
  contactEmail?: string | null;
  name?: string | null;
};
