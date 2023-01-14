import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/service/authService/auth-service.service';
import { TokenService } from 'src/app/service/tokenService/token-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardGuard implements CanLoad {
  constructor(
    private router: Router,
    private authService: AuthService,
    private token: TokenService
  ) {}
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (this.authService.getIsConnected()) {
      return true;
    }
    console.log('sa passe ici');
    this.router.navigateByUrl('/sign-in');
    return false;
  }
}
