import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseURL from "./helper";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  public loginStatusSubject = new Subject<boolean>();

  public generateToken(loginData:any) {
    return this.http.post(`${baseURL}/authenticate`, loginData);
  }

  public loginUser(token:any) {
    localStorage.setItem('token', token);
  }

  public isLoggedIn() {
    let tokenStorage = localStorage.getItem('token');
    if(tokenStorage == undefined || tokenStorage == '' || tokenStorage == null) {
      return false;
    } else {
      return true;
    }
  }

  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  public getToken() {
    return localStorage.getItem('token');
  }

  public setUser(user:any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUser() {
    let userStorage = localStorage.getItem('user');
    if(userStorage != null) {
      return JSON.parse(userStorage);
    } else {
      this.logout();
      return null;
    }
  }

  public getUserRole() {
    let user = this.getUser();
    return user.role;
  }

  public getCurrentUser() {
    return this.http.get(`${baseURL}/current-user`);
  }
}
