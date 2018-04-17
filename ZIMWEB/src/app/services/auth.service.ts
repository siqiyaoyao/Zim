import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';


@Injectable()
export class AuthService {
  isLoggedIn:boolean = false; //状态判断
  redirctUrl:string;//重导向地址 一般用在登录完成后

  login():Observable<boolean>{ // 返回一个bool类型的observable 对象
    return Observable
      .of(true) // 模拟登录结果
      .delay(1000)// 模拟登录花费时间
      .do(val =>{
        this.isLoggedIn = true;
      })
  }

  logout():void{
    this.isLoggedIn = false;
  }
  //constructor() { }

}
