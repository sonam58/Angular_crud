import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {
  userId: String = "";
  constructor(private activatedRoute : ActivatedRoute, private userService: UserService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.userId = data['id'];
    });

    if(this.userId){
      this.userService.deleteUser(this.userId).subscribe(data =>{
        this._snackBar.open('User deleted successfully');
      }, err => {
        this._snackBar.open('Unable to delete the user');
      })
    }
  }

}
