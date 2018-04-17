import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  message:string;
  constructor(
    public authService:AuthService,
    public router:Router,
  ) { 
    this.setMessage();
  }

  ngOnInit() {
  }

  setMessage(){
    this.message ='Logged' +(this.authService.isLoggedIn?'in':'out');

  }

  login(){
    this.message = '正在登录...'

    this.authService.login().subscribe(()=>{
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
}
