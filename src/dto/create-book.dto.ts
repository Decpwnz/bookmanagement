import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateBookDto {
  // The 'readonly' keyword is used here to make the 'author' property immutable.
  // It means that once a value is assigned to 'author', it cannot be changed.
  // This is useful in DTOs (Data Transfer Objects) to ensure that the data
  // remains consistent throughout the request lifecycle and prevents accidental
  // modifications. It adds an extra layer of type safety and helps maintain
  // the integrity of the data being transferred.

  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  readonly title: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  readonly author: string;

  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsNumber()
  readonly publishedYear: number;
}
