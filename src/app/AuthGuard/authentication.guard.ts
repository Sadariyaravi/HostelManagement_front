import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  constructor(
    private cookie: CookieService,
    private Toast: MatSnackBar,
    private router: Router
  ) {}
  canActivate(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    var one = this.cookie.get('acess_token');
    if (one) {
      return true;
    } else {
      this.Toast.open('Please Login first', 'Ok', {
        duration: 3000,
      });
      this.router.navigate(['login']);
      return false;
    }
  }
}
