import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userAPI = 'http://127.0.0.1:8000/api';

  constructor(private http:HttpClient) { }

  // Get user dashboard
  getUserDashboard() : Observable<any>
  {
    return this.http.get<any>(this.userAPI + '/dashboard');
  }

  // Update user details
  updateUser(data: any) : Observable<any>
  {
    return this.http.post<any>(this.userAPI + '/update-user-detail', data);
  }

  // Get cart
  getCart() : Observable<any>
  {
    return this.http.get<any>(this.userAPI + '/cart');
  }

  // Add to cart
  addToCart(data: any) : Observable<any>
  {
    return this.http.post<any>(this.userAPI + '/add-to-cart', data);
  }

  // Delete a product from cart
  deleteProductCart(productId: number)
  {
    return this.http.delete(this.userAPI + '/delete-cart/' + productId);
  }

}
