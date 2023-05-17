import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ExamService} from "../../../services/exam.service";

@Component({
  selector: 'app-load-exam',
  templateUrl: './load-exam.component.html',
  styleUrls: ['./load-exam.component.css']
})
export class LoadExamComponent implements OnInit {

  categoryId:any;
  exams:any;

  constructor(private route:ActivatedRoute, private examService:ExamService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.categoryId = params['categoryId'];

      if(this.categoryId == 0) {
        console.log('There are no exams');
        this.examService.getActiveExams().subscribe(
          (data:any) => {
            this.exams = data;
            console.log(this.exams);
          }, (error) => {
            console.log(error);
          }

        )
      } else {
        console.log('Exam successfully loaded');
        this.examService.getActiveExamsByCategory(this.categoryId).subscribe(
          (data:any) => {
            this.exams = data;
            console.log(this.exams);
          }, (error) => {
            console.log(error);
          }
        )
      }
    });

  }

}
