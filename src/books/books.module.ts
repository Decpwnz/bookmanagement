import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksService } from './books.service';
import { Book, BookSchema } from '../schemas/book.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
  ],
  providers: [BooksService],
  exports: [BooksService],
})
export class BooksModule {}

// Book.name is a property provided by the @Schema() decorator from @nestjs/mongoose.
// It's automatically added to the Book class when we define it using @Schema().
// In this case, Book.name will be the string 'Book', which is used as the
// collection name in MongoDB. We import it from '../schemas/book.schema'
// where the Book class is defined with the @Schema() decorator.
