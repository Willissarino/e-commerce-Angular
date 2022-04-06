import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthUserService } from '../auth/auth-user/auth-user.service';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class HasRoleGuard implements CanActivate {
  constructor(private authService: AuthUserService) { }

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
    const roles = ['User'];
    const expectedRoles = route.data['roles'];
    const roleMatches = roles.findIndex(role => expectedRoles.indexOf(role) !== -1);
    return (roleMatches < 0) ? false : true;
  }
}
