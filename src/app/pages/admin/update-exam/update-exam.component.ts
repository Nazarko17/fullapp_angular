import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ExamService} from "../../../services/exam.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {CategoryService} from "../../../services/category.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-update-exam',
  templateUrl: './update-exam.component.html',
  styleUrls: ['./update-exam.component.css']
})
export class UpdateExamComponent implements OnInit {

  constructor(private route:ActivatedRoute, private examService:ExamService,
              private categoryService:CategoryService, private snack:MatSnackBar, private router:Router) { }

  examId:any = 0;
  exam:any;
  categories:any;

  ngOnInit(): void {
    this.examId = this.route.snapshot.params['examId'];
    this.examService.getExam(this.examId).subscribe(
      (data:any) => {
        this.exam = data;
        console.log(this.exam);
      },
      (error) => {
        console.log(error);
      }
    )

    this.categoryService.categoriesList().subscribe(
      (data:any) => {
        this.categories = data;
      },
      (error) => {
        console.log(error);
        this.snack.open('Error', 'Accept', {
          duration: 3000
        });
    }
    )
  }

  public updateExam() {
    this.examService.updateExam(this.exam).subscribe(
      (data:any) => {
        console.log(data);
        this.snack.open('Exam has been successfully updated', 'Accept', {
          duration: 3000
        });
        this.router.navigate(['/admin/exams']);
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
