import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user = {
    username : '',
    password : '',
    firstname : '',
    surname : '',
    email : '',
    phoneNumber : ''
  }

  constructor(private userService:UserService, private snack:MatSnackBar) { }

  ngOnInit(): void {

  }

  formSubmit() {
    console.log(this.user);
    if(this.user.username == '' || this.user.username == null) {
      this.snack.open('Username is required!', 'Accept', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
      return;
    }

    this.userService.addUser(this.user).subscribe(
      (data) => {
        console.log(data);
        this.snack.open('User saved successfully', 'Accept', {
          duration: 3000
        });
      }, (error) => {
        console.log('Error');
        this.snack.open('Error!', 'Accept', {
          duration: 3000,
        });
      }
    )
  }

}
