/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Author } from "../../author/base/Author";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { Category } from "../../category/base/Category";
import { Publisher } from "../../publisher/base/Publisher";

@ObjectType()
class Book {
  @ApiProperty({
    required: false,
    type: () => Author,
  })
  @ValidateNested()
  @Type(() => Author)
  @IsOptional()
  author?: Author | null;

  @ApiProperty({
    required: false,
    type: () => Category,
  })
  @ValidateNested()
  @Type(() => Category)
  @IsOptional()
  category?: Category | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  isbn!: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  publishDate!: Date | null;

  @ApiProperty({
    required: false,
    type: () => Publisher,
  })
  @ValidateNested()
  @Type(() => Publisher)
  @IsOptional()
  publisher?: Publisher | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Book as Book };
