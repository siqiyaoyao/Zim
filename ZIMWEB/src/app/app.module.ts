import { BrowserModule,Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from './app.component';

import { MainModule } from './main/main.module';
import { LoginModule } from './login/login.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent} from './header/header.component';
import { ModalComponent } from './items/modal/modal.component';


//test router
//import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModalComponent,
    
   
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
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }