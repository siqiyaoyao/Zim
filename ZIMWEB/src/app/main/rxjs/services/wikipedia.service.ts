import { Injectable } from '@angular/core';
import { URLSearchParams, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/distinctUntilChanged';

@Injectable()
export class WikipediaService {

  constructor(private jsonp:Jsonp) { }

  /*
    this.items = this.term.valueChanges // 输入框的值改变即触发
             .debounceTime(400) // 4秒内只获取最新的数据发射
             .do(value=>console.log(value))
             .distinctUntilChanged()
             //.distinctUntilChanged()
             .switchMap(term => this.WikipediaService.search(term));
             */
  search(term){
    

  }

  _search (term:string){
    var search = new URLSearchParams();
    //var wikiURL= 'http://en.wikipedia.org/w/api.php';
    search.set('action','opensearch');
    search.set('search',term);
    search.set('format','json');
    //search.set('callback','JSONP_CALLBACK')
    // `?search=${term}&action=opensearch&format=json&callback=JSONP_CALLBACK`
    return this.jsonp
               .get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', { search })
               //.toPromise()
               //.then((response)=>response.json[1])
               .map(response => response.json()[1])
  }

}
