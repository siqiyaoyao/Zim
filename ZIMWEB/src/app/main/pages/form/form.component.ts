import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  user:any;
  constructor() {
    this.user ={
      name:'ddd',
      mobile:'11111111',
      address:{
        city:'Houston',
        street:'TIHH.00.1',
      }
     
    }
   }

  ngOnInit() {
    
  }

  testInput(value){
    console.log(value)
    this.user.address.city ='sssssss'
  }

  logForm(val){
    console.log(val);
    console.log(val.value);
  }
}
