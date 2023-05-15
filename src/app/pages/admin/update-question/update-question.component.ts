import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {QuestionService} from "../../../services/question.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {

  questionId:any = 0;
  question:any;
  exam:any;

  constructor(private route:ActivatedRoute, private questionService:QuestionService, private router:Router, private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.questionId = this.route.snapshot.params['questionId'];
    this.questionService.getQuestion(this.questionId).subscribe(
      (data:any) => {
        this.question = data;
        console.log(this.question);
      }, (error) => {
        console.log(error);
      }
    );
  }

  public updateQuestion() {
    this.questionService.updateQuestion(this.question).subscribe(
      (data:any) => {
        this.snack.open('Question has been successfully updated', 'Accept', {
          duration: 3000
        });
        this.router.navigate(['/admin/questions/' + this.question.exam.id + '/' + this.question.exam.title]);
      }, (error) => {
        console.log(error);
        this.snack.open('Error', 'Accept', {
          duration: 3000
        });
      }
    )
  }
}
