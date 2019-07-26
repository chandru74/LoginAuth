import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router,Route } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor( private _authservice:AuthService,private _router: Router) { }

  canActivate(next:ActivatedRouteSnapshot,state:RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
    if(this._authservice.isAuthenticated()){
      return true;
    }

    this._router.navigate(['/login']);
    return false;
  }
}
