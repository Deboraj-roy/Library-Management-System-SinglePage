import { Book } from "./Book";

export interface BooksByCategory {
    bookCategoryId: number;
    category: string;
    subCategory: string;
    books: Book[];
  }