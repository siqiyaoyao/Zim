import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(
    private router:Router,
  ){}
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
      
      if(!localStorage.getItem('isAdmin')){
        return true;
      }else{
        console.log("没有权限查看此页");
        this.router.navigate(['./']);
        return false
      }
     
  }

  canActivateChild(): Observable<boolean> | Promise<boolean> | boolean{

    return this.canActivate();
  }
}
