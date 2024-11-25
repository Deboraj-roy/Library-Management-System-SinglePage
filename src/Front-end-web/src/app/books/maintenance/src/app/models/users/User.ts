export interface User{
  UserId: number;
  UserName: string;
  UserFullName: string;
  UserMobile: string;
  Password: string
  Token: string;
  Address: string;
  ActiveStatus: number;
  UserRoleId: number;
  UserTypeId: number;
  OrgId:number;
  BranchId:number;
  CreatedDate: Date;
  UpdatedDate: Date;

}