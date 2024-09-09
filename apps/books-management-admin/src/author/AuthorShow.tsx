import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { AUTHOR_TITLE_FIELD } from "./AuthorTitle";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";
import { PUBLISHER_TITLE_FIELD } from "../publisher/PublisherTitle";

export const AuthorShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="biography" source="biography" />
        <TextField label="birthdate" source="birthdate" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Book" target="authorId" label="Books">
          <Datagrid rowClick="show">
            <ReferenceField
              label="author"
              source="author.id"
              reference="Author"
            >
              <TextField source={AUTHOR_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="category"
              source="category.id"
              reference="Category"
            >
              <TextField source={CATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="isbn" source="isbn" />
            <TextField label="publishDate" source="publishDate" />
            <ReferenceField
              label="publisher"
              source="publisher.id"
              reference="Publisher"
            >
              <TextField source={PUBLISHER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
