import { UserFeatured } from './../user/user-featured-section/user-featured';
import { UserCategory } from './../user/user-categories-section/user-category';
import { ProductCategory } from './../product/product-category/product-category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private userCategoryAPI = 'http://127.0.0.1:8000/api/category';
  private userFeaturedProductAPI = 'http://127.0.0.1:8000/api/featured-product';
  private userViewCategoryAPI = 'http://127.0.0.1:8000/api/category';


  constructor(private http:HttpClient) { }

  // Return list of product from API
  userCategory() : Observable<UserCategory[]>
  {
    return this.http.get<UserCategory[]>(this.userCategoryAPI);
  }

  userFeatured() : Observable<UserFeatured[]>
  {
    return this.http.get<UserFeatured[]>(this.userFeaturedProductAPI);
  }

  viewCategoryList(slug : String) : Observable<ProductCategory[]>
  {
    return this.http.get<ProductCategory[]>(`${this.userViewCategoryAPI}/${slug}`);
  }

  
}
