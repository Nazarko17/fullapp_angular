import { Component, OnInit } from '@angular/core';
import {ExamService} from "../../../services/exam.service";
import { MatSnackBar } from '@angular/material/snack-bar';
import {error} from "@angular/compiler-cli/src/transformers/util";
import {QuestionService} from "../../../services/question.service";

@Component({
  selector: 'app-view-exams',
  templateUrl: './view-exams.component.html',
  styleUrls: ['./view-exams.component.css']
})
export class ViewExamsComponent implements OnInit {

  exams : any = []

  constructor(private examService: ExamService, private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.examService.examsList().subscribe(
      (data:any) => {
        this.exams = data;
        console.log(this.exams);
      },
      (error) => {
        console.log(error);
        this.snack.open('Error loading exams', 'Accept', {
          duration: 3000
        });
      }
    )
  }

  deleteExam(id:any) {
    this.examService.deleteExam(id).subscribe(
      (data:any) => {
        this.exams = this.exams.filter((exam:any) => exam.id != id);
        console.log(data);
        this.snack.open('Exam has been deleted', 'Accept', {
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
