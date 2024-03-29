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
  /*
  | -----------------------------------------------------
  | 
  | CATEOGRY SECTION
  |
  | -----------------------------------------------------
  */
  // Get all categories
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
  // Edit category
  editCategory(id: number)
  {
    return this.http.get(this.adminCategoryAPI + '/edit/' + id);
  }
  // Update category
  updateCategory(id: number, data: any)
  {
    return this.http.put(this.adminCategoryAPI + '/update/' + id, data);
  }

 /*
  | -----------------------------------------------------
  | 
  | PRODUCT SECTION
  |
  | -----------------------------------------------------
  */
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
  // Edit product
  editProduct(id: number)
  {
    return this.http.get(this.adminProductAPI + '/edit/' + id);
  }
  // Update product
  updateProduct(id: number, data: any)
  {
    return this.http.put(this.adminProductAPI + '/update/' + id, data);
  }
  // Delete product from database
  deleteProduct(id: number)
  {
    return this.http.delete(this.adminProductAPI + '/delete/' + id);
  }

  
}
