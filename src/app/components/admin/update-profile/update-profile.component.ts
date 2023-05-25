import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../../services/category.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {LoginService} from "../../../services/login.service";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  constructor(private loginService:LoginService, private userService:UserService, private snack:MatSnackBar, private router:Router) { }

  userDTO:any;
  ngOnInit(): void {
    this.loginService.getCurrentUser().subscribe(
      (data:any) => {
      this.userDTO = data;
      console.log(this.userDTO);
    },
    (error) => {
      console.log(error);
    }
    );
  }

  public updateUser() {
    this.userService.updateUser(this.userDTO).subscribe(
      (data:any) => {
        console.log(data);
        this.snack.open('Your profile has been successfully updated', 'Accept', {
          duration: 3000
        });
        this.router.navigate(['/admin/profile']);
      },
      (error) => {
        console.log(error);
        this.snack.open('Error', 'Accept', {
          duration: 3000
        });
      }
    )
  }
}
