import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

// User Interface
export class User {
  email!: string;
  password!: string;
  password_confirmation!: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthUserService {
  // APIs
  private userAuthAPI = 'http://127.0.0.1:8000/api';
  // Check if user is logged in
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  roles!: string;

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('TOKEN');
    this._isLoggedIn$.next(!!token);
  }

  // User registration
  register(user: User): Observable<any> {
    return this.http.post(this.userAuthAPI + '/register', user);
  }

  // User login
  login(user: User): Observable<any> {
    return this.http.post(this.userAuthAPI + '/login', user).pipe(
      tap((res: any) => {
        localStorage.setItem('TOKEN', res.access_token);
        // Get user roles
        localStorage.setItem('ROLE', res.roles);
        this._isLoggedIn$.next(true);
      })
    );
  }

  // Return user roles
  getRoles() {
    this.roles = localStorage.getItem('ROLE') || '';
    return this.roles;
  }

}

