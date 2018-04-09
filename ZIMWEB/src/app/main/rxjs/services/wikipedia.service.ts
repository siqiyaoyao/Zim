import { Injectable } from '@angular/core';
import { URLSearchParams, Jsonp } from '@angular/http';


@Injectable()
export class WikipediaService {

  constructor(private jsonp:Jsonp) { }

  search (term:string){
    var search = new URLSearchParams();
    //var wikiURL= 'http://en.wikipedia.org/w/api.php';
    search.set('action','opensearch');
    search.set('search',term);
    search.set('format','json');
    //search.set('callback','JSONP_CALLBACK')
    // `?search=${term}&action=opensearch&format=json&callback=JSONP_CALLBACK`
    return this.jsonp
               .get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', { search })
               .toPromise()
               .then((response)=>response.json[1])
  }

}
