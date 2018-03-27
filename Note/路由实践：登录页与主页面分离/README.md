# angular2 路由实践：登录页与主页面分离
## 需要实现的功能
在angular2的应用里实现两个路由系统
- 第一层 
  无框架层，例如登录页面和主页。页面跳转的时候，没有元素继承，相互隔离
- 第二层
  框架层，例如主体网站里的各个子页面，继承统一的框架，只在部分节点刷新元素

## 思路 
在app module 下生成二级路由main module， 在该module放主体网站

## 准备工作
生成带有路由模块的angular 2 应用testapp
`ng new testapp --routing`

安装zorro框架包,并保存到json中
`npm install ng-zorro-antd --save`

在指定端口中查看应用
`ng serve --port 5005 --open `
在浏览器打开http://localhost:5005/ 即可查看网站应用

## 主页面module
生成带有路由功能的模块
`ng g m main --routing`
在app的目录下会发现main文件夹里面包含两个文件
- main-routing.module.ts
- main.module.ts
生成相应的组件（main）
`ng g c main`
在main的目录下回生成main组件的相关文件
- main.component.css
- main.component.html
- main.component.ts
- main.component.spec.ts

### 配置路由
现在有两个路由文件
- app-routing.module.ts 
- main-routing.module.ts
### app module
我们将app作为一级路由，在该文件里配置路由属性
```javascript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```
并在main.module.ts里引入main模块
```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


```
import main, 并在imports数组里宣告

在app.component.html 只留下 `<router-outlet>`标签,作为路由出口，之后的组件将渲染在这里
```html

<router-outlet></router-outlet>
```
### main module
在Routes数组中重新定向'main'，为二级路由做准备
在main的routing文件中
```javascript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent } from './main.component'
const routes: Routes = [
  {
    path:'main',
    component:MainComponent,
    
   
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

```
引入main的组件，并在Routes中配置路径与组件相对。
测试`http://localhost:5005/main`是否指向制定路径

### 在main中设置zorro框架
在main.module.ts文件中佳人苑zorro组件相关模块

```javascript
...
//zorro
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
...
@NgModule({
  imports: [
    ...
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
  ],
...
```
在根 module 中需要使用 NgZorroAntdModule.forRoot()，在子 module 需要使用 NgZorroAntdModule，main是字目录，因此我们使用后者
然后在`https://ng.ant.design/#/components/layout`选择相应的框架使用
测试main页面，看看是否获得了想要的框架效果。

### 在main中设置页面
生成子组件
`ng g c main/pages/upload`
在main目录下的page里面生成了upload组件
在main-routing.module.ts里设置路由路径指向组件
```javascript
import { UploadComponent } from './pages/upload/upload.component'
const routes: Routes = [
  {
    path:'main',
    component:MainComponent,
    children:[
      {path:'home',component:UploadComponent},
    ]
  },
];
...
```
在main.component.html里插入路由出口
```javascript
...
 <div style="padding:24px; background: #fff; min-height: 360px;">
          <router-outlet  ></router-outlet>
        Bill is a cat.
      </div>
...
```
用/main/upload 来测试页面

## 登录页面
### 在app module中配置登录页面
生成login组件
`ng g c login`
在app文件夹底下生成了login组件

在app-routing.module.ts里引入组件并设置路径，指向组件
```javascript
import { LoginComponent } from './login/login.component';

...
const routes: Routes = [
 ...
 {
  path:'login',
  component:LoginComponent

  },
];
...
```
通过/login 路径测试login页面

login和我们的main目前就属于并列关系，不互相继承

