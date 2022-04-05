import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

  constructor(private http: HttpClient) {}

  // Admin login
  login(admin: Admin): Observable<any> {
    return this.http.post(this.adminAuthAPI + '/login', admin);
  }
}
