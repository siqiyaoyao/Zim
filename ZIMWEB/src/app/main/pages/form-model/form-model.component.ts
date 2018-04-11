import { FormGroup,FormControl, FormBuilder,Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-form-model',
  templateUrl: './form-model.component.html',
  styleUrls: ['./form-model.component.scss']
})
export class FormModelComponent implements OnInit {
  userForm:FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  /*
  userForm = new FormGroup({
    name:new FormControl(),
    mobile:new FormControl(),
    address:new FormGroup({
      city:new FormControl(),
      street:new FormControl(),
    })

  })
  */

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name:['ddd',[Validators.required,Validators.minLength(3)]],
      mobile:['12432222'],
      address:this.formBuilder.group({
        city:['houston'],
        street:['x2dd.13.12']
      })
    })

  }

}
