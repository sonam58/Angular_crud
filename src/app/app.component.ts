import { MatDrawer } from '@angular/material/sidenav';
import { UserService } from 'src/app/services/user.service';
import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild(MatDrawer) matDrawer! : MatDrawer;
  constructor(private userService : UserService){

  }
  ngAfterViewInit(): void {
    this.userService.setDrawer(this.matDrawer);
  }

  title = 'admin';
}
