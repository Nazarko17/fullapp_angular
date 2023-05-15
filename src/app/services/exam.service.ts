import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import baseURL from "./helper";

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(private http:HttpClient) { }

  public examsList() {
    return this.http.get(`${baseURL}/exam/`);
  }

  public addExam(exam:any) {
    return this.http.post(`${baseURL}/exam/`, exam);
  }

  public deleteExam(id:any) {
    return this.http.delete(`${baseURL}/exam/${id}`);
  }

  public getExam(id:any) {
    return this.http.get(`${baseURL}/exam/${id}`);
  }

  public updateExam(exam:any) {
    return this.http.put(`${baseURL}/exam/`, exam);
  }

  public examListByCategory(categoryId:any) {
    return this.http.get(`${baseURL}/exam/category/${categoryId}`);
  }

  public getActiveExams() {
    return this.http.get(`${baseURL}/exam/active`);
  }

  public getActiveExamsByCategory(categoryId:any) {
    return this.http.get(`${baseURL}/exam/category/active/${categoryId}`);
  }
}
