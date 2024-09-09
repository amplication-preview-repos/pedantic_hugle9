/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Author } from "./Author";
import { AuthorCountArgs } from "./AuthorCountArgs";
import { AuthorFindManyArgs } from "./AuthorFindManyArgs";
import { AuthorFindUniqueArgs } from "./AuthorFindUniqueArgs";
import { CreateAuthorArgs } from "./CreateAuthorArgs";
import { UpdateAuthorArgs } from "./UpdateAuthorArgs";
import { DeleteAuthorArgs } from "./DeleteAuthorArgs";
import { BookFindManyArgs } from "../../book/base/BookFindManyArgs";
import { Book } from "../../book/base/Book";
import { AuthorService } from "../author.service";
@graphql.Resolver(() => Author)
export class AuthorResolverBase {
  constructor(protected readonly service: AuthorService) {}

  async _authorsMeta(
    @graphql.Args() args: AuthorCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Author])
  async authors(@graphql.Args() args: AuthorFindManyArgs): Promise<Author[]> {
    return this.service.authors(args);
  }

  @graphql.Query(() => Author, { nullable: true })
  async author(
    @graphql.Args() args: AuthorFindUniqueArgs
  ): Promise<Author | null> {
    const result = await this.service.author(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Author)
  async createAuthor(@graphql.Args() args: CreateAuthorArgs): Promise<Author> {
    return await this.service.createAuthor({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Author)
  async updateAuthor(
    @graphql.Args() args: UpdateAuthorArgs
  ): Promise<Author | null> {
    try {
      return await this.service.updateAuthor({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Author)
  async deleteAuthor(
    @graphql.Args() args: DeleteAuthorArgs
  ): Promise<Author | null> {
    try {
      return await this.service.deleteAuthor(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Book], { name: "books" })
  async findBooks(
    @graphql.Parent() parent: Author,
    @graphql.Args() args: BookFindManyArgs
  ): Promise<Book[]> {
    const results = await this.service.findBooks(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
