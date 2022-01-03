import { UserService } from 'src/app/services/user.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  constructor(private userService: UserService) { }

  ngOnInit(): void { }
  
  toggleDrawer(){
    this.userService.toggle();
  }
}
