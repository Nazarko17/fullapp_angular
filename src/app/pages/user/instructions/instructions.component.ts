import { Component, OnInit } from '@angular/core';
import {ExamService} from "../../../services/exam.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {

  examId:any;
  exam:any = new Object();

  constructor(private examService:ExamService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.examId = this.route.snapshot.params['examId'];
    this.examService.getExam(this.examId).subscribe(
      (data:any) => {
        console.log(data);
        this.exam = data;
      }, (error) => {
        console.log(error);
      }
    )
  }

  startExam() {
    this.router.navigate(['/start/' + this.examId]);
  }

}
