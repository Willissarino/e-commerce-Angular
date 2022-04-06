import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

// Admin Interface
export class Admin {
  email!: string;
  password!: string;
  password_confirmation!: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthAdminService {
  private adminAuthAPI = 'http://127.0.0.1:8000/api/admin';
  // Check if admin is logged in
  private _isAdminLoggedIn$ = new BehaviorSubject<boolean>(false);
  isAdminLoggedIn$ = this._isAdminLoggedIn$.asObservable();
  
  roles!: string;

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('TOKEN');
    this._isAdminLoggedIn$.next(!!token);
  }

  // Admin login
  login(admin: Admin): Observable<any> {
    return this.http.post(this.adminAuthAPI + '/login', admin).pipe(
      tap((res: any) => {
        localStorage.setItem('TOKEN', res.access_token);
        localStorage.setItem('ROLE', res.roles);
        this._isAdminLoggedIn$.next(true);
      })
    );
  }

  // Return admin roles
  getRoles() {
    this.roles = localStorage.getItem('ROLE') || '';
    return this.roles;
  }

}
