
import { WikipediaService } from './rxjs/services/wikipedia.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main.component';
//zorro
//import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { UploadsComponent } from './pages/uploads/uploads.component';
import { ViewerComponent } from './bim/viewer/viewer.component';
import { T1Component } from './rxjs/t1/t1.component';
import { WikiComponent } from './rxjs/wiki/wiki/wiki.component';
import { JsonpModule } from '@angular/http';
//import { UploadsComponent } from './pages/uploads/uploads.component';


@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    //BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    JsonpModule
  ],
  providers:[
    WikipediaService,
    
  ],
  declarations: [HomeComponent, MainComponent, UploadsComponent, ViewerComponent, T1Component, WikiComponent]
})
export class MainModule { }
