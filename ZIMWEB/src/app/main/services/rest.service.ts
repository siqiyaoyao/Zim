import { PersonComponent } from './../../profile/pages/person/person.component';
import {  HttpClient,HttpHeaders,HttpErrorResponse  } from '@angular/common/http';
import { catchError } from 'rxjs/operators';// 操作数据流
import { Observable } from 'rxjs/Observable';// 数据流
import { Injectable } from '@angular/core';
import 'rxjs/add/observable/throw';
@Injectable()
export class RestService {

  constructor(private http:HttpClient) { }
 
  //登录验证
  adminCheck$(url,data){
    return this.http
      .post(url,data)
      .pipe(
        catchError((error) => this._handleError(error))
      )
  }


  //通用REST服务
  getData$(url){
    return this.http
      .get(url)
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
