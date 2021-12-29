
import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  listUsers: any;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.listUsers().subscribe(data => {
      this.listUsers = data;
    });
  }

}
