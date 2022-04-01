import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private adminCategoryAPI = 'http://127.0.0.1:8000/api/admin/category';
  private adminAddCategoryAPI = 'http://127.0.0.1:8000/api/admin/category/add';
  private adminProductAPI = 'http://127.0.0.1:8000/api/admin/product';

  constructor(private http:HttpClient) { }

  // Get all product category
  getAllCategory() : Observable<any>
  {
    return this.http.get<any>(this.adminCategoryAPI);
  }

  // Add new category to database
  addCategory(data: any) : Observable<any>
  {
    return this.http.post<any>(this.adminAddCategoryAPI, data);
  }
  
  // Get all product
  getAllProduct() : Observable<any>
  {
    return this.http.get<any>(this.adminProductAPI);
  }

  // Add new product to database
  addProduct(data: any) : Observable<any>
  {
    return this.http.post<any>(this.adminProductAPI, data);
  }

  
}
