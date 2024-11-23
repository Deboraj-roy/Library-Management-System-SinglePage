import { HttpClient, HttpParams } from '@angular/common/http';
import { IfStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { from, Subject } from 'rxjs';
import { User, UserType } from '../../models/model'
import { map, tap } from 'rxjs/operators';
import { Book } from '../../models/Book';
import { Order } from '../../models/Order';
import { map, retry, tap } from 'rxjs/operators';
import { Book } from '../../models/Book';
import { Order } from '../../models/Order';
import { BookCategory } from '../../models/BookCategory';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // baseUrl: string = 'https://localhost:7030/api/Library/';
  baseUrl: string = 'http://angualrdeb.somee.com/api/Library/';
  userStatus: Subject<string> = new Subject();
  constructor(private http: HttpClient, private jwt: JwtHelperService) { }

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
/*getUserInfo(): User | null {
    if (!this.isLoggedIn()) return null;
    var decodedToken = this.jwt.decodeToken();
    var user: User = {
      id: decodedToken.id,
      firstName: decodedToken.FirstName,
      lastName: decodedToken.LastName,
      email: decodedToken.email,
      mobileNumber: decodedToken.mobileNumber,
      userType: UserType[decodedToken.userType as keyof typeof UserType], //get user type string userType = ["ADMIN"] = 1 
      accountStatus: decodedToken.accountStatus,
      createdOn: decodedToken.createdOn,
      password: '',
    };
    return user;
  }
    */

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
        createdOn: decodedToken.createdOn,
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
      map(orders => {
        // Transform each order object
        return orders.map((order: any) => {
          return {
            id: order.id,
            userId: order.userId,
            userName: order.user.firstName + ' ' + order.user.lastName,
            bookId: order.bookId,
            bookTitle: order.book.title,
            orderDate: order.orderDate,
            returned: order.returned,
            returnDate: order.returnDate,
            finePaid: order.finePaid,
          } as Order;
        });
      })
    );
  }

  // getOrdersOfUser(userId: number){
  //   let params = new HttpParams().append('userId', userId);
  //   return this.http.get<any>(this.baseUrl + 'GetOrdersOfUsers', {
  //     params: params,
  //   })
  //   .pipe(
  //     map(orders => {
  //       let newOrders = orders.map((order: any) => {
  //         let newOrder: Order = {
  //           id: order.id,
  //           userId: order.userId,
  //           userName: order.user.firstName + ' ' + order.user.lastName,
  //           bookId: order.bookId,
  //           bookTitle: order.book.title,
  //           orderDate: order.orderDate,
  //           returned: order.returned,
  //           returnDate: order.returnDate,
  //           finePaid: order.finePaid,
  //         };
  //       });
  //     })
  //   );
  // }


  getFine(order: Order){
    let today = new Date();
    let orderDate = new Date(Date.parse(order.orderDate));
    orderDate.setDate(orderDate.getDate() + 10);
    if(orderDate.getTime() < today.getTime()){
      var dif = today.getTime() - orderDate.getTime();
      var difday = today.getDay() - orderDate.getDay();
      let days = Math.floor(dif / (1000 * 86400));
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
    return this.http.get<User[]>(this.baseUrl + 'GetUsers');
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
        let newOrders = orders.map((order: any) => {
          let newOrder: Order = {
            id: order.id,
            userId: order.userId,
            userName: order.user.firstName + ' ' + order.user.lastName,
            bookId: order.bookId,
            bookTitle: order.book.title,
            orderDate: order.orderDate,
            returned: order.returned,
            returnDate: order.returnDate,
            finePaid: order.finePaid,
          };
          return newOrder;
        });
        return newOrders;
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
