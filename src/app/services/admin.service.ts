import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private adminCategoryAPI = 'http://127.0.0.1:8000/api/admin/category';

  constructor(private http:HttpClient) { }

  // Get all product category
  getAllCategory() : Observable<any>
  {
    return this.http.get<any>(this.adminCategoryAPI);
  }
}
