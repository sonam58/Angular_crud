import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: String = 'https://jsonplaceholder.cypress.io/';
  constructor(private http: HttpClient) { }

  listUsers(){
    return this.http.get(this.baseUrl + 'users');
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
}
