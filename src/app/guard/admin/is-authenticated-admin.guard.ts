import { AuthAdminService } from './../../auth/auth-admin/auth-admin.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IsAuthenticatedAdminGuard implements CanActivate {

  constructor(
    private authService: AuthAdminService,
    private router: Router,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isAdminLoggedIn$.pipe(
      tap((isAdminLoggedIn) => {
        // If not logged in, redirect to admin login page
        if (!isAdminLoggedIn) {
          this.router.navigateByUrl('/admin');
        }
      })
    );
  }
}
