import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  dataLoaded: boolean = false;
  userId: any;
  userDetails: any;
  editUserForm: FormGroup = new FormGroup({});
  constructor(private activatedRoute: ActivatedRoute, private userService: UserService,
    private formBuilder: FormBuilder, private _snackBar : MatSnackBar) { }

  ngOnInit(): void {
    this.dataLoaded = false;
    this.activatedRoute.params.subscribe(data => {
      this.userId = data['id'];
    })

    if(this.userId !== " "){

      //view Users details
      this.userService.viewUsers(this.userId)
      .toPromise()
      .then(data => {
        this.userDetails = data;
        Object.assign(this.userDetails, data);
        console.log(this.userDetails)

        //Build the edit form

        this.editUserForm = this.formBuilder.group({
          'username': new FormControl(this.userDetails.name),
          'email': new FormControl(this.userDetails.email)
        })
        this.dataLoaded=true;
      })
      .catch(err => {
        console.log(err);
      })
    }
  }
  updateUser(){
    // console.log(this.editUserForm.value);
    this.userService.updateUser(this.userId, this.editUserForm.value).subscribe(data => {
      this._snackBar.open("User Updated Successfully");
    }, err => {
      this._snackBar.open("Unable to update user");
    });
  }
}
