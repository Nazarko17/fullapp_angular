import { Component, OnInit } from '@angular/core';
import {LocationStrategy} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {QuestionService} from "../../../services/question.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-start-exam',
  templateUrl: './start-exam.component.html',
  styleUrls: ['./start-exam.component.css']
})
export class StartExamComponent implements OnInit {

  examID:any;
  questions:any;
  achievedPoints = 0;
  correctAnswers = 0;

  isSent = false;
  timer:any;

  constructor(private locationStrategy:LocationStrategy, private route:ActivatedRoute, private questionService:QuestionService, private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.preventBackButton();
    this.examID = this.route.snapshot.params['examId'];
    console.log(this.examID);
    this.loadQuestions();
  }

  loadQuestions() {
    this.questionService.listOfQuestions(this.examID).subscribe(
      (data:any) => {
        console.log(data);
        this.questions = data;

        this.timer = this.questions.length * 2 * 60;

        this.questions.forEach((q:any) => {
          q['correctAnswer'] = '';
        });
        console.log(this.questions);
        this.startTimer();
      }, error => {
        console.log(error);
        console.log(error);
        this.snack.open('Error', 'Accept', {
          duration: 3000
        });
      }
    )
  }

  startTimer() {
    let t = window.setInterval(() => {
      if(this.timer <= 0) {
       this.evaluateExam();
       clearInterval(t);
      } else {
        this.timer --;
      }
    }, 1000);
  }

  preventBackButton() {
    history.pushState(null, null!, location.href);
    this.locationStrategy.onPopState(() => {
      history.pushState(null, null!, location.href);
    })
  }

  sendAnswer() {
    this.evaluateExam();
  }

  evaluateExam() {
    this.questionService.evaluateExam(this.questions).subscribe(
      (data:any) => {
        console.log(data);
        this.achievedPoints = data.achievedPoints;
        this.correctAnswers = data.correctAnswers;
        this.isSent = true;
      }, (error) => {
        console.log(error);
      }
    )
  }

  getFormattedTime() {
    let mm = Math.floor(this.timer / 60);
    let ss = this.timer - mm * 60;
    return `${mm} : min : ${ss} sec`;
  }

  printPage() {
    window.print();
  }
}
