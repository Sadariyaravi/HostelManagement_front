import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import UserSignup from '../models/DBmodels/user';
import { environment } from 'src/environments/environment';
import LoginData from '../models/Extendedmodels/logindata';
import Response from '../models/Extendedmodels/response';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  Username: BehaviorSubject<string> = new BehaviorSubject('');
  CheckLogin: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(private http: HttpClient) {}

  Signup(UserData: UserSignup) {
    console.log(UserData);
    return this.http.post<Response>(environment.baseurl + '/Signup', UserData);
  }

  Login(LoginCred: LoginData) {
    console.log(LoginCred);
    return this.http.post<Response>(environment.baseurl + '/login', LoginCred);
  }

  setUserName(userName: string) {
    this.Username.next(userName);
  }

  setLoginStatus(status: boolean) {
    this.CheckLogin.next(status);
  }
}
