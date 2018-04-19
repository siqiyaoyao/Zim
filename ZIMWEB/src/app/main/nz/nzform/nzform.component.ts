import { Router } from '@angular/router';
import { RestService } from './../../services/rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nzform',
  templateUrl: './nzform.component.html',
  styleUrls: ['./nzform.component.scss']
})
export class NzformComponent implements OnInit {
  data:any;
  reflex:any;
  gridData:any;
  tabs:any;
  constructor(
    private rest:RestService,
    private router:Router
  ) { }

  ngOnInit() {
    this._getData();
   // console.log(this.gridData)
   //this.newTab();
  }

  private _getData(){
    this.data = this.rest.getData$("http://192.168.1.44:9999/japi/qrcode/10000031/item/list")
                        // .map(val => val.data) 
                        // .map(val =>{
                        //   console.log(val)
                        // })                                           
                        .subscribe(
                            res =>{
                              console.log(res.data);
                              this.tabs = res.data;
                            },
                            err=>{
                              console.log(err)
                            }
                        )
  }

  newTab() {
    this.tabs.push({
      craft: 'New Tab'
    });
  }

  test(){
    this.router.navigate(['/T1'])
  }
}


