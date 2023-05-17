import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {QuestionService} from "../../../services/question.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  examId:any;
  title:any;
  question:any = {
    examDTO: {},
    content: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: ''
  }

  constructor(private route:ActivatedRoute, private questionService:QuestionService, private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.examId = this.route.snapshot.params['examId'];
    this.title = this.route.snapshot.params['title'];
    this.question.examDTO['id'] = this.examId;
  }

  formSubmit() {
    if(this.question.content.trim() == '' || this.question.content.trim() == null) {
      return;
    }
    if(this.question.option1.trim() == '' || this.question.option1.trim() == null) {
      return;
    }
    if(this.question.option2.trim() == '' || this.question.option2.trim() == null) {
      return;
    }
    if(this.question.option3.trim() == '' || this.question.option3.trim() == null) {
      return;
    }
    if(this.question.option4.trim() == '' || this.question.option4.trim() == null) {
      return;
    }
    if(this.question.answer.trim() == '' || this.question.answer.trim() == null) {
      return;
    }

    this.questionService.saveQuestion(this.question).subscribe(
      (data:any) => {
        console.log(data);
        this.snack.open('Question has been successfully saved', 'Accept', {
          duration: 3000
        });
        this.question.content = '';
        this.question.option1 = '';
        this.question.option2 = '';
        this.question.option3 = '';
        this.question.option4 = '';
        this.question.answer = '';
      }, (error) => {
        this.snack.open('Error', 'Accept', {
          duration: 3000
        });
        console.log(error);
        console.log(this.question);
      }
    )
  }
}
