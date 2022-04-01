import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private adminCategoryAPI = 'http://127.0.0.1:8000/api/admin/category';
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
    return this.http.post<any>(this.adminCategoryAPI + '/add', data);
  }

  // Delete category from database
  deleteCategory(id: number)
  {
    return this.http.delete(this.adminCategoryAPI + '/delete/' + id);
  }
  
  // Get all product
  getAllProduct() : Observable<any>
  {
    return this.http.get<any>(this.adminProductAPI);
  }

  // Add new product to database
  addProduct(data: any) : Observable<any>
  {
    return this.http.post<any>(this.adminProductAPI + '/add', data);
  }

  // Delete product from database
  deleteProduct(id: number)
  {
    return this.http.delete(this.adminProductAPI + '/delete/' + id);
  }

  
}
