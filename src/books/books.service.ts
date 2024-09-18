import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from '../schemas/book.schema';
import { CreateBookDto } from '../dto/books/create-book.dto';
import { UpdateBookDto } from '../dto/books/update-book.dto';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const createdBook = new this.bookModel(createBookDto);
    return createdBook.save();
  }

  async findAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }

  async findOne(id: string): Promise<Book> {
    return this.bookModel.findById(id).exec();
  }

  async update(id: string, updateBookDto: UpdateBookDto): Promise<Book> {
    return this.bookModel
      .findByIdAndUpdate(id, updateBookDto, { new: true })
      .exec();
  }

  async delete(id: string): Promise<Book> {
    return this.bookModel.findByIdAndDelete(id).exec();
  }
}
