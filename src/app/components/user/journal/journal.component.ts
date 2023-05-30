import { Component, OnInit } from '@angular/core';
import {ExamService} from "../../../services/exam.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {

  examResults:any;

  constructor(private examService:ExamService, private snack:MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.findExamResults();
  }

  findExamResults() {
    this.examService.findExamResults().subscribe(
      (data:any) => {
        this.examResults = data;
      }, (error) => {
        console.log(error);
      }
    );
  }

  deleteExamResults() {
    this.examService.deleteExamResults().subscribe(
      (data:any) => {
        this.findExamResults();
        this.snack.open('Exam results have been deleted', 'Accept', {
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
