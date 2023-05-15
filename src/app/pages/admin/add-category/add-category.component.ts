import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {CategoryService} from "../../../services/category.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  category = {
    title: '',
    description: ''
  };

  constructor(private categoryService:CategoryService, private snack:MatSnackBar, private router:Router) { }

  ngOnInit(): void {
  }

  formSubmit() {
    if(this.category.title.trim() == '' || this.category.title == null) {
      this.snack.open('Error', 'Ok', {
      duration: 3000
      });
      return;
    }

    this.categoryService.addCategory(this.category).subscribe(
      (data:any) => {
        this.category.title = '';
        this.category.description = '';
        this.snack.open('Category successfully saved', 'Accept', {
          duration: 3000
        });
        this.router.navigate(['/admin/categories']);
      },
      (error) => {
        console.log(error);
        this.snack.open('Error', 'Ok', {
          duration: 3000
        });
      }
    )
  }
}
