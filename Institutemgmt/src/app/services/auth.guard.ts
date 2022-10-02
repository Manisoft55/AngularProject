import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserserviceService } from './userservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: UserserviceService,
    private router: Router) {

    }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    alert('Alert from Auth Guard');
      if(this.authService.IsUserAuthenticate(this.authService.username, this.authService.password)){
        if(this.authService.IsUserAuthorized('owner')){
          return true;
        }
      return false;
    }
    return false;
  }
  
}
