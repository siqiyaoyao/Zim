import { GuardmanageService } from './services/guardmanage.service';

import { BrowserModule,Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from './app.component';

import { MainModule } from './main/main.module';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { ModalComponent } from './items/modal/modal.component';
import { LoginModule } from './login/login.module';
import { LoginComponent } from './login/login.component';
import { Router } from '@angular/router';


//test router
//import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,   
    //LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(), // 可以接受一个可选的配置对象，用于引入外部字体文件
    MainModule,
    LoginModule,   
    AppRoutingModule,  

  ],
  providers:[
    Title,
    GuardmanageService
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(router: Router) { // 侦测路由状态
  //console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
}}