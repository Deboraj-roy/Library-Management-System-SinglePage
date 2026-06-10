import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, Subject, of } from 'rxjs';
import { User, UserType } from '../../models/model'
import { Order } from '../../models/Order';
import { catchError, map } from 'rxjs/operators';
import { Book } from '../../models/Book';
import { BookCategory } from '../../models/BookCategory';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // baseUrl: string = 'https://localhost:7030/api/Library/';
  // use HTTPS on the live API to avoid mixed-content blocking when the site is served over HTTPS
  // baseUrl: string = 'http://deblmsapi.runasp.net/api/Library/';
  // baseUrl: string = 'https://green-breeze-a7aa.mrouf7353.workers.dev/api/Library/';
  // baseUrl: string = 'https://p13839740.somee.com/api/Library/';
  baseUrl: string = 'https://lazynoja.bsite.net/api/Library/';
  // baseUrl: string = 'https://librarydeb.somee.com/api/Library/';
  // baseUrl: string = 'http://angualrdeb.somee.com/api/Library/';
  userStatus: Subject<string> = new Subject();
  constructor(private http: HttpClient, private jwt: JwtHelperService) { }

  private normalizeDisplayDate(value: unknown): string {
    if (value === null || value === undefined || value === '') {
      return '';
    }

    const parsedDate = new Date(value as string);
    if (Number.isNaN(parsedDate.getTime())) {
      return String(value);
    }

    return parsedDate
      .toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      })
      .replace(/ /g, '-');
  }

  private normalizeUser(user: any): User {
    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      mobileNumber: user.mobileNumber,
      password: user.password ?? '',
      userType: user.userType,
      accountStatus: user.accountStatus,
      createdOn: this.normalizeDisplayDate(user.createdOn),
    };
  }

  private normalizeOrder(order: any): Order {
    return {
      id: order.id,
      userId: order.userId,
      userName: order.user?.firstName + ' ' + order.user?.lastName,
      bookId: order.bookId,
      bookTitle: order.book?.title,
      orderDate: order.orderDate,
      returned: order.returned,
      returnDate: this.normalizeDisplayDate(order.returnDate),
      finePaid: order.finePaid,
    };
  }

  private asArray<T>(value: unknown): T[] {
    if (Array.isArray(value)) {
      return value as T[];
    }

    const maybeWrappedValues = value as { $values?: T[]; data?: T[] } | null | undefined;
    if (maybeWrappedValues?.$values && Array.isArray(maybeWrappedValues.$values)) {
      return maybeWrappedValues.$values;
    }
    if (maybeWrappedValues?.data && Array.isArray(maybeWrappedValues.data)) {
      return maybeWrappedValues.data;
    }

    return [];
  }

  register(user: any){
    return this.http.post(this.baseUrl + 'Register', user, {
      responseType: 'text',
    });
  }

  login(info: any) {
    let params = new HttpParams()
      .append('email', info.email)
      .append('password', info.password);

    return this.http.get(this.baseUrl + 'Login', {
      params: params,
      responseType: 'text',
    });
  }

  isLoggedIn(): boolean {
    if (
        localStorage.getItem('access_token') != null &&
        !this.jwt.isTokenExpired()
        )
    {
        return true;
    }
    return false;

  }

  getBooks(){
    return this.http.get<Book[]>(this.baseUrl + 'GetBooks');
  }
  orderBook(book: Book){
    let userId = this.getUserInfo()!.id;
    let params = new HttpParams()
                    .append('userId', userId)
                    .append('bookId', book.id);
    return this.http.post(this.baseUrl + 'OrderBook', null, {
      params: params,
      responseType: 'text',
    });
  }


  getUserInfo(): User | null {
    if (!this.isLoggedIn()) return null;
    const decodedToken = this.jwt.decodeToken();
    const user: User = {
        id: decodedToken.id,
        firstName: decodedToken.firstName,  // Updated to match the new claim
        lastName: decodedToken.lastName,     // Updated to match the new claim
        email: decodedToken.email,
        mobileNumber: decodedToken.mobileNumber,
        userType: UserType[decodedToken.userType as keyof typeof UserType],
        accountStatus: decodedToken.accountStatus,
        createdOn: this.normalizeDisplayDate(decodedToken.createdOn),
        password: '',
    };
    return user;
}


  logOut(){
    localStorage.removeItem('access_token');
    this.userStatus.next('loggedOff');
  }

  getOrdersOfUser(userId: number) {
    let params = new HttpParams().append('userId', userId);
    return this.http.get<any>(this.baseUrl + 'GetOrdersOfUsers', {
      params: params,
    })
    .pipe(
      map(orders => this.asArray<Order>(orders).map((order: any) => this.normalizeOrder(order))),
      catchError((error) => {
        console.error('GetOrdersOfUsers failed', error);
        return of([] as Order[]);
      })
    );
  }

  ///From MY
  getFine(order: any) {
    let today = new Date();
    let orderDate = new Date(Date.parse(order.orderDate));
    orderDate.setDate(orderDate.getDate() + 10);
    if (orderDate.getTime() < today.getTime()) {
      var diff = today.getTime() - orderDate.getTime();
      let days = Math.floor(diff / (1000 * 86400));
      return days * 50;
    }
    return 0;
  }

  addNewCategory(category: BookCategory) {
    return this.http.post(this.baseUrl + 'AddCategory', category, {
      responseType: 'text',
    });
  }

  getCategories() {
    return this.http.get<BookCategory[]>(this.baseUrl + 'GetCategories');
  }

  addBook(book: Book) {
    return this.http.post(this.baseUrl + 'AddBook', book, {
      responseType: 'text',
    });
  }

  deleteBook(id: number) {
    return this.http.delete(this.baseUrl + 'DeleteBook', {
      params: new HttpParams().append('id', id),
      responseType: 'text',
    });
  }
 
  returnBook(userId: string, bookId: string, fine: number){
    return this.http.get(this.baseUrl + 'ReturnBook', {
      params: new HttpParams()
      .append('userId', userId)
      .append('bookId', bookId)
      .append('fine', fine),
      responseType: 'text',
    });
  }

  getUsers(){
    return this.http.get<any>(this.baseUrl + 'GetUsers').pipe(
      map((users) => this.asArray<User>(users).map((user: any) => this.normalizeUser(user))),
      catchError((error) => {
        console.error('GetUsers failed', error);
        return of([] as User[]);
      })
    );
  }

  approveRequest(userId: number){
    return this.http.get(this.baseUrl + 'ApproveRequest', {
      params: new HttpParams().append('userId', userId),
      responseType: 'text',
    });
  }
  getOrders() {
    return this.http.get<any>(this.baseUrl + 'GetOrders').pipe(
      map((orders) => {
        return this.asArray<Order>(orders).map((order: any) => this.normalizeOrder(order));
      }),
      catchError((error) => {
        console.error('GetOrders failed', error);
        return of([] as Order[]);
      })
    );
  }

  sendEmail() {
    return this.http.get(this.baseUrl + 'SendEmailForPendingReturns', {
      responseType: 'text',
    });
  }

  blockUsers() {
    return this.http.get(this.baseUrl + 'BlockFineOverdueUsers', {
      responseType: 'text',
    });
  }

  unblock(userId: number) {
    return this.http.get(this.baseUrl + "Unblock", {
      params: new HttpParams().append("userId", userId),
      responseType: "text",
    });
  }


  
  GetUserInfo2() {
    return this.http.get(this.baseUrl + 'GetUserInfo2', {
      responseType: 'text',
    });
  }

  
  Protected() {
    return this.http.get(this.baseUrl + 'Protected', {
      responseType: 'text',
    });
  }

}
