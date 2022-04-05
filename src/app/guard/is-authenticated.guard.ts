import { AuthUserService } from 'src/app/auth/auth-user/auth-user.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IsAuthenticatedGuard implements CanActivate {

  constructor(
    private authService: AuthUserService,
    private router: Router,
  ) {}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isLoggedIn$.pipe(
      tap((isLoggedIn) => {
        // If not logged in, redirect to login page
        if (!isLoggedIn) {
          this.router.navigate(['/login']);
        }
      })
    );
  }
  
}
