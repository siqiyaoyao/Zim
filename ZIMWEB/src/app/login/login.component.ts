import { RestService } from './../main/services/rest.service';
import { Router,RouterModule } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  message:string;
  validateForm:FormGroup;
  url:string ='http://192.168.1.26:8088/mapi/login';
  constructor(
    public authService:AuthService,
    private fb: FormBuilder,
    private rest:RestService,
    public router:Router,
  ) { 
    this.setMessage();
  }

  _submitForm() {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
    }
    if(this.validateForm.valid){
      //this.Router.navigateByUrl("/home")
      this.login();
    }
    
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      accountName: [ null, [ Validators.required ] ],
      accountPwd: [ null, [ Validators.required ] ],
     // remember: [ true ],     
    });
  }

  setMessage(){
    this.message ='Logged' +(this.authService.isLoggedIn?'in':'out');

  }

  login(){
    this.message = '正在登录...'
    let body = JSON.stringify(this.validateForm.value)
    this.authService.login(this.url,body).subscribe(()=>{
      this.setMessage();
      if(this.authService.isLoggedIn){
        let redirect = this.authService.redirctUrl?this.authService.redirctUrl:'/home'

        this.router.navigate([redirect]);
      }
    })
  }

  logout(){
    this.authService.logout();
    this.setMessage();
  }

  test(){

    let body = JSON.stringify(this.validateForm.value)
    this.rest.adminCheck$(this.url,body)
        .subscribe(res =>{
          console.log(res);
          
        },
        err=>{
          console.log(err)
        })
    console.log(body)
  }
}
