import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthUserService } from '../auth/auth-user/auth-user.service';
import { AuthAdminService } from '../auth/auth-admin/auth-admin.service';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class HasRoleGuard implements CanActivate {
  constructor(
    private authUserService: AuthUserService,
    private authAdminService: AuthAdminService,
    private router: Router,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.isAuthourized(route);
  }

  private isAuthourized(route: ActivatedRouteSnapshot): boolean {
    /* const roleMatches = roles.findIndex(role => expectedRoles.indexOf(role) !== -1);
    return (roleMatches < 0) ? false : true; */

    if (this.authUserService.isLoggedIn$ || this.authAdminService.isAdminLoggedIn$) {
      const roles = this.authUserService.getRoles() || this.authAdminService.getRoles();
      const expectedRoles = route.data['roles'];

      if (expectedRoles && expectedRoles.indexOf(roles) === -1) {
        // Check user roles and redirect them based on the roles
        if (roles == 'user') {
          this.router.navigate(['/login']);
        } else {
          this.router.navigate(['/admin']);
        }
        return false;
      }
      return true;
    }
    this.router.navigateByUrl('/login');
    return false;
  }
}
