import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {
    "username": '',
    "password": '',
  }

  constructor(private snack:MatSnackBar, private loginService:LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  formSubmit() {
    if(this.loginData.username.trim() == '' || this.loginData.username.trim() == null) {
      this.snack.open('Username is required!','Accept', {
        duration: 3000
      })
      return;
    }

    if(this.loginData.password.trim() == '' || this.loginData.password.trim() == null) {
      this.snack.open('Password is required!','Accept', {
        duration: 3000
      })
      return;
    }

    this.loginService.generateToken(this.loginData).subscribe(
      (data:any) => {
        console.log(data);

        this.loginService.loginUser(data.token);
        this.loginService.getCurrentUser().subscribe((user:any) => {
          this.loginService.setUser(user);
          console.log(user);

          if(this.loginService.getUserRole() == "ADMIN") {
            // window.location.href = '/admin';
            this.router.navigate(['admin/profile']);
            this.loginService.loginStatusSubject.next(true);
          } else if(this.loginService.getUserRole() == "USER") {
            // window.location.href = '/user-dashboard';
            this.router.navigate(['user-dashboard/user-profile']);
            this.loginService.loginStatusSubject.next(true);
          } else {
            this.loginService.logout();
          }
        });
      }, (error) => {
        console.log(error);
        this.snack.open('Details invalid', 'Accept', {
          duration: 3000
        });
      }
    )
  }
}
