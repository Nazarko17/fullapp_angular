import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {CategoryService} from "../../../services/category.service";

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {

  categories:any = [];

  constructor(private categoryService: CategoryService, private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.categoryService.categoriesList().subscribe(
      (data:any) => {
        this.categories = data;
        console.log(this.categories);
      },
      (error) => {
        console.log(error);
        this.snack.open('Error loading categories', 'Accept', {
          duration: 3000
        });
      }
      );
  }

  deleteCategory(id:any) {
    this.categoryService.deleteCategory(id).subscribe(
      (data:any) => {
        this.categories = this.categories.filter((exam:any) => exam.id != id);
        console.log(data);
        this.snack.open('Category has been deleted', 'Accept', {
          duration: 3000
        });
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
