import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../users/list-user/list-user.component';
import { MatDrawer } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private matDrawer! : MatDrawer;
  baseUrl: String = 'https://jsonplaceholder.cypress.io/';
  
  constructor(private http: HttpClient) { }

  listUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl + 'users');
  }
  viewUsers(id: String){
    return this.http.get(this.baseUrl + 'users/' + id);
  }
  addUser(userObj:any){
    return this.http.post(this.baseUrl + 'users', userObj);
  }

  deleteUser(id: any){
    return this.http.delete(this.baseUrl + 'users/' + id);
  }

  updateUser(id: any, userObj: any){
    return this.http.put(this.baseUrl + 'users/'+id , userObj);
  }

 setDrawer(drawer: MatDrawer){
   this.matDrawer = drawer;
 }
 toggle(){
   this.matDrawer.toggle();
 }
}
