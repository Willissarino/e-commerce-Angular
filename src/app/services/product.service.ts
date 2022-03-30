import { ProductList } from './../product/product-list/product-list';
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
  private userProductListAPI = 'http://127.0.0.1:8000/api/product';


  constructor(private http:HttpClient) { }

  // Return category on Homepage
  userCategory() : Observable<UserCategory[]>
  {
    return this.http.get<UserCategory[]>(this.userCategoryAPI);
  }

  // Return featured product
  userFeatured() : Observable<UserFeatured[]>
  {
    return this.http.get<UserFeatured[]>(this.userFeaturedProductAPI);
  }

  // Return product list of specific category
  viewCategoryList(slug : String) : Observable<ProductCategory[]>
  {
    return this.http.get<ProductCategory[]>(`${this.userCategoryAPI}/${slug}`);
  }

  // Return list of available product
  viewProductList() : Observable<ProductList[]>
  {
    return this.http.get<ProductList[]>(this.userProductListAPI);
  }

  
}
