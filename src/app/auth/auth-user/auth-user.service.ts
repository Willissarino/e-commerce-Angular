import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// User Interface
export class User {
  email!: string;
  password!: string;
  password_confirmation!: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthUserService {
  private userAuthAPI = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  // User registration
  register(user: User): Observable<any> {
    return this.http.post(this.userAuthAPI + '/register', user);
  }

  // User login
  login(user: User): Observable<any> {
    return this.http.post(this.userAuthAPI + '/login', user);
  }
}
