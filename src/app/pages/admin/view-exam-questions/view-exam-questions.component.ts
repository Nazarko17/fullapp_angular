import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {QuestionService} from "../../../services/question.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-view-exam-questions',
  templateUrl: './view-exam-questions.component.html',
  styleUrls: ['./view-exam-questions.component.css']
})
export class ViewExamQuestionsComponent implements OnInit {

  examId:any;
  title:any;
  questions:any;

  constructor(private route:ActivatedRoute, private questionService:QuestionService, private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.examId = this.route.snapshot.params['examId'];
    this.title = this.route.snapshot.params['title'];
    this.questionService.listOfQuestions(this.examId).subscribe(
      (data:any) => {
        console.log(data);
        this.questions = data;
      }, (error) => {
        console.log(error);
      }
    )
  }

  deleteQuestion(questionId:any) {
    this.questionService.deleteQuestion(questionId).subscribe(
      (data:any) => {
        console.log(data);
        this.snack.open('Question has been deleted', 'Accept', {
          duration: 3000
        });
        this.questions = this.questions.filter((question:any) => question.id != questionId);
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
