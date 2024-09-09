/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PublisherService } from "../publisher.service";
import { PublisherCreateInput } from "./PublisherCreateInput";
import { Publisher } from "./Publisher";
import { PublisherFindManyArgs } from "./PublisherFindManyArgs";
import { PublisherWhereUniqueInput } from "./PublisherWhereUniqueInput";
import { PublisherUpdateInput } from "./PublisherUpdateInput";
import { BookFindManyArgs } from "../../book/base/BookFindManyArgs";
import { Book } from "../../book/base/Book";
import { BookWhereUniqueInput } from "../../book/base/BookWhereUniqueInput";

export class PublisherControllerBase {
  constructor(protected readonly service: PublisherService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Publisher })
  async createPublisher(
    @common.Body() data: PublisherCreateInput
  ): Promise<Publisher> {
    return await this.service.createPublisher({
      data: data,
      select: {
        address: true,
        contactEmail: true,
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Publisher] })
  @ApiNestedQuery(PublisherFindManyArgs)
  async publishers(@common.Req() request: Request): Promise<Publisher[]> {
    const args = plainToClass(PublisherFindManyArgs, request.query);
    return this.service.publishers({
      ...args,
      select: {
        address: true,
        contactEmail: true,
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Publisher })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async publisher(
    @common.Param() params: PublisherWhereUniqueInput
  ): Promise<Publisher | null> {
    const result = await this.service.publisher({
      where: params,
      select: {
        address: true,
        contactEmail: true,
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Publisher })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePublisher(
    @common.Param() params: PublisherWhereUniqueInput,
    @common.Body() data: PublisherUpdateInput
  ): Promise<Publisher | null> {
    try {
      return await this.service.updatePublisher({
        where: params,
        data: data,
        select: {
          address: true,
          contactEmail: true,
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Publisher })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePublisher(
    @common.Param() params: PublisherWhereUniqueInput
  ): Promise<Publisher | null> {
    try {
      return await this.service.deletePublisher({
        where: params,
        select: {
          address: true,
          contactEmail: true,
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/books")
  @ApiNestedQuery(BookFindManyArgs)
  async findBooks(
    @common.Req() request: Request,
    @common.Param() params: PublisherWhereUniqueInput
  ): Promise<Book[]> {
    const query = plainToClass(BookFindManyArgs, request.query);
    const results = await this.service.findBooks(params.id, {
      ...query,
      select: {
        author: {
          select: {
            id: true,
          },
        },

        category: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        isbn: true,
        publishDate: true,

        publisher: {
          select: {
            id: true,
          },
        },

        title: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/books")
  async connectBooks(
    @common.Param() params: PublisherWhereUniqueInput,
    @common.Body() body: BookWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      books: {
        connect: body,
      },
    };
    await this.service.updatePublisher({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/books")
  async updateBooks(
    @common.Param() params: PublisherWhereUniqueInput,
    @common.Body() body: BookWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      books: {
        set: body,
      },
    };
    await this.service.updatePublisher({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/books")
  async disconnectBooks(
    @common.Param() params: PublisherWhereUniqueInput,
    @common.Body() body: BookWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      books: {
        disconnect: body,
      },
    };
    await this.service.updatePublisher({
      where: params,
      data,
      select: { id: true },
    });
  }
}
