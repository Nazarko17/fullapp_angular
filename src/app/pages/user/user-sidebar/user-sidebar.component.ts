import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../../services/category.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent implements OnInit {

  categories:any;

  constructor(private categoryService:CategoryService, private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.categoryService.categoriesList().subscribe(
      (data:any) => {
        this.categories = data;
      }, (error) => {
        console.log(error);
        this.snack.open('Error loading categories', 'Accept', {
          duration: 3000
        });
      }
    )
  }

}
