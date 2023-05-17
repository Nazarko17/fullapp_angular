import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import baseURL from "./helper";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }

  public listOfQuestions(examId:any) {
    return this.http.get(`${baseURL}/question/exam/all/${examId}`);
  }

  public saveQuestion(question:any) {
    return this.http.post(`${baseURL}/question/`, question);
  }

  public deleteQuestion(questionId:any) {
    return this.http.delete(`${baseURL}/question/${questionId}`);
  }

  public updateQuestion(question:any) {
    return this.http.put(`${baseURL}/question/`, question);
  }

  public getQuestion(questionId:any) {
    return this.http.get(`${baseURL}/question/${questionId}`);
  }

  // public questionsListForExam(examId:any) {
  //   return this.http.get(`${baseURL}/question/exam/all/${examId}`);
  // }

  public evaluateExam(questions:any) {
    return this.http.post(`${baseURL}/question/evaluate-exam`, questions);
  }
}
