
import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/services/user.service';

export interface User {
  name: string;
  id: number;
  username: string;
  email: string;
}

const ELEMENT_DATA: User[] = [];


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'actions'];
  dataSource = ELEMENT_DATA;

  listUsers: User[] = [];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.listUsers().subscribe(data => {
      this.listUsers = data;
    });
  }

}
