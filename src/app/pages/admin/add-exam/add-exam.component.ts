import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../../services/category.service";
import { MatSnackBar } from '@angular/material/snack-bar';
import {ExamService} from "../../../services/exam.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-exam',
  templateUrl: './add-exam.component.html',
  styleUrls: ['./add-exam.component.css']
})
export class AddExamComponent implements OnInit {

  categories: any = [];

  exam = {
    title: '',
    description: '',
    maxPoints: '',
    numberOfQuestions: '',
    isActive: true,
    category: {
      id: ''
    }
  }

  constructor(private categoryService: CategoryService, private examService:ExamService, private snack:MatSnackBar, private router:Router) { }

  ngOnInit(): void {
    this.categoryService.categoriesList().subscribe(
      (data:any) => {
        this.categories = data;
        console.log(this.categories);
      },
      (error) => {
        console.log(error);
        this.snack.open('Error', 'Ok', {
          duration: 3000
        });
      }
    )
  }

  saveExam() {
    console.log(this.exam);
    if(this.exam.title.trim() == '' || this.exam.title == null) {
      this.snack.open('Invalid title', 'Ok',{
        duration: 3000
      });
      return;
    }

    this.examService.addExam(this.exam).subscribe(
      (data:any) => {
        console.log(data);
        this.snack.open('Exam successfully added', 'Ok',{
          duration: 3000
        });
        this.exam = {
          title: '',
          description: '',
          maxPoints: '',
          numberOfQuestions: '',
          isActive: true,
          category: {
            id: ''
          }
        }
        this.router.navigate(['/admin/exams']);
      },
      (error) => {
        console.log(error);
        this.snack.open('Error', 'Ok',{
          duration: 3000
        });
      }
    )
  }

}
