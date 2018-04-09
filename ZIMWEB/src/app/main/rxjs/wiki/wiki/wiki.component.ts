import { Observable } from 'rxjs/Observable';
import { WikipediaService } from './../../services/wikipedia.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.scss']
})
export class WikiComponent implements OnInit {
  items:Observable<Array<string>>;
  term = new FormControl();
  constructor(private WikipediaService:WikipediaService) { 
    this.items = this.term.valueChanges
             .debounceTime(400)
             .do(value=>console.log(value))
             //.distinctUntilChanged()
             .switchMap(term => this.WikipediaService.search(term));
  }

  // search(term){
  //   this.WikipediaService.search(term)
  //                        .then(items => this.items = items)
  // }

  ngOnInit() {
  }

}
