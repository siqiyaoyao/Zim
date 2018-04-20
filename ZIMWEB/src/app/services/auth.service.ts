import { Router } from '@angular/router';
import { RestService } from './../main/services/rest.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';


@Injectable()
export class AuthService {
  isLoggedIn:boolean = false; //状态判断
  redirctUrl:string;//重导向地址 一般用在登录完成后

  constructor(
    private rest:RestService,
    public router: Router,
  ) { }


  login(url,data){ // 返回一个bool类型的observable 对象
    return this.rest.adminCheck$(url,data)
          .do(val =>{          
            if(val.Success){
              this.isLoggedIn = true;
              this._setSession(val.Token);
              this.handleAuth(val.Token)
            }else{
              this.isLoggedIn = false;
            }
          })
          // .do(val =>{
          //   if(val.Success){
          //      this.handleAuth(val.Token)
          //   }
          // })
  }

  handleAuth(results){    
    results = JSON.parse(results);   
    this.rest.getAccountInfo$(results.accountId)
      .subscribe(val =>{
        this._setAccountInfo(val.Vals);
      })
  }

  logout():void{
    localStorage.removeItem('token');
    localStorage.removeItem('accountName');
    localStorage.removeItem('accountId');
    localStorage.removeItem('roles');
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('exp');
    localStorage.removeItem('AccountPwd');
    localStorage.removeItem('DeptId');
    localStorage.removeItem('Name')
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }
  //constructor() { }

  private _setSession(authResult){
    const results = JSON.parse(authResult);
    localStorage.setItem('token',authResult);
    localStorage.setItem('accountName',results.accountName);
    localStorage.setItem('accountId',results.accountId);
    localStorage.setItem('roles',results.roles);
    localStorage.setItem('isAdmin',results.isAdmin);
    localStorage.setItem('exp',results.exp);
    
  }

  private _setAccountInfo(results){ 
    localStorage.setItem('AccountPwd',results.AccountPwd);
    localStorage.setItem('DeptId',results.DeptId);
    localStorage.setItem('Name',results.Name);
    console.log(localStorage);
  }



}
