export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    mobileNumber: string;
    password: string;
    userType: UserType;
    accountStatus: AccountStatus;
    createdOn: string;
  }
  
  export enum AccountStatus {
    UNAPROOVED,
    ACTIVE,
    BLOCKED,
  }
  
  export enum UserType {
    ADMIN,
    STUDENT,
  }