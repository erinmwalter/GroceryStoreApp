import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { userInfo } from 'os';
import { Observable } from 'rxjs';
import { Convert, User } from './User';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  serviceUrl: string = "api/user/";

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.serviceUrl = baseUrl + this.serviceUrl;
  }

  Login(u: User)
  {
    let apiUrl = this.serviceUrl + `login/`;
    this.http.put(apiUrl, u).subscribe(
      (response:any) => {
        console.log("Login Successful?: " + response);
      }
    );
  }

  GetCurrentUser(){
    let apiUrl = this.serviceUrl + 'current/';
    return this.http.get(apiUrl);
  }

  LogOut(logout: string){
    let apiUrl = this.serviceUrl + 'logout ';
    this.http.put(apiUrl, logout).subscribe(
      (response:any) => {console.log(response);
      }
    );
  }

  UpdateUser(user: User)
  {
    let apiUrl = this.serviceUrl + `update/${user.userId}`;
   this.http.put(apiUrl, user).subscribe(
    (response:any) => {console.log("updated user!");}
   );
  }
}
