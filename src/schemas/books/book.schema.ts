import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// This line creates a new type 'BookDocument' that combines properties from 'Book' and 'Document'
// It's needed to have both custom 'Book' properties and Mongoose's 'Document' methods
// If we don't do this, we lose TypeScript type checking for Mongoose document methods
export type BookDocument = Book & Document;

@Schema()
export class Book {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  author: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  publishedYear: number;
}

// Without the BookDocument type, we might need to cast or use 'any' type in some operations,
// which could lead to runtime errors or loss of type safety
export const BookSchema = SchemaFactory.createForClass(Book);
