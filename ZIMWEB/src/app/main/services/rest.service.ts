import { PersonComponent } from './../../profile/pages/person/person.component';
import {  HttpClient,HttpHeaders,HttpErrorResponse  } from '@angular/common/http';
import { catchError } from 'rxjs/operators';// 操作数据流
import { Observable } from 'rxjs/Observable';// 数据流
import { Injectable } from '@angular/core';
import 'rxjs/add/observable/throw';
@Injectable()
export class RestService {
  oriUrl:string = "http://192.168.1.26:8088/"
  headers:any;
  constructor(
    private http:HttpClient,
    
  ) {
      
   
   }
  
   
   

 

  
  //登录验证
  adminCheck$(url,data){
    return this.http
      .post(url,data,
         {headers: new HttpHeaders().set('Content-type', 'application/json;charset=UTF-8') }     
      )
      .pipe(
        catchError((error) => this._handleError(error))
      )
  }

  // 获取储存在token内的验证用户的信息
  private get _authHeader():string{
    return localStorage.getItem('token');
  }


  // 获取用户信息
  getAccountInfo$(id){
    let curUrl = this.oriUrl+"mapi/account/"+id;
    return this.http
      .get(curUrl,{headers:new HttpHeaders().set('auth',this._authHeader)})
      .pipe(
        catchError((error) => this._handleError(error))
      )   

  }

  // 获取单位信息

  //通用REST服务
  getData$(url){
    return this.http
      .get(url,{headers:new HttpHeaders().set('Authorization',this._authHeader)})
      .pipe(
        catchError((error) => this._handleError(error))
      )
  }

  private _handleError(err: HttpErrorResponse | any): Observable<any> {
    const errorMsg = err.message || 'Error: Unable to complete request.';
    if (err.message && err.message.indexOf('No JWT present') > -1) {
      console.log("特殊情况")
    }
    console.log(errorMsg);
    return Observable.throw(errorMsg);
  }

  

}
