import { FormGroup,FormControl, FormBuilder,Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-form-model',
  templateUrl: './form-model.component.html',
  styleUrls: ['./form-model.component.scss']
})
export class FormModelComponent implements OnInit {
  userForm:FormGroup;
  msg:string;
  changeMsg:any;
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
    });

    const add$ = <FormGroup>this.userForm.controls['address'];//强制转换
    const city$ = add$.controls['city'];
    const street$ = add$.controls['street'];

    city$.valueChanges.debounceTime(1000)
                      .distinctUntilChanged()
                      .subscribe(cityValue =>{
                        this.msg = cityValue +'欢迎您';
                        console.log(this.msg);
                        street$.setValue(cityValue);
                      });
                      
    this.userForm.valueChanges.subscribe(x =>this.changeMsg ={
      event:'Form DATA CHANGED',object:x
    })

  }
  reset(){
    this.userForm.reset();
  }

}
