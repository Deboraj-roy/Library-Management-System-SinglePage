export interface Order {
    id: number;
    userId: number;
    userName: string | null;
    bookId: Number;
    bookTitle: string;
    orderDate: string;
    returned: boolean;
    returnDate: string | null;
    finePaid: number;
}