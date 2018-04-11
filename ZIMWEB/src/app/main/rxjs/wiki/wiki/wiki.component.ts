import { filter } from 'rxjs/operators/filter';
import { Observable } from 'rxjs/Observable';
import { WikipediaService } from './../../services/wikipedia.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/merge'
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/range';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/reduce';


@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.scss']
})
export class WikiComponent implements OnInit {
  items:Observable<Array<string>>;
  term = new FormControl();
  constructor(private WikipediaService:WikipediaService) { 
    /*
    this.items = this.term.valueChanges // 输入框的值改变即触发
             .debounceTime(400) // 4秒内只获取最新的数据发射
             .do(value=>console.log(value))
             .distinctUntilChanged()
             //.distinctUntilChanged()
             .switchMap(term => this.WikipediaService.search(term));
             */
  }

  
  sub1;
  sub2;
  ngOnInit() {
    var counter = Observable.interval(1000);
    this.sub1 = counter.subscribe(this.logValue);
    this.sub2 = counter.subscribe(val =>{
      console.log('sub2'+val)
    });

  }

  logValue(val){
    console.log(val);
  }

  test(){
    console.log("click")
    this.sub2.unsubscribe();  
  }
  
  
}
