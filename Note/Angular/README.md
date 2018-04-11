# Angular 
## template html
### 模板驱动型表单
模板应用变量
'#name' ='ref-name'
可以对任何DOM元素使用这种方法获取当前引用，特可以对任何的Angular2的指令应用

```html
<div class="form-group">
        <label class="col-sm-2 control-label">姓名:</label>
        <div class="col-sm-10">
            <input class="form-control" type="text" #name>
        </div>
        <button nz-button [nzType]="'primary'" (click)= "testInput(name.value)" type="submit">
            <span>模板引用变量</span>
          </button>
    </div>
```
用#userForm 来获得ngForm的引用，获得表单里的所有数据
用userForm.controls.name.属性
userForm.controls表单里的所有控件
可以用这个方式来取得每个input的物件
用一个type 为"submit"的button来触发action属性,在指令页面可通过logForm的方法取到userForm的值，然后通过相应属性进行取值使用
userForm.value是一个object对象，需要input的name属性进行定义，才会在value里取到值
用ngModel进行双向数据绑定
如果需要数据嵌套，可以用 <fieldset ngModelGroup ="address">来进行嵌套。
```html
<form #userForm="ngForm" (ngSubmit)="logForm(userForm)">
    <div class="form-group">
        <label class="col-sm-2 control-label">姓名:</label>
    <div class="col-sm-10">
            <input class="form-control" type="text" #name name="name" [(ngModel)]="user.name">
        </div>
    </div>
    <fieldset ngModelGroup ="address">
    <div class="form-group">
        <label class="col-sm-2 control-label">城市:</label>
        <div class="col-sm-10">
            <input class="form-control" type="text" name="city" [ngModel]="user.address.city">
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label">街道:</label>
        <div class="col-sm-10">
            <input class="form-control" type="text"  name="street" [ngModel]="user.address.street">
        </div>
    </div>
    </fieldset>>
    <button type="submit">保存</button>
</form>
```
'#name ="ngModel"'来创建一个模板引用变量，可以用name来获取表单控件（FormControl）引用。从而能够使用控件属性，例如pristine未修改，dirty已修改，valid有效，可以用value来取值error错误。

### 模型驱动型表单（Model-Driven Forms）
'import { FormGroup, FormControl } from '@angular/forms';'
FormGroup  相当于 ngForm
FormControl 相当于 ngForm.controls

然后和html模板数据进行映射
form层
'<form [formGroup] ="userForm"> '
form内层
用标签 formGroupName/formControlName = "name" 进行数据映射

用formBuilder.group({})来生成初始数据
Validators.required 设置验证器