import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { 
  CanActivate,Router,
  CanActivateChild,
  ActivatedRouteSnapshot, // 即将被激活的路由
  RouterStateSnapshot     //即将到达的状态
 } from '@angular/router';

@Injectable()
export class GuardmanageService implements CanActivate, CanActivateChild{ // 实现路由守卫接口
  constructor(
    private authService:AuthService,
    private router:Router,
  ) { }


  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
    let url:string = state.url;
    console.log("守卫保护中！")
    return this.checkLogin(url);
  }

  canActivateChild(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{

    return this.canActivate(route,state);
  }

  checkLogin(url:string):boolean{
    if(this.authService.isLoggedIn){ return true;}


    this.authService.redirctUrl = url; //记录目标页面，登录成功后可以回到该页

    this.router.navigate(['/login']); // 指向登录页

    return false;
  }

}
