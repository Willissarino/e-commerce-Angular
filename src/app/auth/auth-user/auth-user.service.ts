import { UserModel } from './../../model/user.model';
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
  private userAuthAPI = 'http://127.0.0.1:8000/api';
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();


  constructor(private http: HttpClient) {
    const token = localStorage.getItem('access_token');
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
        localStorage.setItem('access_token', res.access_token);
        this._isLoggedIn$.next(true);
      })
    );
  }

}

