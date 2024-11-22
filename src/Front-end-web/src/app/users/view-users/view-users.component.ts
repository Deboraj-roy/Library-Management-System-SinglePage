import { Component } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../../models/model';
import { Router } from '@angular/router'; 

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

  constructor(private apiService: ApiService, private snackBar: MatSnackBar, private router: Router) {
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

          this.router.navigateByUrl('/home').then(() => {
            this.router.navigateByUrl('/view-users'); // Navigate to target route
          });

 
          // this.location.go('/view-users'); // Navigate without keeping history
          // window.location.reload(); // Programmatically reload

          // window.location.assign(window.location.origin + '/view-users');

          // this.router.navigate(['/view-users'], { replaceUrl: true });

          // window.location.href = '/view-users'; // Direct page reload to '/view-users'

          // this.router.navigate(['/view-users']); // Correct way to navigate


          // this.router.navigate(['/view-users']).then(() => {
          //   // Reload after navigating to '/view-users'
          //   setTimeout(() => {
          //     window.location.reload();
          //   }, 100); // Adjust delay if necessary
          // });
        } else {
          this.snackBar.open('Not Unblocked', 'OK');
        }
      },
    });


        // For testing getUserInfo
    this.apiService.GetUserInfo2().subscribe({
      next: (res) => {
        console.log('User Info:', res); // Log the response data here
      },
      error: (err) => {
        console.log('Error fetching user info:', err); // Handle errors
      }
    });

    // For testing Protected endpoint
    this.apiService.Protected().subscribe({
      next: (res) => {
        console.log('Protected Resource:', res); // Log the response data here
      },
      error: (err) => {
        console.log('Error accessing protected resource:', err); // Handle errors
      }
    });

  }


}
