import { Publisher as TPublisher } from "../api/publisher/Publisher";

export const PUBLISHER_TITLE_FIELD = "name";

export const PublisherTitle = (record: TPublisher): string => {
  return record.name?.toString() || String(record.id);
};
