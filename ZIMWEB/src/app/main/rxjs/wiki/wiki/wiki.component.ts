import { WikipediaService } from './../../services/wikipedia.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.scss']
})
export class WikiComponent implements OnInit {
  items:Array<string>;
  constructor(private WikipediaService:WikipediaService) { }

  search(term){
    this.WikipediaService.search(term)
                         .then(items => this.items = items)
  }

  ngOnInit() {
  }

}
