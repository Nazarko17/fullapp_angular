import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';
import baseURL from "./helper";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  public findCategory(id:any) {
    return this.http.get(`${baseURL}/category/${id}`);
  }

  public updateCategory(category:any) {
    return this.http.put(`${baseURL}/category/`, category);
  }

  public categoriesList() {
    return this.http.get(`${baserUrl}/category/`);
  }

  public addCategory(category:any) {
    return this.http.post(`${baserUrl}/category/`, category);
  }

  public deleteCategory(id:any) {
    return this.http.delete(`${baseURL}/category/${id}`);
  }
}
