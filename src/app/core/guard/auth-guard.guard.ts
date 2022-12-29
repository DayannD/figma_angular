import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/service/authService/auth-service.service';
import { TokenService } from 'src/app/service/tokenService/token-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanLoad,CanActivate {

  constructor(private router: Router, private authService: AuthService,private token:TokenService){}
  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    //   const auth = this.authService.connect();
    //   console.log("je suis la");
    // if(auth){
    //   return true;
    // }else{
    //   this.router.navigateByUrl('sign-in');
    //   return false;
    // }
    const url = route.path;
    console.log('Url:'+ url);
    if (this.token.isLogged()) {
	    return true;
    }
    this.router.navigateByUrl('/sign-in');
    return false;
    // const token = localStorage.getItem('token');
    // return !!token;
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const auth = this.authService.connect();
      console.log("je suis la");
    if(auth){
      return true;
    }else{
      this.router.navigateByUrl('sign-in');
      return false;
    }
  }

}
