import { Component } from '@angular/core';
import { TableElement } from '../../models/TableElement';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
    columns: string[] = ['name', 'value'];
    dataSource: TableElement[] = [];
    UserType: string ="";

    constructor(private apiservice: ApiService){
      let user = apiservice.getUserInfo()!;
      this.dataSource = [
        { name: "Name", value: user.firstName + " " + user.lastName },
        { name: "Email", value: `${user.email}` },
        { name: "Mobile", value: `${user.mobileNumber}` }, 
        { name: "Account Status", value: `${user.accountStatus}` }, 
        { name: "Created On", value: `${user.createdOn}` }, 
        { name: "Type", value: `${this.UserType[user.userType]}` }, 
      ];
    }
}
