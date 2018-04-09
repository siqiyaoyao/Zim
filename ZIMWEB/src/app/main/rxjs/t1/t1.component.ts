import { AppPage } from './../../../../../e2e/app.po';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { error } from 'util';

@Component({
  selector: 'app-t1',
  templateUrl: './t1.component.html',
  styleUrls: ['./t1.component.scss']
})
export class T1Component implements OnInit {
  data = [
    {
      key    : '1',
      name   : 'John Brown',
      age    : 32,
      address: 'New York No. 1 Lake Park',
    }, {
      key    : '2',
      name   : 'Jim Green',
      age    : 42,
      address: 'London No. 1 Lake Park',
    }, {
      key    : '3',
      name   : 'Joe Black',
      age    : 32,
      address: 'Sidney No. 1 Lake Park',
    }
  ];

  testData =[
    1,2,3,4
  ]
  constructor() { }

  ngOnInit() {
    // 将数组转换为流
    /*
    let stream$ = Observable.from(this.testData).map(x => x+"岁");
    stream$.subscribe(val =>{
      console.log(val);
    })
    */
    /*
    // 创建新的流
    let stream$ = Observable.create(obeserver =>{
      obeserver.next(1) // 向下一个步骤输送value(1)
      //obeserver.complete('bingo'); // error 和 complet 只发送一个
      obeserver.error('mistake!');
      
    })
    stream$.subscribe(
      data =>{
      console.log('fnData: ',data);
    },
    error =>{
      console.log('Error: ',error);
      },
      complete =>{
      console.log('Complete: ',complete);
      }
    )
    */

    let stream$ = Observable.from(this.data)
    .map(x =>x.age)
    .map(x =>x+"岁")
    .subscribe(
      
    )
     
      
  }

  rxjsStream(){
    let data = this.testData;
    //let stream$ = Observable.of(1,2,3).map(x => x+"岁");
    let stream$ = Observable.from(data).map(x => x+"岁");
    
    return stream$;
   
  }

}
