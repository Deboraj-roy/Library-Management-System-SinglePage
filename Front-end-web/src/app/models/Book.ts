import { BookCategory } from "./BookCategory";

export interface Book {
    id: number;
    title: string;
    author: string;
    price: number;
    ordered: boolean;
    bookCategoryId: number;
    bookCategory: BookCategory;
  }