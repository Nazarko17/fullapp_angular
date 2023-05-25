import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryService} from "../../../services/category.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  constructor(private route:ActivatedRoute, private categoryService:CategoryService, private snack:MatSnackBar, private router:Router) { }

  categoryID:any = 0;
  categoryDTO:any;

  ngOnInit(): void {
    this.categoryID = this.route.snapshot.params['categoryId'];
    this.categoryService.findCategory(this.categoryID).subscribe(
      (data:any) => {
        this.categoryDTO = data;
        console.log(this.categoryDTO);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  public updateCategory() {
    this.categoryService.updateCategory(this.categoryDTO).subscribe(
      (data:any) => {
        console.log(data);
        this.snack.open('Category has been successfully updated', 'Accept', {
          duration: 3000
        });
        this.router.navigate(['/admin/categories']);
      },
      (error) => {
        console.log(error);
        this.snack.open('Error', 'Accept', {
          duration: 3000
        });
      }
    );
  }
}
