import { Component } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../../models/model';

@Component({
  selector: 'view-users',
  templateUrl: './view-users.component.html',
  styleUrl: './view-users.component.scss'
})
export class ViewUsersComponent {
  columns: string[] = [
    'userId',
    'userName',
    'email',
    'mobileNumber',
    'createdOn',
    'accountStatus',
    'unblock',
    'userType',
  ];
  users: User[] = [];

  constructor(private apiService: ApiService, private snackBar: MatSnackBar) {
    apiService.getUsers().subscribe({
      next: (res: User[]) => {
        this.users = [];
        res.forEach((r) => this.users.push(r));
      },
    });
  }

  unblockUser(user: User) {
    const id = user.id;
    this.apiService.unblock(id).subscribe({
      next: (res) => {
        if (res === 'unblocked') {
          this.snackBar.open('User has been UNBLOCKED!', 'OK');
          window.location.reload(); // Refresh the page
        } else {
          this.snackBar.open('Not Unblocked', 'OK');
        }
      },
    });
  }

}
